import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-sm">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & About */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white mb-6 block">
              Futuristic<span className="text-blue-500">Noida</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your premium partner for real estate in Delhi NCR. We specialize in verified listings, transparency, and high-ROI investment opportunities across Noida and Greater Noida.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1H2z8NYWqM/?mibextid=wwXIfr" className="hover:text-blue-500 transition"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/futuristicnoida" className="hover:text-blue-500 transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center hover:text-blue-500 transition">
                  <ChevronRight size={16} className="text-blue-500 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center hover:text-blue-500 transition">
                  <ChevronRight size={16} className="text-blue-500 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/developers" className="flex items-center hover:text-blue-500 transition">
                  <ChevronRight size={16} className="text-blue-500 mr-2" /> Top Developers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center hover:text-blue-500 transition">
                  <ChevronRight size={16} className="text-blue-500 mr-2" /> Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-blue-500 transition">
                  <ChevronRight size={16} className="text-blue-500 mr-2" /> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span>
                  LG 16, Rise Shoplex,<br />
                  Atul Marg, Sector 1, Greater Noida,<br />
                  Uttar Pradesh
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <span>+91 96500 33511</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <span>futuristicnoida@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Futuristic Noida. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-xs">
            Designed for Real Estate Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}