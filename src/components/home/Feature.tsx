import { useTranslations } from 'next-intl';
import { Globe, FileText, Eraser, Search, Github, Phone } from 'lucide-react';

const features = [
  {
    icon: Github,
    titleKey: 'openSource',
    descKey: 'openSourceDesc'
  },
  {
    icon: FileText,
    titleKey: 'ResponsiveDesign',
    descKey: 'ResponsiveDesignDesc'
  },
  {
    icon: Eraser,
    titleKey: 'EasyCustomization',
    descKey: 'EasyCustomizationDesc'
  },
  {
    icon: Phone,
    titleKey: 'MobileFriendly',
    descKey: 'MobileFriendlyDesc'
  },
  {
    icon: Search,
    titleKey: 'SEOOptimized',
    descKey: 'SEOOptimizedDesc'
  },
  {
    icon: Globe,
    titleKey: 'GlobalizationSupport',
    descKey: 'GlobalizationSupportDesc'
  }
];

export default function Feature() {
  const t = useTranslations('Feature');
  
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="bg-gray-50/50 p-6 rounded-2xl border">
              <Icon className="h-6 w-6 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t(titleKey)}</h3>
              <p className="text-muted-foreground">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 