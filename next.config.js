/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	basePath: '/revamp',
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	images: {
		unoptimized: true,
	},
	env: {
		api_url: 'https://sxrtmwec.forapprovalonly.net/index.php/api',
		api_uname: 'api@smc.com',
		api_pass: 'smc_guest',
	},
};

module.exports = nextConfig;
