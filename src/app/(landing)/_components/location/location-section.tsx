import illustrationImage from "@/images/location-landing.svg";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function LocationSection() {
  return (
    <section className="w-full bg-[#f3f2ef] py-10 lg:py-16" dir="rtl">
      <div className="container px-5 mx-auto flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-16">
        {/* Illustration */}
        <div className="illustration w-full lg:w-118 relative bg-white border border-[#E5E7EBCC] shadow p-5 rounded-2xl">
          <div className="content bg-[#F0F4F4] rounded-xl h-53 flex flex-col justify-center gap-1">
            <Image
              src={illustrationImage}
              alt="location university illustration"
              className="mx-auto"
            />

            <div className="location-text border border-[#F3F4F6] bg-[#FFFFFFF2] py-1 px-3 rounded-sm ms-auto me-5">
              <MapPin
                size={16}
                className="text-custom-primary inline-block me-2"
              />
              <span className="text-[#374151] font-bold text-xs">
                7 دقائق مشي من الجامعة
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-fit text-[#1b1b1b]">
          <p className="mb-4 text-[13px] font-medium tracking-[0.04em] text-[#8d928a]">
            ترتيب حسب الموقع
          </p>

          <h2 className="text-3xl font-black md:text-[3rem] md:leading-[1.35]">
            سكنك جنبك جامعتك،
            <br />
            مش آخر الدنيا
          </h2>

          <p className="mt-6 text-[15px] leading-8 text-[#4c504d] md:text-[16px]">
            ترتب المسكن حسب المسافة الحقيقة من مكانك، سواء كنت في أو ما وراءه،
            <br />
            ومش لازم على بعد كبير. تمّكّن محليتك من الوصول إلى مكانك
            <br />
            بسهولة وسرعة.
          </p>
        </div>
      </div>
    </section>
  );
}
