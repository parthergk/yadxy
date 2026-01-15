import { NotificationLog, Student, User } from "@repo/db";
import { Request, Response, Router } from "express";
import adminMiddleware from "../middleware/admin";

const adminRouter: Router = Router();

interface GroupedTeacherData {
  [month: string]: number;
}

adminRouter.get("/", adminMiddleware, async (req: Request, res: Response) => {
  try {
    const teachers = await User.find().select(
      "name email phone plan createdAt"
    );
    const students = await Student.find().select(
      "name contact class monthlyFee joinDate"
    );
    const reminders = await NotificationLog.find();

    const totalTeachers = teachers.length;
    const totalStudents = students.length;
    const totalReminders = reminders.length;

    const groupTeacher = teachers.reduce<GroupedTeacherData>((acc, trch) => {
      if (!trch.createdAt) return acc;

      const monthName = new Date(trch.createdAt).toLocaleString("default", {
        month: "short",
        year: "numeric",
      });

      acc[monthName] = (acc[monthName] || 0) + 1;
      return acc;
    }, {});

    const teachersChart = Object.entries(groupTeacher)
      .map(([month, count]) => ({
        month,
        count,
        date: new Date(month),
      }))
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .map(({ month, count }) => ({ month, count }));

    res.status(200).json({
      success: true,
      message: "Admin dashboard data fetched successfully",
      data: {
        totalTeachers,
        totalStudents,
        totalReminders,
        teachersChart,
        teachers,
        students,
      },
    });
    return;
  } catch (error: any) {
    console.error("Admin dashboard error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch admin dashboard data",
      error: error?.message || "Internal Server Error",
    });
    return;
  }
});

export default adminRouter;
