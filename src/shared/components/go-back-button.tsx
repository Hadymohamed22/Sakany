"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  // Navigation
  const router = useRouter();

  // Handlers
  const handleClick = () => router.back();

  return (
    <Button variant={"outline"} onClick={handleClick}>
      {/* Arrow Right */}
      <ArrowRight />

      {/* Text */}
      <p>الرجوع للصفحة اللي فاتت</p>
    </Button>
  );
}
