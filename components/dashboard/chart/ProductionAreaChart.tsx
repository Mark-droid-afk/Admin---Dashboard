"use client";

import { useEffect, useState } from "react";
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from "recharts";
import { ProductionPoint } from "@/components/dashboard/types/dashboard_types";

interface ProductionAreaChartProps {
  data: ProductionPoint[];
}

const LIGHT = {
  grid: "rgba(0,0,0,0.06)",
  axis: "#a3a3a3",
  producedLine: "#171717",
  producedFill: "#171717",
  targetLine: "#a3a3a3",
  targetFill: "#a3a3a3",
  tooltipBg: "#ffffff",
  tooltipBorder: "#e5e5e5",
  tooltipText: "#171717",
};

const DARK = {
  grid: "rgba(255,255,255,0.08)",
  axis: "#737373",
  producedLine: "#e5e5e5",
  producedFill: "#e5e5e5",
  targetLine: "#525252",
  targetFill: "#525252",
  tooltipBg: "#1c1c1c",
  tooltipBorder: "#333333",
  tooltipText: "#e5e5e5",
};

function useIsDarkMode() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

export default function ProductionAreaChart({ data }: ProductionAreaChartProps) {
  const isDark = useIsDarkMode();
  const c = isDark ? DARK : LIGHT;

  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 8, right: 4, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="producedFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c.producedFill} stopOpacity={isDark ? 0.4 : 0.1} />
            <stop offset="100%" stopColor={c.producedFill} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="targetFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c.targetFill} stopOpacity={0} />
            <stop offset="100%" stopColor={c.targetFill} stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} stroke={c.grid} strokeDasharray="0" />

        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 11 }}
          minTickGap={24}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 11 }}
          width={44}
          unit=" kg"
          tickMargin={8}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: c.tooltipBg,
            border: `1px solid ${c.tooltipBorder}`,
            borderRadius: 8,
            fontSize: 12,
            padding: "8px 12px",
          }}
          labelStyle={{ color: c.tooltipText, fontWeight: 500, marginBottom: 4 }}
          itemStyle={{ color: c.tooltipText }}
          cursor={{ stroke: c.axis, strokeWidth: 1, strokeDasharray: "3 3" }}
        />

        <Area
          type="monotone"
          dataKey="target"
          name="Target (kg)"
          stroke={c.targetLine}
          strokeWidth={1.5}
          strokeDasharray="4 3"
          fill="url(#targetFill)"
          dot={false}
          activeDot={false}
        />
        <Area
          type="monotone"
          dataKey="produced"
          name="Produced (kg)"
          stroke={c.producedLine}
          strokeWidth={1.5}
          fill="url(#producedFill)"
          dot={false}
          activeDot={{ r: 3, strokeWidth: 0, fill: c.producedLine }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}