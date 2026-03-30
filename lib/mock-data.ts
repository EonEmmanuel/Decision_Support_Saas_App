export const mockAnalysisPayload = {
  buildingInfo: {
    buildingName: "Paris HQ Campus",
    floorAreaM2: 25400,
    occupancyRate: 0.92,
    climateZone: "Temperate"
  },
  kpis: {
    energyConsumption: "14.2 GWh",
    co2Emissions: "3,240 tCO2e",
    annualSavings: "€1.24M",
    portfolioRoi: "19.8%"
  },
  energyData: [
    { month: "Jan", energy: 420, co2: 170, capex: 80, roi: 10 },
    { month: "Feb", energy: 398, co2: 160, capex: 120, roi: 13 },
    { month: "Mar", energy: 360, co2: 149, capex: 180, roi: 16 },
    { month: "Apr", energy: 344, co2: 136, capex: 150, roi: 18 },
    { month: "May", energy: 322, co2: 122, capex: 140, roi: 21 },
    { month: "Jun", energy: 295, co2: 110, capex: 200, roi: 25 }
  ],
  recommendations: [
    { id: "REC-01", action: "Heat pump retrofit", capex: "€420k", roi: "4.1y", co2: "-28%", priority: "High" },
    { id: "REC-02", action: "Envelope insulation", capex: "€275k", roi: "5.3y", co2: "-19%", priority: "High" },
    { id: "REC-03", action: "Smart BMS optimization", capex: "€96k", roi: "1.8y", co2: "-8%", priority: "Medium" }
  ],
  roadmap: [
    { year: 2026, title: "Baseline & audits", detail: "Portfolio digital twin, meter validation." },
    { year: 2027, title: "High-impact retrofits", detail: "HVAC and envelope interventions." },
    { year: 2028, title: "Electrification", detail: "Heat pump migration and controls rollout." },
    { year: 2029, title: "On-site renewables", detail: "PV expansion and storage strategy." },
    { year: 2030, title: "Net-zero trajectory", detail: "Validated CO2 pathway and investor reporting." }
  ]
};
