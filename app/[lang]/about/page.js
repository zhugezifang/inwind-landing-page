'use client';
import { AboutsList } from '@/lib/aboutList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function About() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		const fetchLinksList = async () => {
			if (pathname === '/') {
				setLangName(defaultLocale);
			} else {
				setLangName(pathname.split('/')[1]);
			}
			setLinkList(AboutsList[`ABOUT_${langName.toUpperCase()}`] || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	return (

	<div class="max-w-screen-xl px-4 pb-6 mx-auto lg:gap-8 xl:gap-0">

		<div class="bg-white-100 py-6 sm:px-6 px-4 rounded-3xl">
			<div class="max-w-4xl w-full mx-auto text-center">
				{linkList.map((link, index) => {
                    return (
						<h1 class="text-center text-3xl font-bold md:text-3xl"  key={index}> 
                            {link.title}
                        </h1>
                    );
                })}
			</div>
		</div>

	</div>


		
	);
}




