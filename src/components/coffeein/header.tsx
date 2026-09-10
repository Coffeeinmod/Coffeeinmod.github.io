import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/coffeein/logo";
import { useLanguage } from "@/components/coffeein/language";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#mods", key: "mods" },
  { href: "#install", key: "install" },
  { href: "#download", key: "download" },
  { href: "#community", key: "community" },
] as const;

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl glass px-3 py-2 sm:px-4">
        <a href="#top" className="min-h-11 shrink-0" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-fg"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg bg-fg/6 p-0.5" role="group" aria-label="Language">
            {(["hu", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  "min-h-9 min-w-10 rounded-md px-2 text-xs font-semibold tracking-wide transition-colors duration-150",
                  lang === code ? "bg-primary text-primary-fg" : "text-muted hover:text-fg",
                )}
              >
                {t.lang[code]}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl glass p-2 md:hidden"
          aria-label="Mobile"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-fg"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
