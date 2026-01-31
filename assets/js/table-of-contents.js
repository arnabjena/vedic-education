/**
 * Automatic Table of Contents Generator
 * Creates horizontal (side-by-side) indexed links for all headings in an article
 */

(function() {
  'use strict';

  let tocGenerated = false;

  function generateTableOfContents() {
    // Prevent multiple executions
    if (tocGenerated) {
      return;
    }

    // Find the post content area
    const content = document.querySelector('.post-content');
    if (!content) {
      return;
    }

    // Find all h2 and h3 headings within the content
    const headings = content.querySelectorAll('h2, h3');

    if (headings.length < 3) {
      return;
    }

    // Add IDs to headings if they don't have them
    headings.forEach((heading, index) => {
      if (!heading.id) {
        const text = heading.textContent.trim();
        const slug = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/--+/g, '-')
          .substring(0, 50);
        heading.id = slug || 'heading-' + index;
      }
    });

    // Create TOC container
    const tocContainer = document.createElement('div');
    tocContainer.className = 'table-of-contents';

    const tocHeader = document.createElement('div');
    tocHeader.className = 'toc-header';
    tocHeader.innerHTML = '<span class="toc-icon">📑</span><h3>Quick Navigation</h3>';

    const tocDescription = document.createElement('div');
    tocDescription.className = 'toc-description';
    tocDescription.textContent = 'Jump to any section:';

    const linksContainer = document.createElement('div');
    linksContainer.className = 'toc-links';

    // Create links for each heading
    headings.forEach(function(heading) {
      const link = document.createElement('a');
      link.href = '#' + heading.id;
      link.className = 'toc-link toc-level-' + heading.tagName.toLowerCase();

      let text = heading.textContent.trim();
      text = text.replace(/^Part \d+:\s*/i, '');
      text = text.replace(/^\d+\.\s*/, '');

      if (text.length > 50) {
        text = text.substring(0, 47) + '...';
      }

      link.textContent = text;

      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById(heading.id);
        if (target) {
          const offset = 80;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          history.pushState(null, null, '#' + heading.id);
        }
      });

      linksContainer.appendChild(link);
    });

    tocContainer.appendChild(tocHeader);
    tocContainer.appendChild(tocDescription);
    tocContainer.appendChild(linksContainer);

    const postHeader = document.querySelector('.post-header');
    if (postHeader) {
      postHeader.after(tocContainer);
      tocGenerated = true;
    }
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(generateTableOfContents, 100);
    });
  } else {
    setTimeout(generateTableOfContents, 100);
  }

})();
