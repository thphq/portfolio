import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import ExperienceSection from '@/components/experience-section';

export const metadata: Metadata = {
  title: 'Experience - Vikas Meena | Professional Journey',
  description: 'Explore Vikas Meena\'s professional experience across startups and enterprises, from Khambee co-founder to Matrimony.com Product Manager.',
  keywords: 'Vikas Meena experience, product manager career, Khambee, Matrimony.com, Hubzu, startup experience',
  openGraph: {
    title: 'Experience - Vikas Meena | Professional Journey',
    description: 'Explore Vikas Meena\'s professional experience across startups and enterprises.',
    url: 'https://meenavik.com/experience',
  },
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ExperienceSection />
      </div>
    </main>
  );
}