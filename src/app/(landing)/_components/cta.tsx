import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="pb-12 md:pb-14 px-5">
      <div
        className="container mx-auto w-full max-w-auto md:max-w-5/6 lg:max-w-4/6 shadow-lg text-center p-12 md:p-14 lg:p-16 relative before rounded-2xl"
        id="landingCTA"
      >
        {/* Title */}
        <h3 className="text-white text-3xl md:text-4xl font-bold">
          جاهز تلاقي زميل سكنك؟
        </h3>

        {/* Subtitle */}
        <p className="text-[#CCFBF1CC] text-xs md:text-sm mt-3">
          ابدأ محادثتك الأولى النهاردة، الحساب مجاني.
        </p>

        {/* Actions */}
        <div className="actions space-x-3 my-5">
          {/* Register */}
          <Button
            render={<Link href="/register" />}
            nativeButton={false}
            variant={"secondary"}
          >
            إنشاء حساب جديد
          </Button>

          {/* Login */}
          <Button
            render={<Link href="/login" />}
            nativeButton={false}
            variant={"outline"}
            className={
              "bg-gray-[#134E4A99] border border-[#0F766EB2] text-white"
            }
          >
            تسجيل الدخول
          </Button>
        </div>
      </div>
    </section>
  );
}
