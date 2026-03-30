"use client";

import { Bell, LogOut, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export function Topbar() {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="glass mb-6 flex h-16 items-center justify-between rounded-2xl px-4">
      <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-slate-300">
        <Search className="h-4 w-4" />
        <span className="text-sm">Search portfolios, assets, scenarios...</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="rounded-xl p-2 text-slate-300 hover:bg-white/10"><Bell className="h-4 w-4" /></button>
        <button onClick={logout} className="rounded-xl p-2 text-slate-300 hover:bg-white/10"><LogOut className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
