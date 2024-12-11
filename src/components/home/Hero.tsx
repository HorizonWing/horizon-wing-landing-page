import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { env } from "@/env";

export default function Hero() {
  const t = useTranslations('Hero');
  
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center bg-gray-50/50">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
        {t('title')}
      </h1>
      
      <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] mb-8">
        {t('description')}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link href={env.GITHUB_REPO_URL} target="_blank">
          <Button size="lg" className="min-w-[160px]">
            {t('action')}
          </Button>
        </Link>
      </div>
    </div>
  );
} 