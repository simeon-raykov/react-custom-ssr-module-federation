const {
  sassModuleRegex,
  cssLoaderLocalIdentConfig,
} = require('./webpack.config');

module.exports = {
  baseWebpackServerConfig: {
    module: {
      rules: [
        {
          test: sassModuleRegex,
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: {
                  exportOnlyLocals: true,
                  ...cssLoaderLocalIdentConfig,
                },
                importLoaders: 1,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  fiber: false,
                  precision: 8,
                },
              },
            },
          ],
        },
      ],
    },
  },
};
