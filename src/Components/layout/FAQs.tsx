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
        className="flex w-full items-center justify-between text-left text-lg font-medium text-[#386742] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUpIcon size={20} className="flex-shrink-0" />
        ) : (
          <ChevronDownIcon size={20} className="flex-shrink-0" />
        )}
      </button>
      <div className={`mt-2 text-gray-700 ${isOpen ? "block" : "hidden"}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default function FAQs() {
  const faqs = [
    {
      question: "What is hydroponics?",
      answer:
        "Hydroponics is a method of growing plants without soil, using mineral nutrient solutions in a water solvent. Plants are supported by an inert medium like perlite, rockwool, clay pellets, or coconut coir, and their roots are directly exposed to the nutrient solution.",
    },
    {
      question: "Do I need gardening experience to use your systems?",
      answer:
        "Not at all! Our systems are designed with beginners in mind. Each kit comes with detailed instructions, and our app provides step-by-step guidance. We also offer customer support to help you succeed.",
    },
    {
      question: "How much space do I need for a hydroponic system?",
      answer:
        "It depends on the system. Our countertop herb gardens need only a square foot of space, while our vertical gardens typically require about 2-3 square feet of floor space. Commercial systems are customizable to your available space.",
    },
    {
      question: "How much time does maintaining a hydroponic garden take?",
      answer:
        "Most of our home systems require only 5-10 minutes of maintenance per week. This includes checking water levels, adding nutrients, and occasionally checking pH levels if needed.",
    },
    {
      question: "What can I grow with hydroponics?",
      answer:
        "You can grow a wide variety of plants hydroponically, including leafy greens, herbs, strawberries, tomatoes, peppers, and more. Different plants may require different systems, which we can help you select.",
    },
    {
      question: "How much electricity do your systems use?",
      answer:
        "Our systems are designed to be energy-efficient. A typical countertop system uses about as much electricity as a 60W light bulb. Larger systems use proportionally more, but are still very efficient compared to traditional growing methods when yield is considered.",
    },
    {
      question: "Do you offer installation services for larger systems?",
      answer:
        "Yes, we offer professional installation services for our commercial systems and larger home systems. Installation services can be added during checkout.",
    },
    {
      question: "What's your return policy?",
      answer:
        "We offer a 30-day satisfaction guarantee on all our products. If you're not completely satisfied, you can return your system for a full refund, minus shipping costs.",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#386742] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Everything you need to know about hydroponics and our growing
            systems.
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
