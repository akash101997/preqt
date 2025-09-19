import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Piechart = ({ centerContent }) => {
  const data = [
    { name: "Working Capital", value: 20 },
    { name: "Debt Repayment", value: 30 },
    { name: "Capex", value: 50 },
  ];
  const COLORS = ["#D1BD56", "#927127", "#10100f"];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={450}
            innerRadius="55%"   // ✅ percentage makes it scale
            outerRadius="70%"
            paddingAngle={2}
            dataKey="value"
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          {/* Center content using foreignObject */}
          <foreignObject x="35%" y="40%" width="30%" height="20%">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {centerContent}
            </div>
          </foreignObject>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechart;
