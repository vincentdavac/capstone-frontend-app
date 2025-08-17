import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span
          className="text-lg font-medium text-[#023E8A]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {question}
        </span>
        {isOpen ? (
          <ChevronUpIcon size={20} className="flex-shrink-0 text-[#023E8A]" />
        ) : (
          <ChevronDownIcon size={20} className="flex-shrink-0 text-[#023E8A]" />
        )}
      </button>
      <div
        className={`mt-2 text-[#023E8A] ${isOpen ? "block" : "hidden"}`}
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 200 }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default function FAQs() {
  const faqs = [
    {
      question: "What is COASTELLA and how does it work?",
      answer:
        "Hydroponics is a method of growing plants without soil, using mineral nutrient solutions in a water solvent. Plants are supported by an inert medium like perlite, rockwool, clay pellets, or coconut coir, and their roots are directly exposed to the nutrient solution.",
    },
    {
      question: "What environmental data does the system monitor?",
      answer:
        "Not at all! Our systems are designed with beginners in mind. Each kit comes with detailed instructions, and our app provides step-by-step guidance. We also offer customer support to help you succeed.",
    },
    {
      question: "Is COASTELLA powered only by solar energy?",
      answer:
        "It depends on the system. Our countertop herb gardens need only a square foot of space, while our vertical gardens typically require about 2-3 square feet of floor space. Commercial systems are customizable to your available space.",
    },
    {
      question: "Who can use the data provided by COASTELLA?",
      answer:
        "Most of our home systems require only 5-10 minutes of maintenance per week. This includes checking water levels, adding nutrients, and occasionally checking pH levels if needed.",
    },
    {
      question: "How does this system help in disaster preparedness?",
      answer:
        "You can grow a wide variety of plants hydroponically, including leafy greens, herbs, strawberries, tomatoes, peppers, and more. Different plants may require different systems, which we can help you select.",
    },
    {
      question: "Can COASTELLA operate during bad weather or low sunlight?",
      answer:
        "Our systems are designed to be energy-efficient. A typical countertop system uses about as much electricity as a 60W light bulb. Larger systems use proportionally more, but are still very efficient compared to traditional growing methods when yield is considered.",
    },
    {
      question:
        "Is the system affordable and easy to maintain for local communities?",
      answer:
        "Yes, we offer professional installation services for our commercial systems and larger home systems. Installation services can be added during checkout.",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-3xl font-light text-[#023E8A] md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg text-[#023E8A]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 200 }}
          >
            Have questions about COASTELLA?
          </p>
          <p
            className="mx-auto max-w-7xl text-lg text-[#023E8A]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 200 }}
          >
            We've gathered some of the most common inquiries to help you
            understand how our system works!
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
