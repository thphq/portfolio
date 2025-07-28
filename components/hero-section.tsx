"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import { Suspense } from "react";

// Loading component for better UX
const HeroLoading = () => (
  <div className="flex flex-col overflow-hidden bg-gradient-to-b from-neutral-50 to-white min-h-screen">
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse space-y-6 text-center">
        <div className="h-16 bg-neutral-200 rounded-lg w-96 mx-auto"></div>
        <div className="h-8 bg-neutral-200 rounded-lg w-64 mx-auto"></div>
        <div className="h-6 bg-neutral-200 rounded-lg w-80 mx-auto"></div>
      </div>
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <Suspense fallback={<HeroLoading />}>
      <div className="flex flex-col overflow-hidden bg-gradient-to-b from-neutral-50 to-white relative">
        {/* Floating Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="fixed top-6 right-6 z-50"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-neutral-200 p-2">
            <div className="flex items-center gap-2">
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center text-blue-600 transition-colors"
                title="Experience"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2zm-8 0V8a2 2 0 00-2 2H4a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2z" />
                </svg>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center text-green-600 transition-colors"
                title="Projects"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </motion.a>
              <motion.a
                href="#skills"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center text-purple-600 transition-colors"
                title="Skills"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.a>
              <motion.a
                href="#awards"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center text-amber-600 transition-colors"
                title="Awards"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center text-red-600 transition-colors"
                title="Contact"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <ContainerScroll
          titleComponent={
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-neutral-900 leading-tight">
                  Vikas Meena
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
                <p className="text-lg text-neutral-500 font-medium">Senior Product Manager | IIM Bangalore MBA | NITK Computer Science</p>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-neutral-600 leading-relaxed max-w-4xl mx-auto"
              >
                Passionate about democratizing technology to solve world problems
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed"
              >
                Building 0-1 products and scaling platforms to millions of users<br className="hidden sm:inline" /> 
                with proven expertise in driving measurable business impact
              </motion.p>
            </div>
          }
        >
          {/* Products Shipped Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-neutral-200 flex flex-col items-center justify-center text-center h-full"
          >
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-2">15+</h3>
            <h4 className="font-semibold text-neutral-700 mb-2">Products Shipped</h4>
            <p className="text-sm text-neutral-600">From 0-1 startups to enterprise platforms</p>
          </motion.div>

          {/* Users Impacted Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-neutral-200 flex flex-col items-center justify-center text-center h-full"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-2">40L+</h3>
            <h4 className="font-semibold text-neutral-700 mb-2">Users Impacted</h4>
            <p className="text-sm text-neutral-600">Across global platforms & markets</p>
          </motion.div>

          {/* Revenue Generated Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-neutral-200 flex flex-col items-center justify-center text-center h-full"
          >
            <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2zm-8 0V8a2 2 0 00-2 2H4a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-2">7+</h3>
            <h4 className="font-semibold text-neutral-700 mb-2">Years Experience</h4>
            <p className="text-sm text-neutral-600">Building products & leading teams</p>
          </motion.div>
        </ContainerScroll>
      </div>
    </Suspense>
  );
}