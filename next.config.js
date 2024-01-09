/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	basePath: '/revamp',
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	trailingSlash: true,

	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
