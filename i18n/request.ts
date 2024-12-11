import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';

export const localeItems = [
    {code: 'ar', name: 'العربية'},
    {code: 'de', name: 'Deutsch'},
    {code: 'en', name: 'English'},
    {code: 'es', name: 'Español'},
    {code: 'fr', name: 'Français'},
    {code: 'hi', name: 'हिन्दी'},
    {code: 'id', name: 'Bahasa Indonesia'},
    {code: 'it', name: 'Italiano'},
    {code: 'ja', name: '日本語'},
    {code: 'ko', name: '한국어'},
    {code: 'ms', name: 'Bahasa Melayu'},
    {code: 'pt', name: 'Português'},
    {code: 'ru', name: 'Русский'},
    {code: 'th', name: 'ไทย'},
    {code: 'vi', name: 'Tiếng Việt'},
    {code: 'zh-t', name: '中文繁體'},
    {code: 'zh', name: '中文简体'},
];

export const locales = localeItems.map((item) => item.code);
export const defaultLocale = 'en';

export default getRequestConfig(async ({requestLocale}) => {
    // Validate that the incoming `locale` parameter is valid
    const locale: string = await requestLocale ?? "en";
    if (!locales.includes(locale)) notFound();

    return {
        messages: ((await import(`./locales/${locale}.json`)) as { default: AbstractIntlMessages }).default
    };
});
