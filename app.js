const C = {
  hu: {
    "nav.mod": "Coffeein Mod", "nav.effects": "Effektek", "nav.tok": "CoffeeinTok", "nav.studio": "Live Studio", "nav.dismember": "Dismemberment", "nav.community": "Közösség",
    "hero.kicker": "GTA 5 · TikTok Live · Singleplayer",
    "hero.lead": "A nézők élőben belenyúlnak Los Santosba. Coffeein Mod a káosz a játékban — CoffeeinTok a híd a TikTok Live és a GTA között.",
    "hero.cta": "Nézd meg a modokat", "hero.discord": "Discord", "hero.youtube": "YouTube",

    "mod.kicker": "GTA 5 játékmod", "mod.title": "Coffeein Mod",
    "mod.lead": "ChaosModV alapra épülő, saját Coffeein réteg: ScriptHook V + .NET, webhook szerverek, TikTok / Twitch interakció. A stream nézői parancsokat küldenek — a város reagál.",
    "mod.tag": "Chaos × Live", "mod.name": "Mi ez?",
    "mod.body": "Nem egy sima trainer. A Coffeein Mod a Chaos Mod világát köti össze élő streammel: NPC invázió, járműkáosz, katasztrófák, szupererők, fegyverek — mind webhookon, a live ajándékaihoz és szavazásokhoz igazítva. Telepítővel érkezik, ScriptHookot is behúz, OBS health overlay-jel.",
    "mod.bullets": [
      "ScriptHookVDotNet 3 API, stabil singleplayer stack",
      "Fő webhook :6721 — parancsok, spawnok, effektek",
      "NewModes :6728 — módok, jármű/ped, natív hívások",
      "TikFinity bridge :8832 — élő ajándék → játék ugróhíd",
      "OBS böngésző overlay: életerő sáv (127.0.0.1:6721)",
      "FastTrainTracks.oiv — vonat sebességkorlát feloldás"
    ],

    "effects.kicker": "Katalógus", "effects.title": "Milyen modok / effektek vannak",
    "effects.lead": "Több mint száz webhook-parancs kategóriákra bontva. A live ajándékai ezeket indítják — a streamer állítja, mi kapcsolódik mihez.",
    "effects.cats": [
      ["NPC / ellenség", "Invázió, zombie, juggernaut, predátor, bohócok, Terminátor, Hulk, társ kutya, alien…"],
      ["Különleges támadás", "Ágyúzás, konvoj, légicsapás, Grieferjesus, Sanctus, kék Sultan."],
      ["Járműkáosz", "Random autó/motor, rakétás kocsi, robbanás, kick-flip, olajnyom, max upgrade."],
      ["Katasztrófa", "Tornádó, földrengés, fekete lyuk, Chibaku Tensei."],
      ["Világ / idő", "Időjárás (eső, mennydörgés, hó, Halloween), óra 0–23."],
      ["Játékos + erő", "HP, teleport, skydive, körözés, szuper ütés/futás/ugrás, lézer, pénz, fegyver."]
    ],
    "effects.examples.kicker": "Ízelítő", "effects.examples.title": "Példa effektek",
    "effects.chips": [
      "Inváziós csapat","Hóember kamikaze","Zombie","Juggernaut","Gyilkos bohócok","Hulk",
      "Légicsapás","Tornádó","Fekete lyuk","Rakétás autó","Olajnyomok","Szuper ütés",
      "Max körözés","Railgun","Skydive","Véletlen teleport"
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
    "dis.lead": "GTA 5 singleplayer gore / dismemberment — csak a futtatáshoz kellő fájlok (nem a teljes projekt).",
    "dis.tag": "ASI runtime", "dis.name": "Mi van a zipben",
    "dis.body": "Runtime pack: tuned ASI, SHVDN script + cfg, DLC .rpf, és SHVDN Nightly (asi + dll). Forráskód / solution nincs benne. Script Hook V (Blade) külön kell.",
    "dis.bullets": [
      "DismembermentASI.asi (tuned multi)",
      "scripts/Dismemberment.dll + toml/cfg",
      "mods/.../dismemberment/dlc.rpf",
      "SHVDN Nightly runtime (asi + dll + ini)",
      "Nincs forráskód / .sln / Build"
    ],
    "dis.download": "Runtime zip letöltése",
    "dis.hint": "Script Hook V (Blade) külön: dev-c.com. OpenIV: dlclist.xml-be tedd be a dismemberment DLC-t.",
    "dis.req.tag": "Setup", "dis.req.title": "Szükséges",
    "dis.reqs": [
      "Script Hook V (Alexander Blade) — GTA gyökér",
      "GTA 5 Legacy story mode",
      "OpenIV mods folder ajánlott"
    ],
    "dis.steps.kicker": "Telepítés",
    "dis.steps": [
      "Script Hook V a GTA V gyökérbe",
      "Zip tartalmát másold a GTA V gyökérbe",
      "OpenIV: dlclist.xml → dlcpacks:\\dismemberment\\",
      "Story mode indítás"
    ],
    "soon.kicker": "Release", "soon.title": "Letöltés később",
    "soon.body": "Most a leírás és a hangulat van kint. A telepítők és packok linkjei később kerülnek ide — addig Discordon a sneak peek.",

    "community.kicker": "Kapcsolat", "community.title": "Discord és YouTube",
    "community.body": "Build, bugreport, live setup — Discord. Showcase és telepítés — YouTube.",
    "community.discord": "Csatlakozás Discordra", "community.youtube": "YouTube csatorna",
    "footer.unofficial": "Nem hivatalos fanprojekt. A Grand Theft Auto / GTA a Take-Two / Rockstar védjegye. TikTok a ByteDance terméke. 18+ · csak singleplayer."
  },
  en: {
    "nav.mod": "Coffeein Mod", "nav.effects": "Effects", "nav.tok": "CoffeeinTok", "nav.studio": "Live Studio", "nav.dismember": "Dismemberment", "nav.community": "Community",
    "hero.kicker": "GTA 5 · TikTok Live · Singleplayer",
    "hero.lead": "Viewers reach into Los Santos live. Coffeein Mod is the chaos in-game — CoffeeinTok is the bridge from TikTok Live to GTA.",
    "hero.cta": "See the mods", "hero.discord": "Discord", "hero.youtube": "YouTube",

    "mod.kicker": "GTA 5 game mod", "mod.title": "Coffeein Mod",
    "mod.lead": "Built on ChaosModV with a Coffeein layer: ScriptHook V + .NET, webhook servers, TikTok / Twitch interaction. Viewers send commands — the city answers.",
    "mod.tag": "Chaos × Live", "mod.name": "What it is",
    "mod.body": "Not a plain trainer. Coffeein Mod wires Chaos Mod into the live stream: NPC invasions, vehicle chaos, disasters, superpowers, weapons — all via webhooks mapped to gifts and votes. Installer pulls ScriptHook, plus an OBS health overlay.",
    "mod.bullets": [
      "ScriptHookVDotNet 3 API, stable singleplayer stack",
      "Main webhook :6721 — commands, spawns, effects",
      "NewModes :6728 — modes, vehicle/ped, natives",
      "TikFinity bridge :8832 — live gift → game hop",
      "OBS browser overlay: health bar on 127.0.0.1:6721",
      "FastTrainTracks.oiv — unlock train speed cap"
    ],

    "effects.kicker": "Catalog", "effects.title": "What mods / effects you get",
    "effects.lead": "100+ webhook commands in categories. Live gifts fire them — the streamer maps what triggers what.",
    "effects.cats": [
      ["NPC / enemies", "Invasion, zombies, juggernaut, predator, clowns, Terminator, Hulk, doggo, alien…"],
      ["Special attacks", "Barrage, convoy, air raid, Grieferjesus, Sanctus, blue Sultan."],
      ["Vehicle chaos", "Random car/bike, rocket car, explode, kick-flip, oil leaks, max upgrade."],
      ["Disaster", "Tornado, earthquake, black hole, Chibaku Tensei."],
      ["World / time", "Weather (rain, thunder, snow, Halloween), clock 0–23."],
      ["Player + power", "HP, teleport, skydive, wanted, super punch/run/jump, laser, money, guns."]
    ],
    "effects.examples.kicker": "Samples", "effects.examples.title": "Example effects",
    "effects.chips": [
      "Invasion squad","Kamikaze snowmen","Zombie","Juggernaut","Killer clowns","Hulk",
      "Air raid","Tornado","Black hole","Rocket car","Oil leaks","Super punch",
      "Max wanted","Railgun","Skydive","Random teleport"
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
    "dis.lead": "GTA 5 singleplayer gore / dismemberment — runtime files only (not the full project).",
    "dis.tag": "ASI runtime", "dis.name": "What's in the zip",
    "dis.body": "Runtime pack: tuned ASI, SHVDN script + cfg, DLC .rpf, and SHVDN Nightly (asi + dll). No source / solution. Script Hook V (Blade) is separate.",
    "dis.bullets": [
      "DismembermentASI.asi (tuned multi)",
      "scripts/Dismemberment.dll + toml/cfg",
      "mods/.../dismemberment/dlc.rpf",
      "SHVDN Nightly runtime (asi + dll + ini)",
      "No source / .sln / Build"
    ],
    "dis.download": "Download runtime zip",
    "dis.hint": "Script Hook V (Blade) separate: dev-c.com. OpenIV: add dismemberment to dlclist.xml.",
    "dis.req.tag": "Setup", "dis.req.title": "Requirements",
    "dis.reqs": [
      "Script Hook V (Alexander Blade) — GTA root",
      "GTA 5 Legacy story mode",
      "OpenIV mods folder recommended"
    ],
    "dis.steps.kicker": "Install",
    "dis.steps": [
      "Script Hook V into GTA V root",
      "Copy zip contents into GTA V root",
      "OpenIV: dlclist.xml → add dlcpacks:\\dismemberment\\",
      "Launch story mode"
    ],
    "soon.kicker": "Release", "soon.title": "Downloads later",
    "soon.body": "Descriptions and vibe are live now. Installers and packs will land here later — Discord for sneak peeks until then.",

    "community.kicker": "Contact", "community.title": "Discord and YouTube",
    "community.body": "Builds, bugs, live setup — Discord. Showcase and install — YouTube.",
    "community.discord": "Join Discord", "community.youtube": "YouTube channel",
    "footer.unofficial": "Unofficial fan project. Grand Theft Auto / GTA are Take-Two / Rockstar trademarks. TikTok is a ByteDance product. 18+ · singleplayer only."
  }
};

const GALLERIES = {
  dis: [
    ["images/dis-user-1.jpg", "Dismemberment"],
  ],
  mod: [
    ["images/gta.png", "GTA / Coffeein"],
    ["images/hero.jpg", "Éjszakai hangulat"],
    ["images/espresso.jpg", "Brand"],
    ["images/coffeein.jpg", "Coffeein"]
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

  $("#effect-cats").innerHTML = t["effects.cats"].map(([title, body]) =>
    `<div class="glass feat"><h3 class="display">${title}</h3><p>${body}</p></div>`
  ).join("");
  $("#effect-chips").innerHTML = t["effects.chips"].map((c) => `<span class="chip">${c}</span>`).join("");

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
