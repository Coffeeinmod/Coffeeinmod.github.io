# CoffeeinMod — GTA 5 Dismemberment (tuned)

GTA 5 singleplayer dismemberment / gore hatás. ASI + C# script (SHVDN v3) + DLC modellek.

## Mit tartalmaz a pack
- `DismembermentASI.asi` — ScriptHookV ASI plugin (CamxxCore alap)
- `scripts/Dismemberment.dll` — SHVDN v3 script
- `scripts/DismembermentWeapons.cfg` — fegyverlista
- `scripts/Dismemberment.toml` — konfig
- `mods/update/x64/dlcpacks/dismemberment/` — gore modellek (.rpf)
- `ScriptHookVDotNet3.dll` — szükséges .NET script host

## Előfeltétel (külön telepítendő)
1. **Script Hook V** (Alexander Blade) — a GTA 5 gyökérmappába  
   Hivatalos: http://www.dev-c.com/gtav/scripthookv/
2. GTA 5 **Legacy** singleplayer (story mode). Online-ban NE használd.
3. Ajánlott: OpenIV **mods folder** használata a DLC-hez.

> A ScriptHookV.asi-t szándékosan nem csomagoljuk — mindig a hivatalos forrásból tedd fel a játékverziódhoz.

## Telepítés
1. Telepítsd a Script Hook V-t a GTA V gyökérbe.
2. Másold a packból a `ScriptHookVDotNet3.dll`-t a GTA V gyökérbe (ha még nincs).
3. Másold a `DismembermentASI.asi`-t a GTA V gyökérbe.
4. Másold a `scripts\` mappa tartalmát ide: `Grand Theft Auto V\scripts\`
5. Másold a `mods\` mappát a GTA V gyökérbe (OpenIV mods folder struktúra).
6. Az `dlclist.xml`-be add hozzá a dismemberment DLC sort (ha a tuned pack / OpenIV setup ezt kéri).
7. Indítsd a **story mode**-ot.

## Credits
- jedijosh920 — eredeti C# script
- CamxxCore — DismembermentASI
- SpringBunny / Ze-Krush — gore modellek
- 0x-FADED / community — SHVDN memory patch / continuation
- CoffeeinMod tuned pack

18+ · csak singleplayer · nem hivatalos fanprojekt
