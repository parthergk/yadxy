import Image from "next/image";
import React from "react";
interface Review {
  text: string;
  name: string;
  subject: string;
  url: string;
}
const TestimonialsCard = ({ review }: { review: Review }) => {
  return (
    <div className="w-full flex flex-col justify-between p-3 sm:p-4 bg-gradient-to-bl from-[#E8DFFF]/30 to-[#DDEBFF]/30 shadow-lg shadow-black/10 border border-white/50 rounded-xl">
      <p className="text-sm sm:text-base leading-snug text-sub">{review.text}</p>
      <div className="flex items-center gap-5 mt-3 sm:mt-5">
        <div className=" h-10 w-10 sm:h-12 sm:w-12 rounded-md shadow-lg shadow-black/20">
          <Image
          alt="teacher-img"
          src={review.url}
          width={1034}
          height={1039}
          className=" object-fill rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-0.5 sm:space-y-1">
          <h3 className="text-lg md:text-xl">{review.name}</h3>
          <span className="text-sub text-sm sm:text-base">{review.subject}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
