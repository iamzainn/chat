/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
		remotePatterns: [
			{ hostname: "secret-sheep-196.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
		],
	},
};

export default nextConfig;


