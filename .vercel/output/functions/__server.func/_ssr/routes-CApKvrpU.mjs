import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MessageCircle, i as Play, o as Menu, r as ShieldAlert, s as Download, t as X } from "../_libs/lucide-react.mjs";
import { n as useLanguage, r as SOCIALS } from "./router-DzUkonbj.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CApKvrpU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg shadow-[0_0_24px_rgb(255_106_0_/_0.35)] hover:bg-accent",
			glass: "bg-glass text-fg shadow-border backdrop-blur-xl hover:shadow-border-hover",
			ghost: "bg-transparent text-fg hover:bg-fg/6",
			outline: "bg-transparent text-fg shadow-border hover:shadow-border-hover hover:bg-fg/4"
		},
		size: {
			default: "h-11 rounded-lg px-5 text-sm",
			lg: "h-12 rounded-xl px-6 text-sm tracking-wide",
			icon: "size-11 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("shrink-0", className),
		"aria-hidden": "true",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "8",
				className: "fill-bg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9 13.5c0-2.6 2.6-4.7 7-4.7s7 2.1 7 4.7v4.2c0 2.9-2.9 5.1-7 5.1s-7-2.2-7-5.1z",
				stroke: "currentColor",
				className: "text-primary",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M23 15.2h2.2c1.3 0 2.3 1.1 2.3 2.4s-1 2.4-2.3 2.4H23",
				stroke: "currentColor",
				className: "text-accent",
				strokeWidth: "1.7",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M13 10.2c.4-1.4 1.6-2.4 3-2.4",
				stroke: "currentColor",
				className: "text-accent",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			})
		]
	});
}
function Wordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-2xl leading-none tracking-[0.08em] text-fg",
			children: ["COFFEEIN", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "MOD"
			})]
		})]
	});
}
var LINKS = [
	{
		href: "#mods",
		key: "mods"
	},
	{
		href: "#install",
		key: "install"
	},
	{
		href: "#download",
		key: "download"
	},
	{
		href: "#community",
		key: "community"
	}
];
function Header() {
	const { t, lang, setLang } = useLanguage();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl glass px-3 py-2 sm:px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "min-h-11 shrink-0",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "rounded-lg px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: t.nav[link.key]
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex rounded-lg bg-fg/6 p-0.5",
						role: "group",
						"aria-label": "Language",
						children: ["hu", "en"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(code),
							className: cn("min-h-9 min-w-10 rounded-md px-2 text-xs font-semibold tracking-wide transition-colors duration-150", lang === code ? "bg-primary text-primary-fg" : "text-muted hover:text-fg"),
							children: t.lang[code]
						}, code))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "md:hidden",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl glass p-2 md:hidden",
			"aria-label": "Mobile",
			children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link.href,
				onClick: () => setOpen(false),
				className: "rounded-xl px-4 py-3 text-sm text-fg",
				children: t.nav[link.key]
			}, link.href))
		}) : null]
	});
}
function Landing() {
	const { t } = useLanguage();
	const onDownload = () => {
		toast(t.download.toast, { duration: 4200 });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "relative min-h-dvh overflow-x-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/18 blur-[90px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain fixed inset-0 z-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-center",
				toastOptions: { className: "glass !bg-glass !text-fg !border-0 font-sans text-sm shadow-border" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative min-h-dvh",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hero.jpg",
							alt: "",
							className: "absolute inset-0 size-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/25" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:pb-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "stagger-in text-xs font-semibold uppercase tracking-[0.28em] text-accent",
									style: { animationDelay: "40ms" },
									children: t.hero.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "stagger-in mt-3 font-display text-[18vw] leading-[0.82] tracking-[0.04em] text-fg sm:text-8xl md:text-9xl",
									style: { animationDelay: "120ms" },
									children: ["COFFEEIN", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "neon-text",
										children: "MOD"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "stagger-in mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
									style: { animationDelay: "200ms" },
									children: t.hero.lead
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "stagger-in mt-8 flex flex-wrap items-center gap-3",
									style: { animationDelay: "280ms" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "lg",
											onClick: onDownload,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), t.hero.cta]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "lg",
											variant: "glass",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: SOCIALS.discord,
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), t.hero.discord]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "lg",
											variant: "outline",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: SOCIALS.youtube,
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-px" }), t.hero.youtube]
											})
										})
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "mods",
					className: "relative mx-auto max-w-6xl px-5 py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.28em] text-accent",
							children: t.mods.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-5xl tracking-wide text-fg sm:text-6xl",
							children: t.mods.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-muted",
							children: t.mods.lead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-5 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "overflow-hidden rounded-2xl glass",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/coffeein.jpg",
									alt: "",
									className: "h-56 w-full object-cover sm:h-64"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold uppercase tracking-[0.22em] text-primary",
											children: t.mods.coffeein.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-4xl tracking-wide",
											children: t.mods.coffeein.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-muted",
											children: t.mods.coffeein.body
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "overflow-hidden rounded-2xl glass",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/gta.jpg",
									alt: "",
									className: "h-56 w-full object-cover sm:h-64"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold uppercase tracking-[0.22em] text-primary",
											children: t.mods.gta.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-4xl tracking-wide",
											children: t.mods.gta.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-muted",
											children: t.mods.gta.body
										})
									]
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative mx-auto max-w-6xl px-5 pb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.28em] text-accent",
							children: t.features.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-5xl tracking-wide sm:text-6xl",
							children: t.features.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: t.features.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl glass p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl tracking-wide text-fg",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: item.body
								})]
							}, item.title))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "install",
					className: "relative mx-auto grid max-w-6xl gap-8 px-5 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.28em] text-accent",
							children: t.install.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-5xl tracking-wide sm:text-6xl",
							children: t.install.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-muted",
							children: t.install.lead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 space-y-3",
							children: t.install.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4 rounded-2xl glass p-4 sm:p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl leading-none text-primary",
									children: step.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium text-fg",
									children: step.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-muted",
									children: step.body
								})] })]
							}, step.n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 flex items-start gap-2 text-sm text-subtle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mt-0.5 size-4 shrink-0 text-primary" }), t.install.note]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/espresso.jpg",
							alt: "",
							className: "h-full min-h-80 w-full object-cover"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "download",
					className: "relative px-5 py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-6xl overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative px-6 py-16 sm:px-12 sm:py-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/community.jpg",
									alt: "",
									className: "absolute inset-0 size-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/55" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative max-w-xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-[0.28em] text-accent",
											children: t.download.kicker
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 font-display text-5xl tracking-wide sm:text-6xl",
											children: t.download.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-muted",
											children: t.download.body
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex flex-wrap gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "lg",
												onClick: onDownload,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), t.download.button]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "lg",
												variant: "glass",
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: SOCIALS.discord,
													target: "_blank",
													rel: "noreferrer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), t.community.discord]
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm text-subtle",
											children: t.download.hint
										})
									]
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "community",
					className: "mx-auto max-w-6xl px-5 py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.28em] text-accent",
							children: t.community.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-5xl tracking-wide sm:text-6xl",
							children: t.community.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-muted",
							children: t.community.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SOCIALS.discord,
								target: "_blank",
								rel: "noreferrer",
								className: "group rounded-2xl glass p-6 transition-[box-shadow] duration-150 hover:shadow-border-hover",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-3xl tracking-wide",
										children: t.community.discord
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-subtle",
										children: t.community.discordHint
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SOCIALS.youtube,
								target: "_blank",
								rel: "noreferrer",
								className: "group rounded-2xl glass p-6 transition-[box-shadow] duration-150 hover:shadow-border-hover",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-6 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-3xl tracking-wide",
										children: t.community.youtube
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-subtle",
										children: t.community.youtubeHint
									})
								]
							})]
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border px-5 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl tracking-wide",
							children: t.footer.rights
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-xs leading-relaxed text-subtle",
						children: t.footer.unofficial
					})]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {});
}
//#endregion
export { Home as component };
