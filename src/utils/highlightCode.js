export function highlightCode(code) {
  if (!code) return '';
  
  let placeholders = [];
  let uid = 0;

  function save(replacementFunc) {
    return function(match) {
      let id = `__HL_${uid++}__`;
      placeholders.push({ id, text: replacementFunc(match) });
      return id;
    };
  }

  // 1) Escape HTML first
  code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // 2) Extract strings & comments into placeholders (preserve escape sequences)
  code = code.replace(/\/\/.*$/gm, save(m => `<span class="hl-comment">${m}</span>`));
  code = code.replace(/\/\*[\s\S]*?\*\//g, save(m => `<span class="hl-comment">${m}</span>`));
  code = code.replace(/`[^`]*`/g, save(m => `<span class="hl-string">${m}</span>`));
  code = code.replace(/"[^"]*"/g, save(m => `<span class="hl-string">${m}</span>`));
  code = code.replace(/'[^']*'/g, save(m => `<span class="hl-string">${m}</span>`));

  // 3) Apply keywords & numbers on code (safe — no strings/comments remain)
  code = code.replace(/\b(const|let|var|function|return|if|else|for|while|class|new|this|async|await|import|export|default|from|try|catch|throw|typeof|instanceof|in|of|yield|switch|case|break|continue|do|void|delete)\b/g, '<span class="hl-keyword">$1</span>');
  code = code.replace(/\b(true|false|null|undefined|NaN|Infinity)\b/g, '<span class="hl-builtin">$1</span>');
  code = code.replace(/\b(\d+\.?\d*)\b/g, '<span class="hl-number">$1</span>');
  
  // Method/function calls (simple approximation)
  code = code.replace(/([a-zA-Z_$][0-9a-zA-Z_$]*)\s*(?=\()/g, '<span class="hl-function">$1</span>');

  // 4) Restore placeholders
  for (let i = placeholders.length - 1; i >= 0; i--) {
    let p = placeholders[i];
    code = code.replace(p.id, p.text);
  }

  return code;
}
