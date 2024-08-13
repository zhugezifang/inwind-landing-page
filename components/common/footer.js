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
    <footer className="bg-gray-100">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Products</h3>
                    <ul className="text-gray-500">
                        <li className="mb-4">
                            <a href="https://www.chronological-age-calculator.online/" target="_blank" className=" hover:underline">Chronological Age Calculator
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="https://mnemonicgenerator.online/" target="_blank" className="hover:underline">Mnemonic Generator
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="https://yaelokreocmaker.online/" target="_blank" className="hover:underline">Yaelokre OC Maker
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="https://random-pokemon-generator.xyz/" target="_blank" className="hover:underline">Random Pokemon Generator
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="https://bottleneck-calculators.online/" target="_blank" className="hover:underline">Bottleneck Calculator
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Support</h3>
                    <ul className="text-gray-500">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Discord Server</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                         <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h3>
                    <ul className="text-gray-500">
                        {linkList.map((link, index) => {
							return (
								<li className="mb-4" key={index}>
									<a href={`${link.url}`}  className="hover:underline">
									{link.name}
									</a>
								</li>
							);
						})}
                    </ul>
                </div>

                <div>
                    Copyright © 2024 All rights reserved
                </div>
                
            </div>
        </div>
    </footer>

	);
}
