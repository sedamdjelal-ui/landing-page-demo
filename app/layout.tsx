import type { Metadata } from "next";
import { Amiri, Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-page-demo-five-xi.vercel.app"),
  title: "دار مِسك | عطور جزائرية فاخرة",
  description:
    "عطر «ليالي القصبة» من دار مِسك: تركيبة شرقية تدوم طويلًا، مع توصيل إلى كل الولايات والدفع عند الاستلام.",
  openGraph: {
    title: "عطر ليالي القصبة | دار مِسك",
    description:
      "تركيبة شرقية فاخرة تدوم طويلًا، توصيل إلى كل الولايات والدفع عند الاستلام.",
    url: "/",
    siteName: "دار مِسك",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "عطر ليالي القصبة من دار مِسك",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "عطر ليالي القصبة | دار مِسك",
    description:
      "تركيبة شرقية فاخرة تدوم طويلًا، توصيل إلى كل الولايات والدفع عند الاستلام.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
