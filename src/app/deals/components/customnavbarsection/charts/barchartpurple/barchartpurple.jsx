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
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            tickFormatter={(value) => `${value}%`}
            domain={[-40, 40]} // You can make this dynamic later
            ticks={[-40, -20, 0, 20, 40]}
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
