"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, TrendingUp, Users, DollarSign, Rocket, Building2, Globe } from "lucide-react";

const projects = [
  {
    title: "Khambee - Teaching Platform",
    company: "Co-founder",
    period: "2023 - Present",
    category: ["startup", "platform", "saas"],
    description: "Built India's first vernacular teaching platform from 0-1, enabling educators to scale online teaching services with comprehensive B2B SaaS solution.",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    impact: {
      revenue: "₹21L Revenue",
      users: "3500+ Students",
      growth: "270+ Accounts"
    },
    achievements: [
      "Orchestrated end-to-end product development lifecycle in 10 months with multi-tenant architecture",
      "Achieved 18% conversion to course launches and 30% monetization rate",
      "Empowered educator to generate ₹1L+ monthly revenue from 250+ students",
      "Implemented 18+ workflow automations and 60+ core features",
      "Pioneered India's first vernacular teaching platform with lifetime deal pricing",
      "Engaged 20K+ students through organic campaigns providing crucial initial traction"
    ],
    technologies: ["SaaS Development", "Multi-tenant Architecture", "Payment Integration", "Workflow Automation", "Team Building", "Product Strategy", "Market Research", "Brand Development"],
    type: "startup"
  },
  {
    title: "Matrimony.com - Trust & Growth",
    company: "Product Manager",
    period: "2022 - 2023",
    category: ["platform", "enterprise", "internal"],
    description: "Enhanced trust & fraud prevention systems while driving strategic growth initiatives for India's leading matrimony platform serving 30L MAU.",
    image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800",
    impact: {
      revenue: "Payment SR boost",
      users: "30L MAU, 10L DAU",
      growth: "80% fraud reduction"
    },
    achievements: [
      "Reduced fraudulent reports by 80% through ML-based image classification",
      "Launched India's first 'Biodata' feature: 8L downloads in first month",
      "Shifted payment conversion from 70% call-led to 70% self-conversion",
      "Increased success story collection by 10x through process optimization",
      "Boosted fake profile identification by 150% using advanced ML algorithms",
      "Collaborated on high-impact national awareness campaign featuring celebrity Vidya Balan"
    ],
    technologies: ["Machine Learning", "Fraud Detection", "Payment Optimization", "User Analytics", "A/B Testing", "Mobile Product"],
    type: "enterprise"
  },
  {
    title: "Hubzu - Real Estate Platform",
    company: "Senior Software Engineer",
    period: "2017 - 2020",
    category: ["platform", "ecommerce", "enterprise"],
    description: "Developed critical modules for US-based real estate E-commerce platform with $500M+ annual revenue, focusing on user experience and fraud prevention.",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800",
    impact: {
      revenue: "$5M+ increase",
      users: "1M+ MAU",
      growth: "20% churn reduction"
    },
    achievements: [
      "Increased annual revenue by $5M+ through online payment collection for Auctions",
      "Launched 'Bid by SMS' feature, increasing agent bid volume by 15%",
      "Reduced property closing cycle by 7 days through fraud detection algorithm",
      "Improved conversion rate by 8% through home page revamp",
      "Achieved fast-track promotion to Senior Engineer within 24 months",
      "Ensured GDPR compliance for 1M+ Monthly Active Users"
    ],
    technologies: ["Full-stack Development", "Payment Systems", "Fraud Detection", "GDPR Compliance", "Performance Optimization", "User Experience", "Firebase", "Algorithm Design"],
    type: "enterprise"
  },
  {
    title: "StoreSe - Grocery Delivery",
    company: "Growth Manager",
    period: "2020",
    category: ["startup", "ecommerce", "growth"],
    description: "Led Growth team for online grocery delivery platform, driving rapid market expansion and user acquisition during early pandemic period.",
    image: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800",
    impact: {
      revenue: "₹500K+ daily",
      users: "25K+ DAU",
      growth: "300+ apartments"
    },
    achievements: [
      "Onboarded 300+ apartments and generated ₹500K+ daily sales within 15 days",
      "Achieved 25K+ DAU and expanded to Delhi with government collaboration",
      "Produced viral promotional video with 395K+ views on Facebook",
      "Secured strategic partnerships with WhatsHot, LBB, SBI & Paytm",
      "Saved 70% on marketing costs through optimized influencer campaigns",
      "Developed comprehensive FB, Instagram, and Google ad strategies"
    ],
    technologies: ["Growth Marketing", "Facebook Ads", "Google Analytics", "Influencer Marketing", "Partnership Development", "Video Production"],
    type: "startup"
  },
  {
    title: "Adrokart - Group Buying Platform",
    company: "Co-founder",
    period: "2016 - 2017",
    category: ["startup", "ecommerce", "campus"],
    description: "Co-founded group buying platform for homogenous groups, optimizing procurement and logistics with innovative dynamic pricing strategies.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    impact: {
      revenue: "₹5.5L total",
      users: "12 campuses",
      growth: "400+ single campaign"
    },
    achievements: [
      "Secured ₹3L grant funding from Startup India program",
      "Generated ₹5.5L total revenue validating the business model",
      "Achieved 400+ T-shirt sales in single campaign through strategic pricing",
      "Expanded operational setup to 12 campuses demonstrating scalability",
      "Built and led core team of 8 individuals from inception"
    ],
    technologies: ["E-commerce Platform", "Dynamic Pricing", "Logistics Optimization", "Campus Marketing", "Team Building", "Business Development"],
    type: "startup"
  },
  {
    title: "Opin - Social Network App",
    company: "Co-founder",
    period: "2015 - 2016",
    category: ["startup", "platform"],
    description: "Led ideation, development, and marketing for social networking app enabling users to engage through questions and polls for sentiment analysis and group decision-making.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    impact: {
      revenue: "11K downloads",
      users: "266K responses",
      growth: "Campus viral adoption"
    },
    achievements: [
      "Achieved 11k downloads and generated 266k responses on Google Play Store",
      "Executed successful campus election exit poll campaign gaining overnight popularity",
      "Developed platform for public sentiment gauging and private group decision-making",
      "Led end-to-end product development from concept to market launch"
    ],
    technologies: ["Mobile App Development", "Social Networking", "Marketing Strategy", "User Engagement", "Data Analytics", "Campus Marketing"],
    type: "startup"
  }
];

