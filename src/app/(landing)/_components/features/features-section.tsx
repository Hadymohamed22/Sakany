import FeaturesCards from "./features-cards";
import FeaturesSectionHeader from "./features-section-header";

export default function FeatureSection() {
  return (
    <section className="min-h-136.75 bg-[#191616] flex flex-col justify-center gap-14 md:gap-16 py-14 md:py-0">
      {/* Header */}
      <FeaturesSectionHeader />

      {/* Content: Cards */}
      <FeaturesCards />
    </section>
  );
}
