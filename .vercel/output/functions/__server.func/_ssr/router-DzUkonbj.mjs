import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, v as useRouter, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DzUkonbj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var SOCIALS = {
	discord: "https://discord.gg/coffeeinmod",
	youtube: "https://www.youtube.com/@CoffeeinMod"
};
var copy = {
	hu: {
		brand: "CoffeeinMod",
		nav: {
			mods: "Modok",
			install: "Telepítés",
			download: "Letöltés",
			community: "Közösség"
		},
		hero: {
			kicker: "GTA 5 · PC · Singleplayer",
			title: "COFFEEINMOD",
			lead: "Fekete éjszaka. Narancs neon. Los Santos, ahogy te akarod — egy kávé, és a város a tiéd.",
			cta: "Letöltés hamarosan",
			discord: "Discord",
			youtube: "YouTube"
		},
		mods: {
			kicker: "A két projekt",
			title: "A modok",
			lead: "Egy márka. Két GTA 5 élmény. ScriptHook V-re épülnek, natív menüvel, tiszta konfiggal.",
			coffeein: {
				tag: "Zászlóshajó",
				name: "Coffeein",
				body: "A Coffeein a saját ScriptHook V scripted. Nem egy felduzzasztott trainer — kompakt interakciós réteg natív, Rockstar-stílusú menüvel. Gyalog és járműben, .cfg-ből hangolható, nyílt szerkezet. Éjszaka, eső, neon: a város veled dolgozik."
			},
			gta: {
				tag: "GTA 5",
				name: "GTA 5 Mod",
				body: "A GTA 5 singleplayer projekt a Coffeein köré. Világ, menü, minőségi élet — nem generic cheatpack. Legacy és Enhanced. Los Santos sötétebb, gyorsabb, a te ritmusodon."
			}
		},
		features: {
			kicker: "Rendszer",
			title: "Ami bent van",
			items: [
				{
					title: "Natív menü",
					body: "Rockstar draw — tiszta, gyors, NativeUI nélkül. J a menü, numpad a választás."
				},
				{
					title: "ScriptHook V + .NET",
					body: "Stabil script stack. Legacy és Enhanced, a megfelelő .NET builddel."
				},
				{
					title: "Gyalog + jármű",
					body: "Ugyanaz a rendszer az utcán és a kocsiban. Nincs külön, félkész ág."
				},
				{
					title: ".cfg, nem bloat",
					body: "Hangok, viselkedés, billentyűk — konfigfájl. Nincs 40 menüoldal."
				},
				{
					title: "Moduláris",
					body: "Nyílt szerkezet. Bővíthető, cserélhető, a mag kicsi marad."
				},
				{
					title: "Éjszakai hangulat",
					body: "A Coffeein a sötét Los Santosra van hangolva. Neon, eső, ritmus."
				}
			]
		},
		install: {
			kicker: "Setup",
			title: "Telepítés",
			lead: "Négy lépés. Ha valami nem tölt, a ScriptHook a hibás — mindig a játékbuildhez illeszd.",
			steps: [
				{
					n: "01",
					title: "Script Hook V",
					body: "Telepítsd a hivatalos Script Hook V-t a GTA 5 gyökérmappába."
				},
				{
					n: "02",
					title: "ScriptHookV .NET",
					body: "Legacy vagy Enhanced — a te buildedhez tartozó .NET. Ne keverd."
				},
				{
					n: "03",
					title: "Scripts mappa",
					body: "Másold a Coffeein fájlokat ide: Grand Theft Auto V\\scripts\\"
				},
				{
					n: "04",
					title: "Menü: J",
					body: "Indítsd a story mode-ot. J nyitja a menüt. A billentyű a .cfg-ben cserélhető."
				}
			],
			note: "Csak singleplayer. Online-ban ne használd — ban."
		},
		download: {
			kicker: "Release",
			title: "Letöltés",
			body: "A nyilvános build még nincs kint. A Discordon jön elsőnek — changelog, hotfix, sneak peek.",
			button: "Hamarosan",
			hint: "A link ide kerül, amint a pack kész.",
			toast: "A letöltés még nincs kint. Csatlakozz Discordra, ott érkezik elsőnek."
		},
		community: {
			kicker: "Kapcsolat",
			title: "Discord és YouTube",
			body: "Build-ek, bugreport, sneak peek — Discord. Telepítés, showcase, update — YouTube.",
			discord: "Csatlakozás Discordra",
			youtube: "YouTube csatorna",
			discordHint: "discord.gg/coffeeinmod",
			youtubeHint: "@CoffeeinMod"
		},
		footer: {
			unofficial: "Nem hivatalos fanprojekt. A Grand Theft Auto és a GTA a Take-Two Interactive / Rockstar Games védjegyei. 18+.",
			rights: "CoffeeinMod"
		},
		lang: {
			hu: "HU",
			en: "EN"
		}
	},
	en: {
		brand: "CoffeeinMod",
		nav: {
			mods: "Mods",
			install: "Install",
			download: "Download",
			community: "Community"
		},
		hero: {
			kicker: "GTA 5 · PC · Singleplayer",
			title: "COFFEEINMOD",
			lead: "Black night. Amber neon. Los Santos the way you want it — one coffee, and the city is yours.",
			cta: "Download soon",
			discord: "Discord",
			youtube: "YouTube"
		},
		mods: {
			kicker: "The two projects",
			title: "The mods",
			lead: "One brand. Two GTA 5 experiences. Built on ScriptHook V, native menus, clean config.",
			coffeein: {
				tag: "Flagship",
				name: "Coffeein",
				body: "Coffeein is the ScriptHook V script. Not a bloated trainer — a compact interaction layer with a native, Rockstar-style menu. On foot and in vehicle, tuned from a .cfg, open structure. Night, rain, neon: the city works with you."
			},
			gta: {
				tag: "GTA 5",
				name: "GTA 5 Mod",
				body: "The GTA 5 singleplayer project around Coffeein. World, menu, quality of life — not a generic cheat pack. Legacy and Enhanced. Los Santos darker, faster, on your rhythm."
			}
		},
		features: {
			kicker: "System",
			title: "What's inside",
			items: [
				{
					title: "Native menu",
					body: "Rockstar draw — clean, fast, no NativeUI. J opens the menu, numpad selects."
				},
				{
					title: "ScriptHook V + .NET",
					body: "Stable script stack. Legacy and Enhanced, with the matching .NET build."
				},
				{
					title: "On foot + vehicle",
					body: "The same system on the street and in the car. No half-finished branch."
				},
				{
					title: ".cfg, not bloat",
					body: "Sounds, behavior, keys — a config file. No 40-page menu."
				},
				{
					title: "Modular",
					body: "Open structure. Extend it, swap it, keep the core small."
				},
				{
					title: "Night atmosphere",
					body: "Coffeein is tuned for dark Los Santos. Neon, rain, rhythm."
				}
			]
		},
		install: {
			kicker: "Setup",
			title: "Install",
			lead: "Four steps. If it doesn't load, ScriptHook is the usual culprit — match it to your game build.",
			steps: [
				{
					n: "01",
					title: "Script Hook V",
					body: "Install official Script Hook V into the GTA 5 root folder."
				},
				{
					n: "02",
					title: "ScriptHookV .NET",
					body: "Legacy or Enhanced — the .NET that matches your build. Don't mix them."
				},
				{
					n: "03",
					title: "Scripts folder",
					body: "Copy the Coffeein files here: Grand Theft Auto V\\scripts\\"
				},
				{
					n: "04",
					title: "Menu: J",
					body: "Launch story mode. J opens the menu. The key is changeable in the .cfg."
				}
			],
			note: "Singleplayer only. Do not use it online — ban."
		},
		download: {
			kicker: "Release",
			title: "Download",
			body: "The public build is not out yet. Discord gets it first — changelog, hotfix, sneak peek.",
			button: "Coming soon",
			hint: "The link lands here as soon as the pack is ready.",
			toast: "Download is not live yet. Join Discord — it drops there first."
		},
		community: {
			kicker: "Contact",
			title: "Discord and YouTube",
			body: "Builds, bug reports, sneak peeks — Discord. Install, showcase, updates — YouTube.",
			discord: "Join Discord",
			youtube: "YouTube channel",
			discordHint: "discord.gg/coffeeinmod",
			youtubeHint: "@CoffeeinMod"
		},
		footer: {
			unofficial: "Unofficial fan project. Grand Theft Auto and GTA are trademarks of Take-Two Interactive / Rockstar Games. 18+.",
			rights: "CoffeeinMod"
		},
		lang: {
			hu: "HU",
			en: "EN"
		}
	}
};
var LanguageContext = (0, import_react.createContext)(null);
function LanguageProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("hu");
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem("coffeein-lang");
		if (saved === "hu" || saved === "en") {
			setLangState(saved);
			document.documentElement.lang = saved;
		}
	}, []);
	const setLang = (next) => {
		setLangState(next);
		window.localStorage.setItem("coffeein-lang", next);
		document.documentElement.lang = next;
	};
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang,
		t: copy[lang]
	}), [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value,
		children
	});
}
function useLanguage() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
	return ctx;
}
var styles_default = "/assets/styles-Kp5dj5Hq.css";
var APP_NAME = "CoffeeinMod";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "CoffeeinMod — GTA 5 singleplayer. Fekete éjszaka, narancs neon. Coffeein script + GTA 5 mod."
			},
			{
				name: "theme-color",
				content: "#070604"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "hu",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter = () => import("./routes-CApKvrpU.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useLanguage as n, SOCIALS as r, router_exports as t };
