const ALLOWED_TAGS = new Set([
  'code', 'strong', 'em', 'b', 'i', 'u', 's',
  'br', 'hr',
  'ul', 'ol', 'li',
  'p', 'span', 'pre', 'blockquote',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'a'
]);

/**
 * Sanitizes HTML content for display in topic panels.
 * Preserves safe typographical/formatting tags (code, strong, em, br, lists, etc.)
 * while escaping disallowed tags such as form controls (<input>, <button>, <select>, <textarea>, <form>),
 * JSX components (<FancyInput>, <Route>), generic type parameters (<HTMLInputElement, Props>),
 * and CLI/git placeholders (<file>, <branch>).
 *
 * This prevents interactive form controls from unexpectedly rendering on screen
 * and prevents generic types or component names from being swallowed by HTML parsers.
 */
export function formatContentHtml(html) {
  if (!html || typeof html !== 'string') return '';

  let prev;
  let current = html;
  let iterations = 0;

  // Repeat until all unescaped disallowed tags are escaped, supporting nested constructs
  while (prev !== current && iterations < 5) {
    prev = current;
    iterations++;
    current = current.replace(/<\/?([a-zA-Z0-9_\-]+)([^<>]*)>/g, (match, tagName) => {
      const lower = tagName.toLowerCase();
      if (ALLOWED_TAGS.has(lower)) {
        return match;
      }
      return '&lt;' + match.slice(1, -1) + '&gt;';
    });
  }

  return current;
}
