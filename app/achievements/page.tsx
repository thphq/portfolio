import { Metadata } from 'next';
import AwardsSection from '@/components/awards-section';
import MetricsSection from '@/components/metrics-section';
import Footer from '@/components/footer';

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
      <AwardsSection />
      <MetricsSection />
      <Footer />
    </main>
  );
}