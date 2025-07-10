"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Heart, Zap, Gamepad2, TrendingUp, Stethoscope } from "lucide-react";

const liveProjects = [
  {
    title: "Paytm Lending Strategy",
    company: "Paytm",
    period: "Aug 2020 - Sep 2020",
    type: "FinTech",
    description: "Leading digital payments and financial services company. Defined strategy for new lending product.",
    achievements: [
      "Conducted comprehensive market research and user analysis (50+ accounts)",
      "Analyzed 7 key competitors to benchmark features and market positioning",
      "Developed detailed Product Requirements Document (PRD) and workflow",
      "Delivered strategic insights that influenced product roadmap"
    ],
    technologies: ["Product Strategy", "Market Research", "Competitive Analysis", "PRD Development", "User Research", "Financial Services"],
    icon: CreditCard,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Zebo Business Model Pivot",
    company: "Zebo",
    period: "Nov 2020 - Dec 2020",
    type: "HealthTech",
    description: "AI-based dermatology platform enhancing skin health. Redefined business model for market fit.",
    achievements: [
      "Researched 5 key players and value drivers in HealthTech industry",
      "Advised strategic pivot from B2C to B2B business model",
      "Identified critical market gaps and enhanced scalability",
      "Improved platform's market positioning and long-term viability"
    ],
    technologies: ["Business Strategy", "Market Analysis", "AI/ML", "Healthcare Tech", "B2B Strategy", "Product Positioning"],
    icon: Stethoscope,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Aye Finance Credit Risk Optimization",
    company: "Aye Finance",
    period: "Jul 2021 - Aug 2021",
    type: "FinTech",
    description: "NBFC empowering micro and small enterprises with credit. Optimized credit risk assessment models.",
    achievements: [
      "Enhanced creditworthiness assessment for MSEs with 41.18% Capital Adequacy Ratio",
      "Researched 40+ parameters to identify 4 key standardized indicators",
      "Collaborated with analytics team demonstrating 5% reduction in NPAs",
      "Established new benchmarks for NPA assessment"
    ],
    technologies: ["Credit Risk Analysis", "Data Analytics", "Financial Modeling", "NBFC Operations", "Risk Assessment", "Statistical Analysis"],
    icon: TrendingUp,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Playo Growth Strategy",
    company: "Playo",
    period: "Aug 2021 - Sep 2021",
    type: "Consumer Tech",
    description: "Leading sports and fitness community app. Enhanced user acquisition and retention strategies.",
    achievements: [
      "Analyzed user acquisition funnel to identify critical churn points",
      "Interviewed 35+ users and hypothesized 8 scenarios for behavior analysis",
      "Recommended 10+ features & UX changes for 15% churn reduction",
      "Delivered strategic report for product enhancements and growth"
    ],
    technologies: ["Growth Strategy", "User Research", "UX Analysis", "Funnel Optimization", "Sports Tech", "Mobile Analytics"],
    icon: Gamepad2,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Bounce User Rating System",
    company: "Bounce",
    period: "Oct 2021 - Nov 2021",
    type: "Mobility Tech",
    description: "India's largest bike-sharing and mobility solution. Developed robust user rating system.",
    achievements: [
      "Analyzed Bounce features identifying 20+ factors correlating with user behavior",
      "Designed modular internal User Rating System benchmarking 5+ top systems",
      "Improved user trust and service quality through enhanced accountability",
      "Contributed to operational efficiency with structured feedback mechanisms"
    ],
    technologies: ["Product Operations", "Rating Systems", "User Behavior Analysis", "Mobility Tech", "System Design", "Quality Assurance"],
    icon: Zap,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "GoApptiv Telemedicine Launch",
    company: "GoApptiv",
    period: "Feb 2022 - Mar 2022",
    type: "HealthTech",
    description: "Revolutionizing rural healthcare access via 'phygital' model. Launched transformative telemedicine solution.",
    achievements: [
      "Launched 'Connect on Demand' telemedicine for 200,000+ rural villages across 27 States",
      "Leveraged existing platforms (50%+ wholesalers, 50,000+ retailers) for distribution",
      "Conducted primary research across 3,424 markets for viability assessment",
      "Empowered 900+ on-ground 'Phygital Field Force' for service delivery"
    ],
    technologies: ["Healthcare Innovation", "Rural Tech", "Telemedicine", "Distribution Strategy", "Market Research", "Phygital Solutions"],
    icon: Heart,
    color: "bg-red-100 text-red-600"
  }
];

export default function LiveProjectsSection() {
  return (
    <section className="py-20 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
            Live Projects & Consulting
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Applying product management, strategy, and analytical principles to solve real-world business challenges across diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {liveProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.color}`}>
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50 mb-2">
                          {project.period}
                        </Badge>
                        <Badge variant="secondary" className="bg-neutral-100 text-neutral-700">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-display font-medium text-neutral-900 mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-lg text-neutral-600 font-semibold">{project.company}</p>
                  <p className="text-sm text-neutral-600 italic mt-2">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
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
                      {project.technologies.map((tech, techIndex) => (
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