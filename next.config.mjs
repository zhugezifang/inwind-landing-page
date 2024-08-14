/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tiktok-money-calculator.online',
			},
		],
	},
};

export default nextConfig;
