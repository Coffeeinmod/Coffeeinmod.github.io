export type Lang = "hu" | "en";

export const SOCIALS = {
  discord: "https://discord.gg/BYpNKz6KP",
  youtube: "https://www.youtube.com/@c0ffeein",
} as const;

export const copy = {
  hu: {
    brand: "CoffeeinMod",
    nav: {
      mods: "Modok",
      install: "Telepítés",
      download: "Letöltés",
      community: "Közösség",
    },
    hero: {
      kicker: "GTA 5 · PC · Singleplayer",
      title: "COFFEEINMOD",
      lead: "Fekete éjszaka. Narancs neon. Los Santos, ahogy te akarod — egy kávé, és a város a tiéd.",
      cta: "Letöltés hamarosan",
      discord: "Discord",
      youtube: "YouTube",
    },
    mods: {
      kicker: "A két projekt",
      title: "A modok",
      lead: "Egy márka. Két GTA 5 élmény. ScriptHook V-re épülnek, natív menüvel, tiszta konfiggal.",
      coffeein: {
        tag: "Zászlóshajó",
        name: "Coffeein",
        body: "A Coffeein a saját ScriptHook V scripted. Nem egy felduzzasztott trainer — kompakt interakciós réteg natív, Rockstar-stílusú menüvel. Gyalog és járműben, .cfg-ből hangolható, nyílt szerkezet. Éjszaka, eső, neon: a város veled dolgozik.",
      },
      gta: {
        tag: "GTA 5",
        name: "GTA 5 Mod",
        body: "A GTA 5 singleplayer projekt a Coffeein köré. Világ, menü, minőségi élet — nem generic cheatpack. Legacy és Enhanced. Los Santos sötétebb, gyorsabb, a te ritmusodon.",
      },
    },
    features: {
      kicker: "Rendszer",
      title: "Ami bent van",
      items: [
        {
          title: "Natív menü",
          body: "Rockstar draw — tiszta, gyors, NativeUI nélkül. J a menü, numpad a választás.",
        },
        {
          title: "ScriptHook V + .NET",
          body: "Stabil script stack. Legacy és Enhanced, a megfelelő .NET builddel.",
        },
        {
          title: "Gyalog + jármű",
          body: "Ugyanaz a rendszer az utcán és a kocsiban. Nincs külön, félkész ág.",
        },
        {
          title: ".cfg, nem bloat",
          body: "Hangok, viselkedés, billentyűk — konfigfájl. Nincs 40 menüoldal.",
        },
        {
          title: "Moduláris",
          body: "Nyílt szerkezet. Bővíthető, cserélhető, a mag kicsi marad.",
        },
        {
          title: "Éjszakai hangulat",
          body: "A Coffeein a sötét Los Santosra van hangolva. Neon, eső, ritmus.",
        },
      ],
    },
    install: {
      kicker: "Setup",
      title: "Telepítés",
      lead: "Négy lépés. Ha valami nem tölt, a ScriptHook a hibás — mindig a játékbuildhez illeszd.",
      steps: [
        {
          n: "01",
          title: "Script Hook V",
          body: "Telepítsd a hivatalos Script Hook V-t a GTA 5 gyökérmappába.",
        },
        {
          n: "02",
          title: "ScriptHookV .NET",
          body: "Legacy vagy Enhanced — a te buildedhez tartozó .NET. Ne keverd.",
        },
        {
          n: "03",
          title: "Scripts mappa",
          body: "Másold a Coffeein fájlokat ide: Grand Theft Auto V\\scripts\\",
        },
        {
          n: "04",
          title: "Menü: J",
          body: "Indítsd a story mode-ot. J nyitja a menüt. A billentyű a .cfg-ben cserélhető.",
        },
      ],
      note: "Csak singleplayer. Online-ban ne használd — ban.",
    },
    download: {
      kicker: "Release",
      title: "Letöltés",
      body: "A nyilvános build még nincs kint. A Discordon jön elsőnek — changelog, hotfix, sneak peek.",
      button: "Hamarosan",
      hint: "A link ide kerül, amint a pack kész.",
      toast: "A letöltés még nincs kint. Csatlakozz Discordra, ott érkezik elsőnek.",
    },
    community: {
      kicker: "Kapcsolat",
      title: "Discord és YouTube",
      body: "Build-ek, bugreport, sneak peek — Discord. Telepítés, showcase, update — YouTube.",
      discord: "Csatlakozás Discordra",
      youtube: "YouTube csatorna",
      discordHint: "discord.gg/BYpNKz6KP",
      youtubeHint: "@c0ffeein",
    },
    footer: {
      unofficial:
        "Nem hivatalos fanprojekt. A Grand Theft Auto és a GTA a Take-Two Interactive / Rockstar Games védjegyei. 18+.",
      rights: "CoffeeinMod",
    },
    lang: { hu: "HU", en: "EN" },
  },
  en: {
    brand: "CoffeeinMod",
    nav: {
      mods: "Mods",
      install: "Install",
      download: "Download",
      community: "Community",
    },
    hero: {
      kicker: "GTA 5 · PC · Singleplayer",
      title: "COFFEEINMOD",
      lead: "Black night. Amber neon. Los Santos the way you want it — one coffee, and the city is yours.",
      cta: "Download soon",
      discord: "Discord",
      youtube: "YouTube",
    },
    mods: {
      kicker: "The two projects",
      title: "The mods",
      lead: "One brand. Two GTA 5 experiences. Built on ScriptHook V, native menus, clean config.",
      coffeein: {
        tag: "Flagship",
        name: "Coffeein",
        body: "Coffeein is the ScriptHook V script. Not a bloated trainer — a compact interaction layer with a native, Rockstar-style menu. On foot and in vehicle, tuned from a .cfg, open structure. Night, rain, neon: the city works with you.",
      },
      gta: {
        tag: "GTA 5",
        name: "GTA 5 Mod",
        body: "The GTA 5 singleplayer project around Coffeein. World, menu, quality of life — not a generic cheat pack. Legacy and Enhanced. Los Santos darker, faster, on your rhythm.",
      },
    },
    features: {
      kicker: "System",
      title: "What's inside",
      items: [
        {
          title: "Native menu",
          body: "Rockstar draw — clean, fast, no NativeUI. J opens the menu, numpad selects.",
        },
        {
          title: "ScriptHook V + .NET",
          body: "Stable script stack. Legacy and Enhanced, with the matching .NET build.",
        },
        {
          title: "On foot + vehicle",
          body: "The same system on the street and in the car. No half-finished branch.",
        },
        {
          title: ".cfg, not bloat",
          body: "Sounds, behavior, keys — a config file. No 40-page menu.",
        },
        {
          title: "Modular",
          body: "Open structure. Extend it, swap it, keep the core small.",
        },
        {
          title: "Night atmosphere",
          body: "Coffeein is tuned for dark Los Santos. Neon, rain, rhythm.",
        },
      ],
    },
    install: {
      kicker: "Setup",
      title: "Install",
      lead: "Four steps. If it doesn't load, ScriptHook is the usual culprit — match it to your game build.",
      steps: [
        {
          n: "01",
          title: "Script Hook V",
          body: "Install official Script Hook V into the GTA 5 root folder.",
        },
        {
          n: "02",
          title: "ScriptHookV .NET",
          body: "Legacy or Enhanced — the .NET that matches your build. Don't mix them.",
        },
        {
          n: "03",
          title: "Scripts folder",
          body: "Copy the Coffeein files here: Grand Theft Auto V\\scripts\\",
        },
        {
          n: "04",
          title: "Menu: J",
          body: "Launch story mode. J opens the menu. The key is changeable in the .cfg.",
        },
      ],
      note: "Singleplayer only. Do not use it online — ban.",
    },
    download: {
      kicker: "Release",
      title: "Download",
      body: "The public build is not out yet. Discord gets it first — changelog, hotfix, sneak peek.",
      button: "Coming soon",
      hint: "The link lands here as soon as the pack is ready.",
      toast: "Download is not live yet. Join Discord — it drops there first.",
    },
    community: {
      kicker: "Contact",
      title: "Discord and YouTube",
      body: "Builds, bug reports, sneak peeks — Discord. Install, showcase, updates — YouTube.",
      discord: "Join Discord",
      youtube: "YouTube channel",
      discordHint: "discord.gg/BYpNKz6KP",
      youtubeHint: "@c0ffeein",
    },
    footer: {
      unofficial:
        "Unofficial fan project. Grand Theft Auto and GTA are trademarks of Take-Two Interactive / Rockstar Games. 18+.",
      rights: "CoffeeinMod",
    },
    lang: { hu: "HU", en: "EN" },
  },
} as const;
