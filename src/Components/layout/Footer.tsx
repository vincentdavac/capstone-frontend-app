import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#023E8A]">
      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left Column - Brand Info */}
          <div className="space-y-4">
            <h3 className="text-5xl font-light">COASTELLA</h3>
            <p className="text-lg">Stay Informed, Stay Safe, Stay Ahead</p>
          </div>

          {/* Middle Columns - Links */}
          <div className="grid grid-cols-2 gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="pb-3 text-3xl font-light">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About COASTELLA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Prototype
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="pb-3 text-3xl font-light">RESOURCES</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:underline">
                    Project Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Research Paper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Form
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <h4 className="pb-3 text-3xl font-light">CONTACT INFORMATION</h4>
            <ul className="space-y-3">
              <li>Email: coastella.project@gmail.com</li>
              <li className="flex items-center space-x-4">
                <span>Facebook Page /</span>
                <div className="flex space-x-2">
                  <a href="#">
                    <FacebookIcon size={20} />
                  </a>
                  <a href="#">
                    <InstagramIcon size={20} />
                  </a>
                  <a href="#">
                    <TwitterIcon size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <p className="font-light">
              © 2025 COASTELLA | Coastal Operations Monitoring and Alert System
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
