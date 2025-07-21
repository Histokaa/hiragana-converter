import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Enable experimental features for better performance
	experimental: {
		// Enable code splitting optimizations
		optimizePackageImports: ["@/components", "@/lib", "@/constants"]
	},

	// Bundle optimization
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		// Optimize bundle size
		if (!dev && !isServer) {
			config.optimization = {
				...config.optimization,
				splitChunks: {
					chunks: "all",
					cacheGroups: {
						vendor: {
							test: /[\\/]node_modules[\\/]/,
							name: "vendors",
							chunks: "all"
						},
						common: {
							name: "common",
							minChunks: 2,
							chunks: "all"
						}
					}
				}
			};
		}

		return config;
	},

	// Optimize images and assets
	images: {
		formats: ["image/avif", "image/webp"]
	},

	// Enable compression
	compress: true,

	// Enable static optimization
	poweredByHeader: false,
	reactStrictMode: true
};

export default nextConfig;
