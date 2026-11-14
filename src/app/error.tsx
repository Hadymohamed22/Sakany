"use client";
import CurrentYear from "@/shared/components/current-date";
import GlobalPagesContent from "@/shared/components/global-pages-content";
import { Button } from "@/shared/components/ui/button";
import { Home, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import errorImage from "@/images/error-image.svg";

export default function Page({ reset }: { reset: () => void }) {
  return (
    <main className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#F3FBFA] text-center before:pointer-events-none before:absolute before:-left-20 md:before:left-40 before:-top-40 before:z-0  before:size-80 md:before:size-128 before:rounded-full before:bg-[radial-gradient(circle,#14B8A61A_0%,transparent_70%)] after:pointer-events-none after:absolute after:-bottom-24 after:right-10 md:after:right-24 after:z-0 after:size-60 md:after:size-80 after:rounded-full after:bg-[radial-gradient(circle,#14B8A61A_0%,transparent_70%)]">
      {/* Content */}
      <GlobalPagesContent
        imageSrc={errorImage}
        alt="صورة الايقون الخاصة بصفحة حدث خطأ ما"
        title="حصلت مشكلة غير متوقعة"
        subtitle="حصل خطأ من عندنا، مش منك. جرّب تاني، ولو المشكلة فضلت موجودة ارجع بعد شوية."
      >
        {/* Try Again Button */}
        <Button onClick={() => reset()}>
          <RefreshCcw />
          حاول تاني
        </Button>

        <Button
          variant={"outline"}
          render={<Link href="/" />}
          nativeButton={false}
          aria-label="العودة إلى الصفحة الرئيسية"
          title="العودة إلى الصفحة الرئيسية"
        >
          <Home />
          الرجوع للرئيسية
        </Button>
      </GlobalPagesContent>

      {/* Footer */}
      <div className="footer relative z-10 mt-auto py-6 text-[#9CA3AF]">
        سكني ©
        <Suspense fallback={<span>----</span>}>
          <CurrentYear />
        </Suspense>
        • منصة سكن الطلاب الأولى في مصر
      </div>
    </main>
  );
}
