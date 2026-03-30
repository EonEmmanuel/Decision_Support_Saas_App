import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-6">
      <div className="mx-auto max-w-7xl lg:flex lg:gap-6">
        <Sidebar />
        <main className="flex-1">
          <Topbar />
          {children}
        </main>
      </div>
    </div>
  );
}
