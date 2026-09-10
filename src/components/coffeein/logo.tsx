import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      fill="none"
    >
      <rect width="32" height="32" rx="8" className="fill-bg" />
      <path
        d="M9 13.5c0-2.6 2.6-4.7 7-4.7s7 2.1 7 4.7v4.2c0 2.9-2.9 5.1-7 5.1s-7-2.2-7-5.1z"
        stroke="currentColor"
        className="text-primary"
        strokeWidth="2"
      />
      <path
        d="M23 15.2h2.2c1.3 0 2.3 1.1 2.3 2.4s-1 2.4-2.3 2.4H23"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M13 10.2c.4-1.4 1.6-2.4 3-2.4"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Mark className="size-8" />
      <span className="font-display text-2xl leading-none tracking-[0.08em] text-fg">
        COFFEEIN<span className="text-primary">MOD</span>
      </span>
    </span>
  );
}
