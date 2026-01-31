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

      // Remove common prefixes
      text = text.replace(/^Part \d+:\s*/i, '');
      text = text.replace(/^\d+\.\s*/, '');
      text = text.replace(/^Chapter \d+:\s*/i, '');
      text = text.replace(/^Section \d+:\s*/i, '');

      // Extract only the first 1-3 meaningful words
      const words = text.split(/[\s\-:,]+/);
      const meaningfulWords = words.filter(w =>
        w.length > 2 &&
        !['the', 'and', 'for', 'with', 'from', 'into', 'this', 'that', 'these', 'those'].includes(w.toLowerCase())
      );

      // Use first 2-3 words max
      const shortText = meaningfulWords.slice(0, 3).join(' ');

      // Fallback to first 20 chars if no meaningful words found
      text = shortText || text.substring(0, 20);

      link.textContent = text;
      link.title = heading.textContent.trim(); // Full text on hover

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
