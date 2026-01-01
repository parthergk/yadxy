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
    <div className="relative h-[380px] sm:h-[560px] w-full max-w-[68rem] mx-auto flex items-center justify-center">

      {/* CONNECTOR LINES */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <g
          fill="none"
          stroke="rgba(249,115,22,0.32)"
          strokeWidth="4"
          strokeDasharray="5 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Top Left */}
          <path d="
            M110 180
            H340
            Q390 180 390 250
            V420
            Q390 500 490 500
            H500
          " />

          {/* Mid Left */}
          <path d="
            M120 500
            H380
            Q440 500 470 500
            H500
          " />

          {/* Bottom Left */}
          <path d="
            M120 820
            H380
            Q450 820 450 750
            V580
            Q450 500 490 500
            H500
          " />

          {/* Top Right */}
          <path d="
            M880 200
            H620
            Q550 200 550 270
            V420
            Q550 500 510 500
            H500
          " />

          {/* Mid Right */}
          <path d="
            M880 500
            H620
            Q560 500 530 500
            H500
          " />

          {/* Bottom Right */}
          <path d="
            M880 820
            H620
            Q550 820 550 750
            V580
            Q550 500 510 500
            H500
          " />
        </g>
      </svg>

      {/* CENTER */}
      <div className="z-10 flex items-center justify-center rounded-2xl bg-white shadow-xl p-3">
        <div className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] flex items-center justify-center rounded-[10px] bg-orange-500 shadow-lg">
          <LayoutDashboard className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
      </div>

      {/* LEFT SIDE */}
      <IconBox className="left-6 top-16"><Bell /></IconBox>
      <IconBox className="left-16 top-1/2 -translate-y-1/2"><Settings /></IconBox>
      <IconBox className="left-6 bottom-20"><Users /></IconBox>

      {/* RIGHT SIDE */}
      <IconBox className="right-6 top-16"><Sparkles /></IconBox>
      <IconBox className="right-16 top-1/2 -translate-y-1/2"><Wallet /></IconBox>
      <IconBox className="right-6 bottom-20"><Receipt /></IconBox>

    </div>
  );
};

const IconBox = ({ children, className }: any) => (
  <div className={`absolute z-10 ${className}`}>
    <div className="flex h-12 w-12 sm:h-20 sm:w-20 items-center justify-center rounded-xl bg-white shadow-lg">
      <span className="text-orange-500">
        {children.type
          ? <children.type className="h-5 w-5 sm:h-7 sm:w-7" />
          : children}
      </span>
    </div>
  </div>
);

export default IconSystem;
