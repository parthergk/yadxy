import { BadgeCheck, IndianRupee, Bell } from "lucide-react";
import React from "react";

const AddStudent = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mask-radial-from-30% mask-b-from-80%">
      <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] max-w-lg">
        
        {/* Card 1 */}
        <div
          className="
            absolute top-8 left-4
            sm:top-10 sm:left-10
            w-[85%]
            rounded-md sm:rounded-lg
            bg-gradient-to-bl from-[#E8DFFF] to-[#DDEBFF]
            border border-white/60
            shadow-xl
            p-3 sm:p-4
            space-y-2 sm:space-y-3
          "
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-sm sm:text-base font-medium">
              ₹1500 / Month
            </span>
          </div>

          <p className="text-xs sm:text-sm text-muted">
            Monthly fee schedule assigned
          </p>

          <div className="flex justify-between text-[11px] sm:text-xs text-muted">
            <span>Due: 10th</span>
            <span>Mode: UPI</span>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="
            absolute top-16 left-5
            sm:top-24 sm:left-12
            w-[85%]
            rounded-md sm:rounded-lg
            bg-gradient-to-bl from-[#E8DFFF] to-[#DDEBFF]
            border border-white/60
            shadow-xl
            p-3 sm:p-4
            space-y-2 sm:space-y-3
            transition-all
            group-hover:top-16
          "
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-sm sm:text-base font-medium">
              Auto Reminder
            </span>
          </div>

          <p className="text-xs sm:text-sm text-muted">
            WhatsApp reminder scheduled automatically
          </p>

          <div className="flex justify-between text-[11px] sm:text-xs text-muted">
            <span>3 retries</span>
            <span>Before due date</span>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="
            absolute top-32 left-6
            sm:top-36 sm:left-14
            w-[85%]
            rounded-md sm:rounded-lg
            bg-gradient-to-bl from-[#E8DFFF] to-[#DDEBFF]
            border border-white/60
            shadow-xl
            p-3 sm:p-4
            space-y-2 sm:space-y-3
          "
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-sm sm:text-base font-medium">
              Aryan Sharma
            </span>
          </div>

          <p className="text-xs sm:text-sm text-muted">
            Student profile created successfully
          </p>

          <div className="flex text-[11px] sm:text-xs gap-1 sm:gap-2">
            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-primary">
              Class 10
            </span>
            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
              Maths
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddStudent;
