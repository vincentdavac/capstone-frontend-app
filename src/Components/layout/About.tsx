import { GlobeIcon, HeartHandshakeIcon } from "lucide-react";

export default function About() {
  return (
    <section className="w-full bg-[#E0F4FF] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0077B6] md:text-6xl">
            ABOUT US
          </h2>
          <p className="mx-auto max-w-7xl text-justify text-2xl leading-relaxed text-[#585858]">
            COASTELLA is a solar-powered, IoT-based buoy system designed to
            monitor coastal areas in real-time. We provide accurate data on
            water levels, wind speed, wave activity, and water quality to help
            communities, authorities, and stakeholders stay informed and
            prepared for coastal hazards. By combining sustainable technology
            with early warning capabilities, we aim to protect lives, preserve
            marine ecosystems, and support disaster preparedness for safer
            coastal communities.
          </p>
        </div>
        <div className="mb-16 flex flex-col items-center gap-8 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Team members working on hydroponic systems"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="mb-4 text-5xl font-semibold text-[#0077B6]">
              Our Story
            </h3>
            <div className="flex flex-col gap-y-8">
              <p className="mb-4 max-w-5xl text-justify text-2xl leading-relaxed text-[#585858]">
                COASTELLA started with a vision: to create a smart and
                affordable way to monitor our coasts and keep communities safe.
                Inspired by the challenges faced by coastal regions—rising sea
                levels, unpredictable waves, and threats like red tide—we
                designed a solar-powered buoy system that provides real-time
                alerts and reliable data.
              </p>
              <p className="mb-4 max-w-5xl text-justify text-2xl leading-relaxed text-[#585858]">
                From concept to creation, our team worked to blend innovation,
                sustainability, and practicality into a single solution.
                COASTELLA isn’t just a project—it’s our commitment to helping
                coastal communities prepare, respond, and thrive in the face of
                environmental challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-[#FAF3DD] p-6 shadow-md">
            <GlobeIcon size={40} className="mb-4 text-[#0077B6]" />
            <h3 className="mb-3 text-xl font-semibold text-[#0077B6]">
              Our Mission
            </h3>
            <p className="text-justify leading-relaxed text-[#0077B6]">
              To transform how people grow and connect with their food through
              innovative, sustainable hydroponic solutions.
            </p>
          </div>
          <div className="rounded-lg bg-[#FAF3DD] p-6 shadow-md">
            <GlobeIcon size={40} className="mb-4 text-[#0077B6]" />
            <h3 className="mb-3 text-xl font-semibold text-[#0077B6]">
              Our Vision
            </h3>
            <p className="text-justify leading-relaxed text-[#0077B6]">
              A world where everyone has access to fresh, healthy food grown
              sustainably with minimal environmental impact.
            </p>
          </div>
          <div className="rounded-lg bg-[#FAF3DD] p-6 shadow-md">
            <HeartHandshakeIcon size={40} className="mb-4 text-[#0077B6]" />
            <h3 className="mb-3 text-xl font-semibold text-[#0077B6]">
              Our Values
            </h3>
            <p className="text-justify leading-relaxed text-[#0077B6]">
              Sustainability, innovation, education, and accessibility guide
              everything we do at GreenGrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
