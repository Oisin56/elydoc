import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border/90 bg-surface p-6 shadow-[0_6px_24px_rgba(31,58,52,0.04)] transition-[box-shadow,border-color,transform] duration-200 ease-out motion-safe:hover:-translate-y-[1px] motion-safe:hover:border-primary/25 motion-safe:hover:shadow-[0_10px_28px_rgba(31,58,52,0.08)] sm:p-7",
        className,
      )}
    >
      {children}
    </article>
  );
}
