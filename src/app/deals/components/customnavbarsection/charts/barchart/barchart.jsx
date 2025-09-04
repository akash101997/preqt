"use client";
import React from "react";
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
        <XAxis dataKey="year" />

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
  verticalAlign="bottom"  // position at the bottom
  align="center"          // center horizontally
  iconType="circle"       // circle icon like in your screenshot
  wrapperStyle={{ paddingTop: 10 }} // optional spacing from chart
/>

        {/* Revenue Bars */}
        <Bar
          yAxisId="left"
          dataKey="revenue"
          barSize={60}
          fill="url(#goldGradient)"
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
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>
        </defs>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Barchart;
