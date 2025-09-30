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



const DebtBarChart = ({ isPrivate }) => {
    const data = isPrivate ? [
        { year: "FY'22", value: 13.8 },
        { year: "FY'23", value: 14.0 },
        { year: "FY'24", value: 9.3 },
        { year: "FY'25", value: 3.0 },

    ] : [
        { year: "FY'23", value: 5.9 },
        { year: "FY'24", value: 6.2 },
        { year: "FY'25", value: 3.0 },
    ];

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
                        fill: "var(--Gray-500, #9CA3AF)", // text color
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 500,
                        letterSpacing: -0.56,

                    }}
                    axisLine={{ stroke: isPrivate ? "#374151" : "#E2E8F0" }}
                    tickLine={{ stroke: isPrivate ? "#374151" : "#E2E8F0" }}
                    
                />
                <YAxis
                    // domain={[0, 1.4]}
                    tick={{
                        fill: "var(--Gray-500, #9CA3AF)", // text color
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 500,
                        letterSpacing: -0.56,
                        // aligns right
                    }}
                    axisLine={{ stroke: isPrivate ? "#374151" : "#E2E8F0" }}
                    tickLine={{ stroke: isPrivate ? "#374151" : "#E2E8F0" }}
                    tickFormatter={(value) => value.toFixed(1)} 

                />
              <Tooltip
                    cursor={{ fill: "transparent" }}
                    content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                            return (
                                <div
                                    style={{
                                        background: "#fff",
                                        padding: "8px 12px",
                                        border: "1px solid #ccc",
                                        borderRadius: "6px",
                                    }}
                                >
                                    <p style={{ margin: 0, fontWeight: "600" }}>{label}</p>
                                    <p style={{ margin: 0, color: "#e6cf93" }}>
                                        Growth: {payload[0].value}%
                                    </p>
                                </div>
                            );
                        }
                        return null;
                    }}
                />
                <Bar
                    dataKey="value"
                    fill="#e6cf93"
                    radius={[6, 6, 0, 0]} // rounded top corners
                >
                    <LabelList
                        dataKey="value"
                        position="top"
                        formatter={(val) => val.toFixed(2)}
                        style={{ fill: "#9CA3AF", fontWeight: 600 }}
                    />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default DebtBarChart;
