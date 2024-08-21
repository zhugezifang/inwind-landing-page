'use client';
import { ContentList } from '@/lib/contentsList';

export default function Feature({ locale, langName = 'en' }) {
	let list = ContentList[`Content_${langName.toUpperCase()}`] || [];
	return (
		<div className="relative isolate overflow-hidden px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
            <div className="mx-auto">
                <div
                    className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    {list.map((item, index) => {
						return (
                            <div key={index} className="">
                                <h2 className="font-bold text-4xl">
                                    {item.title}
                                </h2>
                                <p className="text-base leading-8 my-5">
                                    {item.name}
                                </p>
                            </div>
						);
					})}
                </div>
            </div>
     </div>
	);
}
