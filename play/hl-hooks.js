/* Hushlantern: game analytics + consent hooks. Loaded after the game.
   Records what we need to run and improve the game: sign-ins, sessions and time played,
   which cases are opened and solved, wrong guesses and hints. Players are identified only by a
   random profile id and an age band, never by nickname. */
(function(){
  if (!window.HLA || !window.HLB) return;
  function band(a){ return a < 11 ? "8-10" : a < 14 ? "11-13" : a < 18 ? "14-17" : "18+"; }
  function prof(){ try { return typeof P === "function" ? P() : null; } catch (e) { return null; } }
  HLA.start({
    app: "game", pageView: false,
    token: function(){ return HLB.token(); },
    context: function(){
      var p = prof(), c = { lang: typeof LANG === "string" ? LANG : "en" };
      if (p) { c.profile_ref = p.id; try { c.age_band = band(ageOf(p)); } catch (e) {} c.region = p.region; }
      return c;
    }
  });
  HLB.ready.then(function(){ HLA.track("game_open", { signed_in: !!HLB.uid() }, { ref: (function(){ try { var r = new URL(document.referrer).hostname; return r !== location.hostname ? r : ""; } catch (e) { return ""; } })() }); });

  var opened = {};
  function where(){
    try { var g = G(), c = C(); return { world: g.isDaily ? "nightly" : g.id, case: c.id, mode: A.mode }; } catch (e) { return {}; }
  }
  function wrap(name, fn){
    var orig = window[name]; if (typeof orig !== "function") return;
    window[name] = fn(orig);
  }

  wrap("openCase", function(orig){ return function(j, first){
    var r = orig.apply(this, arguments);
    try { var w = where(); if (w.case) { opened[w.world + "/" + w.case] = opened[w.world + "/" + w.case] || Date.now(); HLA.track("case_open", w); } } catch (e) {}
    return r;
  }; });

  wrap("accuse", function(orig){ return function(){
    var before = null, w = where();
    try { var st = cs(A.ci); before = { solved: !!st.solved, attempts: st.attempts || 0, hints: st.hints || 0 }; } catch (e) {}
    var r = orig.apply(this, arguments);
    setTimeout(function(){
      try {
        var st = cs(A.ci), key = w.world + "/" + w.case;
        if (before && !before.solved && st.solved) {
          HLA.track("case_solved", Object.assign({}, w, { attempts: st.attempts || 0, hints: st.hints || 0, secs: opened[key] ? Math.round((Date.now() - opened[key]) / 1000) : null }));
          delete opened[key];
        } else if (before && !st.solved) HLA.track("wrong_accuse", w);
      } catch (e) {}
    }, 0);
    return r;
  }; });

  wrap("createProfile", function(orig){ return async function(){
    var had = {}; try { STORE.acct.profiles.forEach(function(p){ had[p.id] = 1; }); } catch (e) {}
    var r = await orig.apply(this, arguments);
    try {
      var p = STORE.acct.profiles.filter(function(x){ return !had[x.id]; })[0];
      if (p) {
        HLA.track("profile_created", { managed: !!p.managed }, { profile_ref: p.id, age_band: band(ageOf(p)), region: p.region });
        if (p.managed && HLB.uid()) HLB.rpc("record_consent", { profile_ref: p.id, method: "signed_in_parent" }).catch(function(){});
      }
    } catch (e) {}
    return r;
  }; });

  wrap("joinTable", function(orig){ return async function(code, genre, mode){
    HLA.track("mp_join", { mode: mode, world: genre });
    return orig.apply(this, arguments);
  }; });

  document.addEventListener("click", function(e){
    var t = e.target.closest && e.target.closest("#hintBtn,[data-act='daily'],#musicBtn");
    if (!t) return;
    if (t.id === "hintBtn") HLA.track("hint", where());
    else if (t.id === "musicBtn") HLA.track("music_toggle");
    else HLA.track("daily_open");
  }, true);
})();
