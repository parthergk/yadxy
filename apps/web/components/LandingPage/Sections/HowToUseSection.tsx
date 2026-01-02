"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import RegisterCard from "../Cards/Register";
import AddStudent from "../Cards/AddStudent";
import ActivityCard from "../Cards/ActivityCards";
import OverDue from "../Cards/OverDue";

const HowToUseSection = () => {
  return (
    <section className="mt-5 w-full py-14 md:py-28 px-5">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="sm:text-lg md:text-xl text-primary text-start">
          HOW TO USE?
        </h3>
        <h1 className="text-[28px] sm:text-5xl mt-1 sm:mt-3 max-w-lg text-start">
          Simple Steps to Started with{" "}
          <span className=" text-primary">Yadxy</span>
        </h1>
      </motion.div>
      <div className=" grid md:grid-cols-2 gap-5 pt-16 ">
        <div className=" h-full flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className=" flex flex-col justify-between relative shadow-2xl shadow-black/10 border border-white/50 rounded-xl h-full"
          >
            <div className="relative z-10 h-full w-full flex justify-center items-center perspective-distant group cursor-pointer overflow-hidden">
              <div className="mask-radial-from-50% mask-b-from-50% -rotate-[20deg] rotate-x-[35deg] rotate-y-[16deg] ">
                <RegisterCard />
              </div>
            </div>

            <div className="relative z-10 flex flex-col p-6">
              <span className="sm:text-lg md:text-xl text-primary">STEP 1</span>

              <h1 className="text-lg sm:text-xl md:text-2xl font-medium truncate">
                Sign up in Minutes
              </h1>
              <p className="text-sm sm:text-base leading-snug text-sub line-clamp-3 mt-2">
                Create your free account and set up your profile instantly. Our
                platform is designed for tuition teachers and coaching
                centers—no technical knowledge required.
              </p>
            </div>

            <div className="h-full w-full absolute z-0 opacity-20 md:opacity-35 [background-image:radial-gradient(circle_at_bottom_right,_#FFFFFF_0%,_#E0ECFF_25%,_#EAE2FF_50%,_#F8E8DB_75%,_#FFFFFF_100%)] rounded-tl-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col relative shadow-2xl shadow-black/10 border border-white/50 rounded-xl h-full"
          >
            <div className="relative z-10 w-full flex justify-center items-center perspective-distant group cursor-pointer">
              <div className=" h-full w-full rotate-1 rotate-x-[40deg] rotate-y-3 overflow-hidden">
                <AddStudent />
              </div>
            </div>
            <div className="relative z-10 flex flex-col p-6">
              <span className="sm:text-lg md:text-xl text-primary">STEP 2</span>
              <h1 className="text-lg sm:text-xl md:text-2xl font-medium truncate">
                Add Students Easily
              </h1>
              <p className="text-sm sm:text-base leading-snug text-sub line-clamp-3 mt-2">
                Quickly add student details such as name, contact, and fee
                schedule. Organize your batches and keep everything in one
                place.
              </p>
            </div>

            <div className="h-full w-full absolute z-0 opacity-20 md:opacity-35 [background-image:radial-gradient(circle_at_top_right,_#FFFFFF_0%,_#E0ECFF_25%,_#EAE2FF_50%,_#F8E8DB_75%,_#FFFFFF_100%)] rounded-bl-full"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className=" h-full flex flex-col relative shadow-2xl shadow-black/10 border border-white/50 rounded-xl"
        >
          <div className="relative z-10 flex flex-col gap-2 sm:gap-3 p-6">
            <span className="sm:text-lg md:text-xl text-primary">STEP 3</span>
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium truncate">
              Track Payments Seamlessly
            </h1>
            <p className="text-sm sm:text-base leading-snug text-sub line-clamp-3">
              Say goodbye to manual registers and missed reminders. With our
              system, you can track payments, pending fees, and due dates in
              real-time.
            </p>
          </div>
          <div className="relative z-10 w-full h-full flex justify-center items-center perspective-distant group cursor-pointer overflow-hidden">
            <div className=" flex m-auto relative w-full max-w-lg -rotate-12 rotate-x-[40deg] rotate-y-12">
            <ActivityCard />
            <OverDue />
            </div>
          </div>
          <div className="h-full w-full absolute z-0 opacity-25 md:opacity-35 [background-image:linear-gradient(to_right_top,_#FFFFFF_0%,_#E0ECFF_25%,_#EAE2FF_50%,_#F8E8DB_75%,_#FFFFFF_100%)]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUseSection;
