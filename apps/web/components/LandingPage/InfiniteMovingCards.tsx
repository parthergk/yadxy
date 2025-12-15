"use client"
import React, { useEffect, useRef, useState } from "react";
import TestimonialsCard from "./Cards/TestimonialsCard";

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

const InfiniteMovingCards = ({
  direction = "up",
  speed = "normal",
  pauseOnHover = true,
}: {
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }

    addAnimation();
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "down" ? "normal" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div
        ref={scrollerRef}
        className={`flex flex-col shrink-0 flex-nowrap gap-6 ${
          start && "animate-scrollY"
        } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
      >
        {reviews.map((review, idx) => (
          <TestimonialsCard key={idx} review={review} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
