import FeaturesCards from "./features-cards";
import SectionHeader from "../section-header";

export default function FeatureSection() {
  return (
    <section className="min-h-136.75 bg-[#191616] flex flex-col justify-center gap-14 md:gap-16 py-14 lg:py-0">
      {/* Header */}
      <SectionHeader
        title={
          <>
            السكن الكويس سهل...
            <br />
            لكن مع مين هتسكن؟
          </>
        }
        subtitle="المشكلة"
        titleClassName="text-white"
        subtitleClassName="text-custom-secondary"
        headerClassName="mb-0"
      />

      {/* Content: Cards */}
      <FeaturesCards />
    </section>
  );
}
