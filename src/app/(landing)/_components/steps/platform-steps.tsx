import { platformSteps } from "../../_contants/platform-steps";
import StepCard from "./step-card";

export default function PlatformSteps() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="container mx-auto">
        <header className="mb-10 text-center sm:mb-14">
          <p className="mb-1 text-sm font-medium text-teal-700">إزاي بتشتغل</p>
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            أربع خطوات وتلاقي اللي يناسبك
          </h2>
        </header>

        <ol className="relative grid gap-7 before:absolute before:bottom-7 before:right-[1.2rem] before:top-7 before:border-r-3 before:border-dashed before:border-teal-200 before:content-[''] md:grid-cols-4 md:gap-3 md:before:bottom-auto md:before:left-[8%] md:before:right-[8%] md:before:top-5 md:before:border-r-0 md:before:border-t-3">
          {platformSteps.map((step) => (
            <StepCard step={step} key={step.key} />
          ))}
        </ol>
      </div>
    </section>
  );
}
