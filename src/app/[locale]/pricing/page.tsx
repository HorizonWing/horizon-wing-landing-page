"use server"
import PricingSection from '@/components/pricing/PricingSection';
import Faq from '@/components/home/Faq';
import { type Metadata } from 'next'
import { getLocale } from "next-intl/server";
import { getLocaleUrl } from "@/lib/utils";
import { locales } from "i18n/request";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pricing - HorizonWing",
    description: "Horizon Wing Pricing Page",
    alternates: {
        canonical: getLocaleUrl(await getLocale(), "/pricing"),
        languages: Object.fromEntries(
          locales.map((locale) => {
            return [locale, getLocaleUrl(locale, "/pricing")]
          })
        )
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

export default async function PricingPage() {
  return <>
      <PricingSection />
      <Faq />
    </>;
}