import { useTranslations } from 'next-intl';
import Image from 'next/image';

const testimonials = [
  {
    quote: 'quoteOne',
    author: 'authorOne',
    title: 'titleOne',
    avatar: '/avatars/1.png'
  },
  {
    quote: 'quoteTwo',
    author: 'authorTwo',
    title: 'titleTwo',
    avatar: '/avatars/2.png'
  },
  {
    quote: 'quoteThree',
    author: 'authorThree',
    title: 'titleThree',
    avatar: '/avatars/3.png'
  },
  {
    quote: 'quoteFour',
    author: 'authorFour',
    title: 'titleFour',
    avatar: '/avatars/4.png'
  },
  {
    quote: 'quoteFive',
    author: 'authorFive',
    title: 'titleFive',
    avatar: '/avatars/5.png'
  },
  {
    quote: 'quoteSix',
    author: 'authorSix',
    title: 'titleSix',
    avatar: '/avatars/6.png'
  }
];

export default function Testimonial() {
  const t = useTranslations('Testimonial');
  
  return (
    <section className="py-20 bg-gray-50/50">
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
          {testimonials.map(({ quote, author, title, avatar }) => (
            <div key={author} className="bg-white p-6 rounded-2xl border">
              <blockquote className="text-lg mb-4">
                {t(quote)}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={avatar}
                    alt={t(author)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{t(author)}</div>
                  <div className="text-sm text-muted-foreground">{t(title)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 