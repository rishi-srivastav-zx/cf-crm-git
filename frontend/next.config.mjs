/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js", // Import as JavaScript module (React component)
            },
        },
    },
    // You might also need the webpack configuration for non-Turbopack builds or specific scenarios
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default nextConfig;
