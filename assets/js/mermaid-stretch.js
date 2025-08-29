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

    svg.setAttribute('preserveAspectRatio', 'none'); // force stretch (may distort)
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.display = 'block';

    // Stretch inline raster/vector images inside the SVG
    svg.querySelectorAll('image').forEach(function (img) {
      try {
        img.setAttribute('width', '100%');
        img.setAttribute('height', '100%');
        img.setAttribute('preserveAspectRatio', 'none');
      } catch (e) {}
    });
  }

  function observeMermaidContainer(container) {
    // If an SVG already exists, apply immediately
    var existing = container.querySelector('svg');
    if (existing) {
      applyStretchToSvg(existing);
      return;
    }
    // Otherwise wait for an SVG to be added
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
        }
      }
    });
    mo.observe(container, { childList: true });
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