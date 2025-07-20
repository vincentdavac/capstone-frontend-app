import { GlobeIcon, HeartHandshakeIcon } from "lucide-react";

export default function About() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#386742] md:text-4xl">
            About GreenGrow
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">
            We're on a mission to revolutionize how people grow food, making it
            more sustainable, accessible, and enjoyable for everyone.
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
            <h3 className="mb-4 text-2xl font-semibold text-[#386742]">
              Our Story
            </h3>
            <p className="mb-4 text-gray-700">
              Founded in 2015 by a team of agricultural engineers and
              environmental scientists, GreenGrow began with a simple idea: to
              make growing food more efficient, sustainable, and accessible to
              everyone.
            </p>
            <p className="mb-4 text-gray-700">
              After years of research and development, we created our first
              hydroponic system designed specifically for home use. Since then,
              we've expanded our product line to serve everyone from apartment
              dwellers to commercial growers.
            </p>
            <p className="text-gray-700">
              Today, GreenGrow systems are used in homes, schools, restaurants,
              and commercial operations across the country, helping people
              reconnect with their food while conserving valuable resources.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-[#FCF5E6] p-6 shadow-md">
            <GlobeIcon size={40} className="mb-4 text-[#386742]" />
            <h3 className="mb-3 text-xl font-semibold text-[#386742]">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To transform how people grow and connect with their food through
              innovative, sustainable hydroponic solutions.
            </p>
          </div>
          <div className="rounded-lg bg-[#FCF5E6] p-6 shadow-md">
            <GlobeIcon size={40} className="mb-4 text-[#386742]" />
            <h3 className="mb-3 text-xl font-semibold text-[#386742]">
              Our Vision
            </h3>
            <p className="text-gray-700">
              A world where everyone has access to fresh, healthy food grown
              sustainably with minimal environmental impact.
            </p>
          </div>
          <div className="rounded-lg bg-[#FCF5E6] p-6 shadow-md">
            <HeartHandshakeIcon size={40} className="mb-4 text-[#386742]" />
            <h3 className="mb-3 text-xl font-semibold text-[#386742]">
              Our Values
            </h3>
            <p className="text-gray-700">
              Sustainability, innovation, education, and accessibility guide
              everything we do at GreenGrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
