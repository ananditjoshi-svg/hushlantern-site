/* Hushlantern analytics: first-party, cookie-free.
   - A random visit ID lives in sessionStorage and disappears when the tab closes (no cookies,
     nothing that follows anyone across sites, no IP addresses stored).
   - Time is counted only while the page is visible, sent in small batches.
   - Events go to our own Supabase (public.log_events), which visitors can add to but never read. */
(function(){
  var cfg = window.HL_CONFIG || {};
  var ENDPOINT = cfg.supabaseUrl ? cfg.supabaseUrl.replace(/\/$/, "") + "/rest/v1/rpc/log_events" : "";
  var Q = [], ctxFn = null, tokenFn = null, app = "site", lastTick = 0, visibleMs = 0, timer = null, started = false, vis = true;

  function uuid(){
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    var b = new Uint8Array(16); (window.crypto || {}).getRandomValues ? crypto.getRandomValues(b) : b.forEach(function(_, i){ b[i] = Math.random() * 256 | 0; });
    b[6] = b[6] & 15 | 64; b[8] = b[8] & 63 | 128;
    var h = Array.prototype.map.call(b, function(x){ return (x + 256).toString(16).slice(1); }).join("");
    return h.slice(0,8)+"-"+h.slice(8,12)+"-"+h.slice(12,16)+"-"+h.slice(16,20)+"-"+h.slice(20);
  }
  var SID;
  try { SID = sessionStorage.getItem("hl-sid"); if (!SID) { SID = uuid(); sessionStorage.setItem("hl-sid", SID); } } catch (e) { SID = uuid(); }

  function device(){
    var touch = matchMedia && matchMedia("(pointer:coarse)").matches, w = Math.min(screen.width || innerWidth, screen.height || innerHeight);
    return touch ? (w < 600 ? "phone" : "tablet") : "desktop";
  }
  function refHost(){
    try { var r = document.referrer ? new URL(document.referrer).hostname : ""; return r && r !== location.hostname ? r.replace(/^www\./, "") : ""; } catch (e) { return ""; }
  }
  function base(kind){
    var c = {};
    try { c = ctxFn ? (ctxFn() || {}) : {}; } catch (e) {}
    var e = { app: app, kind: kind, session_id: SID, page: location.pathname.slice(0, 120), device: device(), lang: (c.lang || document.documentElement.lang || "en").slice(0, 8) };
    if (c.profile_ref) e.profile_ref = String(c.profile_ref).slice(0, 40);
    if (c.age_band) e.age_band = c.age_band;
    if (c.region) e.region = String(c.region).slice(0, 8);
    return e;
  }
  function track(kind, props, extra){
    if (!ENDPOINT) return;
    var e = base(kind);
    if (props) e.props = props;
    if (extra) for (var k in extra) e[k] = extra[k];
    Q.push(e);
    if (Q.length >= 40) flush(false);
  }
  function tick(){
    var now = Date.now();
    if (vis && lastTick) visibleMs += now - lastTick;
    lastTick = now;
  }
  function pushTime(){
    tick();
    var ms = Math.min(Math.round(visibleMs), 3600000);
    if (ms >= 1000) { track("time", null, { dur_ms: ms }); visibleMs = 0; }
  }
  function flush(leaving){
    if (!ENDPOINT || !Q.length) return;
    var batch = Q.splice(0, 50), headers = { "apikey": cfg.supabaseAnonKey, "Content-Type": "application/json" };
    var tok = null; try { tok = tokenFn ? tokenFn() : null; } catch (e) {}
    if (tok) headers.Authorization = "Bearer " + tok;
    else if (/^eyJ/.test(cfg.supabaseAnonKey || "")) headers.Authorization = "Bearer " + cfg.supabaseAnonKey;
    try {
      fetch(ENDPOINT, { method: "POST", headers: headers, body: JSON.stringify({ batch: batch }), keepalive: !!leaving, credentials: "omit" })
        .catch(function(){ if (!leaving) Q = batch.concat(Q).slice(-200); });
    } catch (e) {}
  }
  function start(opts){
    if (started) return; started = true;
    opts = opts || {};
    app = opts.app || "site"; ctxFn = opts.context || null; tokenFn = opts.token || null;
    lastTick = Date.now(); vis = document.visibilityState !== "hidden";
    if (opts.pageView !== false) track("page_view", null, { ref: refHost() });
    timer = setInterval(function(){ pushTime(); flush(false); }, 20000);
    document.addEventListener("visibilitychange", function(){
      tick(); vis = document.visibilityState !== "hidden";
      if (!vis) { pushTime(); flush(true); }
    });
    addEventListener("pagehide", function(){ pushTime(); vis = false; flush(true); });
  }
  window.HLA = { start: start, track: track, flush: flush, sessionId: SID, _queue: Q };
  // <script src="hl-analytics.js" data-autostart="site"> starts website tracking on its own
  var me = document.currentScript; if (me && me.getAttribute("data-autostart")) start({ app: me.getAttribute("data-autostart") });
})();
