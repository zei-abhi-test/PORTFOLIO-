import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "premium-border rounded-xl bg-card shadow-soft transition-colors hover:border-zinc-700",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-zinc-950 px-3 py-1 text-xs font-medium text-muted",
        className,
      )}
      {...props}
    />
  );
}
