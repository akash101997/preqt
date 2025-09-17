"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function PurpleBarchart({ isPrivate = false }) {
  const chartData = isPrivate ? [
    { year: "2022", growth: -22 },
    { year: "2023", growth: 24 },
    { year: "2024", growth: 36 },
  ] : [
    { year: "FY22", growth: 14.80 },
    { year: "FY23", growth: 30.15 },
    { year: "FY24", growth: 15.83 },
    { year: "FY25", growth: 75.91 },
    { year: "Q1FY26", growth: 20.79 },
  ];
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={chartData} barSize={50}>
        <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke={isPrivate ? "#374151" : "#E2E8F0"}
                />
          <XAxis dataKey="year"
            tick={{
              fill: "var(--Gray-500, #374151)", // text color
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 500,
              letterSpacing: -0.56,
              

            }}
            axisLine={{ stroke: isPrivate ? "#374151" : "#E2E8F0" }}
            tickLine={{ stroke: isPrivate ? "#374151" : "#E2E8F0" }} />
          <YAxis
            tickFormatter={(value) => `${value}%`}
            domain={[-40, 40]} // You can make this dynamic later
            tick={{
              fill: "var(--Gray-500, #6B7280)", // text color
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 500,
              letterSpacing: -0.56,
              // aligns right
            }}
            axisLine={{ stroke: isPrivate ? "#374151" : "#E2E8F0" }}
            tickLine={{ stroke: isPrivate ? "#374151" : "#E2E8F0" }}
          />
          <Tooltip formatter={(value) => `${value}%`} cursor = {false}/>
          <Bar dataKey="growth" fill="#E4C575" radius={[5, 5, 0, 0]}>
            <LabelList
              dataKey="growth"
              position="top"
              formatter={(value) => `${value}%`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
