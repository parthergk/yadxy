import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

interface Props {
  chartData: {
    month: string;
    count: number;
  }[];
}

const renderCustomBarLabel = ({ x, y, width, value }: any) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-5}
    >{`teacher: ${value}`}</text>
  );
};

const formatAxisTick = (value: any): string => {
  return `${value}`;
};

const TeacherCart: React.FC<Props> = ({ chartData }) => {
  return (
    <ResponsiveContainer height="100%" width={300}>
      <BarChart data={chartData}>
        <XAxis dataKey="month" tickFormatter={formatAxisTick} />
        <YAxis
          tickFormatter={formatAxisTick}
          allowDecimals={false}
          label={{
            position: "insideTopLeft",
            value: "Teacher",
            angle: -90,
            dy: 60,
          }}
        />
        <Bar dataKey="count" fill="#F97316" label={renderCustomBarLabel} />
        <RechartsDevtools />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TeacherCart;
