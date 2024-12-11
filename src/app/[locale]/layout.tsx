// @auto-i18n-check. Please do not delete the line.

import React from "react";
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
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
            <Footer />
        </NextIntlClientProvider>
    );
}
