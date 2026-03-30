"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) return setError(data.error ?? "Unable to login");
    router.push(params.get("next") || "/dashboard");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
      <Card className="w-full max-w-md">
        <h1 className="mb-2 text-2xl font-semibold">Welcome back</h1>
        <p className="mb-6 text-sm text-slate-300">Sign in to access your building analytics workspace.</p>
        <form className="space-y-4" onSubmit={onSubmit}>
          <input required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
          <input required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
          {error ? <p className="text-sm text-rose-300">{error}</p> : null}
          <Button className="w-full" type="submit" disabled={loading}>{loading ? "Signing in..." : "Login"}</Button>
        </form>
        <p className="mt-4 text-sm text-slate-300">No account? <Link href="/signup" className="text-cyan-300">Create one</Link></p>
      </Card>
    </main>
  );
}
