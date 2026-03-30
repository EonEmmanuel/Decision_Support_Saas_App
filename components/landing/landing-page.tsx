import Link from "next/link";
import { Building2, FileSpreadsheet, Leaf, LineChart, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  { icon: FileSpreadsheet, title: "Excel Analysis", text: "Automated parsing of asset-level workbooks for rapid diagnostics." },
  { icon: Leaf, title: "CO2 Insights", text: "Measure current footprint and model reduction trajectories to 2030." },
  { icon: LineChart, title: "Financial Optimization", text: "Compare CAPEX scenarios, cash-flow impact, and ROI." },
  { icon: Sparkles, title: "Roadmap Generation", text: "Prioritized action plans with milestones and ESG reporting outputs." }
];

const targetUsers: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Building2, label: "Asset Managers" },
  { icon: ShieldCheck, label: "Banks & Investors" },
  { icon: Leaf, label: "ESG Experts" },
  { icon: LineChart, label: "Energy Consultants" }
];

export function LandingPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Enterprise Decision Platform</p>
            <h1 className="text-5xl font-semibold leading-tight md:text-6xl">Energy & CO2 optimization for <span className="gradient-text">institutional real estate</span></h1>
            <p className="max-w-xl text-lg text-slate-300">Turn spreadsheet data into investment-grade insights: energy performance, decarbonization potential, and CAPEX/ROI strategies.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/signup"><Button>Get Started</Button></Link>
              <Link href="/login"><Button variant="secondary">Login</Button></Link>
            </div>
          </div>
          <Card className="animate-float p-8">
            <p className="mb-6 text-sm text-slate-300">Portfolio snapshot</p>
            <div className="space-y-4">{[["Energy intensity", "-14% YoY"],["CO2 reduction", "-22% potential"],["Projected ROI", "19.8%"],["Assets modeled", "84 buildings"]].map(([k, v]) => (<div key={k} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"><span className="text-sm text-slate-300">{k}</span><span className="font-semibold text-emerald-200">{v}</span></div>))}</div>
          </Card>
        </div>
      </section>

      <section id="features" className="container py-20">
        <h2 className="mb-8 text-3xl font-semibold">Everything needed for energy, CO2, and financial decisions.</h2>
        <div className="grid gap-4 md:grid-cols-2">{features.map((feature) => (<Card key={feature.title}><feature.icon className="mb-3 h-6 w-6 text-cyan-300" /><h3 className="mb-2 text-xl font-semibold">{feature.title}</h3><p className="text-slate-300">{feature.text}</p></Card>))}</div>
      </section>

      <section id="how-it-works" className="border-y border-white/10 py-20"><div className="container grid gap-4 md:grid-cols-4">{["Upload Excel", "Run Analysis", "Review Recommendations", "Export Board-Ready Reports"].map((step, idx) => (<Card key={step}><span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-violet-200">{idx + 1}</span><p className="font-medium">{step}</p></Card>))}</div></section>

      <section className="container py-20"><h2 className="mb-8 text-3xl font-semibold">Built for multidisciplinary stakeholders.</h2><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{targetUsers.map((user) => (<Card key={user.label} className="text-center"><user.icon className="mx-auto mb-3 h-6 w-6 text-cyan-300" /><p>{user.label}</p></Card>))}</div></section>

      <section id="pricing" className="container py-20"><h2 className="mb-8 text-3xl font-semibold">Simple pricing for enterprise teams</h2><div className="grid gap-4 md:grid-cols-3">{[["Starter", "€299/mo", "Up to 25 assets"],["Professional", "€899/mo", "Up to 250 assets"],["Enterprise", "Custom", "Unlimited + API"]].map(([name, price, desc]) => (<Card key={name} className={name === "Professional" ? "ring-1 ring-cyan-300" : ""}><h3 className="text-xl font-semibold">{name}</h3><p className="my-4 text-3xl">{price}</p><p className="text-slate-300">{desc}</p><Button className="mt-6 w-full">Choose plan</Button></Card>))}</div></section>
    </main>
  );
}
