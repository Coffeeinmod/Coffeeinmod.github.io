const C = {
  hu: {
    "nav.mod": "Coffeein Mod", "nav.modes": "Játékmódok", "nav.tok": "CoffeeinTok", "nav.studio": "Live Studio", "nav.dismember": "Dismemberment", "nav.community": "Közösség",
    "hero.kicker": "GTA V · élő közvetítés · singleplayer",
    "hero.lead": "Chaos, rámpás kihívás, vonatos túlélés és nézői támadások egy GTA V modcsomagban. A közönséged segíthet, akadályozhat, és váratlan fordulatokat hozhat az élő adásba.",
    "hero.cta": "Játékmódok megismerése", "hero.watch": "Működés közben", "hero.discord": "Discord", "hero.youtube": "YouTube",

    "mod.kicker": "Interaktív GTA V", "mod.title": "Coffeein Mod",
    "mod.lead": "A nézőid is beleszólnak a GTA V kalandodba.",
    "mod.tag": "Live × GTA", "mod.name": "Mi ez?",
    "mod.body": "A Coffeein Mod egy interaktív GTA V modcsomag, amely összeköti a játékot az élő közvetítés eseményeivel. A megfelelően beállított TikTok Live / TikFinity kapcsolaton keresztül a nézői események járműveket, ellenfeleket, segítségeket és különleges effekteket indíthatnak el a játékban. A csomag Twitch chates szavazást támogató komponenst is tartalmaz. Te játszol, a közönséged pedig alakítja a kihívást.",
    "mod.bullets": [
      "Chaos — váratlan effektek és nézői döntések",
      "KOTH / Ramp — juss fel, tartsd meg a csúcsot",
      "Train — érj célba a vonattal a chat ellen",
      "Nézői támadások és segítő események",
      "Kijelzők, ranglisták, OBS életerő-overlay",
      "TikTok / TikFinity + Twitch szavazás (külön beállítás)"
    ],

    "effects.kicker": "Három fő mód", "effects.title": "Játékmódok",
    "effects.lead": "Chaos, KOTH / Ramp és Train — plusz GTA-funkciók és nézői események, amiket te állítasz össze az adásodhoz.",
    "effects.cats": [
      ["Chaos", "Váratlan effektek, megváltozó játékszabályok és nézők által indított események. Alkalmazkodj ahhoz, amit Los Santos és a chatted éppen eléd dob. A következő fordulatot akár a saját nézőid is elindíthatják."],
      ["KOTH / Ramp", "Küzdd fel magad a rámpa tetejére, tartsd 10 másodpercig a célzónát. A közönség járművekkel és akadályokkal próbál visszalökni — a chatnek még van néhány tankja."],
      ["Train", "Vezesd végig a vonatot a kijelölt távon. A nézők akadályokkal és támadásokkal próbálnak megállítani — te a cél felé tartasz, ők döntik el, mi kerül a sínekre."]
    ],
    "effects.examples.kicker": "Extrák", "effects.examples.title": "Nézői támadások és GTA-funkciók",
    "effects.chips": [
      "Fegyveres támadók","Terminator / Predator / Hulk","Gyilkos bohócok","Juggernaut",
      "Unholy Army","Légitámadás","Tornádó / földrengés","Fekete lyuk",
      "Jármű spawn","Fegyverek / HP","Szuperugrás / futás","Időjárás / napszak",
      "Streamer–chat eredmény","Beküldő névfeliratok","OBS életerő-overlay"
    ],
    "how.kicker": "Interakció", "how.title": "Hogyan kapcsolódnak be a nézők?",
    "how.steps": [
      "Kiválasztod, milyen játékbeli események szerepeljenek az adásban.",
      "Az interakciós rendszerben hozzárendeled őket ajándékokhoz vagy chatparancsokhoz.",
      "Amikor megérkezik az esemény, a rendszer elküldi a játékbeli parancsot.",
      "A nézők a közvetítésben látják, milyen segítséget vagy akadályt indítottak el."
    ],
    "how.note": "Te állítod össze, mi segítsen és mi nehezítsen. A TikTok/TikFinity és a Twitch kapcsolat külön beállítást igényel — a telepítő önmagában nem köti össze a fiókokat.",
    "install.kicker": "Setup", "install.title": "Telepítés",
    "install.body": "A Coffeein Modhoz Windowsos telepítő tartozik: kiválasztod a GTA V mappáját, és felmásolhatod a szükséges összetevőket. A ScriptHook elemek külön választhatók. Telepítés előtt zárd be a játékot, utána állítsd be az interakciót, válassz módot, és próbáld ki az eseményeket.",
    "install.guides": [
      "Telepítés és első indítás",
      "TikTok / TikFinity események",
      "Twitch szavazás",
      "KOTH és Train indítása",
      "OBS-kijelzők és elrendezés"
    ],

        "tok.kicker": "Overlay app", "tok.title": "CoffeeinTok",
    "tok.lead": "Windows alkalmazás (TikTok Live Viewer): a live eseményeit figyeli, ajándékokat azonosít, és webhookkal belövi a Coffeein Modot. Overlayek OBS-be, kerék, célok, TTS, AI chat.",
    "tok.tag": "Live bridge", "tok.name": "A stream központja",
    "tok.body": "CoffeeinTok a védőréteg a streames munkaasztalodon: TikTok Live kapcsolat, ajándék-katalógus ID alapján, akciószabályok, pontok, kerék és célok. Az overlay szerver localhoston fut — gift alert, kerék, legenda, battle. A webhook csak biztonságos loopback portokra mehet (6721 Coffeein Mod, bridge, saját overlay).",
    "tok.bullets": [
      "Ajándék → akció (GTA / Chaos / KOTH / gomb)",
      "OBS overlayek: gift, kerék, eseménylegenda, battle",
      "TTS + AI chat beállítások",
      "Licenc / próba védett Setup-ban",
      "KOTH rámpa: jármű/tárgy hullámok, sebességboost",
      "YouTube zene / lokális lejátszás támogatás"
    ],
    "tok.features": [
      ["Ajándék motor","Gift ID elsődleges egyezés — Rose ≠ Rosa. Combo, pause, reconnect."],
      ["Overlay studio","Admin / editor / studio oldalak localhost:5050-en, tokennel védve."],
      ["Biztonság","Webhook allowlist, DPAPI titkok, HWID-kötött licenc a védett buildben."]
    ],

    
    "studio.kicker": "OBS × Live", "studio.title": "Live Studio Overlay",
    "studio.lead": "A CoffeeinTok Studio a live kép és az overlayek közös vászna: 9:16 telefonméret, HLS TikTok stream, rárétegezett widgetek. OBS böngészőforrásként megy — a nézők ajándékai látszanak a streamben, miközben a GTA reagál.",
    "studio.tag": "studio.html", "studio.name": "Egy vászon, sok réteg",
    "studio.body": "A Studio nem csak egy HTML oldal: a nyers TikTok live videót játsza, fölé pedig az overlay pack kerül. Gift alert, kerék, célok, battle, coin jar, chat, top listák, eseménylegenda — mind localhost overlay URL, OBS-be húzva.",
    "studio.bullets": [
      "9:16 Studio nézet (390×844) — telefonkeret a live-hoz",
      "HLS.js — TikTok stream lejátszás a Studio-ban",
      "OBS Browser Source: overlay URL-ek localhoston",
      "Eseménylegenda a live fölött (olvasható körvonalas szöveg)",
      "Ajándék → vizuális alert + GTA webhook egyszerre"
    ],
    "studio.overlays.kicker": "Overlay pack", "studio.overlays.title": "Mi mehet OBS-be",
    "studio.overlays": [
      ["Gift alert", "Ajándék felvillanás, combo, hang — a stream fő vizuálja."],
      ["Kerék + célok", "Wheel és goal overlay: a nézők pörgetnek / feltöltenek."],
      ["Battle / race", "Csapatverseny és race widget a live energájához."],
      ["Coin jar", "Fizikás érmeüveg (Matter.js) — ajándékok gyűlnek a jarba."],
      ["Top listák", "Top gifters, likers, points — ki viszi a streambet."],
      ["Chat + AI", "Chat overlay és AI válasz buborék a live mellett."]
    ],
    "studio.chips": [
      "gift-alert","wheel","goals","battle","race","coin-jar-pro",
      "overlay_legend","topgifters","toplikers","chat","ai-response","action-status",
      "queue-status","stats","youtube-music","tiktokobs-widgets"
    ],
    
    "dis.kicker": "Runtime pack", "dis.title": "Dismemberment",
    "dis.lead": "GTA 5 singleplayer gore / dismemberment — csak ami a működéshez kell (nem a teljes projekt).",
    "dis.tag": "ASI + script", "dis.name": "Mi van a zipben",
    "dis.body": "Csak a mod fájljai: tuned ASI, scripts (dll + cfg), DLC .rpf. SHVDN Nightly és Script Hook V külön (link lent). Forráskód nincs.",
    "dis.bullets": [
      "DismembermentASI.asi",
      "scripts/Dismemberment.dll + toml/cfg",
      "mods/.../dismemberment/dlc.rpf"
    ],
    "dis.download": "Zip letöltése",
    "dis.hint": "Külön kell: Script Hook V + SHVDN Nightly. OpenIV: dlclist.xml → dismemberment.",
    "dis.req.tag": "Setup", "dis.req.title": "Szükséges",
    "dis.reqs": [
      "Script Hook V (Alexander Blade)",
      "SHVDN Nightly",
      "GTA 5 Legacy story mode",
      "OpenIV mods folder ajánlott"
    ],
    "dis.steps.kicker": "Telepítés",
    "dis.steps": [
      "Script Hook V + SHVDN Nightly a GTA gyökérbe",
      "Zip tartalmát másold a GTA V gyökérbe",
      "OpenIV: dlclist.xml → dlcpacks:\\dismemberment\\",
      "Story mode indítás"
    ],
    "soon.kicker": "Release", "soon.title": "Letöltés később",
    "soon.body": "A Coffeein Mod telepítője és a részletes útmutatók hamarosan itt lesznek. Addig Discordon a sneak peek és a setup segítség.",

    "community.kicker": "Kapcsolat", "community.title": "Discord és YouTube",
    "community.body": "Build, bugreport, live setup — Discord. Showcase és telepítés — YouTube.",
    "community.discord": "Csatlakozás Discordra", "community.youtube": "YouTube csatorna",
    "footer.unofficial": "Nem hivatalos fanprojekt. A Grand Theft Auto / GTA a Take-Two / Rockstar védjegye. TikTok a ByteDance terméke. 18+ · csak singleplayer."
  },
  en: {
    "nav.mod": "Coffeein Mod", "nav.modes": "Game modes", "nav.tok": "CoffeeinTok", "nav.studio": "Live Studio", "nav.dismember": "Dismemberment", "nav.community": "Community",
    "hero.kicker": "GTA V · live stream · singleplayer",
    "hero.lead": "Chaos, ramp challenge, train survival, and viewer attacks in one GTA V mod pack. Your audience can help, hinder, and throw unexpected turns into the live show.",
    "hero.cta": "Explore the modes", "hero.watch": "Watch it run", "hero.discord": "Discord", "hero.youtube": "YouTube",

    "mod.kicker": "Interactive GTA V", "mod.title": "Coffeein Mod",
    "mod.lead": "Your viewers get a say in your GTA V run.",
    "mod.tag": "Live × GTA", "mod.name": "What it is",
    "mod.body": "Coffeein Mod is an interactive GTA V pack that ties the game to live-stream events. With TikTok Live / TikFinity set up, viewer events can spawn vehicles, enemies, helpers, and special effects in-game. The pack also includes a Twitch chat voting component. You play — the audience shapes the challenge.",
    "mod.bullets": [
      "Chaos — surprise effects and viewer choices",
      "KOTH / Ramp — climb and hold the peak",
      "Train — reach the goal against chat",
      "Viewer attacks and helper events",
      "HUDs, leaderboards, OBS health overlay",
      "TikTok / TikFinity + Twitch voting (separate setup)"
    ],

    "effects.kicker": "Three main modes", "effects.title": "Game modes",
    "effects.lead": "Chaos, KOTH / Ramp, and Train — plus GTA extras and viewer events you wire for your stream.",
    "effects.cats": [
      ["Chaos", "Surprise effects, shifting rules, and viewer-fired events. Adapt to whatever Los Santos and chat throw at you. The next twist might come from your own audience."],
      ["KOTH / Ramp", "Fight to the top of the ramp and hold the zone for 10 seconds. Viewers push you back with vehicles and obstacles — chat still has a few tanks left."],
      ["Train", "Drive the train the set distance while viewers drop obstacles and attacks on the tracks. You head for the goal — they decide what lands on the rails."]
    ],
    "effects.examples.kicker": "Extras", "effects.examples.title": "Viewer attacks & GTA extras",
    "effects.chips": [
      "Armed attackers","Terminator / Predator / Hulk","Killer clowns","Juggernaut",
      "Unholy Army","Air strike","Tornado / earthquake","Black hole",
      "Vehicle spawn","Weapons / HP","Super jump / run","Weather / time of day",
      "Streamer–chat score","Sender nameplates","OBS health overlay"
    ],
    "how.kicker": "Interaction", "how.title": "How do viewers join in?",
    "how.steps": [
      "Pick which in-game events belong in the stream.",
      "Map them in the interaction system to gifts or chat commands.",
      "When the event arrives, the system sends the in-game command.",
      "Viewers see on stream what help or obstacle they triggered."
    ],
    "how.note": "You decide what helps and what hurts. TikTok/TikFinity and Twitch need separate setup — the installer alone does not link streaming accounts.",
    "install.kicker": "Setup", "install.title": "Install",
    "install.body": "Coffeein Mod ships with a Windows installer: pick your GTA V folder and copy the required pieces. ScriptHook parts are optional in the installer. Close the game first, then set up interaction, pick a mode, and try the events.",
    "install.guides": [
      "Install and first launch",
      "TikTok / TikFinity events",
      "Twitch voting",
      "Starting KOTH and Train",
      "OBS overlays and layout"
    ],

        "tok.kicker": "Overlay app", "tok.title": "CoffeeinTok",
    "tok.lead": "Windows app (TikTok Live Viewer): watches the live, matches gifts, and fires Coffeein Mod over webhooks. Overlays for OBS, wheel, goals, TTS, AI chat.",
    "tok.tag": "Live bridge", "tok.name": "Stream control room",
    "tok.body": "CoffeeinTok is the desk layer: TikTok Live connection, gift catalog by ID, action rules, points, wheel and goals. Overlay server on localhost — gift alert, wheel, legend, battle. Webhooks only to safe loopback ports (6721 Coffeein Mod, bridge, self).",
    "tok.bullets": [
      "Gift → action (GTA / Chaos / KOTH / key)",
      "OBS overlays: gift, wheel, event legend, battle",
      "TTS + AI chat settings",
      "License / trial in the protected Setup",
      "KOTH ramp: vehicle/prop waves, speed boost",
      "YouTube music / local playback support"
    ],
    "tok.features": [
      ["Gift engine","Gift ID first — Rose ≠ Rosa. Combo, pause, reconnect."],
      ["Overlay studio","Admin / editor / studio on localhost:5050, token-gated."],
      ["Safety","Webhook allowlist, DPAPI secrets, HWID-bound license in protected builds."]
    ],

    
    "studio.kicker": "OBS × Live", "studio.title": "Live Studio Overlay",
    "studio.lead": "CoffeeinTok Studio is the shared canvas for the live feed and overlays: 9:16 phone frame, HLS TikTok stream, widgets stacked on top. Drop it into OBS as a browser source — gifts show on stream while GTA reacts.",
    "studio.tag": "studio.html", "studio.name": "One canvas, many layers",
    "studio.body": "Studio is more than a page: it plays the raw TikTok live video with the overlay pack on top. Gift alert, wheel, goals, battle, coin jar, chat, leaderboards, event legend — each a localhost overlay URL for OBS.",
    "studio.bullets": [
      "9:16 Studio view (390×844) — phone frame for the live",
      "HLS.js — TikTok stream playback inside Studio",
      "OBS Browser Source: overlay URLs on localhost",
      "Event legend over the live (outlined readable text)",
      "Gift → visual alert + GTA webhook together"
    ],
    "studio.overlays.kicker": "Overlay pack", "studio.overlays.title": "What goes into OBS",
    "studio.overlays": [
      ["Gift alert", "Gift pop, combo, sound — the main on-stream visual."],
      ["Wheel + goals", "Wheel and goal overlays: viewers spin / fill goals."],
      ["Battle / race", "Team battle and race widgets for live energy."],
      ["Coin jar", "Physics coin jar (Matter.js) — gifts fill the jar."],
      ["Leaderboards", "Top gifters, likers, points — who owns the stream."],
      ["Chat + AI", "Chat overlay and AI reply bubbles beside the live."]
    ],
    "studio.chips": [
      "gift-alert","wheel","goals","battle","race","coin-jar-pro",
      "overlay_legend","topgifters","toplikers","chat","ai-response","action-status",
      "queue-status","stats","youtube-music","tiktokobs-widgets"
    ],
    
    "dis.kicker": "Runtime pack", "dis.title": "Dismemberment",
    "dis.lead": "GTA 5 singleplayer gore / dismemberment — only files needed to run (not the full project).",
    "dis.tag": "ASI + script", "dis.name": "What's in the zip",
    "dis.body": "Mod files only: tuned ASI, scripts (dll + cfg), DLC .rpf. SHVDN Nightly and Script Hook V are separate (links below). No source.",
    "dis.bullets": [
      "DismembermentASI.asi",
      "scripts/Dismemberment.dll + toml/cfg",
      "mods/.../dismemberment/dlc.rpf"
    ],
    "dis.download": "Download zip",
    "dis.hint": "Also need: Script Hook V + SHVDN Nightly. OpenIV: add dismemberment to dlclist.xml.",
    "dis.req.tag": "Setup", "dis.req.title": "Requirements",
    "dis.reqs": [
      "Script Hook V (Alexander Blade)",
      "SHVDN Nightly",
      "GTA 5 Legacy story mode",
      "OpenIV mods folder recommended"
    ],
    "dis.steps.kicker": "Install",
    "dis.steps": [
      "Script Hook V + SHVDN Nightly into GTA root",
      "Copy zip contents into GTA V root",
      "OpenIV: dlclist.xml → add dlcpacks:\\dismemberment\\",
      "Launch story mode"
    ],
    "soon.kicker": "Release", "soon.title": "Downloads later",
    "soon.body": "The Coffeein Mod installer and full guides will land here soon. Until then — Discord for sneak peeks and setup help.",

    "community.kicker": "Contact", "community.title": "Discord and YouTube",
    "community.body": "Builds, bugs, live setup — Discord. Showcase and install — YouTube.",
    "community.discord": "Join Discord", "community.youtube": "YouTube channel",
    "footer.unofficial": "Unofficial fan project. Grand Theft Auto / GTA are Take-Two / Rockstar trademarks. TikTok is a ByteDance product. 18+ · singleplayer only."
  }
};

