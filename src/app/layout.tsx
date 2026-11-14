import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "سكني | شريك سكنك مش مجرد اسم في قائمة",
    template: "%s | سكني",
  },

  description:
    "سكني منصة بالذكاء الاصطناعي بتلاقيلك زميل السكن المناسب ومساكن قريبة من جامعتك بنسبة توافق مشروحة. حسابات موثّقة بالإيميل الجامعي، وتقييمات متبادلة، وبيانات محمية.",

  keywords: [
    "سكن طلابي",
    "سكن جامعي",
    "زميل سكن",
    "سكن قريب من الجامعة",
    "شقق للطلبة",
    "سكني",
    "سكن طلاب المنصورة",
    "سكن طلاب القاهرة",
  ],

  applicationName: "سكني",
  authors: [{ name: "سكني" }],
  creator: "سكني",
  publisher: "سكني",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "/",
    siteName: "سكني",
    title: "سكني | شريك سكنك مش مجرد اسم في قائمة",
    description:
      "احكي مع مساعد سكني عن نمط حياتك، ونرشحلك زملاء سكن ومساكن قريبة من جامعتك بنسبة توافق مشروحة.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "سكني - منصة مطابقة زملاء السكن الجامعي",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "سكني | شريك سكنك مش مجرد اسم في قائمة",
    description:
      "لاقي زميل سكنك المناسب ومسكن قريب من جامعتك بنسبة توافق مشروحة.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },

  category: "education",
};

const IBM_plex_sans_arabic = IBM_Plex_Sans_Arabic({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-ibm-plex",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cn(
        "h-full",
        "antialiased",
        IBM_plex_sans_arabic.variable,
        IBM_plex_sans_arabic.className,
      )}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
