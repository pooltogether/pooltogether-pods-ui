const path = require("path");
module.exports = {
  assetPrefix: "/",
  // assetPrefix: "https://powerpods-kamescg.vercel.app/",
  trailingSlash: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  webpack: (config, { webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Core
      "@root": path.resolve(__dirname, "./"),
      "@src": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
      "@contracts": path.resolve(__dirname, "./contracts"),

      // Library
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@abi": path.resolve(__dirname, "./src/lib/abi"),
      "@config": path.resolve(__dirname, "./src/lib/config"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@connectors": path.resolve(__dirname, "./src/connectors"),
      "@constants": path.resolve(__dirname, "./src/constants"),

      // Interface
      "@components": path.resolve(__dirname, "./src/components"),
      "@fields": path.resolve(__dirname, "./src/components/fields"),
      "@forms": path.resolve(__dirname, "./src/components/forms"),
      "@views": path.resolve(__dirname, "./src/components/views"),
      "@layout": path.resolve(__dirname, "./src/layout/"),
      "@usedapp/core": path.resolve(
        __dirname,
        "./src/modules/@usedapp/core/src"
      ),
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
