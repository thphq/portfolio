"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, FileText, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Let's Connect
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Ready to drive product innovation together? Let's discuss how we can create exceptional user experiences and business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-display font-medium text-white mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a 
                        href="mailto:I@meenavik.com" 
                        className="text-neutral-300 hover:text-amber-400 transition-colors"
                        aria-label="Send email to Vikas Meena"
                      >
                        I@meenavik.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/vikas-meena-0998b579" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-400 transition-colors"
                        aria-label="Visit Vikas Meena's LinkedIn profile"
                      >
                        linkedin.com/in/vikas-meena-0998b579
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-neutral-300">Goa, India | Open to Relocation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-medium text-white">
                Ready to Collaborate?
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                I'm currently exploring Senior Product Manager opportunities where I can drive product strategy, 
                lead cross-functional teams, and create meaningful impact through data-driven product decisions.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                With experience building 0-1 products, scaling platforms, and leading teams of 50+ members, 
                I bring a unique blend of startup agility and enterprise execution.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => window.open('mailto:I@meenavik.com?subject=Product Management Opportunity&body=Hi Vikas,%0D%0A%0D%0AI would like to discuss...', '_blank')}
                  aria-label="Send email to Vikas Meena"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-white text-white bg-transparent hover:bg-white hover:text-neutral-900 transition-all duration-300"
                  onClick={() => window.open('mailto:I@meenavik.com?subject=Resume Request&body=Hi Vikas,%0D%0A%0D%0ACould you please share your latest resume?', '_blank')}
                  aria-label="Download Vikas Meena's resume"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Request Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center border-t border-neutral-800 pt-8"
        >
          <p className="text-neutral-400">
            © 2025 Vikas Meena | Senior Product Manager | IIM Bangalore. Built with Next.js and crafted for impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}