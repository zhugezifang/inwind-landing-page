import { defaultLocale, getDictionary } from '@/lib/i18n';

//import Hero from '@/components/home/hero';
import Calculator from '@/components/home/calculator';

//import Feature from '@/components/home/feature';
//import Pricing from '@/components/home/pricing';
//import Testimonial from '@/components/home/testimonial';
import Faq from '@/components/home/faq';
//import Cta from '@/components/home/cta';

export async function generateMetadata({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName); // 获取内容
	return {
	  title: dict.SEO.title,
	  description: dict.SEO.description,
	  keywords: dict.SEO.keywords
	};
}

export default async function Home({ params }) {

	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName); // 获取内容

	return (
		<>
		<div className='max-w-[1280px] mx-auto'>
			<Calculator
				locale={dict.Hero}
				langName={langName}
			/>
			{/*<Hero
				locale={dict.Hero}
				CTALocale={dict.CTAButton}
			/>
			<Feature
				locale={dict.Feature}
				langName={langName}
			/>
			<Pricing
				locale={dict.Pricing}
				langName={langName}
			/>
			<Testimonial
				locale={dict.Testimonial}
				langName={langName}
			/>*/}
			<Faq
				locale={dict.Faq}
				langName={langName}
			/>
			{/*<Cta
				locale={dict.CTA}
				CTALocale={dict.CTAButton}
			/>*/}
		</div>
		</>
	);
	
}