const MODE_PREVIEWS = [
  "images/mod-hud-night.jpg",
  "images/mod-koth.jpg",
  "images/mod-train-crash.jpg"
];

const GALLERIES = {
  dis: [
    ["images/dis-user-1.jpg", "Dismemberment"],
  ],
  mod: [
    ["images/mod-menu.jpg", "Coffeein Mod menü"],
    ["images/mod-koth.jpg", "KOTH / Ramp"],
    ["images/mod-train-crash.jpg", "Train mód"],
    ["images/mod-train-plane.jpg", "Train × chat"],
    ["images/mod-hud-config.jpg", "Életerő HUD"],
    ["images/mod-hud-night.jpg", "Streamer vs Chat"]
  ],
  tok: [
    ["images/ov-ugurtas.png", "Gift alert"],
    ["images/ov-tiktokobs.png", "TikTokOBS"],
    ["images/ov-topgifters.png", "Top támogatók"],
    ["images/coffeeintok-studio.png", "Admin"]
  ],
  studio: [
    ["images/ov-ugurtas.png", "Ugur Tas Alert"],
    ["images/ov-tiktokobs.png", "TikTokOBS Widget"],
    ["images/ov-topgifters.png", "Top Támogatók"],
    ["images/coffeeintok-studio.png", "Studio admin"]
  ]
};

