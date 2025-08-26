/*
  external-links.js
  Adds an accessible external-link indicator to anchors with target="_blank".
  Appends an inline SVG icon (aria-hidden) and a visually-hidden text saying "opens in a new tab".
*/
(function () {
  function enhanceExternalLinks() {
    const links = document.querySelectorAll('a[target="_blank"]');
    links.forEach(link => {
      if (link.dataset.externalEnhanced) return;
      link.dataset.externalEnhanced = 'true';

      // Create screen-reader-only text
      const sr = document.createElement('span');
      sr.className = 'usa-sr-only';
      sr.textContent = ' (opens in a new tab)';

      // Create inline SVG icon
      const svgNS = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('class', 'external-link-icon');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      svg.setAttribute('width', '12');
      svg.setAttribute('height', '12');
      svg.setAttribute('viewBox', '0 0 24 24');

      const path = document.createElementNS(svgNS, 'path');
      // path data: external-link + box
      path.setAttribute('d', 'M14 3h7v7h-2V6.41l-9.29 9.3-1.41-1.41L18.59 5H14V3z M5 5h6v2H7v10h10v-4h2v6H5V5z');
      svg.appendChild(path);

      // Append icon + sr text at the end of the link
      link.appendChild(svg);
      link.appendChild(sr);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceExternalLinks);
  } else {
    enhanceExternalLinks();
  }

  // Observe for dynamically added content
  try {
    const observer = new MutationObserver(() => {
      enhanceExternalLinks();
    });
    observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
  } catch (e) {
    // MutationObserver may not be available in some old environments; ignore
  }
})();
