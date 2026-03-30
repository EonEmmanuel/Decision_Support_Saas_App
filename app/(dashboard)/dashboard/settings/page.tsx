import { Card } from "@/components/ui/card";
import { locales } from "@/lib/i18n";

export default function SettingsPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card>
        <h2 className="mb-3 text-xl font-semibold">Profile</h2>
        <div className="space-y-3 text-sm text-slate-300">
          <p>Name: Alex Martin</p>
          <p>Role: ESG Lead</p>
          <p>Organization: Urban Capital Partners</p>
        </div>
      </Card>
      <Card>
        <h2 className="mb-3 text-xl font-semibold">Language</h2>
        <p className="mb-3 text-sm text-slate-300">Prepared i18n keys for FR / EN / DE.</p>
        <div className="flex gap-2">
          {locales.map((locale) => (
            <button key={locale} className="rounded-lg border border-white/20 px-3 py-1 text-sm uppercase hover:bg-white/10">{locale}</button>
          ))}
        </div>
      </Card>
    </div>
  );
}
