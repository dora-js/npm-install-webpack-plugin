import NpmInstallPlugin from "npm-install-webpack-plugin";
import path from "path";

export const defaults = {
  context: process.cwd(),

  externals: [],

  module: {
    loaders: [
      { test: /\.css$/, loader: "style" },
      { test: /\.css$/, loader: "css", query: { localIdentName: "[name]-[local]--[hash:base64:5]" } },
      { test: /\.eot$/, loader: "file" },
      { test: /\.js$/, loader: "babel", query: { cacheDirectory: true }, exclude: /node_modules/ },
      { test: /\.json$/, loader: "json" },
      { test: /\.(png|jpg)$/, loader: "url", query: { limit: 8192 } }, // Inline base64 URLs for <= 8K images
      { test: /\.svg$/, loader: "url", query: { mimetype: "image/svg+xml" } },
      { test: /\.ttf$/, loader: "url", query: { mimetype: "application/octet-stream" } },
      { test: /\.(woff|woff2)$/, loader: "url", query: { mimetype: "application/font-woff" } },
    ],
  },

  output: {
    chunkFilename: "[id].[hash:5]-[chunkhash:7].js",
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    filename: "[name].js",
  },

  plugins: [
    new NpmInstallPlugin(),
  ],
};
