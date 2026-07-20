import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-foreground text-background hover:bg-zinc-200",
        secondary: "premium-border bg-card text-foreground hover:bg-zinc-900",
        ghost: "text-muted hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, className }))} {...props} />;
}

type LinkButtonProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    external?: boolean;
  };

export function LinkButton({
  className,
  variant,
  external,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, className }))}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      {...props}
    />
  );
}
