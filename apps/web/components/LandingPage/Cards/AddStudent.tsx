import { BadgeCheck, IndianRupee, Bell } from "lucide-react";
import React from "react";

const AddStudent = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mask-radial-from-30% mask-b-from-80%">
      <div className="relative w-full h-[280px] max-w-lg">
        {/* Card 1 */}
        <div
          className="absolute top-10 left-5 sm:left-10 w-[85%]
          rounded-lg bg-gradient-to-bl from-[#E8DFFF] to-[#DDEBFF]
          border border-white/60 shadow-xl p-4 space-y-3"
        >
          <div className="flex items-center gap-3">
            <IndianRupee className="w-5 h-5 text-primary" />
            <span className="text-base font-medium">₹1500 / Month</span>
          </div>

          <p className="text-sm text-muted">Monthly fee schedule assigned</p>

          <div className="flex justify-between text-xs text-muted">
            <span>Due: 10th</span>
            <span>Mode: UPI</span>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="absolute top-24 left-7 sm:left-12 w-[85%]
          rounded-lg bg-gradient-to-bl from-[#E8DFFF] to-[#DDEBFF]
          border border-white/60 shadow-xl p-4 space-y-3 group-hover:top-16 group-hover:scale-105 transition-all"
        >
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-primary" />
            <span className="text-base font-medium">Auto Reminder</span>
          </div>

          <p className="text-sm text-muted">
            WhatsApp reminder scheduled automatically
          </p>

          <div className="flex justify-between text-xs text-muted">
            <span>3 retries</span>
            <span>Before due date</span>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="absolute top-36 left-9 sm:left-14 w-[85%]
          rounded-lg bg-gradient-to-bl from-[#E8DFFF] to-[#DDEBFF]
          border border-white/60 shadow-xl p-4 space-y-3"
        >
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-5 h-5 text-primary" />
            <span className="text-base font-medium">Aryan Sharma</span>
          </div>

          <p className="text-sm text-muted">
            Student profile created successfully
          </p>

          <div className="flex  text-xs">
            <span className="px-2 py-1 rounded  text-primary ">
              Class 10
            </span>
            <span className="px-2 py-1 rounded">
              Maths
            </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
