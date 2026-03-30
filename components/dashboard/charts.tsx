"use client";

import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar } from "recharts";
import { Card } from "@/components/ui/card";

type Row = { month: string; energy: number; co2: number; capex: number; roi: number };

export function ChartsPanel({ data }: { data: Row[] }) {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      <Card className="xl:col-span-2">
        <h3 className="mb-4 font-semibold">Energy usage over time</h3>
        <div className="h-72"><ResponsiveContainer width="100%" height="100%"><AreaChart data={data}><CartesianGrid strokeDasharray="3 3" stroke="#334155" /><XAxis dataKey="month" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip /><Area type="monotone" dataKey="energy" stroke="#22d3ee" fill="#22d3ee33" /></AreaChart></ResponsiveContainer></div>
      </Card>
      <Card>
        <h3 className="mb-4 font-semibold">CO2 reduction potential</h3>
        <div className="h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={data}><CartesianGrid strokeDasharray="3 3" stroke="#334155" /><XAxis dataKey="month" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip /><Line type="monotone" dataKey="co2" stroke="#34d399" strokeWidth={2} /></LineChart></ResponsiveContainer></div>
      </Card>
      <Card className="xl:col-span-3">
        <h3 className="mb-4 font-semibold">CAPEX vs ROI</h3>
        <div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={data}><CartesianGrid strokeDasharray="3 3" stroke="#334155" /><XAxis dataKey="month" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip /><Bar dataKey="capex" fill="#818cf8" /><Bar dataKey="roi" fill="#22d3ee" /></BarChart></ResponsiveContainer></div>
      </Card>
    </div>
  );
}
