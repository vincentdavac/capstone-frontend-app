import { LinkedinIcon, TwitterIcon } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Emily Chen",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Ph.D. in Agricultural Engineering with over 15 years of experience in hydroponic systems design.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Research",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Former NASA plant researcher specializing in closed-system agriculture and nutrient optimization.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sophia Rodriguez",
      role: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Industrial designer with a passion for creating beautiful, functional growing systems for any space.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Park",
      role: "Sustainability Director",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Environmental scientist focused on reducing the ecological footprint of food production systems.",
      linkedin: "#",
      twitter: "#",
    },
  ];
  return (
    <section className="w-full bg-[#FCF5E6] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#386742] md:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Passionate experts dedicated to revolutionizing how we grow and
            connect with our food.
          </p>
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="min-w-[280px] shrink-0 transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:min-w-0"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#386742]">
                  {member.name}
                </h3>
                <p className="mb-3 text-sm text-gray-600">{member.role}</p>
                {/* <p className="mb-4 text-gray-700">{member.bio}</p> */}
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="text-[#386742] hover:text-[#386742]/80"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-[#386742] hover:text-[#386742]/80"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <TwitterIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
