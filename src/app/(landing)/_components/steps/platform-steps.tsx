import { platformSteps } from "../../_contants/platform-steps";
import SectionHeader from "../section-header";
import StepCard from "./step-card";

export default function PlatformSteps() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="container mx-auto">
        <SectionHeader
          title="أربع خطوات وتلاقي اللي يناسبك"
          subtitle="إزاي بتشتغل"
        />

        <ol className="relative grid gap-7 before:absolute before:bottom-7 before:right-[1.2rem] before:top-7 before:border-r-3 before:border-dashed before:border-teal-200 md:grid-cols-4 md:gap-3 md:before:bottom-auto md:before:left-[8%] md:before:right-[8%] md:before:top-5 md:before:border-r-0 md:before:border-t-3">
          {platformSteps.map((step) => (
            <StepCard step={step} key={step.key} />
          ))}
        </ol>
      </div>
    </section>
  );
}
