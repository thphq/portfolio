"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  BarChart3, 
  Users, 
  Lightbulb, 
  Target, 
  Zap,
  Code,
  Database,
  Smartphone,
  Globe,
  Shield,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Product Strategy",
    icon: Brain,
    color: "bg-blue-100 text-blue-600",
    skills: [
      { name: "Product Roadmapping", level: 95 },
      { name: "Market Research & Analysis", level: 92 },
      { name: "Competitive Analysis", level: 88 },
      { name: "Go-to-Market Strategy", level: 92 },
      { name: "Product Vision & Strategy", level: 94 },
      { name: "0-1 Product Development", level: 96 }
    ]
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    color: "bg-green-100 text-green-600",
    skills: [
      { name: "SQL & Data Analysis", level: 85 },
      { name: "A/B Testing", level: 90 },
      { name: "Product Analytics", level: 92 },
      { name: "KPI Definition", level: 88 },
      { name: "Business Intelligence", level: 80 },
      { name: "Fraud Detection Models", level: 85 }
    ]
  },
  {
    title: "User Experience",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
    skills: [
      { name: "User Research", level: 88 },
      { name: "Wireframing", level: 85 },
      { name: "Prototyping", level: 82 },
      { name: "Usability Testing", level: 90 },
      { name: "Design Thinking", level: 87 },
      { name: "Customer Journey Mapping", level: 88 }
    ]
  },
  {
    title: "Technical Skills",
    icon: Code,
    color: "bg-amber-100 text-amber-600",
    skills: [
      { name: "API Design", level: 75 },
      { name: "System Architecture", level: 70 },
      { name: "Agile/Scrum", level: 95 },
      { name: "Technical Documentation", level: 88 },
      { name: "Cloud Platforms", level: 72 },
      { name: "Payment Integration", level: 85 },
      { name: "Multi-tenant SaaS", level: 80 }
    ]
  }
];

const tools = [
  { name: "Figma", category: "Design", icon: Globe },
  { name: "Jira", category: "Project Management", icon: Target },
  { name: "Confluence", category: "Documentation", icon: Lightbulb },
  { name: "Razorpay", category: "Payments", icon: Zap },
  { name: "Amplitude", category: "Analytics", icon: BarChart3 },
  { name: "Mixpanel", category: "Analytics", icon: BarChart3 },
  { name: "Notion", category: "Documentation", icon: Lightbulb },
  { name: "Slack", category: "Communication", icon: Users },
  { name: "Tableau", category: "Data Visualization", icon: BarChart3 },
  { name: "Postman", category: "API Testing", icon: Zap },
  { name: "AWS", category: "Cloud", icon: Database },
  { name: "GitHub", category: "Version Control", icon: Code },
  { name: "Firebase", category: "Backend", icon: Database },
  { name: "Google Analytics", category: "Analytics", icon: BarChart3 },
  { name: "Hotjar", category: "User Research", icon: Users },
  { name: "Intercom", category: "Customer Support", icon: Users }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning product strategy, data analysis, user experience, and technical implementation
          </p>
        </motion.div>

        {/* Core Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
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
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-display font-medium text-neutral-900">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
                          <span className="text-sm text-neutral-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full ${
                              category.title === 'Product Strategy' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                              category.title === 'Data & Analytics' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                              category.title === 'User Experience' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                              'bg-gradient-to-r from-amber-500 to-amber-600'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-display font-medium text-neutral-900 text-center">
                Tools & Technologies
              </CardTitle>
              <p className="text-neutral-600 text-center">
                Proficient in industry-leading tools for product management and development
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-200"
                  >
                    <tool.icon className="w-5 h-5 text-neutral-600" />
                    <div>
                      <div className="font-medium text-neutral-800 text-sm">{tool.name}</div>
                      <div className="text-xs text-neutral-500">{tool.category}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}