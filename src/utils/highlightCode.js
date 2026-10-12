export function highlightCode(code) {
  if (!code) return '';
  
  let placeholders = [];
  let uid = 0;

  function save(replacementFunc) {
    return function(...args) {
      let id = `__HL_${uid++}__`;
      placeholders.push({ id, text: replacementFunc(...args) });
      return id;
    };
  }

  code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // Comments: JS/C-style, SQL (-- ), Python/Bash/YAML (#)
  code = code.replace(/\/\/.*$/gm, save(m => `<span class="hl-comment">${m}</span>`));
  code = code.replace(/\/\*[\s\S]*?\*\//g, save(m => `<span class="hl-comment">${m}</span>`));
  code = code.replace(/--.*$/gm, save(m => `<span class="hl-comment">${m}</span>`));
  code = code.replace(/(^|[^$&#])#.*$/gm, (match) => {
    return match.replace(/#.*$/, save(m => `<span class="hl-comment">${m}</span>`));
  });

  // Strings
  code = code.replace(/`[^`]*`/g, save(m => `<span class="hl-string">${m}</span>`));
  code = code.replace(/"[^"]*"/g, save(m => `<span class="hl-string">${m}</span>`));
  code = code.replace(/'[^']*'/g, save(m => `<span class="hl-string">${m}</span>`));

  // SQL & Dockerfile keywords
  const sqlKeywords = 'SELECT|FROM|WHERE|INSERT|INTO|UPDATE|DELETE|JOIN|LEFT|RIGHT|INNER|OUTER|FULL|CROSS|ON|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET|AS|DISTINCT|CREATE|TABLE|DATABASE|ALTER|DROP|INDEX|VIEW|UNION|EXISTS|BETWEEN|LIKE|PRIMARY KEY|FOREIGN KEY|REFERENCES|CASCADE|SET|VALUES';
  code = code.replace(new RegExp(`\\b(${sqlKeywords})\\b`, 'gi'), save(m => `<span class="hl-keyword">${m}</span>`));

  // JS/TS/Go/Python/Docker keywords
  const keywords = 'const|let|var|function|return|if|else|for|while|class|new|this|async|await|import|export|default|from|try|catch|throw|typeof|instanceof|in|of|yield|switch|case|break|continue|do|void|delete|def|elif|lambda|pass|raise|except|finally|with|package|func|struct|interface|go|chan|defer|FROM|RUN|CMD|LABEL|EXPOSE|ENV|ADD|COPY|ENTRYPOINT|VOLUME|USER|WORKDIR|ARG';
  code = code.replace(new RegExp(`\\b(${keywords})\\b`, 'g'), save(m => `<span class="hl-keyword">${m}</span>`));

  // Builtins & Booleans
  code = code.replace(/\b(true|false|null|undefined|NaN|Infinity|nil|None|TRUE|FALSE|NULL)\b/g, save(m => `<span class="hl-builtin">${m}</span>`));
  
  // Numbers
  code = code.replace(/\b(\d+\.?\d*)\b/g, save(m => `<span class="hl-number">${m}</span>`));
  
  // Function calls
  code = code.replace(/([a-zA-Z_$][0-9a-zA-Z_$]*)\s*(?=\()/g, save((match, p1) => `<span class="hl-function">${p1}</span>`));

  for (let i = placeholders.length - 1; i >= 0; i--) {
    let p = placeholders[i];
    code = code.replace(p.id, () => p.text);
  }

  return code;
}
