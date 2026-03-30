"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, FileUp, Home, Settings, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/dashboard", label: "Overview", icon: Home },
  { href: "/dashboard/upload", label: "File Upload", icon: FileUp },
  { href: "/dashboard/analysis", label: "Analysis", icon: BarChart3 },
  { href: "/dashboard/reports", label: "Reports", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings }
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="glass hidden min-h-[calc(100vh-5rem)] w-64 rounded-2xl p-4 lg:block">
      <p className="mb-4 px-3 text-xs uppercase tracking-[0.2em] text-slate-400">Workspace</p>
      <nav className="space-y-1">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 rounded-xl px-3 py-2 text-sm", active ? "bg-violet-500/20 text-white" : "text-slate-300 hover:bg-white/10") }>
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
