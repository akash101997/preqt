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

export default function PurpleBarchart({ chartData }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={chartData} barSize={50}>
          <CartesianGrid strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb" />
          <XAxis dataKey="year"
            tick={{
              fill: "var(--Gray-500, #374151)", // text color
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 500,
              letterSpacing: -0.56,

            }}
            axisLine={{ stroke: "#E2E8F0" }}
            tickLine={{ stroke: "#E2E8F0" }} />
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
            axisLine={{ stroke: "#E2E8F0" }}
            tickLine={{ stroke: "#E2E8F0" }}
          />
          <Tooltip formatter={(value) => `${value}%`} />
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
