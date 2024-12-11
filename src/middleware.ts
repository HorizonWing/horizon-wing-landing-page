// @auto-i18n-check. Please do not delete the line.

import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from "../i18n/request";
import type { NextRequest } from 'next/server';

const I18nMiddleware = createMiddleware({
  locales,
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed'
})

export default async function middleware(request: NextRequest) {
  const response = I18nMiddleware(request)

  // add X-Robots-Tag header
  response.headers.set(
    'X-Robots-Tag',
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  )

  return response
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // Skip all api routes
        // Skip all files in the public folder (favicon.ico, images, etc)
        '/((?!api|_next/static|_next/image|favicon.ico|\\*.png|.*\\..*|robots.txt).*)',
        // Match all locale prefixes
        '/(ar|de|en|es|fr|hi|id|it|ja|ko|ms|pt|ru|th|vi|zh-t|zh)/:path*'
    ]
};
