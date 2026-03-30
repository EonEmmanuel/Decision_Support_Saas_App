import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-glow hover:opacity-90",
  secondary: "bg-white/10 text-white hover:bg-white/20",
  ghost: "bg-transparent text-slate-300 hover:bg-white/10"
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

export function Button({ className, children, variant = "primary", ...props }: Props) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
