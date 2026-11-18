import { Badge } from "@/shared/components/ui/badge";
import {
  Check,
  ClipboardCheck,
  MessageCircle,
  TriangleExclamationPointIcon,
} from "lucide-react";

export default function PlatformAdvantage() {
  // Variables
  const compatibilityParagraphs = [
    "الاتنين بتناموا قبل 12 بالليل",
    "بتحبوا البيت هادي وقت المذاكرة",
    "الاتنين غير مدخنين",
  ];
  const warningParagraphs = [
    "هو بيستقبل أصحابه كتير في الويك إند",
    "أنت تفضل تقسيم أعمال النظافة بجدول",
  ];

  return (
    <section className="w-full bg-[#f3f1ee] py-12 sm:py-14 lg:py-20">
      <div className="container px-5 mx-auto py-14 md:py-0 flex flex-col items-center justify-center gap-15 lg:flex-row lg:items-center lg:justify-center lg:gap-18">
        <div className="min-w-full md:min-w-140 rounded-2xl bg-white p-4 shadow-[0_.625rem_1.875rem_rgba(21,30,33,0.06)] backdrop-blur-sm sm:p-6 order-2 lg:order-1 -rotate-1">
          {/* Student Card */}
          <div className="flex gap-5 sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[#F3F4F6]">
            {/* Student Info */}
            <div className="text order-2 md:order-1">
              <p className="text-base font-bold sm:text-[1.125rem] text-slate-900">
                أنت ومحمد
              </p>
              <p className="mt-1 text-xs leading-7 text-[#9CA3AF] md:text-sm">
                هندسة القاهرة • 7 دقائق مشي
              </p>
              <Badge className="rounded-sm bg-[#ECFDF5] text-[#059669] text-xs md:text-sm">
                توافق ممتاز
              </Badge>
            </div>

            {/* Percentage Circle */}
            <div className="flex items-center justify-center sm:justify-start order-1 md:order-2">
              <div className="relative flex size-20 md:size-24 items-center justify-center rounded-full border-6 border-[#dff7f3] bg-[#f8fcfb] text-xl font-black text-[#0d8c7a] shadow-inner before:absolute before:inset-0 before:rotate-[-18deg] before:rounded-full before:border-6 before:border-[#0d8c7a] before:border-b-transparent before:border-l-transparent sm:text-2xl">
                88%
              </div>
            </div>
          </div>
          {/* Compatibility */}
          <div className="compatibility">
            {/* Title */}
            <h6 className="text-[#047857] flex items-center gap-1.5 font-bold pt-4 text-sm md:text-base">
              <Check size={20} />
              <span>اللي يجمعكم</span>
            </h6>

            {/* Paragraphs */}
            <div className="paragraphs space-y-1.5 pb-4 ps-5 mt-3">
              {compatibilityParagraphs.map((e, i) => (
                <p
                  key={`${e}-${i}`}
                  className="font-xs md:text-sm text-[#4B5563] font-medium"
                >
                  {e}
                </p>
              ))}
            </div>
          </div>
          {/* Warnings */}
          <div className="warnings border-t border-[#F3F4F6]">
            {/* Title */}
            <h6 className="text-[#D97706] flex items-center gap-1.5 font-bold text-sm md:text-base pt-4">
              <TriangleExclamationPointIcon size={20} />
              <span>ممكن يحصل احتكاك</span>
            </h6>

            {/* Paragraphs */}
            <div className="paragraphs space-y-1.5 ps-5 mt-3">
              {warningParagraphs.map((e, i) => (
                <p
                  key={`${e}-${i}`}
                  className="font-xs md:text-sm text-[#4B5563] font-medium"
                >
                  {e}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl lg:max-w-lg order-1 lg:order-2">
          <span className="text-[#0D9488] font-semibold ">
            إيه المحتوى في سكني
          </span>

          <h2 className="text-[32px] font-bold text-slate-900 sm:text-[40px] lg:text-right lg:text-[48px]">
            مش مجرد رقم ،
            <br />
            احنا بنفهم{" "}
            <span className="text-custom-primary border-dashed border-b-3 border-[#5EEAD4]">
              اسباب
            </span>{" "}
            التوافق
          </h2>

          <div className="space-y-6 mt-6 md:mt-8">
            <div className="box gap-4 flex items-center">
              <div className="icon size-10 bg-[#F0FDFA] border border-[#CCFBF1] text-custom-primary flex items-center justify-center rounded-md">
                <MessageCircle size={20} />
              </div>
              <div className="text">
                <h6 className="text-slate-900 font-bold text-sm">
                  محادثة بدل الاستمارات
                </h6>
                <p className="text-[#6B7280] text-xs mt-0.5">
                  بتكلم المساعد زي ما بتكلم صاحبك، وهو بيفهم ويسجل.
                </p>
              </div>
            </div>

            <div className="box gap-4 flex items-center">
              <div className="icon size-10 bg-[#F0FDFA] border border-[#CCFBF1] text-custom-primary flex items-center justify-center rounded-md">
                <ClipboardCheck size={20} />
              </div>
              <div className="text">
                <h6 className="text-slate-900 font-bold text-sm">
                  توافق بكلام بسيط
                </h6>
                <p className="text-[#6B7280] text-xs mt-0.5">
                  بنوضحلك الصفات المشتركة، ونقولك بصراحة إيه النقط اللي ممكن
                  تعمل احتكاك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
