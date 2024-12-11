import { env } from "@/env"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocaleUrl(locale: string, path?: string) {
  if (locale === "en") {
    locale = ""
    if (path?.startsWith("/")) {
      path = path.slice(1)
    }
  }
  if (!path) {
    path = ""
  }

  return `${env.DOMAIN}/${locale}${path}`
}