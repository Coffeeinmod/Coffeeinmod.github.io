(function () {
  var KEY = "coffeein-dl-gate";
  var T = {
    hu: { text: "A letöltéshez iratkozz fel YouTube-on és csatlakozz a Discordhoz (mindkét gombra kattints).",
          yt: "Feliratkozás YouTube-on", dc: "Csatlakozás Discordhoz",
          locked: "🔒 Zárolva", status0: "Még hiányzik: ", ok: "✅ Köszönjük! A letöltések elérhetők.", qryt: "Olvasd be a YouTube-csatornához", qrdc: "Olvasd be a Discordhoz" },
    en: { text: "To download, subscribe on YouTube and join the Discord (click both buttons).",
          yt: "Subscribe on YouTube", dc: "Join Discord",
          locked: "🔒 Locked", status0: "Still missing: ", ok: "✅ Thanks! Downloads are unlocked.", qryt: "Scan for the YouTube channel", qrdc: "Scan to join the Discord" }
  };
  function st() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
  function lg() { return localStorage.getItem("coffeein-lang") === "en" ? "en" : "hu"; }
  function render() {
    var s = st(), t = T[lg()], open = s.yt && s.dc;
    document.querySelectorAll("[data-gate]").forEach(function (el) {
      var k = el.getAttribute("data-gate");
      if (k === "status") {
        var miss = []; if (!s.yt) miss.push("YouTube"); if (!s.dc) miss.push("Discord");
        el.textContent = open ? t.ok : t.status0 + miss.join(", ");
      } else el.textContent = t[k];
    });
    document.getElementById("gate-yt").classList.toggle("done", !!s.yt);
    document.getElementById("gate-dc").classList.toggle("done", !!s.dc);
    document.querySelectorAll(".gated-dl").forEach(function (a) {
      if (!a.dataset.href) a.dataset.href = a.getAttribute("href");
      a.classList.toggle("locked", !open);
      a.setAttribute("aria-disabled", open ? "false" : "true");
      if (open) { a.setAttribute("href", a.dataset.href); a.removeAttribute("title"); }
      else { a.removeAttribute("href"); a.title = t.text; }
      if (!open && !a.dataset.lockedLabel) { a.dataset.lockedLabel = "1"; }
      a.setAttribute("data-lock", open ? "" : t.locked);
    });
  }
  function mark(k) { var s = st(); s[k] = true; save(s); render(); }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".gated-dl.locked");
    if (a) { e.preventDefault(); var g = document.getElementById("dl-gate"); g && g.scrollIntoView({ behavior: "smooth", block: "center" }); }
  }, true);
  document.getElementById("gate-yt").addEventListener("click", function () { mark("yt"); });
  document.getElementById("gate-dc").addEventListener("click", function () { mark("dc"); });
  ["hu", "en"].forEach(function (id) { var b = document.getElementById(id); b && b.addEventListener("click", function () { setTimeout(render, 0); }); });
  render();
})();
