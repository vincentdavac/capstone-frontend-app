import { useEffect, useState } from "react";
import { Button } from "../Common/Button";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

// CRUD
export default function Slider() {
  const slides = [
    {
      image:
        "https://scontent.fmnl7-1.fna.fbcdn.net/v/t39.30808-6/508738812_726906326947774_6360256377794611661_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=j6EPyJc7Z3UQ7kNvwHeQKzm&_nc_oc=AdlMgBXP-kD3WdUyKx3x0Z-YMJyRA1YqvSW-GSE_6EmZS5WOXvEJyp6VJVtNhEoW2p7jKz2-Brpu0cNRaI142TWO&_nc_zt=23&_nc_ht=scontent.fmnl7-1.fna&_nc_gid=t6nggFiJRJuHzU3BxWDlgQ&oh=00_AfRboUbOmovjr_FtmD9T_e4mFMaHTqprxr6Kd6I1yKR4qw&oe=6881004A",
      title: "Grow Better with Hydroponics",
      description:
        "Sustainable, soil-free growing solutions for your home or business. Experience faster growth and higher yields with our innovative hydroponics systems.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Year-Round Growing",
      description:
        "Don't let seasons limit your garden. With hydroponics, grow fresh produce any time of year, regardless of outdoor conditions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Perfect for Any Space",
      description:
        "From apartment countertops to commercial operations, our hydroponic systems are designed to fit your unique space and needs.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <section className="relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] w-screen bg-[#FFFFF]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center md:flex-row">
            <div className="z-10 mb-10 md:mb-0 md:w-1/2">
              <h1 className="mb-4 text-4xl leading-tight font-bold text-[#39A7FF] md:text-5xl lg:text-5xl">
                {slides[currentSlide].title}
              </h1>
              <p className="mb-8 max-w-lg text-lg text-[#39A7FF] md:text-xl">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button>Get Started</Button>
                <Button variant="outline">
                  <span className="flex items-center">
                    Learn More
                    <ArrowRightIcon size={18} className="ml-2" />
                  </span>
                </Button>
              </div>
            </div>
            <div className="relative w-full md:w-1/2">
              <div className="relative h-[300px] min-h-[300px] overflow-hidden rounded-lg shadow-xl md:h-[400px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                  >
                    <img
                      src={slide.image}
                      alt="Hydroponic growing system"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#386742]/20 to-transparent"></div>
                  </div>
                ))}
                {/* Slider controls */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-[#39A7FF] hover:bg-white"
                  aria-label="Previous slide"
                >
                  <ChevronLeftIcon size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-[#39A7FF] hover:bg-white"
                  aria-label="Next slide"
                >
                  <ChevronRightIcon size={24} />
                </button>
                {/* Slide indicators */}
                <div className="absolute right-0 bottom-4 left-0 flex justify-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 w-3 rounded-full ${index === currentSlide ? "bg-[#87C4FF]" : "bg-white/50"}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
