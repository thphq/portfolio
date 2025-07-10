"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Shield, Database } from "lucide-react";

const internships = [
  {
    title: "Product Manager Intern",
    company: "Zensar Technologies, RPG",
    location: "Pune, India",
    period: "Apr 2021 - Jun 2021",
    description: "A global technology services and consulting company, part of the RPG Group.",
    achievements: [
      "Developed future strategy for Quantum Computing & AI/ML with extensive industry analysis",
      "Identified 20+ potential business use-cases and recommended 4 Zensar-fit solutions",
      "Devised comprehensive strategic roadmap and execution plan for market entry",
      "Contributed to strategic planning for emerging technology adoption"
    ],
    technologies: ["Strategic Planning", "Market Research", "Competitive Analysis", "Quantum Computing", "AI/ML Strategy", "Business Development"],
    icon: Building2,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Data Science Intern",
    company: "Epzeta",
    location: "Bangalore, India",
    period: "May 2016 - July 2016",
    description: "A data science and analytics firm, specializing in extracting insights from large datasets.",
    achievements: [
      "Developed and optimized end-to-end data cleaning and formatting pipelines",
      "Implemented daily e-commerce data crawlers and integrated with Facebook API",
      "Built recommendation model to predict user taste for cross-selling opportunities",
      "Improved data quality and processing efficiency through automation"
    ],
    technologies: ["Data Science", "Python", "API Integration", "Data Pipeline", "Machine Learning", "E-commerce Analytics"],
    icon: Database,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Cyber Security Intern",
    company: "ASD Cybersecurity",
    location: "Kota, India",
    period: "May 2014 - July 2014",
    description: "A cybersecurity firm providing vulnerability assessment and penetration testing services.",
    achievements: [
      "Conducted rigorous security vulnerability testing for web applications",
      "Identified and reported critical flaws like SQL injection and Cross-Site Scripting (XSS)",
      "Performed network security assessments using tools like Kali Linux",
      "Protected systems against malicious threats through comprehensive testing"
    ],
    technologies: ["Cybersecurity", "Penetration Testing", "Kali Linux", "Vulnerability Assessment", "Network Security", "Web Application Security"],
    icon: Shield,
    color: "bg-red-100 text-red-600"
  }
];

export default function InternshipsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
            Internships & Early Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Gaining practical experience and applying academic knowledge in real-world settings across diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${internship.color}`}>
                      <internship.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                      {internship.period}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-display font-medium text-neutral-900 mb-2">
                    {internship.title}
                  </CardTitle>
                  <p className="text-lg text-neutral-600 font-semibold">{internship.company}</p>
                  <p className="text-sm text-neutral-500">{internship.location}</p>
                  <p className="text-sm text-neutral-600 italic mt-2">{internship.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-neutral-100 text-neutral-700 hover:bg-neutral-200 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}