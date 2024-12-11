import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import Testimonial from "@/components/home/Testimonial";
import Faq from "@/components/home/Faq";
import Cta from "@/components/home/Cta";
export default function HomePage() {
  return <>
      <Hero />
      <div className="max-w-7xl mx-auto">
        <Feature />
        <Testimonial />
        <Faq />
      </div>
      <Cta />
    </>;
}