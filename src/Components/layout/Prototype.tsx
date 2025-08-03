import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import ModelViewer from "./components/ModelViewer"; // Adjust path if needed
import ModelViewer from "../ModelViewer"; // Update this path if ModelViewer.tsx is in src/Components/

const slides = [
  "3D Model", // first slide is replaced by ModelViewer
  "Second slide",
  "Third slide",
  "Fourth slide",
  "Fifth slide",
  "Sixth slide",
];

export default function Prototype() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#023E8A] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#FFFFFF] md:text-7xl">
            THE COASTELLA PROTOTYPE
          </h2>
          <p className="mx-auto max-w-7xl text-2xl text-[#FFFFFF]">
            The COASTELLA prototype showcases a solar-powered buoy model
            equipped with sensors for monitoring water levels, wind speed, wave
            activity, and water quality. It also demonstrates the GPS tracking,
            siren alerts, and real-time notification system, all integrated into
            a web-based dashboard for accessible and timely coastal monitoring.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          {/* Main Carousel */}
          <div className="relative min-h-[30rem] flex-1 overflow-hidden rounded-lg bg-white shadow-md">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex h-120 w-full flex-shrink-0 items-center justify-center bg-gray-100 dark:bg-neutral-900"
                >
                  {index === 0 ? (
                    <div className="h-full w-full">
                      <ModelViewer />
                    </div>
                  ) : (
                    <span className="text-4xl text-gray-800 dark:text-white">
                      {slide}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Prev / Next Controls */}
            <button
              onClick={prevSlide}
              className="absolute inset-y-0 left-0 flex h-full w-10 items-center justify-center text-gray-800 hover:bg-gray-800/10 dark:text-white"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute inset-y-0 right-0 flex h-full w-10 items-center justify-center text-gray-800 hover:bg-gray-800/10 dark:text-white"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Pagination (Thumbnails) */}
          <div className="no-scrollbar flex max-h-120 gap-2 overflow-x-auto md:flex-col md:overflow-y-auto">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex h-20 w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md border text-xs md:h-28 md:w-32 ${
                  currentIndex === index
                    ? "border-blue-400"
                    : "border-gray-200 dark:border-neutral-700"
                }`}
              >
                <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-neutral-900">
                  <span className="text-gray-800 dark:text-white">{slide}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
