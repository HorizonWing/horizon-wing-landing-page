// @auto-i18n-check. Please do not delete the line.

import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from "../i18n/request";

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: defaultLocale,

    // 'always': This is the default, The home page will also be redirected to the default language, such as www.abc.com to www.abc.com/en
    // 'as-needed': The default page is not redirected. For example, if you open www.abc.com, it is still www.abc.com
    localePrefix: 'as-needed',
});

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // Skip all api routes
        // Skip all files in the public folder (favicon.ico, images, etc)
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|robots.txt).*)',
        // Match all locale prefixes
        '/(ar|de|en|es|fr|hi|id|it|ja|ko|ms|pt|ru|th|vi|zh-t|zh)/:path*'
    ]
};
