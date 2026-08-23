export const web_storage = {
  "title": "Web Storage",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "<strong>Web Storage</strong> provides two client-side storage mechanisms: <code>localStorage</code> (persists until explicitly deleted) and <code>sessionStorage</code> (cleared when the tab closes).",
    "Both store <strong>key-value pairs</strong> where keys and values are <strong>strings</strong>. Use <code>JSON.stringify()</code> and <code>JSON.parse()</code> for objects/arrays.",
    "Size limit: ~<strong>5-10 MB</strong> per origin. Data is <strong>origin-specific</strong> (protocol + domain + port) and never sent to the server.",
    "Methods: <code>setItem(key, value)</code>, <code>getItem(key)</code>, <code>removeItem(key)</code>, <code>clear()</code>, <code>key(index)</code> — and <code>length</code> property."
  ],
  "laymanDefinition": "Think of localStorage as a filing cabinet in your office that stays there permanently until you clean it out. sessionStorage is like a whiteboard in a meeting room — it's erased when the meeting ends and everyone leaves. Both are in your office (your browser), not shared with anyone else, and don't automatically communicate with the server. You can store notes (strings) in them. If you need to store more complex things like lists or objects, you first write them in a special format (JSON) and then store the message.",
  "deepDive": [
    {
      "heading": "localStorage vs sessionStorage",
      "text": "localStorage persists data across browser sessions — closing and reopening the browser keeps the data. sessionStorage is scoped to the tab: refreshing the page keeps data, but closing the tab or window clears it. Both are per-origin (https://example.com cannot access http://example.com data). sessionStorage is also per-tab — opening the same URL in a different tab creates a new sessionStorage."
    },
    {
      "heading": "Storage Events and Cross-Tab Communication",
      "text": "When localStorage is modified in one tab, a <code>storage</code> event fires in all OTHER tabs/windows of the same origin. The event contains key, oldValue, newValue, url, and storageArea properties. This enables cross-tab communication. Note: the event does NOT fire in the tab that made the change. sessionStorage does not trigger storage events."
    },
    {
      "heading": "Storing Complex Data (Objects, Arrays)",
      "text": "Web Storage only supports strings. To store objects or arrays, serialize with JSON.stringify() before setItem and parse with JSON.parse() after getItem. Be careful with circular references (they cause JSON.stringify to throw) and special types like Date (which becomes a string) or Map/Set (which lose their prototype)."
    },
    {
      "heading": "Security Considerations",
      "list": [
        "Web Storage is <strong>not secure</strong> for sensitive data — it's accessible via JavaScript (XSS vulnerable).",
        "Data in Web Storage is not encrypted — never store passwords, tokens, or PII unless necessary.",
        "Web Storage follows the <strong>same-origin policy</strong> — different subdomains cannot access each other's data.",
        "Users can clear browser data at any time — don't rely on persistence for critical data.",
        "Private/incognito browsing may limit storage (quota exhausted after closing)."
      ]
    },
    {
      "heading": "Web Storage vs Cookies",
      "text": "Cookies are sent with every HTTP request (affecting performance). Web Storage stays client-side only. Cookies have a 4KB size limit; Web Storage has 5-10MB. Cookies support the HttpOnly flag (not accessible via JS); Web Storage is always accessible via JS. Cookies can be scoped to paths/subdomains; Web Storage is per-origin. For storing client-only data, Web Storage is preferred."
    }
  ],
  "interviewAnswer": "Web Storage provides two client-side storage APIs: localStorage (persistent) and sessionStorage (tab-scoped). Both store string key-value pairs and have about 5-10MB per origin. Use setItem/getItem/removeItem/clear for operations. For objects, serialize with JSON.stringify and parse with JSON.parse. localStorage persists across browser sessions and triggers 'storage' events in other tabs. sessionStorage is cleared when the tab closes and is per-tab. Web Storage is synchronous and blocks the main thread, so avoid large reads/writes in critical paths. Never store sensitive data (tokens, PII) in Web Storage as it's accessible via XSS.",
  "interviewQuestions": [
    {
      "question": "What is the difference between localStorage and sessionStorage?",
      "answer": "localStorage persists until explicitly deleted — surviving browser restarts. sessionStorage is cleared when the tab or browser is closed. sessionStorage is also per-tab: opening the same URL in a new tab creates a fresh sessionStorage."
    },
    {
      "question": "What is the storage limit for Web Storage?",
      "answer": "Typically 5-10 MB per origin. This varies by browser: Chrome/Opera ~10MB, Firefox ~5MB, Safari ~5MB. Exceeding the limit throws a QuotaExceededError."
    },
    {
      "question": "How do you store objects in localStorage?",
      "answer": "Use JSON.stringify() before storing: localStorage.setItem('user', JSON.stringify({ name: 'Alice', age: 30 })). Use JSON.parse() when reading: const user = JSON.parse(localStorage.getItem('user')). Always handle parse errors with try/catch."
    },
    {
      "question": "Can different subdomains access the same localStorage?",
      "answer": "No. Web Storage is per-origin (protocol + hostname + port). 'app.example.com' and 'api.example.com' have separate storage. Cookies can be shared across subdomains by setting domain=.example.com."
    },
    {
      "question": "What happens when localStorage data exceeds the quota?",
      "answer": "A QuotaExceededError (or DOMException with code 22) is thrown. Catch it with try/catch: <code>try { localStorage.setItem('key', val); } catch (e) { if (e.name === 'QuotaExceededError') { /* handle full storage */ } }</code>"
    },
    {
      "question": "Does localStorage fire events in the same tab?",
      "answer": "No. The 'storage' event fires only in OTHER tabs/windows of the same origin, not in the tab that modified the data. This enables cross-tab synchronization."
    },
    {
      "question": "Is Web Storage synchronous or asynchronous?",
      "answer": "Web Storage is synchronous and blocking. Reading or writing large amounts of data can block the main thread. For large data, consider IndexedDB (asynchronous, larger quotas). For simple key-value data under 5MB, Web Storage is fine."
    },
    {
      "question": "Can you use Web Storage in private/incognito mode?",
      "answer": "Yes, but with limitations. Most browsers allow Web Storage in private mode, but the data is cleared when the private window closes. Some browsers (Safari) may have stricter limits or disable it entirely."
    },
    {
      "question": "How do you check if a key exists in localStorage?",
      "answer": "Use getItem and check for null: <code>if (localStorage.getItem('key') !== null) { /* exists */ }</code>. The 'in' operator doesn't work because keys are not properties. Or use <code>localStorage.hasOwnProperty('key')</code>."
    },
    {
      "question": "What is the main security concern with Web Storage?",
      "answer": "Web Storage is accessible via JavaScript, making it vulnerable to XSS (Cross-Site Scripting). An attacker can read any data stored in localStorage/sessionStorage. Never store sensitive data like authentication tokens, passwords, or credit card numbers without additional protection (encryption, HttpOnly cookies)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 380\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"360\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Web Storage — localStorage vs sessionStorage</text><rect x=\"60\" y=\"70\" width=\"280\" height=\"140\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"200\" y=\"95\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"14\" font-weight=\"bold\">localStorage</text><text x=\"200\" y=\"118\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">✓ Persists after browser close</text><text x=\"200\" y=\"138\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">✓ Shared across tabs/windows</text><text x=\"200\" y=\"158\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">✓ Fires 'storage' event</text><text x=\"200\" y=\"178\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">✓ Manual deletion only</text><rect x=\"360\" y=\"70\" width=\"280\" height=\"140\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"500\" y=\"95\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">sessionStorage</text><text x=\"500\" y=\"118\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">✗ Cleared when tab closes</text><text x=\"500\" y=\"138\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">✗ Per-tab (not shared)</text><text x=\"500\" y=\"158\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">✗ No 'storage' event</text><text x=\"500\" y=\"178\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">✓ Survives page refresh</text><rect x=\"80\" y=\"240\" width=\"540\" height=\"100\" rx=\"6\" fill=\"#1a1d28\" stroke=\"var(--border)\" stroke-dasharray=\"4\"/><text x=\"350\" y=\"265\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\">Common Features</text><text x=\"100\" y=\"286\" fill=\"#9aa0b0\" font-size=\"10\">• 5-10 MB per origin</text><text x=\"100\" y=\"303\" fill=\"#9aa0b0\" font-size=\"10\">• String key-value pairs only (JSON.stringify for objects)</text><text x=\"100\" y=\"320\" fill=\"#9aa0b0\" font-size=\"10\">• Same-origin policy — not shared across domains</text><text x=\"100\" y=\"337\" fill=\"#9aa0b0\" font-size=\"10\">• Synchronous API (setItem, getItem, removeItem, clear)</text></svg>",
  "codeExamples": [
    {
      "title": "Basic localStorage Operations",
      "useCase": "Storing and retrieving user preferences",
      "code": "// Save a preference\nconst theme = 'dark';\nlocalStorage.setItem('theme', theme);\n\n// Read it back\nconst savedTheme = localStorage.getItem('theme');\nconsole.log(savedTheme); // 'dark'\n\n// Check if a key exists\nif (localStorage.getItem('theme') !== null) {\n  console.log('Theme preference found');\n}\n\n// Remove a single key\nlocalStorage.removeItem('theme');\n\n// Clear ALL localStorage for this origin\n// localStorage.clear();\n\n// Count stored items\nconsole.log('Items stored:', localStorage.length);\n\n// Iterate all keys\nfor (let i = 0; i < localStorage.length; i++) {\n  const key = localStorage.key(i);\n  console.log(key + ':', localStorage.getItem(key));\n}",
      "description": "Basic CRUD operations for localStorage. All methods work identically for sessionStorage by replacing localStorage with sessionStorage."
    },
    {
      "title": "Storing and Reading Objects",
      "useCase": "Persisting complex data",
      "code": "// Store an object\nconst user = {\n  id: 42,\n  name: 'Alice',\n  roles: ['admin', 'editor'],\n  preferences: {\n    theme: 'dark',\n    fontSize: 14\n  }\n};\n\ntry {\n  localStorage.setItem('current-user', JSON.stringify(user));\n} catch (e) {\n  if (e.name === 'QuotaExceededError') {\n    console.error('Storage is full. Clear some data first.');\n  }\n}\n\n// Read it back\nfunction getStoredUser() {\n  try {\n    const raw = localStorage.getItem('current-user');\n    if (raw === null) return null;\n    return JSON.parse(raw);\n  } catch (e) {\n    console.error('Failed to parse stored user:', e);\n    localStorage.removeItem('current-user'); // Clean up corrupt data\n    return null;\n  }\n}\n\nconst savedUser = getStoredUser();\nif (savedUser) {\n  console.log('Welcome back,', savedUser.name);\n  console.log('Roles:', savedUser.roles.join(', '));\n}",
      "description": "Always wrap JSON.parse in try/catch — stored data can become corrupted or be manually edited. Always handle quota errors on setItem."
    },
    {
      "title": "sessionStorage for Tab-Scoped State",
      "useCase": "Form data preservation on refresh",
      "code": "// Save form state as the user types\nconst form = document.getElementById('signup-form');\n\nform.addEventListener('input', function() {\n  const formData = {\n    name: form.querySelector('#name').value,\n    email: form.querySelector('#email').value,\n    step: parseInt(form.dataset.step || '1')\n  };\n  sessionStorage.setItem('signup-form', JSON.stringify(formData));\n});\n\n// Restore form state on page refresh\nwindow.addEventListener('DOMContentLoaded', function() {\n  const saved = sessionStorage.getItem('signup-form');\n  if (saved) {\n    try {\n      const data = JSON.parse(saved);\n      form.querySelector('#name').value = data.name || '';\n      form.querySelector('#email').value = data.email || '';\n      form.dataset.step = String(data.step || 1);\n      console.log('Form state restored from sessionStorage');\n    } catch (e) {\n      sessionStorage.removeItem('signup-form');\n    }\n  }\n});\n\n// Clear on successful submit\nform.addEventListener('submit', function() {\n  sessionStorage.removeItem('signup-form');\n});\n\n// Note: closing the tab clears sessionStorage automatically",
      "description": "sessionStorage is perfect for form state preservation — data survives page refresh (useful if the page reloads) but is cleaned up when the tab closes."
    },
    {
      "title": "Cross-Tab Synchronization with Storage Event",
      "useCase": "Syncing settings across tabs",
      "code": "// Tab A — updates a setting\nfunction updateSetting(key, value) {\n  localStorage.setItem(key, value);\n  // Note: no event fires in THIS tab\n}\n\n// Tab B — listens for changes from other tabs\nwindow.addEventListener('storage', function(event) {\n  console.log('Storage changed by another tab');\n  console.log('Key:', event.key);          // The key that changed\n  console.log('Old value:', event.oldValue); // Previous value\n  console.log('New value:', event.newValue); // New value\n  console.log('URL:', event.url);            // Page that made the change\n\n  // React to the change\n  if (event.key === 'theme') {\n    applyTheme(event.newValue);\n  } else if (event.key === 'language') {\n    updateLanguage(event.newValue);\n  }\n});\n\n// Tab A: updateSetting('theme', 'light');\n// Tab B receives the storage event and applies the new theme\n\n// Note: storage event does NOT fire in sessionStorage",
      "description": "The 'storage' event enables cross-tab synchronization. When one tab modifies localStorage, all other tabs receive the change. Ideal for keeping settings in sync."
    },
    {
      "title": "Storage-Safe Wrapper with Error Handling",
      "useCase": "Production-ready storage utility",
      "code": "const safeStorage = {\n  get(key, defaultValue) {\n    try {\n      const raw = localStorage.getItem(key);\n      if (raw === null) return defaultValue;\n      return JSON.parse(raw);\n    } catch {\n      return defaultValue;\n    }\n  },\n\n  set(key, value) {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n      return true;\n    } catch (e) {\n      if (e.name === 'QuotaExceededError') {\n        console.warn('Storage full. Clearing old cache...');\n        this.clearCache();\n        // Retry after clearing\n        try {\n          localStorage.setItem(key, JSON.stringify(value));\n          return true;\n        } catch {}\n      }\n      return false;\n    }\n  },\n\n  remove(key) {\n    try { localStorage.removeItem(key); return true; } catch { return false; }\n  },\n\n  clearCache(prefix) {\n    const toRemove = [];\n    for (let i = 0; i < localStorage.length; i++) {\n      const key = localStorage.key(i);\n      if (key.startsWith(prefix || 'cache-')) {\n        toRemove.push(key);\n      }\n    }\n    toRemove.forEach(function(k) { localStorage.removeItem(k); });\n  }\n};\n\n// Usage\nsafeStorage.set('prefs', { theme: 'dark' });\nconst prefs = safeStorage.get('prefs', { theme: 'light' });\nconsole.log(prefs.theme); // 'dark'",
      "description": "A robust storage wrapper handles JSON serialization, quota errors, corrupt data, and cache eviction. Production code should use patterns like this."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the main difference between localStorage and sessionStorage?",
      "options": [
        "sessionStorage has a larger limit",
        "localStorage persists; sessionStorage clears when the tab closes",
        "sessionStorage is shared across tabs",
        "localStorage is slower"
      ],
      "answer": 1,
      "explanation": "localStorage persists until explicitly deleted. sessionStorage is cleared when the tab or browser window is closed."
    },
    {
      "question": "Can you store a JavaScript object directly in localStorage?",
      "options": [
        "Yes, it works natively",
        "No — only strings are supported. Use JSON.stringify/parse",
        "Only if the object has no methods",
        "Only if you use setObject/getObject"
      ],
      "answer": 1,
      "explanation": "Web Storage only supports string values. Objects must be serialized with JSON.stringify() and parsed with JSON.parse()."
    },
    {
      "question": "What is the typical size limit for localStorage?",
      "options": [
        "4 KB",
        "100 KB",
        "5-10 MB",
        "Unlimited"
      ],
      "answer": 2,
      "explanation": "The limit is approximately 5-10 MB per origin, varying by browser. Exceeding it throws QuotaExceededError."
    },
    {
      "question": "When does the 'storage' event fire?",
      "options": [
        "In the same tab that made the change",
        "In all OTHER tabs of the same origin",
        "In all tabs of any origin",
        "Only in sessionStorage"
      ],
      "answer": 1,
      "explanation": "The 'storage' event fires in all other tabs/windows of the same origin when localStorage is modified. The modifying tab does NOT receive the event."
    },
    {
      "question": "How do you remove a single key from localStorage?",
      "options": [
        "localStorage.delete(key)",
        "localStorage.removeItem(key)",
        "localStorage.clear(key)",
        "delete localStorage[key]"
      ],
      "answer": 1,
      "explanation": "removeItem(key) removes a single key-value pair. clear() removes all data. delete localStorage[key] also works but is not standard."
    },
    {
      "question": "Is Web Storage accessible across different subdomains?",
      "options": [
        "Yes, all subdomains share storage",
        "No, it's per-origin (hostname + port + protocol)",
        "Only if you set domain in the options",
        "Only for localStorage, not sessionStorage"
      ],
      "answer": 1,
      "explanation": "Web Storage follows the same-origin policy. 'app.example.com' and 'api.example.com' have separate storage."
    },
    {
      "question": "What exception is thrown when localStorage is full?",
      "options": [
        "TypeError",
        "RangeError",
        "QuotaExceededError",
        "StorageFullError"
      ],
      "answer": 2,
      "explanation": "QuotaExceededError (DOMException) is thrown when the storage quota is exceeded. Catch it with try/catch."
    },
    {
      "question": "Which of the following is NOT a valid localStorage method?",
      "options": [
        "getItem",
        "setItem",
        "removeItem",
        "storeItem"
      ],
      "answer": 3,
      "explanation": "The methods are getItem, setItem, removeItem, clear, and key(index). There is no 'storeItem' method."
    },
    {
      "question": "Is Web Storage sent to the server with HTTP requests?",
      "options": [
        "Yes, in the request body",
        "No, it stays client-side only",
        "Only for localStorage",
        "Only if explicitly configured"
      ],
      "answer": 1,
      "explanation": "Web Storage data is never automatically sent to the server. This is a key difference from cookies, which are sent with every HTTP request."
    },
    {
      "question": "Can Web Storage be used in private/incognito mode?",
      "options": [
        "No, it's completely blocked",
        "Yes, but data is cleared when the private window closes",
        "Only sessionStorage works",
        "Only localStorage works"
      ],
      "answer": 1,
      "explanation": "Most browsers allow Web Storage in private mode but clear the data when the private window closes. Safari may impose stricter limits."
    }
  ]
};
