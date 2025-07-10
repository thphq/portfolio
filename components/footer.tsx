"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  User, 
  Briefcase, 
  Award, 
  BookOpen, 
  Mail, 
  Linkedin,
  MapPin,
  Phone,
  Globe,
  ExternalLink
} from "lucide-react";

const navigationItems = [
  { id: "home", label: "Home", href: "/", icon: Home },
  { id: "about", label: "About", href: "/about", icon: User },
  { id: "experience", label: "Experience", href: "/experience", icon: Briefcase },
  { id: "achievements", label: "Achievements", href: "/achievements", icon: Award },
  { id: "blog", label: "Blog", href: "/blog", icon: BookOpen },
  { id: "contact", label: "Contact", href: "/contact", icon: Mail },
];

const quickLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Video Introduction", href: "#video" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vikas-meena-0998b579",
    icon: Linkedin,
    color: "text-blue-600 hover:text-blue-700"
  },
  {
    label: "Email",
    href: "mailto:I@meenavik.com",
    icon: Mail,
    color: "text-green-600 hover:text-green-700"
  },
  {
    label: "Website",
    href: "https://meenavik.com",
    icon: Globe,
    color: "text-purple-600 hover:text-purple-700"
  }
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  const handleEmailClick = () => {
    window.open('mailto:I@meenavik.com?subject=Product Management Opportunity&body=Hi Vikas,%0D%0A%0D%0AI would like to discuss...', '_blank');
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Vikas Meena
            </h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Senior Product Manager passionate about building 0-1 products and scaling platforms to millions of users.
            </p>
            <div className="space-y-2 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Goa, India | Open to Relocation</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:I@meenavik.com" 
                  className="hover:text-amber-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleEmailClick();
                  }}
                >
                  I@meenavik.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-2 text-neutral-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                    {item.href.startsWith('/') && item.href !== '/' && (
                      <ExternalLink className="w-3 h-3" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-neutral-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${social.color} transition-colors text-sm`}
                  onClick={social.label === 'Email' ? (e) => {
                    e.preventDefault();
                    handleEmailClick();
                  } : undefined}
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>
            
            <Button 
              onClick={handleEmailClick}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-neutral-400">
              © 2025 Vikas Meena. All rights reserved. | Senior Product Manager | IIM Bangalore MBA | NITK Computer Science
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-neutral-500">
              <span>Born in Kota, Rajasthan</span>
              <span>•</span>
              <span>Based in Goa, India</span>
              <span>•</span>
              <span>Open to Global Opportunities</span>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-neutral-500 text-center md:text-left">
            Passionate about democratizing technology to solve world problems | 7+ years building 0-1 products | 40L+ users impacted
          </div>
        </motion.div>
      </div>
    </footer>
  );
}