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
    <div className="bg-[linear-gradient(to_bottom_right,#FFFFFF_0%,#E0ECFF_25%,#EAE2FF_50%,#F8E8DB_75%,#FFFFFF_100%)] absolute w-full max-w-lg flex flex-col px-4 py-2 shadow-lg shadow-black/10 border border-white/50 rounded-xl min-h-[287px] top-20 left-6 sm:top-24 sm:left-8">
      {/* header */}
      <h2 className="border-b pb-2 text-xl text-heading">
        Over Due Record
      </h2>

      <div className="my-5 flex flex-col gap-2 h-full max-h-56 overflow-y-auto">
        {overdueStudents.length > 0 ? (
          overdueStudents.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center"
            >
              <div className="text-[13px] md:text-sm lg:text-base leading-snug text-heading">
                <span>{item.name}</span>
                <p className="text-sub text-xs md:text-[13px] lg:text-sm">
                  ₹{item.amount}
                </p>
              </div>

              <div className="border rounded-2xl px-2 border-primary text-primary group-hover:shadow-lg transition-all">
                {item.daysOverdue} days overdue
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-sub text-lg">
            No Over Due Record
          </div>
        )}
      </div>
    </div>
  );
};

export default OverDue;
