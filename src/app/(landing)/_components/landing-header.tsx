import SakanyLogo from "@/shared/components/sakany-logo";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function LandingHeader() {
  return (
    <header className="border-b border-[#F3F4F6] py-5">
      <div className="container mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <SakanyLogo width={50} />

        {/* Account Action */}
        <div className="account-actions space-x-1 md:space-x-3">
          {/* Sign in */}
          <Button
            variant={"ghost"}
            render={<Link href={"/login"} />}
            nativeButton={false}
          >
            تسجيل الدخول
          </Button>

          {/* Register */}
          <Button render={<Link href={"/register"} />} nativeButton={false}>
            إنشاء حساب جديد
          </Button>
        </div>
      </div>
    </header>
  );
}
