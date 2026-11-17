export type StepType = {
  number: number;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
};

type Props = {
  step: StepType;
};

export default function StepCard({ step }: Props) {
  return (
    <li
      key={step.number}
      className="relative flex items-center gap-4 text-right md:flex-col md:gap-3 md:text-center"
    >
      <div
        className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white shadow-sm ${step.color}`}
      >
        {step.icon}
      </div>
      <div className="min-w-0 md:px-1">
        <p
          className={`mb-1 text-sm font-bold ${step.number === 4 ? "text-amber-500" : "text-teal-600"}`}
        >
          {step.number}
        </p>
        <h3 className="text-sm font-semibold leading-6 text-slate-800 sm:text-base md:whitespace-nowrap">
          {step.title}
        </h3>
        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm md:text-xs">
          {step.description}
        </p>
      </div>
    </li>
  );
}
