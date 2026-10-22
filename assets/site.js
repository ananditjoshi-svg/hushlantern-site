/* Hushlantern Games — waitlist form + play link */
(function(){
  var cfg = window.HL_CONFIG || {};
  var KEY = "hl-waitlist-joined";

  // When the game goes live, hero buttons marked data-play become "Play free now".
  if (cfg.playUrl) {
    document.querySelectorAll("[data-play]").forEach(function(a){ a.href = cfg.playUrl; a.textContent = "Play free now"; });
  }

  var form = document.getElementById("wl-form");
  if (!form) return;
  var msg = document.getElementById("wl-msg"), btn = document.getElementById("wl-submit"), email = document.getElementById("wl-email");

  function say(text, kind){ msg.textContent = text; msg.className = "msg" + (kind ? " " + kind : ""); }
  function done(){
    say("You're on the list. We'll email you once, at launch.", "ok");
    btn.textContent = "You're on the list";
    btn.disabled = true;
    try { localStorage.setItem(KEY, "1"); } catch (e) {}
  }
  try { if (localStorage.getItem(KEY) === "1") { btn.textContent = "You're on the list"; say("You've already joined from this browser. Thank you!", "ok"); } } catch (e) {}

  form.addEventListener("submit", function(ev){
    ev.preventDefault();
    var value = (email.value || "").trim();
    var consent = document.getElementById("wl-consent").checked;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value) || value.length > 254) { say("Please enter a valid email address.", "err"); email.focus(); return; }
    if (!consent) { say("Please confirm you're 18 or older and agree to the privacy notice.", "err"); return; }
    if (form.company && form.company.value) { done(); return; }   // bot filled the hidden field: pretend success, store nothing

    if (!cfg.supabaseUrl || !cfg.supabaseAnonKey) {
      say("The waitlist opens very soon. In the meantime, write to hello@hushlantern.com and we'll add you.", "err");
      return;
    }
    var ages = Array.prototype.map.call(form.querySelectorAll('input[name="ages"]:checked'), function(i){ return i.value; });
    var body = {
      email: value.toLowerCase(),
      ages: ages.length ? ages : null,
      region: form.region.value,
      lang: (document.documentElement.lang || "en").slice(0, 5),
      consent: true
    };
    btn.disabled = true; btn.textContent = "Joining…"; say("");
    fetch(cfg.supabaseUrl.replace(/\/$/, "") + "/rest/v1/waitlist", {
      method: "POST",
      headers: {
        "apikey": cfg.supabaseAnonKey,
        "Authorization": "Bearer " + cfg.supabaseAnonKey,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(body)
    }).then(function(r){
      // 201 = added; 409 = already on the list (same friendly answer, so the list can't be probed)
      if (r.status === 201 || r.status === 409) { done(); return; }
      throw new Error("status " + r.status);
    }).catch(function(){
      btn.disabled = false; btn.textContent = "Join the waitlist";
      say("Something went wrong. Please try again, or email hello@hushlantern.com.", "err");
    });
  });
})();
