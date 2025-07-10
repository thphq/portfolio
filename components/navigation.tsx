"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Award, BookOpen, Mail, ExternalLink } from "lucide-react";

const navigationItems = [
  { id: "home", label: "Home", href: "#", icon: Home },
  { id: "about", label: "About", href: "#about", icon: User },
  { id: "experience", label: "Experience", href: "#experience", icon: Briefcase },
  { id: "projects", label: "Projects", href: "#projects", icon: Award },
  { id: "skills", label: "Skills", href: "#skills", icon: Award },
  { id: "awards", label: "Awards", href: "#awards", icon: Award },
  { id: "blog", label: "Blog", href: "/blog", icon: BookOpen },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.filter(item => item.href.startsWith('#'));
      for (const section of sections) {
        const element = document.querySelector(section.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#', 'home');
                }}
                className="text-xl font-display font-bold text-neutral-900"
              >
                Vikas Meena
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <motion.div key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-neutral-700 hover:text-amber-600 hover:bg-amber-50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                    {item.href.startsWith('/') && <ExternalLink className="w-3 h-3" />}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-700"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigationItems.indexOf(item) * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`w-full justify-start flex items-center gap-3 px-4 py-3 text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-neutral-700 hover:text-amber-600 hover:bg-amber-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                    {item.href.startsWith('/') && <ExternalLink className="w-4 h-4 ml-auto" />}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
}