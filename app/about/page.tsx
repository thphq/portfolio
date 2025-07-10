import { Metadata } from 'next';
import AboutSection from '@/components/about-section';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'About - Vikas Meena | Senior Product Manager Background',
  description: 'Learn about Vikas Meena\'s journey from Kota, Rajasthan to becoming a Senior Product Manager with IIM Bangalore MBA and NITK Computer Science background.',
  keywords: 'Vikas Meena about, product manager background, IIM Bangalore, NITK, Kota Rajasthan, product management career',
  openGraph: {
    title: 'About - Vikas Meena | Senior Product Manager Background',
    description: 'Learn about Vikas Meena\'s journey from Kota, Rajasthan to becoming a Senior Product Manager.',
    url: 'https://meenavik.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutSection />
      <Footer />
    </main>
  );
}