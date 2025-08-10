import { HeroSection } from '@/components/sections/HeroSection';
import { PortalSelector } from '@/components/sections/PortalSelector';
import { FeatureGrid } from '@/components/sections/FeatureGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-medical-primary-50 via-white to-medical-purple-50 dark:from-medical-gray-900 dark:via-medical-gray-800 dark:to-medical-purple-950">
      <HeroSection 
        title="third-drop-healthcare-patient-portal-1754796401702"
        description="Third drop"
        primaryAction={{
          label: "Get Started",
          href: "#portals"
        }}
        secondaryAction={{
          label: "Learn More",
          href: "#features"
        }}
      />
      
      <section id="portals" className="py-20">
        <PortalSelector />
      </section>
      
      <section id="features">
        <FeatureGrid />
      </section>
    </main>
  );
}