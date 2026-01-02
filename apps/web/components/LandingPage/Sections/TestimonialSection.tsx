"use client";
import React from "react";
import { motion } from "motion/react";
import TestimonialsCard from "../Cards/TestimonialsCard";
interface Review {
  text: string;
  name: string;
  subject: string;
  url: string;
}

const reviews: Review[] = [
  {
    text: "Easily track every student in one place. Add new students, update details, and manage without any hassle. With our intuitive student database, teachers can save time and focus more on teaching.",
    name: "Jatin Sharma",
    subject: "Math",
    url:"/image/teacher/teacher1.png"
  },
  {
    text: "The fee reminder feature is very helpful. It saves a lot of manual work.",
    name: "Priya Desai",
    subject: "Science",
    url:"/image/teacher/teacher2.png"
  },
  {
    text: "Tracking student performance has become very simple. I appreciate the detailed analytics provided. It could improve with more customization options for reports.",
    name: "Sajal Arora",
    subject: "Science",
    url:"/image/teacher/teacher3.png"
  },
  {
    text: "The platform is great for sending bulk updates to parents. It's easy to use, and the templates make communication smooth.",
    name: "Anjali Kumari",
    subject: "English",
    url:"/image/teacher/teacher4.png"
  },
  {
    text: "I like how we can keep all student records neatly organized. The interface is clean, but I wish there was a mobile app version for quick access on the go.",
    name: "Sandeep Singh",
    subject: "Computer Science",
    url:"/image/teacher/teacher5.png"
  },
];
const TestimonialSection = () => {

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
          TESTIMONIALS
        </h3>
        <h1 className="text-[28px] sm:text-5xl mt-1 sm:mt-3 max-w-md text-start">
          What Our Users Say
        </h1>
      </motion.div>

      <div className="w-full h-full relative overflow-hidden mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4">
         {reviews.map((review, idx) => (
          <TestimonialsCard key={idx} review={review} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
