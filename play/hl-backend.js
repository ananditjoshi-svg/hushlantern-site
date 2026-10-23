/* ============================================================================
   Hushlantern production backend (hushlantern.com/play)
   Gives the game the same storage interface it had as a prototype
   (db.doc / db.collection / room.join / user.id) but backed by Supabase:
     • family sign-in with an emailed link (or play as a guest on this device)
     • cloud saves + multiplayer tables through checked database functions
     • live updates over Supabase Realtime, with polling as a safety net
     • nightly cases from static files published with the site (play/daily/)
   ============================================================================ */
(function(){
  var cfg = window.HL_CONFIG || {};
  var LS_GAME = "hushlantern-v3", LS_GUEST = "hl-guest", LS_OWNER = "hl-owner";
  function lsGet(k){ try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v){ try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
  // Progress saved on this device belongs to one account (or to guest play). If a different family's
  // session is already stored, drop the other family's progress before the game loads it.
  (function(){ try { var a = JSON.parse(lsGet("hl-auth") || "null"), u = a && (a.user || (a.currentSession && a.currentSession.user)); var owner = lsGet(LS_OWNER);
    if (u && u.id && owner && owner !== "guest" && owner !== u.id) { lsSet(LS_GAME, null); lsSet(LS_OWNER, u.id); } } catch (e) {} })();
  var hasSB = !!(window.supabase && window.supabase.createClient && cfg.supabaseUrl && cfg.supabaseAnonKey);
  var sb = hasSB ? window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "implicit", storageKey: "hl-auth" }
  }) : null;
  var SESSION = null, UID = null, freshLogin = /access_token=/.test(location.hash), linkError = /error_code=|error=/.test(location.hash) ? location.hash : "";
  var gateResolve, gateDone = new Promise(function(r){ gateResolve = r; });

  /* ---------- small helpers ---------- */
  function $(id){ return document.getElementById(id); }
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){ return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]; }); }
  function lang(){ try { var s = JSON.parse(localStorage.getItem(LS_GAME) || "{}"); if (s.acct && s.acct.lang) return s.acct.lang; } catch (e) {} var n = (navigator.language || "en").slice(0, 2); return ["en","es","fr","hi"].indexOf(n) >= 0 ? n : "en"; }
  var S = {
    en: { title:"Welcome, detective", sub:"Sign in to save your cases on every device and play with friends.", who:"Use a parent's or guardian's email. Players 13 and over can use their own.",
          email:"Email address", send:"Email me a sign-in link", sending:"Sending…", sent_t:"Check your email", sent:"We sent a sign-in link to {e}. Open it on this device to start playing.",
          again:"Use a different email", resend:"Send it again", guest:"Play as a guest", guest_note:"Guest progress stays on this device. Playing with friends needs an account.",
          bad:"Please enter a valid email address.", fail:"We couldn't send the email. Please try again in a minute.", expired:"That sign-in link has expired or was already used. Send a new one.",
          privacy:"We only use this email to sign you in and, for players under 13, as the parent's contact.", acct:"Account", signed_as:"Signed in as {e}", signout:"Sign out",
          guest_t:"You're playing as a guest", guest_up:"Sign in to save across devices and play with friends.", close:"Close", signin:"Sign in", offline:"Sign-in isn't available right now. You can play as a guest." },
    es: { title:"Bienvenido, detective", sub:"Inicia sesión para guardar tus casos en todos tus dispositivos y jugar con amigos.", who:"Usa el correo de un padre, madre o tutor. Desde los 13 años puedes usar el tuyo.",
          email:"Correo electrónico", send:"Envíame un enlace para entrar", sending:"Enviando…", sent_t:"Revisa tu correo", sent:"Enviamos un enlace a {e}. Ábrelo en este dispositivo para empezar.",
          again:"Usar otro correo", resend:"Enviar de nuevo", guest:"Jugar como invitado", guest_note:"El progreso de invitado se queda en este dispositivo. Para jugar con amigos necesitas una cuenta.",
          bad:"Escribe un correo válido.", fail:"No pudimos enviar el correo. Inténtalo de nuevo en un minuto.", expired:"Ese enlace caducó o ya se usó. Pide uno nuevo.",
          privacy:"Solo usamos este correo para que entres y, para menores de 13, como contacto del padre o madre.", acct:"Cuenta", signed_as:"Sesión iniciada como {e}", signout:"Cerrar sesión",
          guest_t:"Estás jugando como invitado", guest_up:"Inicia sesión para guardar en todos tus dispositivos y jugar con amigos.", close:"Cerrar", signin:"Iniciar sesión", offline:"El inicio de sesión no está disponible ahora. Puedes jugar como invitado." },
    fr: { title:"Bienvenue, détective", sub:"Connecte-toi pour garder tes affaires sur tous tes appareils et jouer avec tes amis.", who:"Utilise l'e-mail d'un parent ou tuteur. Dès 13 ans, tu peux utiliser le tien.",
          email:"Adresse e-mail", send:"M'envoyer un lien de connexion", sending:"Envoi…", sent_t:"Regarde tes e-mails", sent:"Nous avons envoyé un lien à {e}. Ouvre-le sur cet appareil pour commencer.",
          again:"Utiliser un autre e-mail", resend:"Renvoyer", guest:"Jouer en invité", guest_note:"La progression en invité reste sur cet appareil. Pour jouer avec des amis, il faut un compte.",
          bad:"Saisis une adresse e-mail valide.", fail:"Impossible d'envoyer l'e-mail. Réessaie dans une minute.", expired:"Ce lien a expiré ou a déjà servi. Demandes-en un nouveau.",
          privacy:"Cet e-mail sert uniquement à te connecter et, pour les moins de 13 ans, de contact parent.", acct:"Compte", signed_as:"Connecté en tant que {e}", signout:"Se déconnecter",
          guest_t:"Tu joues en invité", guest_up:"Connecte-toi pour garder ta progression partout et jouer avec tes amis.", close:"Fermer", signin:"Se connecter", offline:"La connexion n'est pas disponible pour le moment. Tu peux jouer en invité." },
    hi: { title:"स्वागत है, जासूस", sub:"हर डिवाइस पर अपने केस सेव करने और दोस्तों के साथ खेलने के लिए साइन इन करें।", who:"माता-पिता या अभिभावक का ईमेल इस्तेमाल करें। 13 साल और उससे बड़े खिलाड़ी अपना ईमेल इस्तेमाल कर सकते हैं।",
          email:"ईमेल पता", send:"मुझे साइन-इन लिंक भेजें", sending:"भेजा जा रहा है…", sent_t:"अपना ईमेल देखें", sent:"हमने {e} पर साइन-इन लिंक भेजा है। खेलना शुरू करने के लिए इसे इसी डिवाइस पर खोलें।",
          again:"दूसरा ईमेल इस्तेमाल करें", resend:"फिर से भेजें", guest:"मेहमान के रूप में खेलें", guest_note:"मेहमान की प्रगति इसी डिवाइस पर रहती है। दोस्तों के साथ खेलने के लिए खाता चाहिए।",
          bad:"कृपया सही ईमेल पता लिखें।", fail:"ईमेल नहीं भेज पाए। एक मिनट बाद फिर कोशिश करें।", expired:"यह लिंक पुराना हो गया है या पहले ही इस्तेमाल हो चुका है। नया लिंक मँगाएँ।",
          privacy:"हम यह ईमेल सिर्फ़ साइन इन के लिए और 13 साल से छोटे खिलाड़ियों के लिए माता-पिता के संपर्क के रूप में इस्तेमाल करते हैं।", acct:"खाता", signed_as:"{e} के रूप में साइन इन", signout:"साइन आउट",
          guest_t:"आप मेहमान के रूप में खेल रहे हैं", guest_up:"हर डिवाइस पर सेव करने और दोस्तों के साथ खेलने के लिए साइन इन करें।", close:"बंद करें", signin:"साइन इन करें", offline:"अभी साइन इन उपलब्ध नहीं है। आप मेहमान के रूप में खेल सकते हैं।" }
  };
  function tx(k, v){ var L = S[lang()] || S.en, s = L[k] || S.en[k] || k; if (v) s = s.replace(/\{(\w+)\}/g, function(m, n){ return v[n] != null ? v[n] : m; }); return s; }

  /* ---------- sign-in gate ---------- */
  function gateHTML(state, email, msg){
    if (state === "sent") return '<div class="hlg-card" role="dialog" aria-modal="true" aria-labelledby="hlg-h">' + lantern() +
      '<h1 id="hlg-h">' + esc(tx("sent_t")) + '</h1><p>' + esc(tx("sent", { e: email })) + '</p>' +
      '<div class="hlg-row"><button class="hlg-btn ghost" data-hlg="again">' + esc(tx("again")) + '</button><button class="hlg-btn ghost" data-hlg="resend">' + esc(tx("resend")) + '</button></div>' +
      '<p class="hlg-msg" role="status">' + esc(msg || "") + '</p></div>';
    return '<div class="hlg-card" role="dialog" aria-modal="true" aria-labelledby="hlg-h">' + lantern() +
      '<h1 id="hlg-h">' + esc(tx("title")) + '</h1><p>' + esc(tx("sub")) + '</p>' +
      (hasSB ? '<form id="hlg-form" novalidate><label for="hlg-email">' + esc(tx("email")) + '</label>' +
      '<input id="hlg-email" type="email" autocomplete="email" inputmode="email" required maxlength="254" value="' + esc(email || "") + '">' +
      '<p class="hlg-note">' + esc(tx("who")) + '</p>' +
      '<button class="hlg-btn" type="submit" id="hlg-send">' + esc(tx("send")) + '</button></form>' : '<p class="hlg-msg">' + esc(tx("offline")) + '</p>') +
      '<p class="hlg-msg" role="status">' + esc(msg || "") + '</p>' +
      '<div class="hlg-or"><span></span></div><button class="hlg-btn ghost" data-hlg="guest">' + esc(tx("guest")) + '</button>' +
      '<p class="hlg-note">' + esc(tx("guest_note")) + '</p><p class="hlg-note small">' + esc(tx("privacy")) + ' <a href="/privacy.html" target="_blank" rel="noopener">Privacy</a></p></div>';
  }
  function lantern(){ return '<svg class="hlg-l" width="44" height="44" viewBox="0 0 34 34" aria-hidden="true"><path d="M13 7 Q17 1 21 7" fill="none" stroke="#C9D6F2" stroke-width="1.8"/><rect x="11" y="7" width="12" height="3" rx="1" fill="#C9D6F2"/><path d="M11.5 10 L22.5 10 L24 27 L10 27Z" fill="none" stroke="#C9D6F2" stroke-width="1.8"/><path d="M17 13.5 Q20.5 18 17 23.5 Q13.5 18 17 13.5Z" fill="#E9A23B"/><rect x="9" y="27" width="16" height="3" rx="1" fill="#C9D6F2"/></svg>'; }
  var gate = { el: null, email: "", state: "form", cooldown: 0 };
  function showGate(msg){
    if (!gate.el) { gate.el = document.createElement("div"); gate.el.id = "hlgate"; document.body.appendChild(gate.el); }
    gate.el.innerHTML = gateHTML(gate.state, gate.email, msg);
    var f = $("hlg-form"); if (f) f.addEventListener("submit", function(ev){ ev.preventDefault(); sendLink($("hlg-email").value); });
    var i = $("hlg-email"); if (i && !gate.email) setTimeout(function(){ try { i.focus(); } catch (e) {} }, 50);
  }
  function hideGate(){ if (gate.el) { gate.el.remove(); gate.el = null; } }
  function sendLink(raw){
    var email = String(raw || "").trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { showGate(tx("bad")); return; }
    if (Date.now() < gate.cooldown) { showGate(tx("fail")); return; }
    gate.email = email;
    var b = $("hlg-send"); if (b) { b.disabled = true; b.textContent = tx("sending"); }
    sb.auth.signInWithOtp({ email: email, options: { emailRedirectTo: location.origin + location.pathname, shouldCreateUser: true } }).then(function(r){
      if (r && r.error) throw r.error;
      gate.cooldown = Date.now() + 60000; gate.state = "sent"; showGate("");
      if (window.HLA) HLA.track("signin_link_sent");
    }).catch(function(){ gate.state = "form"; showGate(tx("fail")); });
  }
  document.addEventListener("click", function(e){
    var a = e.target.closest && e.target.closest("[data-hlg]"); if (!a) return;
    var k = a.getAttribute("data-hlg");
    if (k === "guest") { lsSet(LS_GUEST, "1"); if (lsGet(LS_OWNER) && lsGet(LS_OWNER) !== "guest") lsSet(LS_GAME, null); lsSet(LS_OWNER, "guest"); if (window.HLA) HLA.track("guest_start"); hideGate(); gateResolve(null); }
    if (k === "again") { gate.state = "form"; showGate(""); }
    if (k === "resend") { gate.state = "form"; sendLink(gate.email); }
    if (k === "signout") signOut();
    if (k === "acct-close") closeAcct();
    if (k === "acct-signin") { closeAcct(); try { localStorage.removeItem(LS_GUEST); } catch (x) {} gate.state = "form"; showGate(""); }
  });

  /* ---------- account chip + panel ---------- */
  function addChip(){
    var bar = $("pchip"); if (!bar || $("hlacct")) return;
    var b = document.createElement("button"); b.id = "hlacct"; b.className = "hlacct"; b.type = "button";
    b.setAttribute("aria-haspopup", "dialog");
    b.innerHTML = '<span aria-hidden="true">' + (UID ? "☁" : "👤") + '</span> <span class="hlacct-t">' + esc(tx("acct")) + '</span>';
    b.addEventListener("click", openAcct);
    bar.parentNode.insertBefore(b, bar);
  }
  function openAcct(){
    closeAcct();
    var d = document.createElement("div"); d.id = "hlacctp"; d.className = "hlacctp";
    d.innerHTML = '<div class="hlg-card small" role="dialog" aria-modal="true" aria-labelledby="hla-h">' + (UID
      ? '<h2 id="hla-h">' + esc(tx("acct")) + '</h2><p>' + esc(tx("signed_as", { e: SESSION && SESSION.user ? SESSION.user.email : "" })) + '</p><div class="hlg-row"><button class="hlg-btn ghost" data-hlg="acct-close">' + esc(tx("close")) + '</button><button class="hlg-btn" data-hlg="signout">' + esc(tx("signout")) + '</button></div>'
      : '<h2 id="hla-h">' + esc(tx("guest_t")) + '</h2><p>' + esc(tx("guest_up")) + '</p><div class="hlg-row"><button class="hlg-btn ghost" data-hlg="acct-close">' + esc(tx("close")) + '</button>' + (hasSB ? '<button class="hlg-btn" data-hlg="acct-signin">' + esc(tx("signin")) + '</button>' : "") + '</div>') + '</div>';
    d.addEventListener("click", function(e){ if (e.target === d) closeAcct(); });
    document.body.appendChild(d);
  }
  function closeAcct(){ var d = $("hlacctp"); if (d) d.remove(); }
  function signOut(){
    if (window.HLA) { HLA.track("sign_out"); HLA.flush(true); }
    var done = function(){ lsSet(LS_GAME, null); lsSet(LS_GUEST, null); lsSet(LS_OWNER, null); location.replace(location.pathname); };
    if (sb) sb.auth.signOut().then(done, done); else done();
  }

  /* ---------- boot: decide signed-in / guest / show gate ---------- */
  function boot(){
    var start = sb ? sb.auth.getSession().then(function(r){ return r && r.data ? r.data.session : null; }).catch(function(){ return null; }) : Promise.resolve(null);
    start.then(function(s){
      if (s && s.user) {
        SESSION = s; UID = s.user.id;
        if (freshLogin && window.HLA) {
          var created = Date.parse(s.user.created_at || 0) || 0;
          HLA.track(Date.now() - created < 15 * 60000 ? "sign_up" : "sign_in");
          HLA.track("sign_in_any");
        }
        if (freshLogin || linkError) history.replaceState(null, "", location.pathname + location.search);
        lsSet(LS_GUEST, null);
        var owner = lsGet(LS_OWNER);
        if (owner && owner !== "guest" && owner !== UID) { lsSet(LS_GAME, null); lsSet(LS_OWNER, UID); location.reload(); return; }
        lsSet(LS_OWNER, UID);   // guest progress on this device carries over into the new account
        gateResolve(s);
      } else {
        var guest = false; try { guest = localStorage.getItem(LS_GUEST) === "1"; } catch (e) {}
        if (linkError) { history.replaceState(null, "", location.pathname + location.search); showGate(tx("expired")); }
        else if (guest) { if (lsGet(LS_OWNER) && lsGet(LS_OWNER) !== "guest") { lsSet(LS_GAME, null); } lsSet(LS_OWNER, "guest"); gateResolve(null); }
        else showGate("");
      }
    });
    if (sb) sb.auth.onAuthStateChange(function(ev, s){
      if (ev === "TOKEN_REFRESHED" && s) SESSION = s;
      if (ev === "SIGNED_OUT" && UID) { UID = null; SESSION = null; }
    });
  }
  gateDone.then(function(){ addChip(); var mo = new MutationObserver(function(){ addChip(); prefillParent(); }); mo.observe(document.body, { childList: true, subtree: true }); });

  // The onboarding "grown-up" step asks for the parent's email: fill it from the signed-in account.
  function prefillParent(){
    if (!SESSION || !SESSION.user || !SESSION.user.email) return;
    var onb = $("onb"); if (!onb || onb.hidden) return;
    onb.querySelectorAll('input[type="email"]').forEach(function(i){ if (!i.value && !i.dataset.hlFilled) { i.value = SESSION.user.email; i.dataset.hlFilled = "1"; i.dispatchEvent(new Event("input", { bubbles: true })); } });
  }

  /* ---------- storage adapter: db / room / user ---------- */
  function rpc(name, args){
    if (!sb) return Promise.reject(new Error("offline"));
    return sb.rpc(name, args).then(function(r){ if (r.error) throw r.error; return r.data; });
  }
  function snapDoc(path, data){ return { id: path.split("/").pop(), exists: data != null, data: function(){ return data; }, metadata: {} }; }
  var WATCH = [], CH = {};
  function codeOf(path){ var m = /^tables\/([A-Z]{4})(\/|$)/.exec(path); return m ? m[1] : null; }
  function chan(code){
    if (!sb || !UID) return null;
    if (CH[code]) return CH[code];
    var ch = sb.channel("hl-t-" + code, { config: { presence: { key: UID }, broadcast: { self: false } } });
    var o = { ch: ch, onPres: [], joined: null, users: 0 };
    ch.on("presence", { event: "sync" }, function(){ o.onPres.forEach(function(f){ try { f(); } catch (e) {} }); })
      .on("broadcast", { event: "chg" }, function(m){ var p = m && m.payload && m.payload.p; refreshWatch(function(w){ return w.path.indexOf("tables/" + code) === 0; }); });
    o.joined = new Promise(function(res){ ch.subscribe(function(st){ if (st === "SUBSCRIBED") res(true); if (st === "CHANNEL_ERROR" || st === "TIMED_OUT" || st === "CLOSED") res(false); }); });
    CH[code] = o; return o;
  }
  function ping(path){ var c = codeOf(path); if (!c) return; var o = chan(c); if (!o) return; o.joined.then(function(){ try { o.ch.send({ type: "broadcast", event: "chg", payload: { p: path } }); } catch (e) {} }); }
  function refreshWatch(pred){ WATCH.forEach(function(w){ if (!pred || pred(w)) w.refresh(); }); }
  setInterval(function(){ if (document.visibilityState === "visible") refreshWatch(function(w){ return w.live; }); }, 4000);
  setInterval(function(){ if (document.visibilityState === "visible") refreshWatch(function(w){ return !w.live; }); }, 15 * 60000);

  // nightly cases: static files published next to the game (play/daily/index.json + <id>.json)
  var DAILY_CACHE = {};
  function loadDaily(){
    return fetch("daily/index.json", { cache: "no-cache" }).then(function(r){ return r.ok ? r.json() : { ids: [] }; }).then(function(ix){
      var ids = (ix && Array.isArray(ix.ids) ? ix.ids : []).filter(function(id){ return /^\d{4}-\d{2}-\d{2}\.(junior|detective)$/.test(id); }).slice(-30);
      return Promise.all(ids.map(function(id){
        if (DAILY_CACHE[id]) return [id, DAILY_CACHE[id]];
        return fetch("daily/" + id + ".json").then(function(r){ return r.ok ? r.json() : null; }).then(function(d){ if (d) DAILY_CACHE[id] = d; return [id, d]; }).catch(function(){ return [id, null]; });
      }));
    }).then(function(rows){ return rows.filter(function(r){ return r[1]; }).map(function(r){ return { id: r[0], data: r[1] }; }); }).catch(function(){ return []; });
  }

  function collection(path){
    return {
      path: path,
      doc: function(id){ return doc(path + "/" + id); },
      onSnapshot: function(next, err){
        var prev = {}, alive = true;
        var w = { path: path, live: !!codeOf(path), refresh: function(){
          var p = path === "daily" ? loadDaily() : rpc("doc_list", { prefix: path }).then(function(rows){ return (rows || []).map(function(r){ return { id: r.id, data: r.data }; }); });
          p.then(function(rows){
            if (!alive) return;
            var cur = {}, changes = [], docs = rows.map(function(r){ var s = JSON.stringify(r.data); cur[r.id] = s; var d = snapDoc(path + "/" + r.id, r.data);
              if (!(r.id in prev)) changes.push({ type: "added", doc: d }); else if (prev[r.id] !== s) changes.push({ type: "modified", doc: d }); return d; });
            Object.keys(prev).forEach(function(id){ if (!(id in cur)) changes.push({ type: "removed", doc: snapDoc(path + "/" + id, null) }); });
            var first = w.first !== false; w.first = false;
            if (!first && !changes.length) return;
            prev = cur;
            next({ docs: docs, size: docs.length, empty: !docs.length, docChanges: function(){ return changes; }, metadata: {} });
          }).catch(function(e){ if (alive && err) err(e); });
        } };
        WATCH.push(w);
        var c = codeOf(path); if (c) chan(c);
        w.refresh();
        return function(){ alive = false; WATCH = WATCH.filter(function(x){ return x !== w; }); };
      }
    };
  }
  function doc(path){
    return {
      id: path.split("/").pop(), path: path,
      get: function(){ return rpc("doc_get", { p: path }).then(function(d){ return snapDoc(path, d); }); },
      set: function(data){ return rpc("doc_set", { p: path, d: data }).then(function(){ ping(path); }); },
      collection: function(c){ return collection(path + "/" + c); },
      onSnapshot: function(next, err){
        var alive = true, last;
        var w = { path: path, live: !!codeOf(path), refresh: function(){ rpc("doc_get", { p: path }).then(function(d){ var s = JSON.stringify(d); if (!alive || s === last) return; last = s; next(snapDoc(path, d)); }).catch(function(e){ if (alive && err) err(e); }); } };
        WATCH.push(w); w.refresh();
        return function(){ alive = false; WATCH = WATCH.filter(function(x){ return x !== w; }); };
      }
    };
  }
  var db = { doc: doc, collection: collection };

  var room = {
    join: function(name){
      var m = /^t-([a-z]{4})$/i.exec(name || ""); if (!m || !UID) return Promise.reject(new Error("no_room"));
      var o = chan(m[1].toUpperCase());
      return o.joined.then(function(ok){
        if (!ok) throw new Error("room_offline");
        function peers(){
          var st = o.ch.presenceState(), out = [];
          Object.keys(st).forEach(function(k){ var metas = st[k] || []; var meta = metas[metas.length - 1] || {}; out.push({ peer: k, id: k, kind: "viewer", isMe: k === UID, presence: meta }); });
          return out;
        }
        return {
          name: name,
          presence: function(p){ return o.ch.track(p || {}).then(function(){}); },
          onPeers: function(h){ var f = function(){ h({ peers: peers(), joined: [], left: [], updated: [] }); }; o.onPres.push(f); setTimeout(f, 0); return function(){ o.onPres = o.onPres.filter(function(x){ return x !== f; }); }; },
          leave: function(){ return o.ch.untrack().then(function(){ return sb.removeChannel(o.ch); }).then(function(){ delete CH[m[1].toUpperCase()]; }); }
        };
      });
    }
  };
  var user = { id: function(){ return Promise.resolve(UID); }, profiles: function(){ return Promise.resolve({}); } };

  // The game asks for these at start-up; we answer once the player has signed in or chosen guest play.
  window.claude = { use: function(n){ return gateDone.then(function(){ return n === "db" ? db : n === "room" ? (UID ? room : null) : n === "user" ? user : null; }); } };
  window.HLB = {
    ready: gateDone, client: sb,
    uid: function(){ return UID; }, email: function(){ return SESSION && SESSION.user ? SESSION.user.email : null; },
    token: function(){ return SESSION ? SESSION.access_token : null; },
    rpc: rpc, signOut: signOut, _gate: showGate
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  // A sign-in link opened in a tab that already shows the game only changes the #fragment: reload to pick it up.
  addEventListener("hashchange", function(){ if (/access_token=|error_code=/.test(location.hash)) location.reload(); });
})();
