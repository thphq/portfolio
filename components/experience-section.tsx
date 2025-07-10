"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Building2, Rocket, Globe, TrendingUp, Users, Code } from "lucide-react";

const experiences = [
  {
    title: "Co-founder - Product & Strategy",
    company: "Khambee",
    location: "Goa, India",
    period: "Nov 2023 - Present",
    type: "startup",
    category: ["startup", "platform", "saas"],
    description: "Built India's first vernacular teaching platform from 0-1, enabling educators to scale online teaching services with comprehensive SaaS solution.",
    achievements: [
      "Orchestrated end-to-end product development: 1.5M workflow + 2M design + 3.5M MVP + 2.5M Beta + 2.5M Launch in 10 months",
      "Drove 270+ account sales with 18% conversion to course launches and 30% monetization rate",
      "Empowered top educator to generate ₹1L+ monthly revenue from 250+ students",
      "Built and managed 40+ team members (employees/interns) with ₹20k average cost optimization",
      "Generated ₹21L revenue against ₹38L spend, demonstrating lean operational efficiency",
      "Implemented 18+ workflow automations, 60+ core features, 25+ customizations, 30+ admin controls",
      "Pioneered India's first vernacular teaching platform with lifetime deal pricing strategy",
      "Built multi-tenant SaaS architecture supporting 270+ accounts with scalable infrastructure"
    ],
    technologies: ["SaaS Development", "Multi-tenant Architecture", "Product Strategy", "Team Building", "Payment Integration", "Workflow Automation", "Market Research", "Brand Development"],
    impact: {
      revenue: "₹21L",
      users: "3500+ students, 20K+ organic reach",
      growth: "270+ accounts"
    }
  },
  {
    title: "Product Manager",
    company: "Matrimony.com Ltd.",
    location: "Chennai, India", 
    period: "May 2022 - Nov 2023",
    type: "enterprise",
    category: ["platform", "internal"],
    description: "Enhanced trust & fraud prevention systems while driving strategic growth initiatives for India's leading matrimony platform serving 30L MAU.",
    achievements: [
      "Reduced fraudulent reports by 80% and achieved 3-day TAT for fraud report closures",
      "Boosted fake profile identification by 150% through ML-based image classification",
      "Launched India's first 'Biodata' feature: 8L downloads, 2L direct clicks in first month",
      "Increased payment Success Rate and shifted conversion from 70% call-led to 70% self-conversion",
      "Revamped success story collection process, increasing collection count by 10x",
      "Contributed to 30L MAU and 10L DAU through user-led growth initiatives",
      "Collaborated on high-impact national awareness campaign featuring celebrity Vidya Balan"
    ],
    technologies: ["Machine Learning", "Fraud Detection", "Payment Optimization", "User Analytics", "A/B Testing", "Mobile Product"],
    impact: {
      revenue: "Payment SR increase",
      users: "30L MAU, 10L DAU", 
      growth: "80% fraud reduction"
    }
  },
  {
    title: "Senior Software Engineer",
    company: "Hubzu, Altisource",
    location: "Bangalore, India", 
    period: "Jul 2017 - Mar 2020",
    type: "enterprise",
    category: ["platform", "ecommerce"],
    description: "Developed critical modules for Hubzu, a US-based real estate E-commerce platform with $500M+ annual revenue, focusing on user experience and fraud prevention.",
    achievements: [
      "Increased annual revenue by $5M+ through online payment collection for Auctions",
      "Decreased churn rate by 20% via stage-based bidding implementation", 
      "Launched 'Bid by SMS' feature, increasing agent bid volume by 15%",
      "Reduced property closing cycle by 7 days through fraudulent user identification algorithm",
      "Improved conversion rate by 8% through home page revamp and user journey optimization",
      "Reduced page load time by 40% through legacy code optimization",
      "Achieved fast-track promotion to Senior Engineer within 24 months",
      "Ensured GDPR compliance for 1M+ Monthly Active Users"
    ],
    technologies: ["Full-stack Development", "Payment Systems", "Fraud Detection", "GDPR Compliance", "Performance Optimization", "User Experience", "Firebase", "Algorithm Design"],
    impact: {
      revenue: "$5M+ increase",
      users: "1M+ MAU",
      growth: "20% churn reduction"
    }
  },
  {
    title: "Growth Manager",
    company: "Perpule (acquired by Amazon)",
    location: "Bangalore, India",
    period: "Mar 2020 - Jul 2020", 
    type: "startup",
    category: ["startup", "ecommerce"],
    description: "Led Growth team for StoreSe, an online grocery delivery platform, driving rapid market expansion and user acquisition.",
    achievements: [
      "Led Growth team of 7 FTEs and 4 Interns for market expansion",
      "Onboarded 300+ apartments and generated ₹500K+ daily sales within 15 days",
      "Achieved 25K+ DAU and expanded services to Delhi with AAP government collaboration",
      "Developed comprehensive FB, Instagram, and Google ad strategies using Google Analytics",
      "Produced promotional video with 395K+ views and 2.8K+ likes on Facebook",
      "Secured partnerships with WhatsHot, LBB, SBI & Paytm for enhanced user acquisition",
      "Saved 70% on marketing costs while achieving 50K+ impressions through influencer campaigns"
    ],
    technologies: ["Growth Marketing", "Facebook Ads", "Google Analytics", "Influencer Marketing", "Partnership Development", "Video Production"],
    impact: {
      revenue: "₹500K+ daily",
      users: "25K+ DAU",
      growth: "300+ apartments"
    }
  },
  {
    title: "Co-founder",
    company: "Adrokart", 
    location: "NITK Campus",
    period: "2016 - 2017",
    type: "startup",
    category: ["startup", "ecommerce"],
    description: "Co-founded and scaled group buying platform for homogenous groups, optimizing procurement and logistics with innovative pricing strategies.",
    achievements: [
      "Secured ₹3L grant funding from Startup India program",
      "Built and led core team of 8 individuals from inception",
      "Received ₹1L in-kind support from E-Cell NITK (office, infrastructure)",
      "Generated ₹5.5L total revenue validating the business model",
      "Achieved 400+ T-shirt sales in single campaign through strategic pricing",
      "Expanded to 12 campuses demonstrating scalability",
      "Designed dynamic pricing incentivizing higher order volumes"
    ],
    technologies: ["E-commerce Platform", "Dynamic Pricing", "Logistics Optimization", "Campus Marketing", "Team Building", "Business Development"],
    impact: {
      revenue: "₹5.5L total",
      users: "12 campuses",
      growth: "400+ single campaign"
    }
  },
  {
    title: "Co-founder - Product & Marketing",
    company: "Opin (Social Network App)", 
    location: "NITK Campus",
    period: "Aug 2015 - Apr 2016",
    type: "startup",
    category: ["startup", "platform"],
    description: "Led ideation, development, and marketing for social networking app enabling users to engage through questions and polls for sentiment analysis.",
    achievements: [
      "Achieved 11k downloads and generated 266k responses on Google Play Store",
      "Executed successful campus election exit poll campaign gaining overnight popularity",
      "Developed platform for public sentiment gauging and private group decision-making",
      "Led end-to-end product development from concept to market launch"
    ],
    technologies: ["Mobile App Development", "Social Networking", "Marketing Strategy", "User Engagement", "Data Analytics", "Campus Marketing"],
    impact: {
      revenue: "11K downloads",
      users: "266K responses",
      growth: "Campus viral adoption"
    }
  }
];

