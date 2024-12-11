'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { localeItems } from "@/../i18n/request";


export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname().replace(`/${locale}`, '');
  const [isChanging, setIsChanging] = useState(false);

  const switchLanguage = async (newLocale: string) => {
    setIsChanging(true);
    try {
      return router.push(`/${newLocale}${pathname}`);
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger 
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
        disabled={isChanging}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden md:block">{localeItems.find(lang => lang.code === locale)?.name ?? 'Language'}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {localeItems.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            disabled={isChanging || locale === lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={locale === lang.code ? 'bg-accent' : ''}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 