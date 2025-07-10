"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

const revenueData = [
  { period: 'Adrokart 2016', revenue: 5.5, users: 400, platforms: 12 },
  { period: 'Hubzu 2017', revenue: 500, users: 100000, platforms: 1 },
  { period: 'Hubzu 2018', revenue: 750, users: 120000, platforms: 1 },
  { period: 'Hubzu 2019', revenue: 1000, users: 150000, platforms: 1 },
  { period: 'Perpule 2020', revenue: 50, users: 25000, platforms: 2 },
  { period: 'Matrimony 2022', revenue: 100, users: 3000000, platforms: 1 },
  { period: 'Matrimony 2023', revenue: 150, users: 3500000, platforms: 1 },
  { period: 'Khambee 2024', revenue: 21, users: 3500, platforms: 1 },
];

const skillsGrowth = [
  { skill: 'Product Strategy', level: 95 },
  { skill: 'Team Leadership', level: 90 },
  { skill: 'Data Analytics', level: 85 },
  { skill: 'User Research', level: 88 },
  { skill: 'Technical Skills', level: 80 },
  { skill: 'Growth Marketing', level: 82 },
];

const experienceBreakdown = [
  { name: 'Startup Experience', value: 45, color: '#10B981' },
  { name: 'Enterprise Products', value: 40, color: '#3B82F6' },
  { name: 'Platform Development', value: 15, color: '#F59E0B' },
];

const impactMetrics = [
  { metric: 'Revenue Generated', value: '₹27L+', description: 'Direct revenue impact' },
  { metric: 'Users Impacted', value: '35L+', description: 'Total user reach' },
  { metric: 'Team Members Led', value: '50+', description: 'Across different roles' },
  { metric: 'Products Built', value: '15+', description: 'From 0-1 to enterprise scale' },
  { metric: 'Fraud Reduction', value: '80%', description: 'At Matrimony.com' },
  { metric: 'Awards Won', value: '12+', description: 'National & campus recognition' }
];

export default function MetricsSection() {
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
            Impact & Metrics
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Data-driven results demonstrating measurable business impact across diverse industries and company stages
          </p>
        </motion.div>

        {/* Key Impact Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="pt-6">
                  <div className="text-2xl md:text-3xl font-display font-bold text-amber-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="font-semibold text-neutral-800 mb-1 text-sm">
                    {metric.metric}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {/* Career Journey Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl font-display font-medium text-neutral-900">
                  Career Journey & Impact
                </CardTitle>
                <p className="text-sm text-neutral-600">Revenue impact and user reach across different roles</p>
              </CardHeader>
              <CardContent>
                <div className="h-64 sm:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis 
                        dataKey="period" 
                        stroke="#6B7280" 
                        fontSize={8}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis stroke="#6B7280" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#FFFFFF', 
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#F59E0B" 
                        strokeWidth={3}
                        dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                        name="Revenue Impact (₹L)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Assessment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl font-display font-medium text-neutral-900">
                  Core Competencies
                </CardTitle>
                <p className="text-sm text-neutral-600">Skill proficiency across key product management areas</p>
              </CardHeader>
              <CardContent>
                <div className="h-64 sm:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skillsGrowth} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis type="number" domain={[0, 100]} stroke="#6B7280" fontSize={12} />
                      <YAxis type="category" dataKey="skill" stroke="#6B7280" fontSize={10} width={80} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#FFFFFF', 
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Bar 
                        dataKey="level" 
                        fill="#3B82F6" 
                        radius={[0, 4, 4, 0]}
                        name="Proficiency (%)"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl font-display font-medium text-neutral-900">
                  Experience Distribution
                </CardTitle>
                <p className="text-sm text-neutral-600">Breakdown of experience across different contexts</p>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="h-64 sm:h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={experienceBreakdown}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                        labelLine={false}
                      >
                        {experienceBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievement Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl font-display font-medium text-neutral-900">
                  Key Achievements Timeline
                </CardTitle>
                <p className="text-sm text-neutral-600">Major milestones and recognitions</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm text-neutral-800">National Winner</div>
                      <div className="text-xs text-neutral-600">Thoucentric Bottoms-Up (1/1.5k+ teams)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm text-neutral-800">Fast-track Promotion</div>
                      <div className="text-xs text-neutral-600">Senior Engineer in 24 months at Hubzu</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm text-neutral-800">Startup Funding</div>
                      <div className="text-xs text-neutral-600">₹3L grant from Startup India program</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm text-neutral-800">Product Innovation</div>
                      <div className="text-xs text-neutral-600">India's first vernacular teaching platform</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm text-neutral-800">Leadership Recognition</div>
                      <div className="text-xs text-neutral-600">Chief Coordinator, Tech Fest (₹30L+ sponsorships)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}