import { Badge } from "@/shared/components/ui/badge";
import SectionHeader from "./section-header";

export default function SupportAreaSection() {
  // Variables
  const countries = [
    {
      name: "أسيوط",
      color: "border-amber-400 bg-amber-50 text-amber-800",
    },
    {
      name: "طنطا",
      color: "border-orange-400 bg-orange-50 text-orange-800",
    },
    {
      name: "عين شمس",
      color: "border-yellow-400 bg-yellow-50 text-yellow-800",
    },
    {
      name: "الإسكندرية",
      color: "border-amber-500 bg-amber-50 text-amber-900",
    },
    {
      name: "القاهرة",
      color: "border-orange-500 bg-orange-50 text-orange-900",
    },
    {
      name: "المنصورة",
      color: "border-teal-500 bg-teal-50 text-teal-800",
    },
  ];
  return (
    <section className="py-18 md:py-20 text-center">
      {/* Header */}
      <SectionHeader
        title={
          <>
            لو جاي من محافظة تانية
            <br />
            للدراسة، سكني معمول عشانك
          </>
        }
        subtitle="مين يستفيد؟"
        headerClassName="mb-0"
      />
      <p className="text-sm text-[#6B7280] mt-4 mb-8">
        من أسيوط للقاهرة، ومن طنطا للإسكندرية؛ لِقاء أول سنة غربة مش لازم يكون
        مغامرة.
      </p>

      {/* Countries Badges */}
      <div
        className="countries-badges flex flex-wrap items-center justify-center gap-3"
        dir="rtl"
      >
        {countries.map(({ name, color }) => (
          <Badge
            key={name}
            className={`h-6 min-w-22 md:h-10 md:min-w-26 justify-center rounded-full border px-6 py-3 text-xs md:text-base font-semibold shadow-none ${color}`}
          >
            {name}
          </Badge>
        ))}
      </div>
    </section>
  );
}
