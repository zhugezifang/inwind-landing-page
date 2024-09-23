'use client';
//import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { defaultLocale, getDictionary } from '@/lib/i18n';
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
            const dict = await getDictionary(langName); // 获取内容
			setLinkList(dict.Footer || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	return (
    <footer className="bg-gray-100">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
                <div>
                    <span className="mb-6 text-sm font-semibold text-gray-900 uppercase">Products</span>
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
                            <a href="https://bottleneck-calculators.online/" title="Bottleneck Calculator" target="_blank" className="hover:underline">Bottleneck Calculator
                            </a>
                        </li>

                        <li className="mb-4">
                            <a href="https://bai.tools" target="_blank" className="hover:underline">BAI.tools</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://woy.ai/" title="Woy AI Tools Directory" target="_blank" className="hover:underline">Woy AI Tools</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://tap4.ai/" title="Tap4 AI Tools Directory" target="_blank" className="hover:underline">Tap4 AI Tools Directory</a>
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <span className="mb-6 text-sm font-semibold text-gray-900 uppercase">Friend</span>
                    <ul className="text-gray-500">
                        <li className="mb-4">
                            <a href="https://iuu.ai/" target="_blank" className="hover:underline">iuu AI</a>
                        </li>
                        <li className="mb-4">
                            <a href='https://aipure.ai/' target='_blank' className="hover:underline">AIPURE AI</a>
                        </li>
                        <li className="mb-4">
                            <a href='https://dokeyai.com' target='_blank' className="hover:underline">DokeyAI</a>
                        </li>
                        <li className="mb-4">
                            <a href='https://navs.site' target='_blank' className="hover:underline">AI Nav Site</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</span>
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
