"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, Medal, Crown, Target } from "lucide-react";

const awards = [
  {
    title: "National Winner - Thoucentric Bottoms-Up",
    description: "Tech Business Consulting-Digital Transformation (1/1.5k+ teams)",
    institution: "IIMB",
    type: "National",
    icon: Crown,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    title: "National Winner - TRBS-IIMA Aagaz",
    description: "B-Plan with business model innovation for social needs (1/719 teams)",
    institution: "IIMB",
    type: "National",
    icon: Trophy,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Campus Winner - Bajaj Auto OffRoad-Challenge",
    description: "Go-To-Market strategy for Pulsar Neon (1/100+ teams)",
    institution: "IIMB",
    type: "Campus",
    icon: Target,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Ranked 8/1204 - PM Live Competition",
    description: "National Level Product Management Competition by Spotle.ai & IIMA",
    institution: "National",
    type: "Competition",
    icon: Medal,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Campus Winner - Renew Power Re-lead 3.0",
    description: "Strategy to diversify into new area (1/75+ teams)",
    institution: "IIMB'20",
    type: "Campus",
    icon: Award,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Campus Finalist - MI Xiaomi Summit 2.0",
    description: "Building ecosystem for Consumer Internet of Things (1/5 of 500+ teams)",
    institution: "IIMB'20",
    type: "Campus",
    icon: Star,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "National Winner - NIT Conclave",
    description: "Inter NIT summit plan to promote entrepreneurship (1/31 NITs)",
    institution: "NITK",
    type: "National",
    icon: Crown,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "CBSE National Merit Scholar",
    description: "Recognized for 4 consecutive years under Central Sector Scholarship (1/350)",
    institution: "National",
    type: "Scholarship",
    icon: Medal,
    color: "bg-indigo-100 text-indigo-600"
  }
];

const positions = [
  {
    title: "Chief Coordinator - Tech Fest Engineer",
    period: "NITK'16-17",
    achievements: [
      "Successfully raised ₹30 Lakh+ in sponsorships",
      "Managed 10k+ footfall",
      "Boosted Facebook likes to 295k+"
    ]
  },
  {
    title: "Convenor - Entrepreneurship Cell",
    period: "NITK'16-17",
    achievements: [
      "Led 50+ members",
      "Spearheaded the E-Summit",
      "Served as Student Point of Contact for Incubation Center"
    ]
  },
  {
    title: "Placement Coordinator - Computer Eng. Dept.",
    period: "NITK'16-17",
    achievements: [
      "Elected 1/6 of 110 students",
      "Served as SPOC for 15 recruiting companies"
    ]
  },
  {
    title: "Class Representative",
    period: "NITK'13-17",
    achievements: [
      "Elected 1 of 54 students for all 4 years",
      "Liaised between faculty, students, and academic office"
    ]
  }
];

export default function AwardsSection() {
  return (
    <section id="awards" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
            Awards & Recognition
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Recognized for excellence in business, technology, and leadership across national and campus platforms
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${award.color}`}>
                      <award.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <Badge 
                          variant="outline" 
                          className={`${
                            award.type === 'National' 
                              ? 'text-red-600 border-red-200 bg-red-50' 
                              : award.type === 'Campus'
                              ? 'text-blue-600 border-blue-200 bg-blue-50'
                              : 'text-green-600 border-green-200 bg-green-50'
                          }`}
                        >
                          {award.type}
                        </Badge>
                        <Badge variant="secondary" className="bg-neutral-100 text-neutral-700">
                          {award.institution}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-2">{award.title}</h4>
                      <p className="text-sm text-neutral-600">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Positions of Responsibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-display font-medium text-neutral-900 mb-8 text-center">
            Positions of Responsibility
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <h4 className="font-semibold text-neutral-900">{position.title}</h4>
                      <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                        {position.period}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {position.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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