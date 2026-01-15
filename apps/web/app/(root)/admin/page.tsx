"use client";
import React, { useEffect, useState } from "react";
interface Student {
  id: string;
  name: string;
  phone: string;
  monthlyFee: string;
  class: string;
  joinDate: Date;
}

interface Teacher {
  name: string;
  email: string;
  phone: string;
  plan: {
    subscription:{
        startedAt: Date,
        endedAt: Date,
        status: string
    },
    trial:{
        startedAt: Date,
        endedAt: Date,
        status: string
    }
  }
}
interface Dashboard {
  students: Student;
  teachers: Teacher;
  teachersChart: {
    month: string;
    count: number;
  };
  totalTeachres: number;
  totalStudetns: number;
  totalReminders: number;
}
const Admin = () => {
  const [message, setMessage] = useState("");
  const [dashboard, setDashboard] = useState(null);

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

  console.log("Message", message);
  console.log("Data", dashboard);

  return <div>Admin</div>;
};

export default Admin;
