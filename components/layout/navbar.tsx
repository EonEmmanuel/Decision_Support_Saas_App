import Link from "next/link";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Zap className="h-5 w-5 text-cyan-300" />
          <span>Enerlytics AI</span>
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="flex gap-2">
          <Link href="/login"><Button variant="ghost">Login</Button></Link>
          <Link href="/signup"><Button>Get Started</Button></Link>
        </div>
      </div>
    </header>
  );
}
