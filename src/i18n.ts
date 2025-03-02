// @auto-i18n-check. Please do not delete the line.

import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from "./i18n-metadata";
import type { AbstractIntlMessages } from 'next-intl';

export default getRequestConfig(async ({requestLocale}) => {
    // Validate that the incoming `locale` parameter is valid
    const locale: string = await requestLocale ?? "en";
    if (!locales.includes(locale)) notFound();

    return {
        locale,
        messages: ((await import(`../messages/${locale}.json`)) as { default: AbstractIntlMessages }).default
    };
});