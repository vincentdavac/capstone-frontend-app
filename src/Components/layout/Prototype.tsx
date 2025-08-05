import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ModelViewer from "../ModelViewer";

const slides = [
  "3D Model",
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
    <section className="w-full bg-[#FFFFFF] py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0077B6] md:text-7xl">
            THE COASTELLA PROTOTYPE
          </h2>
          <p className="mx-auto max-w-7xl text-justify text-2xl leading-relaxed text-[#585858]">
            The COASTELLA prototype showcases a solar-powered buoy model
            equipped with sensors for monitoring water levels, wind speed, wave
            activity, and water quality. It also demonstrates the GPS tracking,
            siren alerts, and real-time notification system, all integrated into
            a web-based dashboard for accessible and timely coastal monitoring.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          {/* Main Carousel */}
          <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-lg bg-white shadow-md md:min-h-[500px]">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex h-[400px] w-full flex-shrink-0 items-center justify-center bg-gray-100 md:h-[500px] dark:bg-[#0077B6]"
                >
                  {index === 0 ? (
                    <div className="flex h-full w-full items-end pt-70">
                      {" "}
                      {/* Changed items-center to items-end and added pb-4 */}
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
              className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0077B6] shadow hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0077B6] shadow hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Pagination (Thumbnails) */}
          <div className="no-scrollbar flex max-h-[500px] gap-2 overflow-x-auto md:flex-col md:overflow-y-auto">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex h-20 w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md border text-xs md:h-28 md:w-32 ${
                  currentIndex === index
                    ? "border-blue-500"
                    : "border-gray-100 dark:border-neutral-700"
                }`}
              >
                <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-[#0077B6]">
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
