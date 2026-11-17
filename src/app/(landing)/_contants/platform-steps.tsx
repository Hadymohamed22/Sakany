import { StepType } from "../_components/steps/step-card";

export const platformSteps: Array<StepType & { key: string }> = [
  {
    key: "ai-chat",
    number: 1,
    title: "اتكلم مع الذكاء الاصطناعي",
    description: "محادثة بسيطة بدل نموذج طويل وممل.",
    color: "bg-teal-500",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75v8.5A2.75 2.75 0 0 1 17.25 16H9l-5 4V4.75Z" />
      </svg>
    ),
  },
  {
    key: "lifestyle-profile",
    number: 2,
    title: "خد ملف نمط حياتك",
    description: "بنلخص عاداتك وتفضيلاتك في بروفايل واضح.",
    color: "bg-teal-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M6 3.5A1.5 1.5 0 0 0 4.5 5v14A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 18 3.5H6Zm2.25 4h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm0 4h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Z" />
      </svg>
    ),
  },
  {
    key: "compatibility-match",
    number: 3,
    title: "شوف ترشيحاتك بنسبة التوافق",
    description: "زملاء وسكان في مرتبة من الأنسب للأقل.",
    color: "bg-teal-700",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="m6 12 4 4L19 7" />
        <path d="M5 5.5 8 7l3-1.5" />
      </svg>
    ),
  },
  {
    key: "safe-contact",
    number: 4,
    title: "تواصل بأمان",
    description: "رسائل داخل المنصة لحد ما تطمن.",
    color: "bg-amber-500",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M8.25 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.5-.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 18.5v-1.25A4.25 4.25 0 0 1 6.75 13h3a4.25 4.25 0 0 1 4.25 4.25v1.25h-11.5Zm12.25 0v-1.25a5.7 5.7 0 0 0-1.17-3.47 3.74 3.74 0 0 1 1.67-.4h.5a3.75 3.75 0 0 1 3.75 3.75v1.37h-4.75Z" />
      </svg>
    ),
  },
];
