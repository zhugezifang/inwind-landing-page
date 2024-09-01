import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const locales = ['', 'en', 'en-US', 'zh', 'zh-CN', 'zh-TW', 'zh-HK', 'ja', 'ar', 'es', 'ru', 'fr','vi','cs','tw','de','ko','pt'];
export const localeNames = {
	en: '🇺🇸 English',
	zh: '🇨🇳 简体中文',
	ja: '🇯🇵 日本語',
	ar: '🇸🇦 العربية',//阿拉伯语
	es: '🇪🇸 Español',//西班牙语
	ru: '🇷🇺 Русский',//俄语
	fr: '🇫🇷 Français',//法语
	vi: '🇻🇳 Tiếng Việt',//越南语
	cs: '🇨🇿 čeština',//捷克语
	tw: '🇹🇼 繁體中文',
	de: '🇩🇪 Deutsch',//德语
	ko: '🇰🇷 한국어',//韩语
	pt: '🇵🇹 Português',//葡萄牙语
	
	/*
	hi: '🇮🇳 हिन्दी',
	id: '🇮🇩 Bahasa Indonesia',
	it: '🇮🇹 Italiano',
	pl: '🇵🇱 Polski',
	
	ro: '🇷🇴 Română',
	th: '🇹🇭 ภาษาไทย',
	tr: '🇹🇷 Türkçe',
	uk: '🇺🇦 Українська',
	
	ms: '🇲🇾 Bahasa Malaysia',
	hu: '🇭🇺 Hungary',
	nl: '🇳🇱 Nederlands',
	el: '🇬🇷 Greek',
	he: '🇮🇱 Hebrew',
	fa: '🇮🇷 Persian',
	no: '🇳🇴 Norwegian Bokmål',
	sv: '🇸🇪 Swedish',
	fi: '🇫🇮 Finnish',
	*/

};
export const defaultLocale = 'en';

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers) {
	let languages = new Negotiator({ headers }).languages();

	return match(languages, locales, defaultLocale);
}

const dictionaries = {
	en: () => import('@/locales/en.json').then((module) => module.default),
	zh: () => import('@/locales/zh.json').then((module) => module.default),
	ja: () => import('@/locales/ja.json').then((module) => module.default),
	ar: () => import('@/locales/ar.json').then((module) => module.default),
	es: () => import('@/locales/es.json').then((module) => module.default),
	ru: () => import('@/locales/ru.json').then((module) => module.default),
	fr: () => import('@/locales/fr.json').then((module) => module.default),
	vi: () => import('@/locales/vi.json').then((module) => module.default),
	cs: () => import('@/locales/cs.json').then((module) => module.default),
	tw: () => import('@/locales/tw.json').then((module) => module.default),
	de: () => import('@/locales/de.json').then((module) => module.default),
	ko: () => import('@/locales/ko.json').then((module) => module.default),
	pt: () => import('@/locales/pt.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
	if (['zh-CN'].includes(locale)) {
		locale = 'zh';
	}
	if (['zh-TW', 'zh-HK'].includes(locale)) {
		locale = 'tw';
	}
	if (!Object.keys(dictionaries).includes(locale)) {
		locale = 'en';
	}

	return dictionaries[locale]();
};
