import {
  Bell,
  Sparkles,
  LayoutDashboard,
  Users,
  Wallet,
  Receipt,
  Settings,
  BarChart,
} from "lucide-react";

const IconSystem = () => {
  return (
    <div className="relative h-[380px] sm:h-[560px] w-full max-w-5xl mx-auto flex items-center justify-center">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <g
          fill="none"
          stroke="#ff6900"
          strokeWidth="2"
          strokeDasharray="3 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="
      M110 180
      H220
      Q260 180 260 220
      V320
      Q260 360 300 360
      H360
      Q400 360 400 400
      V450
      Q400 500 470 500
    "
          />

          <path
            d="
      M110 500
      H470
    "
          />

          <path
            d="
      M110 820
      H220
      Q260 820 260 780
      V680
      Q260 640 300 640
      H360
      Q400 640 400 600
      V550
      Q400 500 470 500
    "
          />

          <path
            d="
      M470 500
      H530
    "
          />

          <path
            d="
      M890 180
      H780
      Q740 180 740 220
      V320
      Q740 360 700 360
      H640
      Q600 360 600 400
      V450
      Q600 500 530 500
    "
          />

          <path
            d="
      M890 500
      H530
    "
          />

          <path
            d="
      M890 820
      H780
      Q740 820 740 780
      V680
      Q740 640 700 640
      H640
      Q600 640 600 600
      V550
      Q600 500 530 500
    "
          />
        </g>
      </svg>

      <div className="z-10 flex items-center justify-center rounded-2xl bg-white shadow-xl p-3">
        <div className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] flex items-center justify-center rounded-[10px] bg-orange-500 shadow-lg">
          <LayoutDashboard className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
      </div>

      <IconBox className=" left-0 top-11 sm:left-6 sm:top-16">
        <Bell />
      </IconBox>
      <IconBox className="left-4 sm:left-16 top-1/2 -translate-y-1/2">
        <Settings />
      </IconBox>
      <IconBox className="left-0 bottom-11 sm:left-6 sm:bottom-16">
        <Users />
      </IconBox>

      <IconBox className="right-0 top-11 sm:right-6 sm:top-16">
        <Sparkles />
      </IconBox>
      <IconBox className=" right-4 sm:right-16 top-1/2 -translate-y-1/2">
        <Wallet />
      </IconBox>
      <IconBox className="right-0 bottom-11 sm:right-6 sm:bottom-20">
        <Receipt />
      </IconBox>
    </div>
  );
};

const IconBox = ({ children, className }: any) => (
  <div className={`absolute z-10 ${className}`}>
    <div className="flex h-12 w-12 sm:h-20 sm:w-20 items-center justify-center rounded-xl bg-white shadow-lg">
      <span className="text-orange-500">
        {children.type ? (
          <children.type className="h-5 w-5 sm:h-7 sm:w-7" />
        ) : (
          children
        )}
      </span>
    </div>
  </div>
);

export default IconSystem;
