
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Truck, Settings } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center mb-6">
            <img src="/giant_edge_logo.png" alt="GIANT EDGE TECHNOLOGIES" className="h-16 w-auto object-contain" />
          </div>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">
            Premium Nigerian retailer specializing in high-quality tech solutions, laptop repairs, and digital services. We prioritize reliability, trust, and exceptional nationwide delivery.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-blue-900/50 rounded-lg hover:bg-blue-800 transition"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-blue-900/50 rounded-lg hover:bg-blue-800 transition"><Twitter size={18} /></a>
            <a href="https://www.instagram.com/info_fix_laptops_gadgets/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-900/50 rounded-lg hover:bg-blue-800 transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-blue-100 text-sm">
            <li><Link to="/shop" className="hover:text-white transition">Shop Catalog</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            <li><Link to="/finder" className="hover:text-white transition">AI Laptop Finder</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-blue-100 text-sm">
            <li>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white mb-1">Office Address</p>
                  <p className="text-xs leading-relaxed">number 21 kuteyi street, owalusin iwaro oka akoko Ondo state</p>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-3 mt-6"><Phone size={18} className="text-blue-300" /> <span>09166669209</span></li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-blue-300" /> <span>bellojosh500@gmail.com</span></li>
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-blue-900/30 p-8 rounded-[2rem] border border-blue-800/50 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl group-hover:bg-blue-300/20 transition-colors" />
            <h4 className="font-black text-blue-300 text-xs uppercase tracking-[0.2em] mb-4">Words of Wisdom</h4>
            <p className="text-lg font-bold italic leading-relaxed text-white mb-6 relative z-10">
              "A SQL query walks into a bar, walks up to two tables, and asks... 'Can I join you?'"
            </p>
            <div className="flex items-center gap-3 border-t border-blue-800/50 pt-4">
              <div className="w-8 h-8 rounded-full bg-blue-300/20 flex items-center justify-center text-[10px] font-black">DE</div>
              <div>
                <p className="font-black text-xs text-white">Database Engineer</p>
                <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">Master of Tables & Joins</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-300 text-xs">
        <p>&copy; {new Date().getFullYear()} GIANT EDGE TECHNOLOGIES. Trusted Retailer. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
