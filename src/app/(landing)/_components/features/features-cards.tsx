import { featuresCards } from "../../_contants/features.constant";
import FeatureCard from "./feature-card";

export default function FeaturesCards() {
  return (
    <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6">
      {featuresCards.map((feature) => (
        <FeatureCard
          key={feature.key}
          icon={feature.icon}
          title={feature.title}
          subtitle={feature.subtitle}
        />
      ))}
    </div>
  );
}
