"use client";
import React from "react";
import styles from  './barchart.module.css';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { year: "2022", revenue: 38.5, ebitda: 3, pat: 0 },
  { year: "2023", revenue: 65.7, ebitda: 7, pat: 4 },
  { year: "2024", revenue: 87.2, ebitda: 11, pat: 5 },
];

const Barchart = () => {
  return (
    <ResponsiveContainer width="100%" height={450} padding={{ top: 10, right: 0, left: 0, bottom: 2 }}>
      <ComposedChart
        data={data}
        margin={{ top: 0, right: 30, left: 30, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" color="#E2E8F0" />

        {/* Left Y-axis for Revenue */}
        <YAxis
          yAxisId="left"
          orientation="left"
          label={{
            value: "Revenue (Cr)",
            angle: -90,
            position: "insideLeft",
            style: { textAnchor: "middle", fontSize: 15, paddingRight: 15 },
          }}
          tick={{ fontSize: 12 }}
          tickFormatter={(val) => `${val}Cr`}
        />

        {/* Right Y-axis for Margins */}
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[-4, 12]}
          label={{
            value: "Margins (%)",
            angle: 90,
            position: "insideRight",
            style: { textAnchor: "middle", fontSize: 15, paddingLeft: 15},
          }}
            tick={{ fontSize: 12 }}
          tickFormatter={(val) => `${val}%`}
        />

        <Tooltip />
        
        <Legend
  verticalAlign="bottom"
  align="center"
  iconType="circle"
  wrapperStyle={{ paddingTop: 10 }}
  content={(props) => {
    const { payload } = props;
    return (
      <ul style={{ display: "flex", justifyContent: "center", gap: "20px", listStyle: "none", padding: 0 }}>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {/* Custom legend icon color */}
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background:
                entry.dataKey === "revenue"
                  ? "linear-gradient(180deg, #B59131 0%, #E6CF93 100%)" // gradient for revenue
                  : entry.dataKey === "ebitda"
                  ? "#443197" // solid purple for EBITDA
                  : "#16A34A", // solid green for PAT
            }}
            />
            <span style={{ color: "#000" }}>{entry.value}</span> {/* text color remains same */}
          </li>
        ))}
      </ul>
    );
  }}
/>


        {/* Revenue Bars */}
        <Bar
          yAxisId="left"
          dataKey="revenue"
          barSize={60}
          fill="url(#goldGradient)"
          radius={[6, 6, 0, 0]}
        >
          <LabelList
            dataKey="revenue"
            position="top"
            formatter={(val) => `${val}Cr`}
          />
        </Bar>

        {/* EBITDA Line */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="ebitda"
          stroke="#4B0082"
          strokeWidth={3}
          dot={{ r: 6 }}
        />

        {/* PAT Line */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="pat"
          stroke="#008000"
          strokeWidth={3}
          dot={{ r: 6 }}
        />

        {/* Gradient for Bar */}
        <defs>
  <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="rgba(181, 145, 49, 1)" />
    <stop offset="100%" stopColor="rgba(230, 207, 147, 1)" />
  </linearGradient>
</defs>

      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Barchart;
