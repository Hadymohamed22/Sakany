import PlatformAdvantage from "./_components/advantage/platform-advantage";
import CTA from "./_components/cta";
import FeatureSection from "./_components/features/features-section";
import LandingHeroSection from "./_components/hero/landing-hero-section";
import LocationSection from "./_components/location/location-section";
import PlatformSteps from "./_components/steps/platform-steps";
import SupportAreaSection from "./_components/support-area-section";
import TrustSection from "./_components/trust/trust-section";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <LandingHeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Platform Steps */}
      <PlatformSteps />

      {/* Platform Advantage */}
      <PlatformAdvantage />

      {/* Trust Section */}
      <TrustSection />

      {/* Location Section */}
      <LocationSection />

      {/* Platform Support Area Section */}
      <SupportAreaSection />

      {/* CTA And Login */}
      <CTA />
    </>
  );
}
