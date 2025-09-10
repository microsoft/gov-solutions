document.addEventListener('DOMContentLoaded', function () {
  function resolveRelativeUrls(container, baseUrl) {
    try {
      var elems = container.querySelectorAll('[src], [href], [xlink\\:href]');
      elems.forEach(function (el) {
        ['src', 'href'].forEach(function (attr) {
          try {
            var val = el.getAttribute(attr);
            if (!val) return;
            if (val.startsWith('http') || val.startsWith('/') || val.startsWith('data:') || val.startsWith('#')) return;
            el.setAttribute(attr, new URL(val, baseUrl).href);
          } catch (e) {}
        });
        // xlink:href for SVG <image>
        try {
          var xlink = el.getAttribute('xlink:href');
          if (xlink && !xlink.startsWith('http') && !xlink.startsWith('/') && !xlink.startsWith('data:') && !xlink.startsWith('#')) {
            el.setAttribute('xlink:href', new URL(xlink, baseUrl).href);
          }
        } catch (e) {}
      });
    } catch (e) {}
  }

  // function applyStretchToInserted(container) {
  //   try {
  //     container.querySelectorAll('svg').forEach(function (svg) {
  //       try {
  //         svg.removeAttribute('width');
  //         svg.removeAttribute('height');
  //         svg.setAttribute('preserveAspectRatio', 'none');
  //         svg.style.width = '100%';
  //         svg.style.height = '100%';
  //         svg.style.display = 'block';
  //         svg.querySelectorAll('image').forEach(function (img) {
  //           try {
  //             img.setAttribute('width', '100%');
  //             img.setAttribute('height', '100%');
  //             img.setAttribute('preserveAspectRatio', 'none');
  //             img.style.width = '100%';
  //             img.style.height = '100%';
  //             img.style.display = 'block';
  //           } catch (e) {}
  //         });
  //       } catch (e) {}
  //     });
  //   } catch (e) {}
  // }

  function renderInsertedMermaid(container) {
    if (!container) return;
    // Render Mermaid diagrams
    try {
      if (window.renderMermaidIn) {
        try { window.renderMermaidIn(container); } catch (e) { console.error('renderMermaidIn error', e); }
      } else if (window.mermaid && window.mermaid.init) {
        try { window.mermaid.init(undefined, container.querySelectorAll('.mermaid')); } catch (e) { console.error('mermaid.init error', e); }
      }
    } catch (err) {
      console.error('Error in renderInsertedMermaid:', err);
    }
    // After rendering, apply pan/zoom to all SVGs
    setTimeout(function () {
      container.querySelectorAll('.mermaid svg').forEach(function(svg) {
        // Remove width/height for responsive scaling
        svg.removeAttribute('width');
        svg.removeAttribute('height');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.style.width = '100%';
        svg.style.height = 'auto';
        svg.style.display = 'block';
        // Pan/zoom controls
        if (!svg._panZoomAttached) {
          svg._panZoomAttached = true;
          if (typeof window.svgPanZoom === 'function') {
            window.svgPanZoom(svg, { zoomEnabled: true, controlIconsEnabled: true, fit: true, center: true });
          } else {
            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js';
            script.onload = function () {
              if (typeof window.svgPanZoom === 'function') {
                window.svgPanZoom(svg, { zoomEnabled: true, controlIconsEnabled: true, fit: true, center: true });
              }
            };
            document.head.appendChild(script);
          }
        }
      });
    }, 120);
  }

  function injectFromLocal(modal, slug) {
    var inner = modal.querySelector('.erd-modal__inner');
    if (!inner) return false;
    try {
      // Always use the hidden textarea with the original Mermaid code for modal rendering
      var textarea = document.getElementById('erd-mermaid-' + slug);
      if (textarea) {
        var code = textarea.value.trim();
        var frag = document.createElement('div');
        var d = document.createElement('div');
        d.className = 'mermaid';
        d.textContent = code;
        frag.appendChild(d);
        inner.innerHTML = '';
        inner.appendChild(frag);
        renderInsertedMermaid(inner);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Error in injectFromLocal:', err);
      return false;
    }
  }

  function openModal(modal, url, trigger) {
    if (!modal) return;
    var inner = modal.querySelector('.erd-modal__inner');
    if (!inner) return;
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // try local first (ERD embedded in this page)
    var slug = modal.id.replace(/^erd-modal-/, '');
    if (injectFromLocal(modal, slug)) {
      modal._lastTrigger = trigger || null;
      var closeBtn = modal.querySelector('.erd-modal__close');
      if (closeBtn) closeBtn.focus();
      return;
    }

    // fallback: fetch the asset page
    inner.innerHTML = '<p>Loading ERD…</p>';
    if (!url) {
      inner.innerHTML = '<p>No ERD available.</p>';
      return;
    }

    fetch(url, { credentials: 'same-origin' }).then(function (res) {
      if (!res.ok) throw new Error('Network response not ok');
      return res.text();
    }).then(function (html) {
      try {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        var frag = document.createElement('div');

        // prefer fenced mermaid code blocks
        var codeBlocks = doc.querySelectorAll('pre > code.language-mermaid, code.language-mermaid');
        if (codeBlocks && codeBlocks.length) {
          codeBlocks.forEach(function (code) {
            var m = document.createElement('div');
            m.className = 'mermaid';
            m.textContent = code.textContent;
            frag.appendChild(m);
          });
        } else {
          var mermaids = doc.querySelectorAll('.mermaid');
          if (mermaids && mermaids.length) {
            mermaids.forEach(function (m) { frag.appendChild(m.cloneNode(true)); });
          } else {
            var content = doc.querySelector('.erd-content') || doc.querySelector('main') || doc.querySelector('.usa-prose') || doc.body;
            frag.innerHTML = content ? content.outerHTML : html;
          }
        }

        resolveRelativeUrls(frag, url);

        inner.innerHTML = '';
        inner.appendChild(frag);

        renderInsertedMermaid(inner);

        var closeBtn = modal.querySelector('.erd-modal__close');
        if (closeBtn) closeBtn.focus();
      } catch (e) {
        inner.innerHTML = '<p>Unable to parse ERD content.</p>';
      }
    }).catch(function () {
      inner.innerHTML = '<p>Unable to load ERD.</p>';
    });

    modal._lastTrigger = trigger || null;
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    var inner = modal.querySelector('.erd-modal__inner');
    if (inner) inner.innerHTML = '';
    try { if (modal._lastTrigger) modal._lastTrigger.focus(); } catch (e) {}
  }

  // delegate clicks for open buttons
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.open-erd-modal');
    if (btn) {
      e.preventDefault();
      var url = btn.getAttribute('data-erd-url');
      var slug = btn.getAttribute('data-erd-slug');
      var modal = document.getElementById('erd-modal-' + slug);
      openModal(modal, url, btn);
      return;
    }

    // close handlers
    if (e.target.closest('.erd-modal__close') || e.target.closest('.erd-modal__backdrop') || e.target.closest('[data-close]')) {
      var m = e.target.closest('.erd-modal');
      if (m) closeModal(m);
      return;
    }
  });

  // close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      var open = document.querySelector('.erd-modal.is-open');
      if (open) closeModal(open);
    }
  });

  // ensure clicking outside dialog closes
  document.querySelectorAll('.erd-modal').forEach(function (m) {
    m.addEventListener('click', function (e) {
      if (e.target === m) closeModal(m);
    });
  });
});
