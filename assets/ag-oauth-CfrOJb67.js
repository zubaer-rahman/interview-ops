const e={id:"ag-oauth",title:"OAuth",difficulty:"advanced",estimatedMinutes:20,tldr:["OAuth 2.0 is the industry-standard authorization framework enabling third-party applications to access resources without sharing credentials.","Four actors: Resource Owner (user), Client (app), Authorization Server (Auth0/Keycloak), Resource Server (API).","Grant types: Authorization Code (web apps), PKCE (SPA/mobile), Client Credentials (M2M), Implicit (deprecated), Device Code, Refresh Token.","Gateway acts as Resource Server: validates access tokens, forwards identity to downstream services, enforces scopes."],laymanDefinition:"OAuth 2.0 is like a hotel valet key system. You (user) give receptionist (auth server) a limited key that valets (apps) can use for specific things (scopes). Valets cannot access rooms, only parking.",deepDive:[{heading:"OAuth Grant Types",text:"Auth Code: user logs in auth server, gets code, exchanges for access token. PKCE: code challenge+verifier for SPAs. Client Credentials: no user, app-to-app. Refresh: get new tokens."},{heading:"Gateway as Resource Server",text:"1. Client sends access token. 2. Gateway validates (introspect or verify locally). 3. Checks scopes match endpoint. 4. Forwards identity (X-User-Id, X-Scopes). 5. Backend trusts gateway headers."},{heading:"OAuth with Multiple Providers",text:"Gateway can integrate with many IdPs (Auth0, Keycloak, custom). Discovery URL: /.well-known/openid-configuration. JWKS for public keys. Federation via OIDC."},{heading:"Token Introspection vs Local Validation",text:"Local: fast, no network, needs JWKS. Introspection: real-time validation, detects revoked tokens immediately, RP call. Gateway caches introspection results short TTL."}],interviewAnswer:"OAuth 2.0 is complex but critical. Use Authorization Code + PKCE for user-facing apps, Client Credentials for M2M. Gateway validates tokens and enforces scopes. Prefer local JWT validation with JWKS for performance; use introspection for high-value operations.",interviewQuestions:[{question:"What is OAuth 2.0?",answer:"Authorization framework for delegated access without sharing credentials."},{question:"Four OAuth actors?",answer:"Resource Owner, Client, Authorization Server, Resource Server."},{question:"Grant type for SPAs?",answer:"Authorization Code with PKCE (Proof Key for Code Exchange)."},{question:"Grant type for M2M?",answer:"Client Credentials Grant."},{question:"What is scope?",answer:"Permission level for the token: read:orders, write:users."},{question:"Token introspection?",answer:"Auth server endpoint to validate and check token status in real time."},{question:"Local validation vs introspection?",answer:"Local: fast, cached JWKS, no network. Introspection: real-time, detects revocations."},{question:"OpenID Connect?",answer:"Identity layer on top of OAuth 2.0 � adds ID token (JWT with user info)."},{question:"What is OIDC discovery?",answer:"/.well-known/openid-configuration � auth server metadata."},{question:"Why PKCE for SPAs?",answer:"Cannot store client_secret securely; PKCE uses code verifier+challenge."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">OAuth</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">App</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Auth Server</text><text x="200" y="54" text-anchor="middle" font-size="9" fill="#ddd">Login+Token</text><line x1="150" y1="60" x2="150" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="40" y1="48" x2="10" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Resource Owner</text><text x="60" y="89" text-anchor="middle" font-size="9" fill="#ddd">User</text><line x1="110" y1="82" x2="140" y2="82" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="70" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="200" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">API Gateway</text><text x="200" y="89" text-anchor="middle" font-size="9" fill="#ddd">Val. token</text><line x1="250" y1="82" x2="280" y2="82" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="105" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Scopes</text><text x="60" y="124" text-anchor="middle" font-size="9" fill="#ddd">Enforce</text><rect x="160" y="105" width="100" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="210" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Backend</text><text x="210" y="124" text-anchor="middle" font-size="9" fill="#ddd">Identity</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">OAuth 2.0</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Auth Code + PKCE. Client Credentia</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">ls. Gateway validates tokens. Scop</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">es.</text></svg>',codeExamples:'<text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">OAuth 2.0: Industry-standard delegated authorizati</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">on. Grants: Auth Code+PKCE, Client Credentials. Ga</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">teway validates tokens and enforces scopes.</text>',mcqQuestions:[{title:"OAuth Client Credentials Flow",useCase:"M2M authentication.",code:`// Client requests access token
const response=await fetch("https://auth.example.com/oauth/token",{
  method:"POST",
  headers:{"Content-Type":"application/x-www-form-urlencoded"},
  body:new URLSearchParams({
    grant_type:"client_credentials",
    client_id:"service-a",
    client_secret:"cs_abc123...",
    scope:"read:orders write:orders",
  }),
});
const {access_token}=await response.json();
// Then use in API calls:
fetch("https://api.example.com/orders",{headers:{Authorization:"Bearer "+access_token}});`,description:"Client Credentials Grant for M2M communication."},{title:"Authorization Code with PKCE",useCase:"Secure SPA flow.",code:`// 1. Generate code verifier and challenge (SPA)
const verifier=crypto.randomBytes(32).toString("base64url");
const challenge=crypto.createHash("sha256").update(verifier).digest("base64url");
// 2. Redirect to auth server
const authUrl="https://auth.example.com/authorize?"+new URLSearchParams({
  response_type:"code",client_id:"spa-client",redirect_uri:"https://app.example.com/callback",
  code_challenge:challenge,code_challenge_method:"S256",scope:"openid profile email",
});
window.location.href=authUrl;
// 3. Exchange code (callback)
const tokenResponse=await fetch("https://auth.example.com/oauth/token",{
  method:"POST",
  body:new URLSearchParams({grant_type:"authorization_code",code,code_verifier:verifier,redirect_uri:"https://app.example.com/callback",client_id:"spa-client"}),
})`,description:"PKCE flow for SPAs � code verifier ensures only the original app can exchange the code."},{title:"Gateway Token Validation",useCase:"Validate at gateway.",code:`async function oauthGatewayMiddleware(req,res,next){
  // Extract token from Authorization header or cookie
  let token=req.cookies?.access_token||req.headers.authorization?.replace("Bearer ","");
  if(!token) return res.redirect("/login");
  // Validate locally or introspect
  try{
    const decoded=jwt.verify(token,getPublicKey,{algorithms:["RS256"],issuer:"https://auth.example.com"});
    req.user={id:decoded.sub,scopes:decoded.scope?.split(" ")||[]};
    next();
  }catch(err){
    // Token invalid/expired � try refresh
    const refreshed=await refreshToken(req);
    if(refreshed) return;
    res.redirect("/login");
  }
}
function requireScope(scope){
  return(req,res,next)=>{
    if(!req.user?.scopes?.includes(scope)) return res.status(403).json({error:"Insufficient scope"});
    next();
  };
}
// Route: app.use("/api/orders",requireToken,requireScope("read:orders"),ordersRouter);`,description:"Gateway validates OAuth tokens and enforces scopes with middleware."},{title:"OAuth with Multiple Providers",useCase:"Federated OAuth.",code:`const PROVIDERS={
  google:{discoveryUrl:"https://accounts.google.com/.well-known/openid-configuration",clientId:process.env.GOOGLE_CLIENT_ID,scopes:["openid","profile","email"]},
  github:{authorizeUrl:"https://github.com/login/oauth/authorize",tokenUrl:"https://github.com/login/oauth/access_token",clientId:process.env.GH_CLIENT_ID},
};
async function oauthLogin(req,res){
  const provider=PROVIDERS[req.params.provider];
  const state=crypto.randomBytes(16).toString("hex");
  await redis.set("oauth:state:"+state,JSON.stringify({provider:req.params.provider,redirect:req.query.redirect}),"EX",300);
  const url=provider.authorizeUrl+"?"+new URLSearchParams({response_type:"code",client_id:provider.clientId,redirect_uri:"https://api.example.com/oauth/callback",scope:provider.scopes?.join(" "),state,});
  res.redirect(url);
}`,description:"Multiple OAuth providers with secure state parameter."},{question:"OAuth — How to ensure reliability?",options:["Automated testing and monitoring","Manual checks only","No testing","Reactive fixes"],answer:0,explanation:"Automated testing and monitoring ensure consistent reliability."},{question:"OAuth — What helps team collaboration?",options:["Shared workflows and visibility","Isolated work","No documentation","Siloed tools"],answer:0,explanation:"Shared workflows and visibility enable better collaboration."},{question:"OAuth — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"OAuth — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"OAuth — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"OAuth — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as ag_oauth};
