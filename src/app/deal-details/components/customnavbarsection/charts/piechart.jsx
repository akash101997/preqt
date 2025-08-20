import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const Piechart = ({ centerContent })  => {
  const data = [
     { name: "Working Capital", value: 12.9 },
    { name: "Debt Repayment", value: 24.2 },
     { name: "Capex", value: 62.9 },
   
   
  
  ];
const text = []
  const COLORS = ["#D1BD56" ,  "#927127","#10100f"];

  return (
    <div>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
           startAngle={90} 
           endAngle={450} 
          innerRadius={80}
          outerRadius={110}
          paddingAngle={2} // for separation
          dataKey="value"
          cornerRadius={10} // for rounded edges
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
         <foreignObject x="90" y="100" width="120" height="100">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              textAlign: "center",
            }}
          >
            {centerContent}
          </div>
        </foreignObject>
      </PieChart>
    </div>
  );
};

export default Piechart;
