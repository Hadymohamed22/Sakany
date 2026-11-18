import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="hero-content">
      {/* Badge */}
      <Badge variant="hero-badge" className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-star preview-icon"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
        للطلبة فى جامعات مصر
      </Badge>

      {/* Title */}
      <h1 className="text-[2.8rem] md:text-6xl font-bold text-[#030712] leading-15">
        شريك سكنك مش
        <br />
        مجرد{" "}
        <span className="text-custom-primary border-dashed border-b-3 border-[#5EEAD4]">
          اسم في قائمة
        </span>
        ، <br /> لازم تتفاهموا فعلا
      </h1>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-[#4B5563] mt-5 w-3/4">
        احكي مع مساعد سكني الذكي عن نمط حياتك، ونرشح لك زملاء سكن ومساكن قريبة
        من جامعتك، بنسبة توافق مشروحة بكلام بسيط.
      </p>

      {/* Actions */}
      <div className="actions space-x-3 mt-8">
        {/* Start For Free Button */}
        <Button
          variant={"secondary"}
          render={
            <Link href="/register" aria-label="ابدأ مجانا" role="button" />
          }
          nativeButton={false}
          aria-label="ابدأ مجانا"
          className={"w-32 md:w-36 shadow"}
        >
          ابدأ مجانا
        </Button>

        {/* Have Account Button */}
        <Button
          variant={"outline"}
          render={<Link href="/login" aria-label="عندى حساب" role="button" />}
          nativeButton={false}
          aria-label="عندى حساب"
        >
          عندى حساب
        </Button>
      </div>
    </div>
  );
}
