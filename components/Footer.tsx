
import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-saffron">MahaMaheswaram</h3>
          <p className="text-gray-400 leading-relaxed">
            Dedicated to spiritual growth, community welfare, and the preservation of our ancient Vedic heritage through service and devotion.
          </p>
          <div className="flex space-x-4">
            <Facebook className="hover:text-saffron cursor-pointer" />
            <Instagram className="hover:text-saffron cursor-pointer" />
            <Youtube className="hover:text-saffron cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white cursor-pointer">Daily Puja Schedule</li>
            <li className="hover:text-white cursor-pointer">Tourism Guide</li>
            <li className="hover:text-white cursor-pointer">Vivah Bhawan Enquiry</li>
            <li className="hover:text-white cursor-pointer">Annual Reports</li>
            <li className="hover:text-white cursor-pointer">Volunteer Enrollment</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="text-saffron flex-shrink-0" size={20} />
              <span>Divine Valley, Temple Road, Maheswaram Dham, Uttar Pradesh - 226001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-saffron" size={20} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-saffron" size={20} />
              <span>trust@mahamaheswaram.org</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Donation Details</h4>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <p className="text-xs text-gray-500 uppercase font-bold mb-2">Account Name</p>
            <p className="text-sm mb-4">MAHA MAHESWARAM DHAM TRUST</p>
            <p className="text-xs text-gray-500 uppercase font-bold mb-2">Bank & IFSC</p>
            <p className="text-sm">HDFC Bank - HDFC0001234</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2024 MahaMaheswaramDham Temple Trust. All Rights Reserved. All donations are 80G tax exempt.
      </div>
    </footer>
  );
};

export default Footer;
