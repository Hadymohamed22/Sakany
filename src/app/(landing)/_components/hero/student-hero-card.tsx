export default function StudentHeroCard() {
  return (
    <div className="hidden w-150 shrink-0 lg:block">
      <div className="relative rounded-2xl bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.12)] w-5/6 mx-auto">
        <div className="flex items-center justify-between border-b border-gray-100 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0D9] text-lg font-bold text-orange-600">
              سا
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-gray-900">
                <span>سارة محمود</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4 fill-emerald-500"
                >
                  <path d="M10 1.5 12.2 3l2.7-.1.8 2.6 2.2 1.6-.8 2.6.8 2.6-2.2 1.6-.8 2.6-2.7-.1L10 18l-2.2-1.5-2.7.1-.8-2.6-2.2-1.6.8-2.6-.8-2.6 2.2-1.6.8-2.6 2.7.1L10 1.5Z" />
                  <path
                    d="m7 10 2 2 4-4"
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs text-gray-400">
                طب أسنان • جامعة المنصورة
              </p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-2xl font-bold text-teal-600">92%</p>
            <p className="text-xs text-teal-700">توافق ممتاز</p>
          </div>
        </div>

        <div className="my-5 flex justify-center gap-2 text-xs text-gray-600">
          <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
            نظيفة ومنظمة
          </span>
          <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
            غير مدخنة
          </span>
          <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
            تنام بدري
          </span>
        </div>

        <div className="rounded-2xl bg-teal-800 px-5 py-4 text-white shadow-md">
          <p className="mb-1 flex items-center gap-2 text-xs font-medium text-teal-100">
            <span
              aria-hidden="true"
              className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-teal-200 text-[10px] text-teal-800"
            >
              i
            </span>
            مساعد سكني
          </p>
          <p className="text-sm leading-6">
            تحب الهدوء وقت المذاكرة؟ سارة كمان، وتصحى بدري زيك.
          </p>
        </div>

        <div className="absolute -bottom-4 -right-3 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
          7 دقائق مشي من الجامعة
        </div>
      </div>
    </div>
  );
}