let lang = localStorage.getItem("coffeein-lang") === "en" ? "en" : "hu";
const $ = (s) => document.querySelector(s);

function paint() {
  const t = C[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i]").forEach((el) => { el.textContent = t[el.dataset.i] || ""; });
  $("#hu").classList.toggle("on", lang === "hu");
  $("#en").classList.toggle("on", lang === "en");

  $("#mod-bullets").innerHTML = t["mod.bullets"].map((b) => `<li>${b}</li>`).join("");
  $("#tok-bullets").innerHTML = t["tok.bullets"].map((b) => `<li>${b}</li>`).join("");

  $("#effect-cats").innerHTML = t["effects.cats"].map(([title, body], i) =>
    `<article class="glass mode-card"><div class="mode-preview"><img src="${MODE_PREVIEWS[i] || MODE_PREVIEWS[0]}" alt="${title}" loading="lazy" /></div><div class="mode-body"><h3 class="display">${title}</h3><p>${body}</p></div></article>`
  ).join("");
  $("#effect-chips").innerHTML = t["effects.chips"].map((c) => `<span class="chip">${c}</span>`).join("");
  $("#how-steps").innerHTML = t["how.steps"].map((b) => `<li>${b}</li>`).join("");
  $("#install-guides").innerHTML = t["install.guides"].map((b) => `<li>${b}</li>`).join("");

  $("#tok-features").innerHTML = t["tok.features"].map(([title, body]) =>
    `<div class="glass feat"><h3 class="display">${title}</h3><p>${body}</p></div>`
  ).join("");

  $("#dis-bullets").innerHTML = t["dis.bullets"].map((b) => `<li>${b}</li>`).join("");
  $("#dis-reqs").innerHTML = t["dis.reqs"].map((b) => `<li>${b}</li>`).join("");
  $("#dis-steps").innerHTML = t["dis.steps"].map((b) => `<li>${b}</li>`).join("");
    $("#studio-bullets").innerHTML = t["studio.bullets"].map((b) => `<li>${b}</li>`).join("");
  $("#studio-overlays").innerHTML = t["studio.overlays"].map(([title, body]) =>
    `<div class="glass feat"><h3 class="display">${title}</h3><p>${body}</p></div>`
  ).join("");
  $("#studio-chips").innerHTML = t["studio.chips"].map((c) => `<span class="chip">${c}</span>`).join("");
    const shot = (src, alt, i) =>
    `<figure class="shot glass${i === 0 ? ' shot-hero' : ''}"><img src="${src}" alt="${alt}" loading="lazy" /><figcaption>${alt}</figcaption></figure>`;
  $("#dis-gallery").innerHTML = GALLERIES.dis.map(([src, alt], i) => shot(src, alt, i)).join("");
  $("#studio-gallery").innerHTML = GALLERIES.studio.map(([src, alt], i) => shot(src, alt, i)).join("");
  $("#mod-gallery").innerHTML = GALLERIES.mod.map(([src, alt], i) => shot(src, alt, i)).join("");
  $("#tok-gallery").innerHTML = GALLERIES.tok.map(([src, alt], i) => shot(src, alt, i)).join("");
}

$("#hu").onclick = () => { lang = "hu"; localStorage.setItem("coffeein-lang", lang); paint(); };
$("#en").onclick = () => { lang = "en"; localStorage.setItem("coffeein-lang", lang); paint(); };
$("#y").textContent = new Date().getFullYear();
paint();

(function heroParallax() {
  const bg = document.getElementById("hero-bg");
  if (!bg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let mx = 0, my = 0, sy = 0;
  const paintBg = () => {
    const x = mx * 12;
    const y = my * 8 + sy * 0.12;
    bg.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.1)`;
  };
  window.addEventListener("pointermove", (e) => {
    mx = (e.clientX / window.innerWidth) - 0.5;
    my = (e.clientY / window.innerHeight) - 0.5;
    paintBg();
  }, { passive: true });
  window.addEventListener("scroll", () => {
    sy = window.scrollY || 0;
    paintBg();
  }, { passive: true });
})();
