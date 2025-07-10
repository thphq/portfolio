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
    default: 'Vikas Meena - Senior Product Manager | Born Kota Rajasthan | IIM Bangalore MBA | NITK Computer Science',
    template: '%s | Vikas Meena - Product Manager'
  },
  description: 'Vikas Meena is a Senior Product Manager born in Kota, Rajasthan, with IIM Bangalore MBA and NITK Computer Science background. He has 7+ years of experience building 0-1 products, scaling platforms to 40L+ users, and driving ₹27L+ revenue impact. Passionate about democratizing technology to solve world problems, Vikas combines technical expertise with business strategy to create meaningful impact.',
  keywords: 'Vikas Meena, Senior Product Manager, IIM Bangalore MBA, NITK Computer Science, Kota Rajasthan, product management expert, startup co-founder, Khambee, Matrimony.com, Hubzu, 0-1 product development, platform scaling, fraud detection, payment optimization, cross-functional leadership, data-driven decisions, product strategy, SaaS development, EdTech, FinTech, real estate technology, growth marketing, user research, A/B testing, product analytics, go-to-market strategy, agile development, technical leadership, machine learning, artificial intelligence, customer experience, product metrics, team management, business intelligence, product-market fit, lean startup, design thinking, B2B SaaS, mobile product management, revenue optimization, competitive analysis, user experience design, technology democratization, innovation leader, digital transformation, performance optimization, scalability solutions, product security, DevOps, product operations, brand development, business development, strategic planning, OKRs, risk management, customer success, growth hacking, leadership development, entrepreneurship, venture capital, marketplace platforms, product-led growth',
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
    title: 'Vikas Meena - Senior Product Manager | Born Kota Rajasthan | IIM Bangalore MBA',
    description: 'Vikas Meena, born in Kota Rajasthan, is a Senior Product Manager with IIM Bangalore MBA and NITK Computer Science background. Passionate about democratizing technology to solve world problems, he has scaled platforms to 40L+ users and generated ₹27L+ revenue.',
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
    title: 'Vikas Meena - Senior Product Manager | Born Kota Rajasthan',
    description: 'Vikas Meena, born in Kota Rajasthan, is a driven and passionate Senior Product Manager with IIM Bangalore MBA. Passionate about democratizing technology to solve world problems and scaling platforms to millions of users.',
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
  description: 'Vikas Meena, born in Kota Rajasthan, is a Senior Product Manager and startup co-founder with an MBA from IIM Bangalore and Computer Science degree from NITK. He is passionate about technology and solving world problems through innovative product solutions. As a seasoned product professional, he has worked at companies like Matrimony.com, Hubzu, and co-founded Khambee. With 7+ years of experience building 0-1 products, scaling platforms to 40L+ users, and driving ₹27L+ revenue impact, Vikas combines technical expertise with business strategy to create meaningful impact through product management excellence.'
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
        <link rel="canonical" href="https://meenavik.com" />
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