"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { locales, t, type Locale } from "@/lib/i18n";

type User = { id: string; email: string; createdAt: string };

export default function SettingsPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fromStorage = localStorage.getItem("locale") as Locale | null;
    if (fromStorage && locales.includes(fromStorage)) setLocale(fromStorage);
    (async () => {
      const res = await fetch("/api/auth/me");
      if (!res.ok) return;
      const data = await res.json();
      setUser(data.user);
    })();
  }, []);

  const switchLanguage = (next: Locale) => {
    setLocale(next);
    localStorage.setItem("locale", next);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card>
        <h2 className="mb-3 text-xl font-semibold">Profile</h2>
        <div className="space-y-3 text-sm text-slate-300">
          <p>Email: {user?.email ?? "Loading..."}</p>
          <p>User ID: {user?.id ?? "-"}</p>
          <p>Member since: {user ? new Date(user.createdAt).toLocaleDateString() : "-"}</p>
        </div>
      </Card>
      <Card>
        <h2 className="mb-3 text-xl font-semibold">{t(locale, "settings.language")}</h2>
        <p className="mb-3 text-sm text-slate-300">UI translation keys are wired for FR / EN / DE.</p>
        <div className="flex gap-2">
          {locales.map((item) => (
            <button key={item} onClick={() => switchLanguage(item)} className={`rounded-lg border px-3 py-1 text-sm uppercase hover:bg-white/10 ${locale === item ? "border-cyan-300" : "border-white/20"}`}>
              {item}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
