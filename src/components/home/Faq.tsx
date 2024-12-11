import { useTranslations } from 'next-intl';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  {
    questionKey: 'questionOne',
    answerKey: 'answerOne'
  },
  {
    questionKey: 'questionTwo',
    answerKey: 'answerTwo'
  },
  {
    questionKey: 'questionThree',
    answerKey: 'answerThree'
  },
  {
    questionKey: 'questionFour',
    answerKey: 'answerFour'
  },
  {
    questionKey: 'questionFive',
    answerKey: 'answerFive'
  }
];

export default function Faq() {
  const t = useTranslations('Faq');
  
  return (
    <section className="py-20 bg-white max-w-5xl mx-auto">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map(({ questionKey, answerKey }) => (
            <AccordionItem key={questionKey} value={questionKey}>
              <AccordionTrigger>{t(questionKey)}</AccordionTrigger>
              <AccordionContent>{t(answerKey)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 