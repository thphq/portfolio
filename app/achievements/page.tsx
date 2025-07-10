import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import AwardsSection from '@/components/awards-section';
import MetricsSection from '@/components/metrics-section';

export const metadata: Metadata = {
  title: 'Achievements - Vikas Meena | Awards & Recognition',
  description: 'Discover Vikas Meena\'s achievements including national competition wins, leadership positions, and measurable business impact.',
  keywords: 'Vikas Meena achievements, awards, recognition, national winner, product management success',
  openGraph: {
    title: 'Achievements - Vikas Meena | Awards & Recognition',
    description: 'Discover Vikas Meena\'s achievements including national competition wins and business impact.',
    url: 'https://meenavik.com/achievements',
  },
};

export default function AchievementsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AwardsSection />
        <MetricsSection />
      </div>
    </main>
  );
}