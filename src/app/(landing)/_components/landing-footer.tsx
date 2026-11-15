import CurrentYear from "@/shared/components/current-date";
import { Suspense } from "react";

export default function LandingFooter() {
  return (
    <footer className="border-t border-[#F3F4F6] py-5 bg-[#FCFBF9]">
      <div className="container mx-auto px-5 flex flex-col md:flex-row gap-1 md:gap-0 items-center justify-between">
        {/* Logo */}
        <h6 className="text-custom-primary font-bold text-base md:text-lg">
          سكنى
        </h6>

        {/* Development Team */}
        <p className="text-custom-primary/50 font-medium text-sm">
          Dev By ACMA Team
        </p>

        {/* Copyright */}
        <p className="text-xs text-[#9CA3AF]">
          ©
          <Suspense>
            <CurrentYear />
          </Suspense>
          سكني. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
