const { defineConfig } = require("@vue/cli-service");
const path = require("path");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  outputDir: path.resolve(__dirname, "../backend/public/"),
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "https://127.0.0.1:3000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin()],
  // },
});
