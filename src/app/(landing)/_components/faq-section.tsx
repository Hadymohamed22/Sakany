import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";

export default function FAQSection() {
  const categories: Array<{
    title: string;
    questions: Array<{
      key: string;
      value: string;
      question: string;
      answer: string;
    }>;
  }> = [
    {
      title: "عامة عن سكني",
      questions: [
        {
          key: "faq-platform",
          value: "faq-platform",
          question: "ما هي منصة سكني؟",
          answer:
            "منصة ذكية بتساعد طلاب الجامعات في العثور على سكن مناسب أو شريك سكن متوافق مع أسلوب حياتهم.",
        },
        {
          key: "faq-users",
          value: "faq-users",
          question: "مين يقدر يستخدم منصة سكني؟",
          answer:
            "طلاب الجامعات، خصوصًا الطلاب المغتربين اللي بيدوروا على سكن قريب من جامعتهم.",
        },
      ],
    },
    {
      title: "التسجيل والتوثيق",
      questions: [
        {
          key: "faq-verification",
          value: "faq-verification",
          question: "هل لازم أوثق حسابي؟",
          answer:
            "نعم، تعتمد المنصة على البريد الجامعي الرسمي والبطاقة الجامعية لتوثيق الهوية.",
        },
      ],
    },
    {
      title: "التوافق الذكي",
      questions: [
        {
          key: "faq-find-roommate",
          value: "faq-find-roommate",
          question: "كيف استطيع العثور علي شريك سكن مناسب مثلا؟",
          answer:
            "من خلال إنشاء حساب والإجابة عن أسئلة المحادثة التعريفية، وبعدها المنصة بتقترح الأشخاص الأكثر توافقًا معاك.",
        },
        {
          key: "faq-compatibility",
          value: "faq-compatibility",
          question: "كيف يتم حساب نسبه التوافق ؟",
          answer:
            "باستخدام الذكاء الاصطناعي لتحليل ومقارنة عادات النوم والنظافة والهدوء والتدخين وأسلوب الحياة.",
        },
        {
          key: "faq-compatibility-guarantee",
          value: "faq-compatibility-guarantee",
          question: "هل نسبة التوافق بتضمن نجاح تجربة السكن؟",
          answer:
            "لا، النسبة بتساعدك تفهم مدى التوافق، لكنها مش ضمان لعدم حدوث اختلافات.",
        },
        {
          key: "faq-rate-roommate",
          value: "faq-rate-roommate",
          question: "هل أقدر أقيم شريك السكن بعد التجربة؟",
          answer: "أيوه، المنصة بتوفر نظام تقييمات متبادلة بعد تجربة السكن.",
        },
      ],
    },
    {
      title: "السكن والأمان",
      questions: [
        {
          key: "faq-near-university",
          value: "faq-near-university",
          question: "هل أقدر ألاقي سكن قريب من جامعتي؟",
          answer:
            "أيوه، المنصة بتساعدك في الوصول لخيارات سكن بناءً على موقع الجامعة.",
        },
        {
          key: "faq-data-security",
          value: "faq-data-security",
          question: "هل بياناتي الشخصية آمنة؟",
          answer:
            "المنصة بتوفر آليات لتوثيق الحسابات وفحص الملفات الشخصية المشبوهة لتقليل مخاطر التعامل مع حسابات وهمية.",
        },
        {
          key: "faq-housing-provider",
          value: "faq-housing-provider",
          question: "هل سكني بتوفر السكن بنفسها؟",
          answer:
            "لا، سكني منصة بتساعد الطلاب في البحث والربط بين الأشخاص وخيارات السكن المتاحة.",
        },
      ],
    },
  ];

  return (
    <section className="mb-14 md:mb-16">
      <div className="container mx-auto px-5">
        <div className="mx-auto w-5/6 space-y-8 md:w-4/6 lg:w-3/6">
          {categories.map((category, index) => (
            <div key={category.title}>
              <h2 className="mb-3 text-right text-lg font-semibold md:text-xl text-custom-primary">
                {category.title}
              </h2>
              <Accordion
                defaultValue={index === 0 ? [category.questions[0].value] : []}
              >
                {category.questions.map((question) => (
                  <AccordionItem key={question.key} value={question.value}>
                    <AccordionTrigger>{question.question}</AccordionTrigger>
                    <AccordionContent>{question.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
