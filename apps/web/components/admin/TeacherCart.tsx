import React from "react";

interface Props {
  chartData: {
    month: string;
    count: number;
  }[];
}

const TeacherCart: React.FC<Props> = ({ chartData }) => {
  console.log("chart", chartData);
  
  return <div>TeacherCart</div>;
};

export default TeacherCart;
