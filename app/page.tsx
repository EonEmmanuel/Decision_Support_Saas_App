import { Navbar } from "@/components/layout/navbar";
import { LandingPage } from "@/components/landing/landing-page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.22),transparent_30%),#020617]">
      <Navbar />
      <LandingPage />
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">© 2026 Enerlytics AI — Built for enterprise decarbonization.</footer>
    </div>
  );
}
