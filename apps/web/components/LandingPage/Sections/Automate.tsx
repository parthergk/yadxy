import { Bell, Grid2X2Check, MessageCircle, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import IconSystem from "./IconSystem";

const Automate = () => {
  return (
    <section className="relative w-full py-14 px-5">
      <div className="grid grid-cols-1 gap-5">
        <div className="flex flex-col  justify-center items-center">
          <h1 className="max-w-xl text-[26px] sm:text-5xl font-medium  text-primary">
            Built to Automate Every Step.
          </h1>

          <p className="max-w-lg sm:mt-2 text-sm sm:text-base text-neutral-600 text-center">
            Once set up, Yadxy automatically handles reminders, payments, and reports.
          </p>
        </div>
        <IconSystem />
      </div>
    </section>
  );
};

export default Automate;
