const e={title:"Cookies",difficulty:"beginner",estimatedMinutes:15,tldr:["<strong>Cookies</strong> are small text files (max 4KB) stored by the browser that are sent with every HTTP request to the same domain.","Cookies are managed via the <code>document.cookie</code> API (JavaScript) or <code>Set-Cookie</code> HTTP header (server).","Attributes: <code>domain</code>, <code>path</code>, <code>expires</code>/<code>max-age</code>, <code>secure</code> (HTTPS only), <code>httpOnly</code> (not accessible via JS), <code>sameSite</code> (CSRF protection).","Common uses: <strong>session management</strong> (auth tokens), <strong>personalization</strong>, and <strong>tracking</strong>."],laymanDefinition:"Cookies are like sticky notes that a website sticks on your browser. Each time you visit that website, your browser shows all the sticky notes that belong to that site. The notes can say things like 'user is logged in' or 'prefers dark mode'. The server can also stick notes on your browser by sending special headers. Unlike Web Storage (your private filing cabinet), cookies are automatically shown to the server on every visit — that's how websites remember you. But this also means cookies have a tiny size limit (4KB) and affect performance.",deepDive:[{heading:"How Cookies Work",text:"When a server sends a response, it can include a Set-Cookie header. The browser stores the cookie and includes it in the Cookie header of every subsequent request to the same domain (matching the cookie's domain, path, and other attributes). Cookies are stored as key=value pairs with optional attributes separated by semicolons."},{heading:"Cookie Attributes and Security",text:"<strong>Secure:</strong> Only send over HTTPS. <strong>HttpOnly:</strong> Not accessible via document.cookie — protects against XSS. <strong>SameSite:</strong> Controls cross-site sending: 'Strict' (same-site only), 'Lax' (top-level navigation allowed), 'None' (any context, requires Secure). <strong>Domain/Path:</strong> Restricts which URLs receive the cookie. <strong>Expires/Max-Age:</strong> Sets lifetime. Without expires, the cookie is a session cookie (deleted when browser closes)."},{heading:"document.cookie API",text:"Reading document.cookie returns all non-HttpOnly cookies as a semicolon-separated string of key=value pairs. Writing to document.cookie sets or updates a single cookie: document.cookie = 'key=value; path=/; max-age=3600'. Setting with the same key, path, and domain overwrites the existing cookie. To delete, set max-age=0 or expires to a past date."},{heading:"Cookies vs Web Storage vs IndexedDB",list:["<strong>Cookies (4KB):</strong> Sent with every request. Supports HttpOnly/Secure/SameSite. Best for session tokens and server-required data.","<strong>Web Storage (5-10MB):</strong> Client-only. Not sent with requests. Best for UI preferences and client-side caching.","<strong>IndexedDB (unlimited):</strong> Asynchronous, structured data. Best for large datasets (offline apps, file data).","<strong>Choose cookies when:</strong> The server needs the data on every request, or you need HttpOnly protection."]},{heading:"CSRF Protection with SameSite Cookie",text:"SameSite attribute is the primary defense against Cross-Site Request Forgery (CSRF). With SameSite=Lax (default in modern browsers), cookies are not sent on cross-site requests initiated by third-party sites (like clicking a malicious link). SameSite=Strict provides maximum protection but may break legitimate cross-site flows. SameSite=None requires Secure and allows all cross-site requests."}],interviewAnswer:"Cookies are key-value pairs stored in the browser and sent with every HTTP request to the originating domain (max 4KB). They're set via the Set-Cookie HTTP header or via document.cookie in JavaScript. Key attributes: Secure (HTTPS only), HttpOnly (inaccessible to JS — prevents XSS theft), SameSite (CSRF protection), Domain/Path (scoping), and Expires/Max-Age (lifetime). HttpOnly cookies are the most secure way to store authentication tokens since they can't be stolen by XSS attacks. Unlike localStorage, cookies are automatically included in HTTP requests, making them ideal for server-side session management but less suitable for client-only data.",interviewQuestions:[{question:"What are cookies and how do they work?",answer:"Cookies are small text files (up to 4KB) stored by the browser and sent with every HTTP request to the domain that set them. They are set via Set-Cookie HTTP header or document.cookie in JavaScript."},{question:"What is the difference between a session cookie and a persistent cookie?",answer:"A session cookie has no Expires or Max-Age attribute and is deleted when the browser closes. A persistent cookie has an expiration date and survives browser restarts until that date."},{question:"What is the HttpOnly flag and why is it important?",answer:"HttpOnly prevents client-side JavaScript from accessing the cookie via document.cookie. This protects against XSS attacks — even if an attacker injects scripts, they cannot steal HttpOnly cookies. Essential for session/authentication cookies."},{question:"What is the SameSite cookie attribute?",answer:"SameSite controls when cookies are sent in cross-site requests. SameSite=Lax (default) sends cookies on top-level navigations (clicking a link) but not on embedded requests (images, iframes). SameSite=Strict blocks all cross-site usage. SameSite=None allows all, but requires Secure (HTTPS)."},{question:"How do you set a cookie in JavaScript?",answer:"document.cookie = 'username=Alice; path=/; max-age=86400; secure; samesite=lax'. Each assignment sets or updates one cookie. For multiple cookies, call document.cookie multiple times."},{question:"How do you read all cookies in JavaScript?",answer:"document.cookie returns all non-HttpOnly cookies as a string: 'key1=val1; key2=val2; key3=val3'. Parse it by splitting on '; ' and then splitting each pair on '='."},{question:"How do you delete a cookie?",answer:"Set the cookie with the same name, path, and domain but with max-age=0 or expires set to a past date: document.cookie = 'username=; max-age=0; path=/'."},{question:"What is the difference between cookies and localStorage?",answer:"Cookies (4KB) are sent with every HTTP request and support HttpOnly (not accessible via JS). localStorage (5-10MB) stays client-side only. Use cookies for server-required data (auth tokens); use localStorage for client-only preferences."},{question:"Can an HttpOnly cookie be read via JavaScript?",answer:"No. HttpOnly cookies are not accessible via document.cookie. They are only sent to the server with HTTP requests. This is a security feature to protect session tokens from XSS attacks."},{question:"What is the Secure flag on a cookie?",answer:"The Secure flag ensures the cookie is only sent over HTTPS connections. If a page is served over HTTP, a Secure cookie is not sent and cannot be set. This prevents interception of cookies over unencrypted connections."}],diagramSvg:'<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="330" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">HTTP Cookie Flow</text><rect x="60" y="70" width="220" height="55" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="170" y="93" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">Browser sends request</text><text x="170" y="110" text-anchor="middle" fill="#9aa0b0" font-size="10">GET /page (includes stored cookies)</text><line x1="280" y1="97" x2="340" y2="97" stroke="#fbbf24" stroke-width="2"/><rect x="340" y="70" width="280" height="55" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="480" y="93" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">Server receives cookies</text><text x="480" y="110" text-anchor="middle" fill="#9aa0b0" font-size="10">Reads session/ auth from Cookie header</text><line x1="480" y1="125" x2="480" y2="155" stroke="#98c379" stroke-width="2"/><rect x="340" y="155" width="280" height="55" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="480" y="178" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">Server sets cookies</text><text x="480" y="195" text-anchor="middle" fill="#9aa0b0" font-size="10">Response: Set-Cookie header(s)</text><line x1="340" y1="182" x2="280" y2="182" stroke="#e5c07b" stroke-width="2"/><rect x="60" y="155" width="220" height="55" rx="6" fill="#1a1d28" stroke="#e5c07b" stroke-width="1.5"/><text x="170" y="178" text-anchor="middle" fill="#e5c07b" font-size="12" font-weight="bold">Browser stores cookies</text><text x="170" y="195" text-anchor="middle" fill="#9aa0b0" font-size="10">Respects path/domain/secure/samesite</text><text x="350" y="290" text-anchor="middle" fill="#9aa0b0" font-size="11">On subsequent requests: browser sends stored cookies in Cookie header</text><text x="350" y="315" text-anchor="middle" fill="#9aa0b0" font-size="11">HttpOnly cookies: not accessible via document.cookie (XSS protection)</text></svg>',codeExamples:[{title:"Reading and Writing Cookies with JavaScript",useCase:"Basic cookie manipulation",code:`// Set a cookie (persistent, 7 days)
function setCookie(name, value, days) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = encodeURIComponent(name) + '=' +
    encodeURIComponent(value) + '; path=/; max-age=' + maxAge + '; samesite=lax';
}

// Get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split('=');
    const key = decodeURIComponent(parts[0]);
    if (key === name) {
      return decodeURIComponent(parts.slice(1).join('='));
    }
  }
  return null;
}

// Delete a cookie
function deleteCookie(name) {
  document.cookie = encodeURIComponent(name) +
    '=; path=/; max-age=0';
}

// Usage
setCookie('theme', 'dark', 30);
setCookie('language', 'en', 365);

console.log(getCookie('theme'));     // 'dark'
console.log(getCookie('language'));  // 'en'

deleteCookie('theme');
console.log(getCookie('theme'));     // null`,description:"Always encodeURIComponent cookie values to handle special characters. Use max-age=0 for deletion. The path must match the original cookie's path."},{title:"Setting Cookies with All Security Flags",useCase:"Secure cookie configuration",code:`// This simulates what a server would set via Set-Cookie header
// In JavaScript, we set the same via document.cookie

function setSecureCookie(name, value, options) {
  let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  // Path (default: current path)
  cookie += '; path=' + (options.path || '/');

  // Domain (default: current domain)
  if (options.domain) cookie += '; domain=' + options.domain;

  // Expiration
  if (options.days) {
    const maxAge = options.days * 86400;
    cookie += '; max-age=' + maxAge;
  }

  // Security flags
  if (options.secure !== false) cookie += '; secure';  // HTTPS only
  if (options.httpOnly) {
    // Can't actually set HttpOnly from JS — this is for illustration
    // Only the server can set HttpOnly via Set-Cookie header
    console.log('HttpOnly requires server-side Set-Cookie header');
  }

  // SameSite
  cookie += '; samesite=' + (options.sameSite || 'lax');

  document.cookie = cookie;
}

// Usage
setSecureCookie('session_token', 'abc123', {
  days: 1,
  path: '/',
  secure: true,
  sameSite: 'strict'
});

// Note: In production, auth cookies should be set by the server
// with HttpOnly flag for XSS protection: 
// Set-Cookie: session_token=abc123; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400`,description:"Security flags make cookies resilient to common attacks. HttpOnly (server-only) protects against XSS. Secure ensures HTTPS-only transmission. SameSite prevents CSRF."},{title:"Simple Cookie Utility Class",useCase:"Reusable cookie management",code:`const CookieManager = {
  get(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&') + '=([^;]*)'));
    return match ? decodeURIComponent(match[2]) : null;
  },

  set(name, value, opts) {
    let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (opts) {
      if (opts.path) cookie += '; path=' + opts.path;
      if (opts.domain) cookie += '; domain=' + opts.domain;
      if (opts.days) cookie += '; max-age=' + (opts.days * 86400);
      if (opts.secure !== false) cookie += '; secure';
      cookie += '; samesite=' + (opts.sameSite || 'lax');
    }
    document.cookie = cookie;
    return this;
  },

  delete(name, opts) {
    this.set(name, '', Object.assign({}, opts, { days: 0 }));
    return this;
  },

  exists(name) {
    return this.get(name) !== null;
  },

  // Get all cookies as an object
  getAll() {
    const result = {};
    document.cookie.split('; ').forEach(function(pair) {
      const parts = pair.split('=');
      const key = decodeURIComponent(parts[0]);
      if (key) result[key] = decodeURIComponent(parts.slice(1).join('='));
    });
    return result;
  }
};

// Usage
CookieManager.set('pref_theme', 'dark', { days: 30 });
CookieManager.set('pref_lang', 'en', { days: 365, path: '/app' });

console.log(CookieManager.get('pref_theme'));  // 'dark'
console.log(CookieManager.exists('pref_lang')); // true
console.log(CookieManager.getAll());
// { pref_theme: 'dark', pref_lang: 'en' }

CookieManager.delete('pref_theme');
console.log(CookieManager.exists('pref_theme')); // false`,description:"A utility class wraps cookie operations with clean syntax. The RegExp approach for get() handles special characters in cookie names properly."},{title:"Server-Side Cookie Setting (Node.js/Express)",useCase:"Backend cookie management",code:`// Server-side (Node.js with Express)
const express = require('express');
const app = express();

app.get('/login', function(req, res) {
  // Set a session cookie (HttpOnly, Secure, SameSite)
  res.cookie('sessionId', 'abc123xyz', {
    httpOnly: true,     // Not accessible via JS — prevents XSS theft
    secure: true,       // HTTPS only
    sameSite: 'strict', // CSRF protection
    maxAge: 86400000,   // 24 hours in ms
    path: '/'
  });

  res.json({ message: 'Logged in' });
});

// The Set-Cookie header sent to browser:
// Set-Cookie: sessionId=abc123xyz; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400

app.get('/dashboard', function(req, res) {
  // Read cookies from the request
  const sessionId = req.cookies.sessionId;
  if (!sessionId) return res.status(401).json({ error: 'Not authenticated' });

  // Validate session and proceed
  res.json({ data: 'Protected data' });
});

app.get('/logout', function(req, res) {
  // Clear the cookie
  res.clearCookie('sessionId', { path: '/' });
  res.json({ message: 'Logged out' });
});

app.listen(3000);`,description:"Server-side cookies are set via Set-Cookie headers. HttpOnly flag prevents client-side access — the most secure way to handle auth tokens."},{title:"Parsing document.cookie String",useCase:"Understanding cookie parsing",code:`// document.cookie returns: "key1=val1; key2=val2"
// Simple parser:
function parseCookies(cookieString) {
  const cookies = {};
  if (!cookieString) return cookies;

  cookieString.split('; ').forEach(function(pair) {
    const separatorIndex = pair.indexOf('=');
    if (separatorIndex === -1) {
      cookies[pair.trim()] = '';
    } else {
      const key = pair.substring(0, separatorIndex).trim();
      const value = pair.substring(separatorIndex + 1).trim();
      try {
        cookies[decodeURIComponent(key)] = decodeURIComponent(value);
      } catch {
        cookies[key] = value;
      }
    }
  });

  return cookies;
}

// Set some cookies
// document.cookie = 'name=Alice; path=/';
// document.cookie = 'city=New%20York; path=/';

const allCookies = parseCookies(document.cookie);
console.log(allCookies);
// { name: 'Alice', city: 'New York' }

// Built-in alternative (but older):
// document.cookie.split('; ').reduce((acc, c) => {
//   const [k, v] = c.split('=');
//   acc[decodeURIComponent(k)] = decodeURIComponent(v);
//   return acc;
// }, {});`,description:"Parsing document.cookie involves splitting by '; ' and '='. Always use decodeURIComponent since cookie values are URL-encoded."}],mcqQuestions:[{question:"What is the maximum size of a cookie?",options:["1 KB","4 KB","10 KB","5 MB"],answer:1,explanation:"Each cookie is limited to approximately 4 KB (4096 bytes). This includes the name, value, and attributes."},{question:"Which flag prevents JavaScript from accessing a cookie?",options:["Secure","HttpOnly","SameSite","Domain"],answer:1,explanation:"HttpOnly makes the cookie inaccessible to document.cookie in JavaScript. Essential for protecting session tokens against XSS."},{question:"What does the Secure flag on a cookie do?",options:["Encrypts the cookie value","Ensures the cookie is only sent over HTTPS","Prevents the cookie from being modified","Makes the cookie accessible only on the server"],answer:1,explanation:"Secure ensures the cookie is only transmitted over HTTPS connections, preventing interception over unencrypted HTTP."},{question:"What is the purpose of the SameSite attribute?",options:["Increases cookie size limit","Prevents CSRF attacks","Allows cross-domain cookies","Encrypts cookie data"],answer:1,explanation:"SameSite controls when cookies are sent in cross-site requests, protecting against Cross-Site Request Forgery (CSRF)."},{question:"How do you delete a cookie in JavaScript?",options:["document.cookie.delete(name)","Set the cookie with max-age=0","localStorage.removeItem(name)","Cookies cannot be deleted via JS"],answer:1,explanation:"Set the cookie with the same name, path, and domain but with max-age=0 or an expired date."},{question:"What happens when a session cookie (no expires) is set?",options:["It persists for 24 hours","It's deleted when the browser closes","It never expires","It's deleted after the page refresh"],answer:1,explanation:"A session cookie has no Expires or Max-Age attribute and is deleted when the browser session ends (browser closes)."},{question:"How are cookies sent to the server?",options:["In the request body","In the Cookie HTTP header","In the URL query string","In the request method"],answer:1,explanation:"Cookies matching the request domain/path are automatically included in the Cookie HTTP header with every request."},{question:"Which attribute specifies which URLs should receive a cookie?",options:["Domain and Path","Secure and SameSite","Max-Age and Expires","Value and Key"],answer:0,explanation:"The Domain and Path attributes restrict which URLs the cookie is sent to. Domain specifies the host, Path specifies the URL prefix."},{question:"Can JavaScript access HttpOnly cookies?",options:["Yes, via document.cookie","No, they are hidden from JavaScript","Only in the same domain","Only if the cookie was set via JS"],answer:1,explanation:"HttpOnly cookies are not accessible via document.cookie. They are only sent to the server with HTTP requests."},{question:"What is the difference between SameSite=Strict and SameSite=Lax?",options:["Strict is for HTTPS, Lax is for HTTP","Strict blocks all cross-site usage; Lax allows top-level navigations","Lax is more secure","There is no difference"],answer:1,explanation:"SameSite=Strict blocks cookies on all cross-site requests. SameSite=Lax allows cookies on top-level navigations (clicking a link to a different site) but blocks embedded requests (images, iframes, fetch)."}]};export{e as cookies};
