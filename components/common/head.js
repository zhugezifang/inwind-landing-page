//'use client';
//import Image from 'next/image';
//import { HeadersList } from '@/lib/headersList';
//import { usePathname } from 'next/navigation';
//import { defaultLocale } from '@/lib/i18n';
//import { useEffect, useState } from 'react';

export default function CustomHead() {

	return (
		<>
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