"use client"
import { useState } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What is yadxy and who is it for?",
    answer:
      "yadxy is a fee management and reminder tool built for tuition teachers and small coaching centers to manage students, track fees, and send reminders easily.",
  },
  {
    id: 2,
    question: "Do I need technical knowledge to use yadxy?",
    answer:
      "No. yadxy is designed for non-technical users. Everything works with simple clicks on mobile or desktop.",
  },
  {
    id: 3,
    question: "How does the free trial work?",
    answer:
      "Your free trial starts from your first fee reminder. No payment is required during the trial period.",
  },
  {
    id: 4,
    question: "Can I send fee reminders via WhatsApp or SMS?",
    answer:
      "Yes. yadxy supports automatic, scheduled, and manual fee reminders through WhatsApp and SMS.",
  },
  {
    id: 5,
    question: "Is my student data safe on yadxy?",
    answer:
      "Absolutely. All data is securely stored using modern encryption and is never shared with third parties.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className=" px-4 py-16">
      <div className="text-center mb-12">
                <h3 className="sm:text-lg md:text-xl text-primary">
          Q & A
        </h3>

        <h1 className="text-[28px] sm:text-5xl mt-1 sm:mt-3">
          Frequently Asked Questions
        </h1>
      </div>

      <div className=" m-auto space-y-5 max-w-4xl">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className={`border border-white/50 rounded-xl p-5 transition-all ${
                isOpen ? "bg-gray-50" : "bg-gradient-to-bl from-[#E8DFFF]/30 to-[#DDEBFF]/30 shadow-2xl shadow-black/10 rounded-xl"
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center text-left font-medium text-gray-900"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className="text-2xl leading-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
