"use client"
import React, { useEffect, useState } from "react";
import PriceCard from "../Cards/PriceCard";
import { motion } from "motion/react";
import { plans } from "../../../helpers/Plans";

const PriceSection = () => {
   return (
    <section className="mt-5 w-full py-14 md:py-28 px-5">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="sm:text-lg md:text-xl text-primary text-start">
          PRICINGS
        </h3>
        <h1 className="text-[28px] sm:text-5xl mt-1 sm:mt-3 max-w-md text-start">
          Choose a <span className=" text-primary">Plan</span> That Suits You
        </h1>
      </motion.div>
      <div className="w-full pt-16 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {plans && plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
