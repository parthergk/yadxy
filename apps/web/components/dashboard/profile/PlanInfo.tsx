import React from "react";
import { useOpenPlan } from "../../../context/OpenPlanProvider";

interface Props {
  planInfo: {
    title: string;
    studentLimit: number;
    activatedAt: string;
    expiresAt: string;
  };
}

const PlanInfo: React.FC<Props> = ({ planInfo }) => {
  
  const { setIsOpenPlans } = useOpenPlan();
  return (
    <div className="flex flex-col w-full h-full md:max-w-sm mt-6 rounded-lg p-5 bg-offwhite/50 backdrop-blur-sm shadow-xl">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-heading">
        Your Plan
      </h1>
      <div className=" flex flex-col gap-3 mt-3 px-2 text-sm sm:text-base leading-snug text-[#334155] mb-1">
        <p className=" flex justify-between">
          <span className="font-medium text-heading">Plan Type</span>{" "}
          {planInfo.title}
        </p>
        <p className=" flex justify-between">
          <span className="font-medium text-heading">Student Limit</span>{" "}
          {planInfo.studentLimit ? planInfo.studentLimit : "unlimited"}
        </p>
        <p className=" flex justify-between">
          <span className="font-medium text-heading">Activeted</span>{" "}
          {planInfo.activatedAt ? new Date(planInfo.activatedAt).toDateString(): "Lifetime (no expiry)"}
        </p>
        <p className=" flex justify-between">
          <span className="font-medium text-heading">Expires</span>
          {planInfo.expiresAt
            ? new Date(planInfo.expiresAt).toDateString()
            : "Lifetime (no expiry)"}
        </p>
      </div>
      <button
        type="submit"
        disabled={planInfo.title !== "Free"}
        onClick={() => setIsOpenPlans((pre) => !pre)}
        className={`w-full mt-5 py-2 rounded-md font-medium transition-colors ${
          planInfo.title !== "Free" ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-primary hover:bg-[#ea580c] active:bg-[#c2410c] text-white"
          }`}
      >
        Upgrade
      </button>
    </div>
  );
};

export default PlanInfo;
