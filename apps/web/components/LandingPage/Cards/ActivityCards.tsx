import React from "react";

const ActivityCard: React.FC = () => {
  const activity = [
    {
      id: "1",
      name: "Raj Sharma",
      amount: 2000,
      paidDate: "01 Jan 2026",
    },
    {
      id: "2",
      name: "Kapil Dev",
      amount: 1500,
      paidDate: "30 Dec 2025",
    },
  ];

  return (
    <div
      className="
        bg-[linear-gradient(to_bottom_right,#FFFFFF_0%,#E0ECFF_25%,#EAE2FF_50%,#F8E8DB_75%,#FFFFFF_100%)]
        w-full max-w-lg
        flex flex-col
        px-3 py-2
        sm:px-4 sm:py-2.5
        md:px-5 md:py-3
        shadow-lg shadow-black/10
        border border-white/50
        rounded-lg sm:rounded-xl
        min-h-[240px] sm:min-h-[260px] md:min-h-[287px]
      "
    >
      {/* header */}
      <h2
        className="
          border-b pb-1.5 sm:pb-2
          text-base sm:text-lg md:text-xl
          text-heading
        "
      >
        Recent activity
      </h2>

      <div className="my-3 sm:my-4 md:my-5 flex flex-col gap-1.5 sm:gap-2">
        {activity.length > 0 ? (
          activity.map((item) => (
            <div
              key={item.id}
              className="
                text-[11px] sm:text-xs md:text-sm lg:text-base
                leading-snug
                text-heading
              "
            >
              <div className="flex justify-between items-center">
                <span>{item.name}</span>
                <span className="text-sub text-[11px] sm:text-xs md:text-sm">
                  {item.amount} Paid
                </span>
              </div>

              <p className="text-sub text-[10px] sm:text-xs md:text-[13px] lg:text-sm">
                {item.paidDate}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center text-sub text-sm sm:text-base md:text-lg">
            No recent activity
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
