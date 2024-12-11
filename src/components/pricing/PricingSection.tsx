import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PricingSection() {
  const t = useTranslations('Pricing');
  
  return (
    <div className="py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <Tabs defaultValue="yearly" className="w-fit">
          <TabsList>
            <TabsTrigger value="monthly">{t('monthly')}</TabsTrigger>
            <TabsTrigger value="yearly">{t('yearly')}</TabsTrigger>
            <TabsTrigger value="oneTime">{t('oneTime')}</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Basic Plan */}
        <div className="rounded-2xl border p-8">
          <h3 className="text-xl font-semibold">{t('basicTitle')}</h3>
          <div className="mt-4 flex items-baseline">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-bold">6.99</span>
            <span className="ml-1 text-muted-foreground">/ {t('month')}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{t('basicBilling')}</p>
          
          <Button className="mt-6 w-full">{t('upgrade')}</Button>
          
          <div className="mt-8 space-y-4">
            <h4 className="text-sm font-semibold">{t('basicFeatureTitle')}</h4>
            <ul className="space-y-3">
              {['credits', 'generation', 'cover', 'scripts', 'download'].map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">{t(`basic.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="rounded-2xl border p-8">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold">{t('proTitle')}</h3>
            <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
              {t('popular')}
            </span>
          </div>
          
          <div className="flex items-baseline">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-bold">11.99</span>
            <span className="ml-1 text-muted-foreground">/ {t('month')}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{t('proBilling')}</p>
          
          <Button className="mt-6 w-full">{t('upgrade')}</Button>
          
          <div className="mt-8 space-y-4">
            <h4 className="text-sm font-semibold">{t('proFeatureTitle')}</h4>
            <ul className="space-y-3">
              {['credits', 'basic', 'llm', 'tts', 'styles'].map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">{t(`pro.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 