"use client";
import React, { useEffect, useState } from "react";
import TeachersTable from "../../../components/admin/TeachersTable";
import StudentTable from "../../../components/admin/StudentTable";
import TeacherCart from "../../../components/admin/TeacherCart";
import Stats from "../../../components/admin/Stats";
interface Student {
  id: string;
  name: string;
  phone: string;
  monthlyFee: string;
  class: string;
  joinDate: Date;
}

interface Teacher {
  id: string;
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
}
interface Dashboard {
  students: Student[];
  teachers: Teacher[];
  teachersChart: {
    month: string;
    count: number;
  }[];
  totalTeachers: number;
  totalStudents: number;
  totalReminders: number;
}
const Admin = () => {
  const [message, setMessage] = useState("");
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setMessage("");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/admin/dashboard`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Internal Server Error");
      }

      setDashboard(result.data);
      setMessage(result.message);
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : "Please try again later.";
      setMessage(errorMsg);
    }
  }

  console.log("Data", dashboard);

  return (
    <div className=" bg-[#edf0f5] h-full min-h-screen">
      <div className="p-5 h-full">
        <h1 className=" text-4xl font-bold">Dashboard</h1>

        <div className=" flex flex-col sm:flex-row gap-2 mt-5">
          {/* sats card collections */}
          <div className=" flex flex-row sm:flex-col justify-center items-center gap-2 border p-2">
            {dashboard?.totalTeachers !== undefined && (
              <Stats name="Teachers" count={dashboard.totalTeachers} />
            )}
            {dashboard?.totalStudents !== undefined && (
              <Stats name="Students" count={dashboard.totalStudents} />
            )}
            {dashboard?.totalReminders !== undefined && (
              <Stats name="Reminders" count={dashboard.totalReminders} />
            )}
          </div>

          {/* chart card  */}
          <div className=" border w-full p-2 h-[200px] sm:h-[300px]">
            {dashboard?.teachersChart !== undefined && (
              <TeacherCart chartData={dashboard.teachersChart} />
            )}
          </div>
        </div>
        <div className="h-full flex flex-col sm:flex-row border w-full p-2 mt-2 gap-2">
          <div className=" w-full border">Teacher table</div>
          <div className=" w-full border">Students table</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
