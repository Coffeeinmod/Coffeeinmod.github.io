import { Download, MessageCircle, Play, ShieldAlert } from "lucide-react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/coffeein/header";
import { Mark } from "@/components/coffeein/logo";
import { useLanguage } from "@/components/coffeein/language";
import { SOCIALS } from "@/lib/content";

export function Landing() {
  const { t } = useLanguage();

  const onDownload = () => {
    toast(t.download.toast, { duration: 4200 });
  };

  return (
    <div id="top" className="relative min-h-dvh overflow-x-hidden bg-bg text-fg">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/18 blur-[90px]" />
      <div className="grain fixed inset-0 z-50" />
      <Header />
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          className:
            "glass !bg-glass !text-fg !border-0 font-sans text-sm shadow-border",
        }}
      />

      <main>
        <section className="relative min-h-dvh">
          <img
            src="/images/hero.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/25" />
          <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:pb-20">
            <p
              className="stagger-in text-xs font-semibold uppercase tracking-[0.28em] text-accent"
              style={{ animationDelay: "40ms" }}
            >
              {t.hero.kicker}
            </p>
            <h1
              className="stagger-in mt-3 font-display text-[18vw] leading-[0.82] tracking-[0.04em] text-fg sm:text-8xl md:text-9xl"
              style={{ animationDelay: "120ms" }}
            >
              COFFEEIN
              <span className="neon-text">MOD</span>
            </h1>
            <p
              className="stagger-in mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: "200ms" }}
            >
              {t.hero.lead}
            </p>
            <div
              className="stagger-in mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "280ms" }}
            >
              <Button size="lg" onClick={onDownload}>
                <Download />
                {t.hero.cta}
              </Button>
              <Button size="lg" variant="glass" asChild>
                <a href={SOCIALS.discord} target="_blank" rel="noreferrer">
                  <MessageCircle />
                  {t.hero.discord}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={SOCIALS.youtube} target="_blank" rel="noreferrer">
                  <Play className="ml-px" />
                  {t.hero.youtube}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="mods" className="relative mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            {t.mods.kicker}
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-fg sm:text-6xl">
            {t.mods.title}
          </h2>
          <p className="mt-4 max-w-2xl text-muted">{t.mods.lead}</p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl glass">
              <img
                src="/images/coffeein.jpg"
                alt=""
                className="h-56 w-full object-cover sm:h-64"
              />
              <div className="p-6 sm:p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {t.mods.coffeein.tag}
                </span>
                <h3 className="mt-2 font-display text-4xl tracking-wide">{t.mods.coffeein.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.mods.coffeein.body}</p>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl glass">
              <img src="/images/gta.jpg" alt="" className="h-56 w-full object-cover sm:h-64" />
              <div className="p-6 sm:p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {t.mods.gta.tag}
                </span>
                <h3 className="mt-2 font-display text-4xl tracking-wide">{t.mods.gta.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.mods.gta.body}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-5 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            {t.features.kicker}
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">{t.features.title}</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((item) => (
              <li key={item.title} className="rounded-2xl glass p-6">
                <h3 className="font-display text-2xl tracking-wide text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="install" className="relative mx-auto grid max-w-6xl gap-8 px-5 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              {t.install.kicker}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">{t.install.title}</h2>
            <p className="mt-4 max-w-xl text-muted">{t.install.lead}</p>
            <ol className="mt-8 space-y-3">
              {t.install.steps.map((step) => (
                <li key={step.n} className="flex gap-4 rounded-2xl glass p-4 sm:p-5">
                  <span className="font-display text-3xl leading-none text-primary">{step.n}</span>
                  <div>
                    <h3 className="font-medium text-fg">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-5 flex items-start gap-2 text-sm text-subtle">
              <ShieldAlert className="mt-0.5 size-4 shrink-0 text-primary" />
              {t.install.note}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/espresso.jpg" alt="" className="h-full min-h-80 w-full object-cover" />
          </div>
        </section>

        <section id="download" className="relative px-5 py-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl">
            <div className="relative px-6 py-16 sm:px-12 sm:py-20">
              <img
                src="/images/community.jpg"
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-bg/55" />
              <div className="relative max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  {t.download.kicker}
                </p>
                <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">
                  {t.download.title}
                </h2>
                <p className="mt-4 text-muted">{t.download.body}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button size="lg" onClick={onDownload}>
                    <Download />
                    {t.download.button}
                  </Button>
                  <Button size="lg" variant="glass" asChild>
                    <a href={SOCIALS.discord} target="_blank" rel="noreferrer">
                      <MessageCircle />
                      {t.community.discord}
                    </a>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-subtle">{t.download.hint}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            {t.community.kicker}
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">
            {t.community.title}
          </h2>
          <p className="mt-4 max-w-2xl text-muted">{t.community.body}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href={SOCIALS.discord}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl glass p-6 transition-[box-shadow] duration-150 hover:shadow-border-hover"
            >
              <MessageCircle className="size-6 text-primary" />
              <h3 className="mt-4 font-display text-3xl tracking-wide">{t.community.discord}</h3>
              <p className="mt-1 text-sm text-subtle">{t.community.discordHint}</p>
            </a>
            <a
              href={SOCIALS.youtube}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl glass p-6 transition-[box-shadow] duration-150 hover:shadow-border-hover"
            >
              <Play className="size-6 text-primary" />
              <h3 className="mt-4 font-display text-3xl tracking-wide">{t.community.youtube}</h3>
              <p className="mt-1 text-sm text-subtle">{t.community.youtubeHint}</p>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-2">
            <Mark className="size-7" />
            <span className="font-display text-xl tracking-wide">{t.footer.rights}</span>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-subtle">{t.footer.unofficial}</p>
        </div>
      </footer>
    </div>
  );
}
