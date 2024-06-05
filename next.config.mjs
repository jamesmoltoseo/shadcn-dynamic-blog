import { build } from "velite";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // other next config here...
  webpack: (config, { isServer }) => {
    config.plugins.push(new VeliteWebpackPlugin({ isServer }));
    return config;
  },
};

export default nextConfig;

class VeliteWebpackPlugin {
  static hasRun = false;
  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options;
  }
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.hasRun) return;
      VeliteWebpackPlugin.hasRun = true;

      const dev = compiler.options.mode === "development";
      this.options.watch = this.options.watch ?? dev;
      this.options.clean = this.options.clean ?? !dev;
      await build(this.options); // start velite
    });
  }
}
