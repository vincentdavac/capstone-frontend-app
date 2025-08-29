import ModelViewer from "../ModelViewer";

const leftImages = [
  "/solar charge controller.svg",
  "/rain sensor.svg",
  "/warning light.svg",
  "/battery.svg",
];

const rightImages = [
  "/pressure sensor.svg",
  "/gps.svg",
  "/anememtmoeajs.svg",
  "/kulang sa sensor.svg",
];

export default function Prototype() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-wide text-[#1E3A8A] sm:text-3xl md:text-5xl">
            THE COASTELLA PROTOTYPE
          </h2>
          <p className="max-w-8xl mx-auto pt-5 text-center leading-relaxed text-[#023E8A] sm:text-xl md:text-2xl">
            The COASTELLA prototype showcases a solar-powered buoy model
            equipped with sensors for monitoring water levels, wind speed, wave
            activity, and water quality. It also demonstrates GPS tracking,
            siren alerts, and a real-time notification system — all integrated
            into a web-based dashboard for accessible and timely coastal
            monitoring.
          </p>
        </div>

        {/* DESKTOP VIEW LAYOUT */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
          {/* LEFT IMAGES */}
          <div className="hidden flex-col justify-center gap-6 md:flex">
            {leftImages.map((src, idx) => (
              <div
                key={idx}
                className="flex h-26.5 w-27 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-md"
              >
                <img
                  src={src}
                  alt={`sensor-${idx}`}
                  className="h-20 w-20 object-contain md:h-24 md:w-24"
                />
              </div>
            ))}
          </div>

          {/* 3d Prototype Model */}
          <div className="flex w-full max-w-sm items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-lg sm:max-w-md md:h-[500px] md:w-[420px]">
            <ModelViewer />
          </div>

          {/* RIGHT */}
          <div className="hidden flex-col justify-center gap-6 md:flex">
            {rightImages.map((src, idx) => (
              <div
                key={idx}
                className="flex h-26.5 w-27 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-md"
              >
                <img
                  src={src}
                  alt={`sensor-${idx}`}
                  className="h-20 w-20 object-contain md:h-24 md:w-24"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW LAYOUT */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:hidden">
          {[...leftImages, ...rightImages].map((src, idx) => (
            <div
              key={idx}
              className="flex h-24 w-full items-center justify-center rounded-xl border border-gray-200 bg-white shadow-md"
            >
              <img
                src={src}
                alt={`sensor-${idx}`}
                className="h-16 w-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
