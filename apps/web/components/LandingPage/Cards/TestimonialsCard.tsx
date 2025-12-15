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
    <div className="w-full p-3 bg-gradient-to-bl from-[#E8DFFF]/30 to-[#DDEBFF]/30 shadow-lg shadow-black/10 border border-white/50 rounded-xl">
      <p className="text-sm sm:text-base leading-snug text-sub">{review.text}</p>
      <div className="flex items-center gap-5 mt-3 sm:mt-5">
        <div className="bg-gray-500 h-12 w-12 sm:h-15 sm:w-15 rounded-full">
          <Image
          alt="teacher-img"
          src={review.url}
          width={1034}
          height={1039}
          className=" object-fill rounded-full"
          />
        </div>
        <div className="flex flex-col space-y-0.5 sm:space-y-1">
          <h3 className="text-lg md:text-xl">{review.name}</h3>
          <span className="text-sub">{review.subject}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
