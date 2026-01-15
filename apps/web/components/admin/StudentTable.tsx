import React from "react";
interface Props {
  student: {
    id: string;
    name: string;
    phone: string;
    monthlyFee: string;
    class: string;
    joinDate: Date;
  };
}

const StudentTable: React.FC<Props> = ({ student }) => {
  console.log("student insie table", student);

  return <div>StudentTable</div>;
};

export default StudentTable;
