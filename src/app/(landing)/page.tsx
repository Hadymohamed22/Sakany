import FeatureSection from "./_components/features/features-section";
import LandingHeroSection from "./_components/hero/landing-hero-section";
import PlatformSteps from "./_components/steps/platform-steps";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <LandingHeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Platform Steps */}
      <PlatformSteps />
    </>
  );
}
