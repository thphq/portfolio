import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import ContactSection from '@/components/contact-section';

export const metadata: Metadata = {
  title: 'Contact - Vikas Meena | Get in Touch',
  description: 'Connect with Vikas Meena for product management opportunities, consulting, or collaboration. Based in Goa, open to relocation globally.',
  keywords: 'contact Vikas Meena, product manager contact, collaboration, consulting, Goa India',
  openGraph: {
    title: 'Contact - Vikas Meena | Get in Touch',
    description: 'Connect with Vikas Meena for product management opportunities and collaboration.',
    url: 'https://meenavik.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
    </main>
  );
}