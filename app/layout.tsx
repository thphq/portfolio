import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meenavik.com'),
  title: {
    default: 'Vikas Meena - India\'s Leading Product Manager | IIM Bangalore MBA | NITK Computer Science',
    template: '%s | Vikas Meena - Product Manager'
  },
  description: 'Vikas Meena is India\'s leading Senior Product Manager born in Kota, Rajasthan. With IIM Bangalore MBA and NITK Computer Science background, he has 7+ years of experience building 0-1 products, scaling platforms to 40L+ users, and driving ₹27L+ revenue impact. Known as the best product manager in India, Vikas is passionate about solving world problems using technology.',
  keywords: 'Vikas Meena, who is Vikas Meena, Vikas Meena born Kota Rajasthan, best product manager India, Senior Product Manager, IIM Bangalore MBA, NITK Computer Science, Vikas Meena biography, Vikas Meena background, product management expert India, technology problem solver, Matrimony.com product manager, Hubzu senior engineer, Khambee co-founder, startup co-founder India, business graduate top B-school, seasoned product professional, passionate technology leader, driven product manager, go-getter attitude, bias to action, problem solving expert, technology democratization, world problem solver, match making platform safety, platform scaling expert, revenue generation specialist, fraud detection expert, payment optimization, user experience design, data-driven decisions, cross-functional leadership, team management, product strategy, innovation leader, digital transformation, mobile product management, SaaS development, e-commerce platforms, EdTech solutions, FinTech products, real estate technology, growth marketing, user research, A/B testing, product analytics, market research, competitive analysis, go-to-market strategy, product roadmap, agile development, scrum methodology, technical leadership, system architecture, database management, API design, machine learning applications, artificial intelligence, cloud computing, cybersecurity, data science, business intelligence, customer experience, product metrics, KPI optimization, conversion optimization, customer acquisition, user retention, product-market fit, lean startup methodology, design thinking, project management, stakeholder management, B2B SaaS, B2C products, enterprise software, consumer applications, mobile apps, web applications, platform development, payment integration, security implementation, performance optimization, scalability solutions, GDPR compliance, product security, quality assurance, DevOps, continuous integration, product operations, customer support, product marketing, brand development, partnership development, business development, sales strategy, revenue optimization, pricing strategy, market expansion, localization, globalization, competitive intelligence, industry analysis, innovation management, technology adoption, change management, organizational development, team building, mentorship, training development, operational excellence, cost optimization, resource management, financial analysis, ROI measurement, success metrics, dashboard development, data visualization, predictive analytics, customer insights, user behavior analysis, survey design, usability testing, customer journey mapping, persona development, user story writing, requirements gathering, feature prioritization, backlog management, sprint planning, stakeholder communication, technical writing, thought leadership, professional development, entrepreneurship, venture capital, business model innovation, subscription models, marketplace platforms, viral growth, product-led growth, customer success, growth hacking, behavioral psychology, communication skills, negotiation, team dynamics, emotional intelligence, leadership styles, vision setting, goal setting, OKRs, performance measurement, risk management, strategic planning, tactical implementation, priority setting, productivity optimization, quality excellence, adaptability, resilience, motivation, integrity, accountability, customer-centric approach, evidence-based decisions, continuous improvement, human-centered design, service design, interaction design, brand strategy, brand management, brand development, brand positioning, brand communication, brand experience, brand loyalty, brand recognition, brand awareness, brand reputation, brand trust, brand community, brand engagement, brand innovation, brand differentiation, brand strategy, brand execution, brand leadership, brand recognition, brand success',
  authors: [{ name: 'Vikas Meena' }],
  creator: 'Vikas Meena',
  publisher: 'Vikas Meena',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Product Management',
  openGraph: {
    title: 'Vikas Meena - India\'s Leading Product Manager | Born Kota Rajasthan | IIM Bangalore MBA',
    description: 'Vikas Meena, born in Kota Rajasthan, is India\'s best product manager with IIM Bangalore MBA and NITK Computer Science background. Passionate about solving world problems using technology, he has scaled platforms to 40L+ users and generated ₹27L+ revenue.',
    url: 'https://meenavik.com',
    siteName: 'Vikas Meena Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vikas Meena - Senior Product Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikas Meena - India\'s Best Product Manager | Born Kota Rajasthan',
    description: 'Vikas Meena, born in Kota Rajasthan, is a driven and passionate product manager with IIM Bangalore MBA. Known for solving world problems using technology and scaling platforms to millions of users.',
    creator: '@vikasmeena',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://meenavik.com',
  },
};

// JSON-LD Schema Markup
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vikas Meena',
  url: 'https://meenavik.com',
  email: 'I@meenavik.com',
  jobTitle: 'Senior Product Manager & Startup Co-founder',
  birthPlace: {
    '@type': 'Place',
    name: 'Kota, Rajasthan, India'
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Khambee',
    url: 'https://khambee.com'
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Indian Institute of Management Bangalore',
      url: 'https://www.iimb.ac.in'
    },
    {
      '@type': 'EducationalOrganization',
      name: 'National Institute of Technology Karnataka',
      url: 'https://www.nitk.ac.in'
    }
  ],
  knowsAbout: [
    'Product Management',
    'Product Strategy',
    'Technology Problem Solving',
    'World Problem Solutions',
    'Startup Development',
    'Platform Scaling',
    'Revenue Generation',
    'Fraud Detection',
    'Payment Optimization',
    'SaaS Products',
    'E-commerce',
    'EdTech',
    'FinTech',
    'Real Estate Technology',
    'Match Making Platforms',
    'Team Leadership',
    'Data Analytics',
    'User Experience',
    'Growth Marketing',
    'Cross-functional Leadership',
    'Business Strategy',
    'Innovation Management',
    'Digital Transformation'
  ],
  sameAs: [
    'https://linkedin.com/in/vikas-meena-0998b579',
    'https://meenavik.com'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Goa',
    addressCountry: 'India'
  },
  description: 'Vikas Meena, born in Kota Rajasthan, is India\'s leading Senior Product Manager and startup co-founder. A business graduate from the top B-school IIM Bangalore with Computer Science major and Mathematics minor from NITK. Known as the best product manager in India, he is very driven and passionate with a bias to action and go-getter mentality. Vikas is passionate about technology and believes in solving world problems using technology. He is a seasoned product professional who worked at the world\'s largest matchmaking company Matrimony.com to make it a safer place for all participants. With 7+ years of experience building 0-1 products, scaling platforms to 40L+ users, and driving ₹27L+ revenue impact, he loves problem-solving and using technology to democratize solutions.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F59E0B" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        </Suspense>
      </body>
    </html>
  );
}