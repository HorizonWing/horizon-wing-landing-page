import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { env } from '@/env';

export default function Cta() {
  const t = useTranslations('Cta');
  
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={env.GITHUB_REPO_URL} target="_blank">
              <Button 
                size="lg" 
                className="min-w-[160px] bg-black text-white hover:bg-black/90"
              >
                {t('primaryAction')}
              </Button>
            </Link>
            <Link href={env.GITHUB_REPO_URL} target="_blank">
              <Button 
                size="lg" 
                variant="outline"
                className="min-w-[160px] border-black text-black hover:bg-black hover:text-white"
              >
                {t('secondaryAction')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 