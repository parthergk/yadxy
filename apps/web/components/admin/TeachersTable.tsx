import React from "react";
interface Props {
  teacher: {
    name: string;
    email: string;
    phone: string;
    plan: {
      subscription: {
        startedAt: Date;
        endedAt: Date;
        status: string;
      };
      trial: {
        startedAt: Date;
        endedAt: Date;
        status: string;
      };
    };
  };
}
const TeachersTable: React.FC<Props> = ({ teacher }) => {
  console.log("Teacher insie table", teacher);

  return <div>TeachersTable</div>;
};

export default TeachersTable;
