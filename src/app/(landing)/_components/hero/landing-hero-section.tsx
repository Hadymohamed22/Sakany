import HeroContent from "./hero-content";
import StudentHeroCard from "./student-hero-card";

export default function LandingHeroSection() {
  return (
    <section className="relative h-129 bg-[radial-gradient(circle_at_top_left,rgba(220,245,242,0.5),rgba(220,245,242,0)_50%),radial-gradient(circle_at_bottom_right,rgba(254,240,215,0.7),rgba(254,240,215,0)_60%)] py-5">
      <div className="container h-full mx-auto px-5 flex items-center justify-center md:gap-10 lg:gap-12">
        {/* Student Card */}
        <StudentHeroCard />

        {/* Content */}
        <HeroContent />
      </div>
    </section>
  );
}
