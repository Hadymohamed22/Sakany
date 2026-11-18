import { GraduationCap, Star, UserRoundCheck } from "lucide-react";
import SectionHeader from "../section-header";

const trustFeatures = [
  {
    title: "توثيق بالإيميل والبطاقة الجامعية",
    description: "كل حساب يتأكد منه بالإيميل الجامعي وصورة الكارنيه.",
    icon: GraduationCap,
    iconClassName: "bg-teal-50 text-teal-700",
  },
  {
    title: "تقييمات متبادلة",
    description: "بعد السكن، كل واحد يقيم التاني وتفضل التقييمات شفافة.",
    icon: Star,
    iconClassName: "bg-amber-50 text-amber-500",
  },
  {
    title: "اكتشاف الحسابات المشبوهة",
    description: "نظامنا يلاحظ السلوك الغريب ويراجعه قبل ما يوصلك.",
    icon: UserRoundCheck,
    iconClassName: "bg-rose-50 text-rose-500",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-20">
      <SectionHeader
        subtitle="الأمان والثقة"
        title="ناس حقيقيون ، وبيانات محمية"
      />

      <div className="container mx-auto px-5 flex flex-col gap-5 md:flex-row">
        {trustFeatures.map(
          ({ title, description, icon: Icon, iconClassName }) => (
            <div
              key={title}
              className="flex min-h-40 flex-1 flex-col items-center justify-center rounded-xl border border-slate-100 bg-stone-50/70 px-6 py-7 text-center"
            >
              <span
                className={`mb-4 flex size-11 items-center justify-center rounded-full ${iconClassName}`}
              >
                <Icon
                  aria-hidden="true"
                  className="size-5"
                  fill="currentColor"
                />
              </span>
              <h3 className="mb-2 text-base font-bold text-slate-900">
                {title}
              </h3>
              <p className="text-sm leading-6 text-slate-500">{description}</p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
