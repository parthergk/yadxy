import React from "react";

const OverDue: React.FC = () => {
  const overdueStudents = [
    {
      name: "Raj Sharma",
      amount: 2000,
      daysOverdue: 15,
    },
    {
      name: "Kapil Dev",
      amount: 1200,
      daysOverdue: 20,
    },
    {
      name: "Gaurav Kumar",
      amount: 500,
      daysOverdue: 6,
    },
  ];

  return (
    <div
      className="
        bg-[linear-gradient(to_bottom_right,#FFFFFF_0%,#E0ECFF_25%,#EAE2FF_50%,#F8E8DB_75%,#FFFFFF_100%)]
        absolute
        w-full max-w-lg
        flex flex-col
        px-3 py-2
        sm:px-4 sm:py-2.5
        md:px-5 md:py-3
        shadow-lg shadow-black/10
        border border-white/50
        rounded-lg sm:rounded-xl
        min-h-[240px] sm:min-h-[260px] md:min-h-[287px]
        top-16 left-6
        sm:top-20 sm:left-6
        md:top-24 md:left-8
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
        Over Due Record
      </h2>

      <div className="my-3 sm:my-4 md:my-5 flex flex-col gap-1.5 sm:gap-2 h-full max-h-44 sm:max-h-52 md:max-h-56 overflow-y-auto">
        {overdueStudents.length > 0 ? (
          overdueStudents.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center"
            >
              <div className="text-[11px] sm:text-xs md:text-sm lg:text-base leading-snug text-heading">
                <span>{item.name}</span>
                <p className="text-sub text-[10px] sm:text-xs md:text-[13px] lg:text-sm">
                  ₹{item.amount}
                </p>
              </div>

              <div
                className="
                  border
                  rounded-xl sm:rounded-2xl
                  px-1.5 sm:px-2
                  text-[10px] sm:text-xs md:text-sm
                  border-primary
                  text-primary
                  transition-all
                  group-hover:shadow-lg
                "
              >
                {item.daysOverdue} days overdue
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-sub text-sm sm:text-base md:text-lg">
            No Over Due Record
          </div>
        )}
      </div>
    </div>
  );
};

export default OverDue;
