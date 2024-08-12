'use client';
//import Image from 'next/image';
import { FootersList } from '@/lib/footersList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function Footer() {
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
			setLinkList(FootersList[`Footer_${langName.toUpperCase()}`] || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	return (
    <footer class="bg-gray-100">
        <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
                <div>
                    <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Products</h3>
                    <ul class="text-gray-500">
                        <li class="mb-4">
                            <a href="https://www.chronological-age-calculator.online/" target="_blank" class=" hover:underline">Chronological Age Calculator
                            </a>
                        </li>
                        <li class="mb-4">
                            <a href="https://mnemonicgenerator.online/" target="_blank" class="hover:underline">Mnemonic Generator
                            </a>
                        </li>
                        <li class="mb-4">
                            <a href="https://yaelokreocmaker.online/" target="_blank" class="hover:underline">Yaelokre OC Maker
                            </a>
                        </li>
                        <li class="mb-4">
                            <a href="https://random-pokemon-generator.xyz/" target="_blank" class="hover:underline">Random Pokemon Generator
                            </a>
                        </li>
                        <li class="mb-4">
                            <a href="https://bottleneck-calculators.online/" target="_blank" class="hover:underline">Bottleneck Calculator
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Support</h3>
                    <ul class="text-gray-500">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Discord Server</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Twitter</a>
                        </li>
                        <li class="mb-4">
                         <a href="#" class="hover:underline">Facebook</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h3>
                    <ul class="text-gray-500">
                        {linkList.map((link, index) => {
							return (
                                <li class="mb-4" key={index}>
                                    <a href={`${link.url}`} class="hover:underline">{link.name}</a>
                                </li>
							);
						})}
                    </ul>
                </div>

                <div>
                    <a href="https://anything-generator.online/" target="_blank" class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">
                    AnyThing Generator   
                    </a>
                    Copyright © 2024 All rights reserved
                </div>
                
            </div>
        </div>
    </footer>

	);
}
