const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
  };

  config.plugins = (config.plugins || []).concat([
    // new webpack.DefinePlugin({
    //   "process.env.PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL),
    // }),
  ]);

  return config;
};
