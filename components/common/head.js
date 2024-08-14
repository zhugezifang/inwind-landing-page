'use client';
//import Image from 'next/image';
import { HeadersList } from '@/lib/headersList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function CustomHead() {
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
			setLinkList(HeadersList[`Header_${langName.toUpperCase()}`] || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	return (
		<>

		{linkList.map((link, index) => {
			return (
		<>
			<title key={index}>{link.title}</title>
			<meta name="google-site-verification" content="LTQwS7fUgG65xzbbzcPNCkz_73JdYc8Be9vQg3FynhU" />
			<meta name="keywords" content={`${link.keywords}`} />
			<meta name="description" content={`${link.description}`} />
		</>
				);
		})}
		
		<script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-X8FN5Y656M`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X8FN5Y656M');
            `,
          }}
        />
		
		<script
			dangerouslySetInnerHTML={{
				__html: `
				(function() {
					const theme = localStorage.getItem('theme') || 'bussiness';
					document.documentElement.setAttribute('data-theme', theme);
				})();
				`,
			}}
		/>
	</>
	);
}