const filterCategories = [
  { id: "all", label: "All Experience", icon: Globe },
  { id: "startup", label: "Startup Experience", icon: Rocket },
  { id: "platform", label: "Platform Products", icon: Building2 },
  { id: "ecommerce", label: "E-commerce", icon: TrendingUp },
  { id: "internal", label: "Internal Product", icon: Code },
  { id: "saas", label: "SaaS Products", icon: Users }
];

export default function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredExperiences = activeFilter === "all" 
    ? experiences 
    : experiences.filter(exp => exp.category.includes(activeFilter));

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
            Professional Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            7+ years driving product success across startups and enterprises, from 0-1 development to scaling platforms
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

        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${activeFilter}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl font-display font-medium text-neutral-900 group-hover:text-amber-600 transition-colors">
                          {exp.title}
                        </CardTitle>
                        <Badge 
                          variant="outline" 
                          className={`${
                            exp.type === 'startup' 
                              ? 'text-green-600 border-green-200 bg-green-50' 
                              : 'text-blue-600 border-blue-200 bg-blue-50'
                          }`}
                        >
                          {exp.type === 'startup' ? 'Startup' : 'Enterprise'}
                        </Badge>
                      </div>
                      <p className="text-lg text-neutral-600">{exp.company}</p>
                      <p className="text-sm text-neutral-500">{exp.location}</p>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                        {exp.period}
                      </Badge>
                      <div className="flex gap-1">
                        {exp.category.map((cat) => (
                          <Badge key={cat} variant="secondary" className="text-xs bg-neutral-100 text-neutral-600">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 p-4 bg-neutral-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-amber-600">{exp.impact.revenue}</div>
                      <div className="text-sm text-neutral-600">Revenue Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{exp.impact.users}</div>
                      <div className="text-sm text-neutral-600">User Reach</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{exp.impact.growth}</div>
                      <div className="text-sm text-neutral-600">Growth Metric</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 4).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                      {exp.achievements.length > 4 && (
                        <li className="text-sm text-neutral-500 ml-6">
                          +{exp.achievements.length - 4} more achievements
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-display font-medium text-neutral-900 mb-8 text-center">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">MBA</h4>
                    <p className="text-sm text-neutral-600">2020-2022</p>
                  </div>
                </div>
                <h5 className="font-semibold text-neutral-800 mb-2">Indian Institute of Management Bangalore</h5>
                <div className="space-y-2">
                  <p className="text-xs text-neutral-600">• Strategic thinking and business model innovation</p>
                  <p className="text-xs text-neutral-600">• Product management frameworks and methodologies</p>
                  <p className="text-xs text-neutral-600">• Leadership and cross-functional team management</p>
                  <p className="text-xs text-neutral-600">• Data-driven decision making and analytics</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">B.Tech Computer Science</h4>
                    <p className="text-sm text-neutral-600">2013-2017</p>
                  </div>
                </div>
                <h5 className="font-semibold text-neutral-800 mb-2">National Institute of Technology Karnataka</h5>
                <div className="space-y-2">
                  <p className="text-xs text-neutral-600">• Software engineering and system design principles</p>
                  <p className="text-xs text-neutral-600">• Data structures, algorithms, and problem-solving</p>
                  <p className="text-xs text-neutral-600">• Database management and web technologies</p>
                  <p className="text-xs text-neutral-600">• Technical leadership and project management</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}