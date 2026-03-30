import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
      <Card className="w-full max-w-md">
        <h1 className="mb-2 text-2xl font-semibold">Create your workspace</h1>
        <p className="mb-6 text-sm text-slate-300">Start analyzing energy and CO2 opportunities today.</p>
        <form className="space-y-4">
          <input placeholder="Full name" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
          <input placeholder="Work email" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
          <input placeholder="Password" type="password" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
          <Link href="/dashboard"><Button className="w-full">Sign up</Button></Link>
        </form>
        <p className="mt-4 text-sm text-slate-300">Already have an account? <Link href="/login" className="text-cyan-300">Sign in</Link></p>
      </Card>
    </main>
  );
}