const awards = [
  {
    title: "National Winner - Thoucentric Bottoms-Up",
    description: "Tech Business Consulting-Digital Transformation (1/1.5k+ teams)",
    year: "IIMB",
    icon: Award
  },
  {
    title: "National Winner - TRBS-IIMA Aagaz",
    description: "B-Plan with business model innovation for social needs (1/719 teams)",
    year: "IIMB", 
    icon: Award
  },
  {
    title: "Campus Winner - Bajaj Auto OffRoad-Challenge",
    description: "Go-To-Market strategy for Pulsar Neon (1/100+ teams)",
    year: "IIMB",
    icon: Award
  },
  {
    title: "Ranked 8/1204 - PM Live Competition",
    description: "National Level Product Management Competition by Spotle.ai & IIMA",
    year: "2021",
    icon: TrendingUp
  }
];

const filterCategories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "startup", label: "Startup Experience", icon: Rocket },
  { id: "platform", label: "Platform Products", icon: Building2 },
  { id: "ecommerce", label: "E-commerce", icon: TrendingUp }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Strategic product initiatives across startups and enterprises, delivering measurable business impact
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "border-neutral-300 text-neutral-700 hover:bg-amber-50 hover:border-amber-300"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </Button>
          ))}
        </motion.div>

        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${activeFilter}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Impact Metrics Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                          <DollarSign className="w-4 h-4 text-green-600 mx-auto mb-1" />
                          <div className="text-xs font-semibold text-neutral-800">{project.impact.revenue}</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                          <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                          <div className="text-xs font-semibold text-neutral-800">{project.impact.users}</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                          <TrendingUp className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                          <div className="text-xs font-semibold text-neutral-800">{project.impact.growth}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-6 sm:p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                            {project.period}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={`${
                              project.type === 'startup' 
                                ? 'text-green-600 border-green-200 bg-green-50' 
                                : 'text-blue-600 border-blue-200 bg-blue-50'
                            }`}
                          >
                            {project.type === 'startup' ? 'Startup' : 'Enterprise'}
                          </Badge>
                        </div>
                        <p className="text-sm text-neutral-500">{project.company}</p>
                      </div>
                      <CardTitle className="text-2xl font-display font-medium text-neutral-900 mb-3">
                        {project.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0">
                      {/* Key Achievements */}
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

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-neutral-800 mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-neutral-100 text-neutral-700 hover:bg-neutral-200 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Case Study
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}