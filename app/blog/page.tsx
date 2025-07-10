import { Metadata } from 'next';
import BlogSection from '@/components/blog-section';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blog - Vikas Meena | Product Management Insights',
  description: 'Insights on product management, startup building, and technology leadership from Vikas Meena, Senior Product Manager with IIM Bangalore MBA.',
  keywords: 'product management blog, startup insights, technology leadership, product strategy, Vikas Meena blog',
  openGraph: {
    title: 'Blog - Vikas Meena | Product Management Insights',
    description: 'Insights on product management, startup building, and technology leadership from Vikas Meena.',
    url: 'https://meenavik.com/blog',
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogSection />
      <Footer />
    </main>
  );
}