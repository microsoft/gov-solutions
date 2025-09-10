document.addEventListener('DOMContentLoaded', function () {
  function setViewBoxUsingChildren(svg) {
    try {
      var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      svg.querySelectorAll('*').forEach(function (el) {
        if (typeof el.getBBox === 'function') {
          try {
            var b = el.getBBox();
            if (b.width && b.height) {
              minX = Math.min(minX, b.x);
              minY = Math.min(minY, b.y);
              maxX = Math.max(maxX, b.x + b.width);
              maxY = Math.max(maxY, b.y + b.height);
            }
          } catch (e) { /* ignore getBBox errors per-element */ }
        }
      });
      if (maxX > minX && maxY > minY) {
        svg.setAttribute('viewBox', minX + ' ' + minY + ' ' + (maxX - minX) + ' ' + (maxY - minY));
        return true;
      }
    } catch (e) {}
    return false;
  }

  function applyStretchToSvg(svg) {
    if (!svg) return;
    svg.removeAttribute('width');
    svg.removeAttribute('height');

    if (!svg.hasAttribute('viewBox')) {
      if (!setViewBoxUsingChildren(svg)) {
        var r = svg.getBoundingClientRect();
        if (r.width && r.height) svg.setAttribute('viewBox', '0 0 ' + Math.round(r.width) + ' ' + Math.round(r.height));
      }
    }

    // Preserve aspect ratio and scale responsively
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.style.width = '100%';
    svg.style.height = 'auto';
    svg.style.display = 'block';

    // Remove forced stretching from inline images
    svg.querySelectorAll('image').forEach(function (img) {
      try {
        img.removeAttribute('width');
        img.removeAttribute('height');
        img.removeAttribute('preserveAspectRatio');
      } catch (e) {}
    });

    // Add pan and zoom controls using svg-pan-zoom
    // Only add once per SVG
    if (!svg._panZoomAttached) {
      svg._panZoomAttached = true;
      // Load svg-pan-zoom from CDN if not present
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
  }

  function observeMermaidContainer(container) {
    // If an SVG already exists, apply to all SVGs inside .mermaid
    var svgs = container.querySelectorAll('svg');
    if (svgs.length) {
      svgs.forEach(applyStretchToSvg);
      return;
    }
    // Otherwise wait for an SVG to be added anywhere inside .mermaid
    var mo = new MutationObserver(function (mutations, obs) {
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        for (var j = 0; j < m.addedNodes.length; j++) {
          var n = m.addedNodes[j];
          if (n.nodeType === 1 && n.tagName.toLowerCase() === 'svg') {
            applyStretchToSvg(n);
            obs.disconnect();
            return;
          }
          // If a div is added, check for SVGs inside it
          if (n.nodeType === 1 && n.querySelectorAll) {
            n.querySelectorAll('svg').forEach(function(svg) {
              applyStretchToSvg(svg);
              obs.disconnect();
            });
          }
        }
      }
    });
    mo.observe(container, { childList: true, subtree: true });
  }

  // Watch existing mermaid containers
  document.querySelectorAll('.mermaid').forEach(observeMermaidContainer);

  // Reapply when panels become visible (tabs)
  function reapplyVisible() {
    document.querySelectorAll('.mgat-subnav__panel:not([hidden]) .mermaid svg').forEach(function (svg) {
      applyStretchToSvg(svg);
    });
  }
  setTimeout(reapplyVisible, 200);
  document.addEventListener('click', function (e) {
    if (e.target.closest('.mgat-subnav__link')) setTimeout(reapplyVisible, 150);
  });

  // Also observe panels for hidden->visible changes
  document.querySelectorAll('.mgat-subnav__panel').forEach(function (panel) {
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.attributeName === 'hidden' && !panel.hasAttribute('hidden')) {
          setTimeout(function () {
            panel.querySelectorAll('.mermaid svg').forEach(function (svg) { applyStretchToSvg(svg); });
          }, 80);
        }
      });
    }).observe(panel, { attributes: true });
  });
});