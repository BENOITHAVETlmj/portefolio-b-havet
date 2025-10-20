import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import "../../styles/globals.scss";
import { getMessages, setRequestLocale } from "next-intl/server";
import { customFont } from "../fonts";
import { routing } from "../../i18n/routing";
import { ThemeProvider } from 'next-themes';
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  metadataBase: new URL("https://portefolio-b-havet.vercel.app"),
  title: {
    default: "Benoît Havet | Développeur Front-End React & UX Designer",
    template: "%s | Benoît Havet",
  },
  description:
    "Portfolio de Benoît Havet — Développeur front-end spécialisé en React, Next.js et UX design. Découvrez mes projets, mon parcours et mes créations web modernes et performantes.",
  keywords: [
    "Benoît Havet",
    "Développeur front-end",
    "React",
    "Next.js",
    "TypeScript",
    "UX design",
    "Portfolio développeur",
    "Création site web",
    "Web performance",
  ],
  authors: [{ name: "Benoît Havet", url: "https://portefolio-b-havet.vercel.app" }],
  creator: "Benoît Havet",
  publisher: "Benoît Havet",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portefolio-b-havet.vercel.app/fr",
    title: "Benoît Havet — Développeur Front-End & UX Designer",
    description:
      "Développeur front-end passionné, spécialisé en React et Next.js. Découvrez mon parcours, mes projets et mon approche du design web moderne.",
    siteName: "Portfolio Benoît Havet",
    images: [
      {
        url: "https://portefolio-b-havet.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Benoît Havet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benoît Havet — Développeur Front-End & UX Designer",
    description:
      "Portfolio et projets de Benoît Havet, développeur spécialisé en React, Next.js et UX design.",
    images: ["https://portefolio-b-havet.vercel.app/og-image.jpg"],
    creator: "", 
  },
  alternates: {
    canonical: "https://portefolio-b-havet.vercel.app/fr",
    languages: {
      "fr": "https://portefolio-b-havet.vercel.app/fr",
      "en": "https://portefolio-b-havet.vercel.app/en",
    },
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={customFont.variable}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <Script
          id="schema-org-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Benoît Havet",
              jobTitle: "Développeur Front-End React & UX Designer",
              url: "https://portefolio-b-havet.vercel.app",
              image: "https://portefolio-b-havet.vercel.app/og-image.jpg",
              sameAs: [
                "https://github.com/BENOITHAVETlmj/portefolio-b-havet",
                "https://www.linkedin.com/in/beno%C3%AEt-havet-708752154/",
                "https://portefolio-b-havet.vercel.app",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
