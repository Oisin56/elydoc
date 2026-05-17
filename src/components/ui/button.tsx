import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium tracking-[0.01em] transition-[background-color,color,border-color,transform] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 motion-safe:hover:-translate-y-[1px]",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-[0_4px_16px_rgba(31,58,52,0.16)] hover:bg-[#294943]",
        variant === "secondary" &&
          "border border-border bg-transparent text-foreground hover:border-primary/35 hover:bg-surface",
        className,
      )}
      {...props}
    />
  );
}
