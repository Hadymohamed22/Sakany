import { cn } from "cn";

type Props = {
  title: string | React.ReactNode;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
  headerClassName?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  headerClassName,
}: Props) {
  return (
    <header className={cn("header text-center mb-16", headerClassName)}>
      {/* Problem */}
      <p
        className={cn(
          "text-xs mb-3 font-bold text-teal-700",
          subtitleClassName,
        )}
      >
        {subtitle}
      </p>

      {/* Title */}
      <h3
        className={cn(
          "text-slate-900 text-3xl md:text-4xl font-bold mx-auto",
          titleClassName,
        )}
      >
        {title}
      </h3>
    </header>
  );
}
