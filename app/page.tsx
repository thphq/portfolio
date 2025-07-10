import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import InternshipsSection from "@/components/internships-section";
import LiveProjectsSection from "@/components/live-projects-section";
import SkillsSection from "@/components/skills-section";
import AwardsSection from "@/components/awards-section";
import MetricsSection from "@/components/metrics-section";
import VideoSection from "@/components/video-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <InternshipsSection />
      <LiveProjectsSection />
      <SkillsSection />
      <AwardsSection />
      <MetricsSection />
      <VideoSection />
      <ContactSection />
    </main>
  );
}