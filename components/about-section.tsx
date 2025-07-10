"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Target, 
  Users,
  Lightbulb,
  TrendingUp,
  Globe,
  Award
} from "lucide-react";

const personalInfo = {
  birthPlace: "Kota, Rajasthan, India",
  currentLocation: "Goa, India",
  openToRelocation: true,
  languages: ["English", "Hindi", "Rajasthani"],
  interests: ["Technology Innovation", "Startup Ecosystem", "Product Strategy", "Team Building", "Problem Solving"]
};

const philosophy = {
  mission: "Democratizing technology solutions to solve real-world problems and create meaningful impact for millions of users",
  vision: "Building products that bridge the gap between complex technology and human needs, making innovation accessible to everyone",
  values: [
    {
      title: "Empathy-Driven Design",
      description: "Understanding user pain points deeply to create solutions that truly matter",
      icon: Heart
    },
    {
      title: "Data-Informed Decisions",
      description: "Leveraging analytics and user research to guide product strategy and execution",
      icon: TrendingUp
    },
    {
      title: "Bias to Action",
      description: "Moving quickly from ideation to execution while maintaining quality and user focus",
      icon: Target
    },
    {
      title: "Collaborative Leadership",
      description: "Building high-performing teams through trust, transparency, and shared ownership",
      icon: Users
    }
  ]
};

const journey = [
  {
    phase: "Technical Foundation",
    period: "2013-2017",
    description: "Built strong technical foundation at NITK with Computer Science major and Mathematics minor. Led multiple student organizations and co-founded first startup.",
    highlights: ["B.Tech Computer Science from NITK", "Co-founded Adrokart & Opin", "Chief Coordinator - Tech Fest", "Class Representative for 4 years"],
    icon: GraduationCap
  },
  {
    phase: "Industry Experience",
    period: "2017-2020",
    description: "Gained deep technical and product experience at Hubzu, working on real estate platform serving millions of users with $500M+ annual revenue.",
    highlights: ["Senior Software Engineer at Hubzu", "Increased revenue by $5M+", "Reduced churn by 20%", "Fast-track promotion in 24 months"],
    icon: Briefcase
  },
  {
    phase: "Strategic Growth",
    period: "2020-2022",
    description: "Pursued MBA at IIM Bangalore while gaining hands-on experience in growth marketing and product strategy across multiple startups.",
    highlights: ["MBA from IIM Bangalore", "Growth Manager at Perpule", "Multiple national competition wins", "Live projects with 6+ companies"],
    icon: Award
  },
  {
    phase: "Product Leadership",
    period: "2022-Present",
    description: "Leading product initiatives at scale, from enhancing trust systems at Matrimony.com to co-founding and building India's first vernacular teaching platform.",
    highlights: ["Product Manager at Matrimony.com", "Co-founder at Khambee", "Reduced fraud by 80%", "Built 0-1 SaaS platform"],
    icon: Target
  }
];

const expertise = [
  {
    area: "0-1 Product Development",
    description: "Expertise in building products from concept to market launch, having co-founded multiple startups and led product development across diverse industries.",
    examples: ["Khambee teaching platform", "Adrokart group buying", "Opin social network"]
  },
  {
    area: "Platform Scaling",
    description: "Proven track record of scaling platforms to millions of users while maintaining performance, security, and user experience.",
    examples: ["Matrimony.com (30L MAU)", "Hubzu (1M+ MAU)", "StoreSe (25K+ DAU)"]
  },
  {
    area: "Cross-functional Leadership",
    description: "Experience leading diverse teams of 50+ members across engineering, design, marketing, and operations to deliver complex products.",
    examples: ["40+ team at Khambee", "Growth team at Perpule", "Tech Fest coordination"]
  },
  {
    area: "Data-Driven Strategy",
    description: "Leveraging analytics, user research, and market insights to drive product decisions and business growth.",
    examples: ["80% fraud reduction", "Payment optimization", "User behavior analysis"]
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
            About Vikas Meena
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A passionate product leader born in Kota, Rajasthan, with a unique blend of technical expertise and business acumen. 
            Driven by the belief that technology should democratize solutions and solve real-world problems for millions of people.
          </p>
        </motion.div>

        {/* Personal Background */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-medium text-neutral-900 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-amber-600" />
                  Personal Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-neutral-700">
                    <strong>Born:</strong> {personalInfo.birthPlace}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-neutral-700">
                    <strong>Current Location:</strong> {personalInfo.currentLocation}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-700">
                    <strong>Open to Relocation:</strong> Yes, globally
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-neutral-800 mb-2">Languages:</p>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.languages.map((language, index) => (
                      <Badge key={index} variant="secondary" className="bg-neutral-100 text-neutral-700">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-neutral-800 mb-2">Core Interests:</p>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.interests.map((interest, index) => (
                      <Badge key={index} variant="outline" className="text-amber-600 border-amber-200 bg-amber-50 text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-medium text-neutral-900 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-amber-600" />
                  Mission & Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Mission</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {philosophy.mission}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Vision</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {philosophy.vision}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Approach</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Combining technical depth with business strategy, I focus on building products that create genuine value. 
                    My approach is rooted in empathy for users, backed by data-driven insights, and executed with a bias to action.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-medium text-neutral-900 mb-8 text-center">
            Core Values & Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-800 mb-2">{value.title}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-medium text-neutral-900 mb-8 text-center">
            Professional Journey
          </h3>
          <div className="space-y-8">
            {journey.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex items-center gap-4 lg:w-1/3">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <phase.icon className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900">{phase.phase}</h4>
                          <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50 mt-1">
                            {phase.period}
                          </Badge>
                        </div>
                      </div>
                      <div className="lg:w-2/3">
                        <p className="text-neutral-600 mb-4 leading-relaxed">{phase.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {phase.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-neutral-600">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-display font-medium text-neutral-900 mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-display font-medium text-neutral-900">
                      {area.area}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-4 leading-relaxed">{area.description}</p>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800 mb-2">Key Examples:</p>
                      <div className="space-y-1">
                        {area.examples.map((example, eIndex) => (
                          <div key={eIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-neutral-600">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}