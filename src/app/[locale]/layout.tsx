// @auto-i18n-check. Please do not delete the line.

import React from "react";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import {NextIntlClientProvider, useLocale, useMessages} from 'next-intl';
import Navbar from "@/components/common/Navbar";
import Footer from '@/components/common/Footer';

export default function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = useLocale();
    const messages = useMessages();
    return (
    <html lang={locale} className={cn(GeistSans.variable, "scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100")}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
            <Footer />
        </NextIntlClientProvider>
        </body>
    </html>
    );
}
