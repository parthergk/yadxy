import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<Props> = ({ icon: Icon, title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className=" p-5 bg-gradient-to-bl from-[#E8DFFF]/30 to-[#DDEBFF]/30 
      shadow-2xl shadow-black/10 rounded-xl flex flex-col gap-3"
    >
      <div className=" flex gap-2 flex-row items-end sm:items-start sm:flex-col">
      <div className="bg-primary h-7 w-7 sm:h-8 sm:w-8 rounded-md flex items-center justify-center text-white shadow-lg">
        <Icon className=" h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      {/* <div className="flex flex-col space-y-3 mt-4"> */}
        <h2 className="text-base md:text-lg lg:text-xl text-heading font-medium">
          {title}
        </h2>

      </div>
        <p className="text-sm md:text-[15px] lg:text-base leading-snug text-sub max-w-xl">
          {desc}
        </p>
      {/* </div> */}
    </motion.div>
  );
};

export default FeatureCard;
