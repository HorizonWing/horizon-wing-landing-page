"use server"

import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import Testimonial from "@/components/home/Testimonial";
import Faq from "@/components/home/Faq";
import Cta from "@/components/home/Cta";
import { type Metadata } from 'next'
import { getLocale } from "next-intl/server";
import { getLocaleUrl } from "@/lib/utils";
import { locales } from "i18n/request";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: "HorizonWing - Landing Page",
    description: "Horizon Wing Landing Page",
    alternates: {
      canonical: getLocaleUrl(locale),
      languages: Object.fromEntries(
        locales.map((locale) => {
          return [locale, getLocaleUrl(locale)]
        })
      )
    },
    openGraph: {
      title: 'HorizonWing - Landing Page',
      description: 'Horizon Wing Landing Page',
      url: getLocaleUrl(locale),
      siteName: 'HorizonWing',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'HorizonWing Preview',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'HorizonWing - Landing Page',
      description: 'Horizon Wing Landing Page',
      images: ['/og-image.png'],
      creator: '@HorizonWingTech',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}

export default async function HomePage() {
  return <>
      <Hero />
      <div className="max-w-7xl mx-auto">
        <Feature />
        <Testimonial />
        <Faq />
      </div>
      <Cta />
    </>;
}