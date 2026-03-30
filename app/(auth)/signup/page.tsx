"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) return setError(data.error ?? "Unable to sign up");
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
      <Card className="w-full max-w-md">
        <h1 className="mb-2 text-2xl font-semibold">Create your workspace</h1>
        <p className="mb-6 text-sm text-slate-300">Start analyzing energy and CO2 opportunities today.</p>
        <form className="space-y-4" onSubmit={onSubmit}>
          <input required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
          <input required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
          {error ? <p className="text-sm text-rose-300">{error}</p> : null}
          <Button className="w-full" type="submit" disabled={loading}>{loading ? "Creating..." : "Sign up"}</Button>
        </form>
        <p className="mt-4 text-sm text-slate-300">Already have an account? <Link href="/login" className="text-cyan-300">Sign in</Link></p>
      </Card>
    </main>
  );
}
