import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#386742] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">GreenGrow</h3>
            <p className="mb-4">
              Sustainable hydroponics solutions for homes and businesses. Grow
              better with less water.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FCF5E6]">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="hover:text-[#FCF5E6]">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="hover:text-[#FCF5E6]">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="hover:text-[#FCF5E6]">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#FCF5E6]">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FCF5E6]">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FCF5E6]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FCF5E6]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FCF5E6]">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#FCF5E6]">
                  Home Systems
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FCF5E6]">
                  Commercial Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FCF5E6]">
                  Nutrients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FCF5E6]">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FCF5E6]">
                  Seed Starter Kits
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPinIcon size={18} className="mr-2" />
                <span>123 Green Street, Plant City, CA 94123</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="mr-2" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={18} className="mr-2" />
                <span>info@greengrow.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} GreenGrow Hydroponics. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
