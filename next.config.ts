
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: false,
  output: "standalone",

  // ✅ Turbopack configuration with source-map workaround
  turbopack: {
    resolve: {
      // Prevents crashes from corrupted dependency source maps (Windows/OneDrive issue)
      source: false,
    },
  },
};

module.exports = nextConfig;
