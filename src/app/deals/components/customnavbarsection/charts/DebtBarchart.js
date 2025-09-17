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

const data = [
    { year: "2022", value: 0 },
    { year: "2023", value: 0 },
    { year: "2024", value: 0 },
];

const DebtBarChart = ({ isPrivate = false }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} barSize={60}>
                <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke={isPrivate ? "#374151" : "#E2E8F0"}
                />
                <XAxis
                    dataKey="year"
                    tick={{
                        fill: "var(--Gray-500, #374151)", // text color
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 500,
                        letterSpacing: -0.56,

                    }}
                    axisLine={{ stroke: isPrivate ? "#374151" : "#E2E8F0" }}
                    tickLine={{ stroke: isPrivate ? "#374151" : "#E2E8F0" }}
                />
                <YAxis
                    domain={[0, 1.4]}
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
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar
                    dataKey="value"
                    fill="#e6cf93"
                    radius={[6, 6, 0, 0]} // rounded top corners
                >
                    <LabelList
                        dataKey="value"
                        position="top"
                        formatter={(val) => val.toFixed(2)}
                        style={{ fill: "#374151", fontWeight: 600 }}
                    />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default DebtBarChart;
