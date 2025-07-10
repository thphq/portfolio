"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users, Lightbulb } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building 0-1 Products: Lessons from Khambee's Journey",
    excerpt: "How we built India's first vernacular teaching platform from concept to 270+ accounts in 10 months, and the key lessons learned along the way.",
    content: `Building a product from 0-1 is one of the most challenging yet rewarding experiences in product management. When we started Khambee, we had a vision to democratize education through vernacular teaching, but the path from idea to execution was filled with unexpected challenges and valuable lessons.

## The Genesis of Khambee

The idea for Khambee came from a simple observation: while English-medium education dominates the online learning space, millions of educators and students prefer learning in their native languages. We saw an opportunity to build India's first comprehensive vernacular teaching platform.

## Key Lessons from Our Journey

### 1. Start with the Problem, Not the Solution
Our initial approach was technology-first. We spent months building features we thought users needed. The breakthrough came when we shifted to a problem-first approach, conducting extensive user interviews with educators across different regions.

### 2. MVP is About Learning, Not Building
Our first MVP was far from perfect, but it taught us more about our users in 2 weeks than months of planning. We learned that educators needed workflow automation more than fancy UI elements.

### 3. Team Building is Product Building
Managing a team of 40+ members taught me that team building is essentially product building. Each team member is a feature that needs to work seamlessly with others.

## The Numbers That Matter

- **270+ accounts** acquired through organic growth
- **18% conversion** to course launches
- **30% monetization** rate achieved
- **₹21L revenue** generated against ₹38L spend

## What's Next

The journey from 0-1 is just the beginning. Scaling from 1-10 requires different skills, different strategies, and different metrics. But the foundation we built at Khambee - focusing on user problems, iterating quickly, and building a strong team - remains our north star.

*Building products is ultimately about building solutions that matter. Every line of code, every design decision, every team meeting should bring you closer to solving real problems for real people.*`,
    author: "Vikas Meena",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Product Strategy",
    tags: ["0-1 Products", "Startup", "Product Management", "Team Building"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Scaling Trust: How We Reduced Fraud by 80% at Matrimony.com",
    excerpt: "A deep dive into the product strategy and ML implementation that transformed user trust on India's largest matrimony platform.",
    content: `Trust is the foundation of any matrimony platform. When I joined Matrimony.com as a Product Manager, one of my key challenges was enhancing the trust and safety systems for a platform serving 30L+ monthly active users.

## The Challenge

Matrimony platforms face unique trust challenges:
- Fake profiles and fraudulent users
- Misrepresentation of personal information
- Safety concerns, especially for female users
- Scale challenges with manual verification

## Our Approach

### 1. Data-Driven Problem Definition
We started by analyzing fraud patterns across different user segments, geographical regions, and user behaviors. This helped us identify the most critical fraud vectors.

### 2. ML-Powered Image Classification
We implemented machine learning algorithms to detect fake profile photos, which boosted fake profile identification by 150%. The system could identify:
- Stock photos used as profile pictures
- Images with inconsistent metadata
- Photos that appeared across multiple profiles

### 3. Behavioral Pattern Analysis
Beyond images, we analyzed user behavior patterns to identify suspicious activities:
- Rapid profile creation patterns
- Unusual messaging behaviors
- Geographic inconsistencies

## The Results

- **80% reduction** in fraudulent reports
- **3-day TAT** for fraud report closures
- **150% improvement** in fake profile identification
- Significant increase in user trust metrics

## Key Learnings

### 1. Trust is a Product Feature
Trust isn't just a policy issue - it's a core product feature that needs to be designed, measured, and iterated upon.

### 2. Balance Automation with Human Oversight
While ML can scale fraud detection, human oversight remains crucial for edge cases and maintaining empathy in sensitive situations.

### 3. Transparency Builds Trust
Being transparent about our safety measures actually increased user confidence rather than revealing vulnerabilities.

## The Broader Impact

This work contributed to Matrimony.com's position as India's most trusted matrimony platform, directly impacting the lives of millions of users seeking life partners.

*Building trust at scale requires a combination of technology, empathy, and relentless focus on user safety. Every fraud prevented is a life potentially saved from harm.*`,
    author: "Vikas Meena",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Product Security",
    tags: ["Machine Learning", "Fraud Detection", "Trust & Safety", "Scale"],
    image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "The Art of Product Metrics: Beyond Vanity Numbers",
    excerpt: "How to identify and track metrics that actually drive business value, with real examples from scaling platforms to millions of users.",
    content: `In the world of product management, metrics can make or break your strategy. After working across startups and enterprises, scaling platforms to millions of users, I've learned that the art lies not in tracking more metrics, but in tracking the right ones.

## The Vanity Metrics Trap

Early in my career at Hubzu, I was obsessed with page views and user registrations. These numbers looked impressive in presentations but didn't correlate with business outcomes. The real breakthrough came when we shifted focus to metrics that directly tied to revenue and user value.

## The Framework: Input, Output, Outcome

### Input Metrics
These are the actions you can directly control:
- Feature releases
- Marketing campaigns
- Team capacity

### Output Metrics
These are the immediate results of your inputs:
- User registrations
- Feature adoption
- Page views

### Outcome Metrics
These are the business results that matter:
- Revenue growth
- User retention
- Customer lifetime value

## Real Examples from My Experience

### At Hubzu: Revenue-Focused Metrics
- **Key Metric**: Revenue per auction
- **Supporting Metrics**: Bid completion rate, payment success rate
- **Result**: $5M+ annual revenue increase

### At Matrimony.com: Trust-Focused Metrics
- **Key Metric**: Successful matches leading to marriage
- **Supporting Metrics**: Profile authenticity score, user safety reports
- **Result**: 80% reduction in fraud reports

### At Khambee: Growth-Focused Metrics
- **Key Metric**: Educator revenue generation
- **Supporting Metrics**: Course completion rate, student engagement
- **Result**: Top educator generating ₹1L+ monthly

## The North Star Framework

Every product needs a North Star metric that:
1. **Reflects customer value** - If this metric improves, customers are better off
2. **Drives business value** - If this metric improves, the business grows
3. **Is actionable** - Teams can directly influence this metric

## Common Pitfalls to Avoid

### 1. Metric Overload
Tracking too many metrics leads to analysis paralysis. Focus on 3-5 key metrics maximum.

### 2. Short-term Optimization
Optimizing for quarterly metrics can hurt long-term growth. Balance leading and lagging indicators.

### 3. Ignoring Context
Metrics without context are meaningless. Always consider external factors, seasonality, and user segments.

## Building a Metrics Culture

### 1. Start with Why
Every metric should answer: "Why does this matter for our users and business?"

### 2. Make it Accessible
Democratize data access. Everyone should understand and have access to key metrics.

### 3. Iterate and Evolve
Metrics should evolve as your product and business mature.

## The Human Side of Metrics

Remember, behind every metric is a human being. A 20% increase in retention means 20% more people found value in your product. A 80% reduction in fraud means thousands of people had safer experiences.

*Metrics are not just numbers - they're the pulse of your product's impact on real people's lives. Choose them wisely, track them religiously, and always remember the humans behind the data.*`,
    author: "Vikas Meena",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Product Analytics",
    tags: ["Product Metrics", "Data Analytics", "KPIs", "Business Intelligence"],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    title: "Leading Cross-Functional Teams: Lessons from Managing 50+ Members",
    excerpt: "Practical insights on building and leading diverse teams across engineering, design, marketing, and operations to deliver complex products.",
    content: `Leading cross-functional teams is one of the most challenging aspects of product management. Over my career, I've had the privilege of leading teams ranging from 7 members at Perpule to 40+ at Khambee. Here are the key lessons I've learned about building high-performing, diverse teams.

## The Cross-Functional Challenge

Unlike traditional hierarchical management, product managers often lead without authority. You're coordinating engineers, designers, marketers, and operations folks - each with different priorities, languages, and success metrics.

## Building the Foundation

### 1. Shared Vision and Goals
The first step is ensuring everyone understands not just what we're building, but why. At Khambee, we spent significant time aligning the team around our mission of democratizing vernacular education.

### 2. Clear Roles and Responsibilities
Ambiguity kills productivity. We used a RACI matrix to define who was Responsible, Accountable, Consulted, and Informed for each major decision and deliverable.

### 3. Communication Rhythms
Establish predictable communication patterns:
- Daily standups for immediate coordination
- Weekly cross-functional syncs for alignment
- Monthly retrospectives for continuous improvement

## The Art of Influence

### 1. Speak Everyone's Language
- With engineers: Focus on technical feasibility and architecture
- With designers: Emphasize user experience and design principles
- With marketers: Highlight user acquisition and retention
- With operations: Discuss scalability and efficiency

### 2. Data-Driven Persuasion
Nothing cuts through opinion like data. Always come prepared with metrics, user research, and business impact projections.

### 3. Collaborative Decision Making
Involve team members in decision-making processes. People support what they help create.

## Managing Conflicts and Trade-offs

### 1. The Engineering vs. Design Tension
Engineers want clean, scalable code. Designers want pixel-perfect experiences. The product manager's job is to find the sweet spot that delivers user value within technical constraints.

### 2. Speed vs. Quality
Startups demand speed, but quality can't be completely sacrificed. We established "quality gates" - non-negotiable standards that couldn't be compromised even under pressure.

### 3. Feature Requests vs. Technical Debt
Balance new feature development with technical debt reduction. We allocated 20% of each sprint to technical improvements.

## Real Examples from My Experience

### At Perpule: Rapid Market Expansion
Leading a growth team of 7 FTEs and 4 interns during COVID-19:
- **Challenge**: Scale grocery delivery to 300+ apartments in 15 days
- **Solution**: Daily cross-functional war rooms with clear ownership
- **Result**: 25K+ DAU and expansion to Delhi

### At Khambee: Building from Scratch
Managing 40+ team members across multiple functions:
- **Challenge**: Build India's first vernacular teaching platform
- **Solution**: Agile pods with embedded cross-functional skills
- **Result**: 270+ accounts and ₹21L revenue in 10 months

## Tools and Frameworks

### 1. Project Management
- Jira for engineering workflows
- Notion for documentation and knowledge sharing
- Slack for real-time communication
- Figma for design collaboration

### 2. Decision Making
- RICE framework for feature prioritization
- OKRs for goal alignment
- Retrospectives for continuous improvement

### 3. Performance Tracking
- Individual KPIs aligned with team goals
- Regular 1:1s for personal development
- Team health metrics (velocity, quality, satisfaction)

## The Human Element

### 1. Psychological Safety
Create an environment where people feel safe to share ideas, admit mistakes, and ask questions.

### 2. Recognition and Growth
Celebrate wins publicly and provide growth opportunities. At Khambee, we promoted 5 team members to leadership roles.

### 3. Work-Life Balance
Sustainable pace leads to sustainable results. We implemented "no meeting Fridays" and flexible working hours.

## Common Pitfalls to Avoid

### 1. Micromanagement
Trust your team to execute. Focus on outcomes, not activities.

### 2. Communication Overload
Too many meetings kill productivity. Be intentional about when and how you communicate.

### 3. Ignoring Team Dynamics
Technical skills matter, but team chemistry is equally important.

## Measuring Team Success

Beyond product metrics, track team health:
- Team velocity and predictability
- Employee satisfaction scores
- Retention rates
- Cross-functional collaboration quality

## The Compound Effect

Great teams compound over time. The investment you make in building team culture, processes, and relationships pays dividends as the team tackles increasingly complex challenges.

*Leading cross-functional teams is ultimately about creating an environment where diverse talents can combine to create something greater than the sum of their parts. It's messy, challenging, and incredibly rewarding.*`,
    author: "Vikas Meena",
    date: "2023-12-28",
    readTime: "9 min read",
    category: "Leadership",
    tags: ["Team Leadership", "Cross-functional Teams", "Management", "Collaboration"],
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const categories = ["All", "Product Strategy", "Product Security", "Product Analytics", "Leadership"];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  if (selectedPost) {
    return (
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={() => setSelectedPost(null)}
            variant="outline"
            className="mb-8 flex items-center gap-2"
          >
            ← Back to Blog
          </Button>
          
          <article className="prose prose-lg max-w-none">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            
            <div className="flex items-center gap-4 mb-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {selectedPost.readTime}
              </div>
              <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                {selectedPost.category}
              </Badge>
            </div>

            <h1 className="text-4xl font-display font-bold text-neutral-900 mb-6">
              {selectedPost.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedPost.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-neutral-100 text-neutral-700">
                  {tag}
                </Badge>
              ))}
            </div>

            <div 
              className="prose prose-lg max-w-none text-neutral-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: selectedPost.content
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/\n/g, '<br/>')
                  .replace(/## (.*?)(<br\/>|$)/g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-neutral-900">$1</h2>')
                  .replace(/### (.*?)(<br\/>|$)/g, '<h3 class="text-xl font-semibold mt-6 mb-3 text-neutral-800">$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-neutral-900">$1</strong>')
                  .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em class="italic text-neutral-700">$1</em>')
                  .replace(/^- (.*?)(<br\/>|$)/gm, '<li class="ml-4 mb-2 text-neutral-700">• $1</li>')
                  .replace(/^\d+\. (.*?)(<br\/>|$)/gm, '<li class="ml-4 mb-2 text-neutral-700 list-decimal">$1</li>')
                  .replace(/`([^`]+)`/g, '<code class="bg-neutral-100 px-2 py-1 rounded text-sm font-mono text-neutral-800">$1</code>')
                  .replace(/^> (.*?)(<br\/>|$)/gm, '<blockquote class="border-l-4 border-amber-500 pl-4 italic text-neutral-600 my-4">$1</blockquote>')
              }}
            />

            <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-600">VM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Vikas Meena</h4>
                  <p className="text-neutral-600">Senior Product Manager | IIM Bangalore MBA | NITK Computer Science</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Passionate about building products that solve real-world problems and democratize technology access.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

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
          <h1 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
            Product Management Insights
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Sharing lessons learned from building 0-1 products, scaling platforms to millions of users, and leading cross-functional teams
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "border-neutral-300 text-neutral-700 hover:bg-amber-50 hover:border-amber-300"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full cursor-pointer group">
                <div onClick={() => setSelectedPost(post)}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="text-amber-600 border-amber-200 bg-white/90 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3 text-sm text-neutral-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-display font-medium text-neutral-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-neutral-100 text-neutral-700 text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 text-xs">
                          +{post.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-amber-600">VM</span>
                        </div>
                        <span>{post.author}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 group-hover:translate-x-1 transition-transform">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-8">
              <BookOpen className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">
                Want to discuss product strategy?
              </h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                I'm always excited to discuss product management challenges, share insights, and explore collaboration opportunities.
              </p>
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => window.open('mailto:I@meenavik.com?subject=Product Strategy Discussion&body=Hi Vikas,%0D%0A%0D%0AI would like to discuss product strategy and explore collaboration opportunities...', '_blank')}
              >
                Let's Connect
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}