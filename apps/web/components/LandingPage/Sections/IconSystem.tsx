import {
  Bell,
  Sparkles,
  LayoutDashboard,
  Users,
  Wallet,
  Receipt,
} from "lucide-react";

const IconSystem = () => {
  return (
    <div className="relative h-[300px] sm:h-[460px] w-full max-w-4xl m-auto flex items-center justify-center">

      {/* CONNECTOR LINES */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g
          fill="none"
          stroke="rgba(249,115,22,0.45)"
          strokeWidth="0.25"
          strokeDasharray="0.4 0.4"
          strokeLinecap="round"
        >
          {/* Reminders (Top Left → Center) */}
          <path  d="M2 14 H30 V50 H50" />

          {/* Automation (Top Right → Center) */}
          <path  d="M95 18 H70 V50 H50" />

          {/* Students (Left → Center) */}
          <path  d="M2 73 H30 V50 H50" />

          {/* Reports (Right → Center) */}
          <path  d="M95 73 H70 V50 H50" />

          {/* Payments (Bottom → Center) */}
          <path  d="M50 95 V50" />
        </g>
      </svg>

      {/* Center */}
      <div className="z-10 flex items-center justify-center rounded-md bg-white shadow-lg p-2">
        <div className="h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center rounded-md bg-primary shadow-xl">
        <LayoutDashboard className="w-7 h-7 sm:h-9 sm:w-9 text-white" />
        </div>
      </div>

      {/* Reminders */}
      <div className="absolute left-1 sm:left-4 top-5 sm:top-10 z-10 flex flex-col items-center gap-1">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-md bg-white shadow-lg">
          <Bell className="h-5 w-5 sm:h-7 sm:w-7 text-orange-500" />
        </div>
      </div>

      {/* Automation */}
      <div className="absolute right-1 top-8 sm:right-6 sm:top-14 z-10 flex flex-col items-center gap-1">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-md bg-white shadow-lg">
          <Sparkles className="h-5 w-5 sm:h-7 sm:w-7 text-orange-500" />
        </div>
      </div>

      {/* Students */}
      <div className="absolute left-1 bottom-14 sm:left-2 sm:bottom-24 z-10 flex flex-col items-center gap-1">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-md bg-white shadow-lg">
          <Users className="h-5 w-5 sm:h-7 sm:w-7 text-orange-500" />
        </div>
      </div>

      {/* Payments */}
      <div className="absolute -bottom-6 z-10 flex flex-col items-center gap-1">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-md bg-white shadow-lg">
          <Wallet className="h-5 w-5 sm:h-7 sm:w-7 text-orange-500" />
        </div>
      </div>

      {/* Reports */}
      <div className="absolute right-1 bottom-14 sm:right-6 sm:bottom-24 z-10 flex flex-col items-center gap-1">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-md bg-white shadow-lg">
          <Receipt className="h-5 w-5 sm:h-7 sm:w-7 text-orange-500" />
        </div>
      </div>

    </div>
  );
};

export default IconSystem;
