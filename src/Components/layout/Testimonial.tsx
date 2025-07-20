import { StarIcon } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Gardener",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      quote:
        "I never thought I could grow my own vegetables in my apartment. Thanks to GreenGrow's countertop system, I have fresh herbs and lettuce year-round!",
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      quote:
        "We installed GreenGrow's commercial system in our restaurant and now grow all our own herbs and microgreens. The freshness is unmatched and our customers notice the difference.",
    },
    {
      name: "Emma Rodriguez",
      role: "School Teacher",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      quote:
        "Our classroom hydroponic garden has been an amazing educational tool. The students are engaged and excited to learn about sustainable agriculture.",
    },
  ];

  return (
    <section className="w-full bg-[#FCF5E6] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#386742] md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Join thousands of satisfied growers who've transformed their spaces
            with hydroponics.
          </p>
        </div>

        <div className="no-scrollbar flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="h-[400px] min-w-[280px] shrink-0 rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg md:h-auto md:min-w-0"
            >
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={18}
                    className="fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="truncate-multiline mb-6 text-gray-700 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#386742]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
