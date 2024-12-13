import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { env } from '@/env';

const footerLinks = {
  product: [
    { key: 'components', href: '#' },
    { key: 'templates', href: '#' },
    { key: 'documentation', href: '#' },
  ],
  social: [
    { key: 'github', href: '#' },
    { key: 'twitter', href: '#' },
    { key: 'discord', href: '#' },
  ],
  service: [
    { key: 'privacy', href: '#' },
    { key: 'terms', href: '#' },
    { key: 'contact', href: '#' },
  ],
  community: [
    { key: 'twitter', href: 'https://twitter.com' },
    { key: 'discord', href: 'https://discord.com' },
    { key: 'telegram', href: 'https://telegram.org' },
  ],
};

export default function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <footer className="w-full border-t border-border/40 bg-white">
      <div className="container mx-auto px-4 pt-16 pb-5">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="HorizonWing Logo"
                width={32}
                height={32}
                className="h-6 w-auto rounded-full"
              />
              <h2 className="text-xl font-bold text-black">HorizonWing</h2>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {t('description')}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{t('product')}</h3>
            {footerLinks.product.map(({ key, href }) => (
              <Link 
                key={key} 
                href={href}
                className="text-sm text-black/70 hover:text-black"
              >
                {t(key)}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{t('social')}</h3>
            {footerLinks.social.map(({ key, href }) => (
              <Link 
                key={key} 
                href={href}
                className="text-sm text-black/70 hover:text-black"
              >
                {t(key)}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{t('service')}</h3>
            {footerLinks.service.map(({ key, href }) => (
              <Link 
                key={key} 
                href={href}
                className="text-sm text-black/70 hover:text-black"
              >
                {t(key)}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{t('community')}</h3>
            {footerLinks.community.map(({ key, href }) => (
              <Link 
                key={key} 
                href={href}
                className="text-sm text-black/70 hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(key)}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} • HorizonWing {t('copyright')}
        </div>

        {/* 添加 Uneed Embed Badge */}
        <div className="mt-8 flex justify-center">
          <a 
            href="https://www.uneed.best/tool/horizonwing-landing-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="https://www.uneed.best/EMBED3.png" 
              alt="Uneed Embed Badge" 
              width="200" 
              height="auto" 
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
} 