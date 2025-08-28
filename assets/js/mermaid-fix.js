document.addEventListener('DOMContentLoaded', function () {
  function renderVisiblePanels() {
    document.querySelectorAll('.mgat-subnav__panel:not([hidden])').forEach(panel => {
      if (window.renderMermaidIn) window.renderMermaidIn(panel);
      else if (window.mermaid) window.mermaid.init(undefined, panel.querySelectorAll('.mermaid'));
    });
  }

  // render any panel visible on load
  setTimeout(renderVisiblePanels, 60);

  // re-render after tab clicks (your tab code toggles panels)
  document.addEventListener('click', function (e) {
    if (e.target.closest('.mgat-subnav__link')) {
      setTimeout(renderVisiblePanels, 80);
    }
  });

  // observe panels for attribute changes (hidden -> visible)
  document.querySelectorAll('.mgat-subnav__panel').forEach(panel => {
    new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.attributeName === 'hidden' && !panel.hasAttribute('hidden')) {
          if (window.renderMermaidIn) window.renderMermaidIn(panel);
          else if (window.mermaid) window.mermaid.init(undefined, panel.querySelectorAll('.mermaid'));
        }
      });
    }).observe(panel, { attributes: true });
  });
});