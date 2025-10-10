import { motion } from "framer-motion";
import { fadeUp } from "../hooks/fadeUpMotion";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageSquareHeart,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeUp}
      className="bg-gray-900 text-white px-6 pt-10 pb-6"
    >
      {/* Homepage Branding Section */}
      <div className="text-center border-b border-gray-700 pb-6">
        <h1 className="text-4xl font-bold">HERO.IO</h1>
        <p className="text-sm text-gray-400 mt-2">
          Changing the world one image at a time.
        </p>
        <div className="mt-4">
          <select className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-600">
            <option>English</option>
            <option>বাংলা</option>
          </select>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
        {/* Left Promo Section */}
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold mb-2">
            Get great features with your free account
          </h2>
        </div>

        {/* Link Sections */}
        {[
          {
            title: "Our company",
            links: ["About us", "Careers", "Blog", "Sitemap"],
          },
          {
            title: "Buying from HERO.IO",
            links: [
              "Our licenses",
              "Browse by category",
              "Enterprise",
              "Fresh picks",
              "Video",
              "Live news feed",
              "API Access",
            ],
          },
          {
            title: "Sell your content",
            links: ["Become a contributor", "Contributor help", "Contact team"],
          },
          {
            title: "Support",
            links: ["Contact us", "Complaints", "FAQ"],
          },
        ].map((section, i) => (
          <div key={i}>
            <h3 className="font-bold mb-2">{section.title}</h3>
            <ul className="space-y-1 text-sm">
              {section.links.map((link, j) => (
                <li key={j}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">
            Get inspired for your next project!
          </h3>
          <p className="text-sm text-gray-400">Subscribe to our newsletter</p>
        </div>
        <div className="flex gap-3 ">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white w-20 md:w-25 px-2 md:px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>

      {/* Social Media & Payment Icons */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-6">
        {/* Social Icons */}
        <div className="flex gap-4">
          <Facebook />
          <Instagram />
          <Twitter />
          <Linkedin />
          <Youtube />
          <MessageSquareHeart />
        </div>

        {/* Payment Icons */}
        <div className="flex gap-4">
          <img src="/SSL-commerz.webp" alt="" />
        </div>
      </div>

      {/* Legal Section */}
      <div className="mt-8 text-center text-sm text-gray-400 space-y-2">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:underline">
            Terms and conditions
          </a>
          <a href="#" className="hover:underline">
            Copyright complaints
          </a>
          <a href="#" className="hover:underline">
            Rights and Clearance
          </a>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
        </div>
        <p className="mt-4">
          HERO.IO and its logo are trademarks of HERO.IO Ltd. and are registered
          in certain countries. <br />
          Copyright © 09/10/2025 HERO.IO Ltd. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
