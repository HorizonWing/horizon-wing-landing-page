"use client";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { env } from '@/env';
import { Menu, Github } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'pricing', href: '/pricing' },
];

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full border-b border-border/40 transition-colors duration-200 text-black",
      isScrolled 
        ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" 
        : "bg-background"
    )}>
      <div className="container flex h-14 items-center mx-auto px-4">
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="HorizonWing Logo"
              width={32}
              height={32}
              className="h-6 w-auto rounded-full"
            />
            <span className="font-bold text-xl text-black">HorizonWing</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex ml-8">
            <nav className="flex items-center gap-6">
              {navItems.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary",
                    "text-black/90"
                  )}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <a
            href={env.NEXT_PUBLIC_GITHUB_REPO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="view in github"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
          >
            <Github className="h-5 w-5" />
          </a>
          <div className="hidden md:block">
            <LanguageSwitch />
          </div>
          <div className="md:hidden">
            <LanguageSwitch />
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="open menus">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[280px]">
              <SheetHeader>
                <SheetTitle>{t('menu')}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map(({ key, href }) => (
                  <Link
                    key={key}
                    href={href}
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    {t(key)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
} 