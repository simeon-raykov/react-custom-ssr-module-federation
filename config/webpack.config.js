const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sassModuleRegex = /\.module\.scss$/;
const cssLoaderLocalIdentConfig = {
  localIdentName: '[folder]_[local]__[hash:base64:5]',
  localIdentHashSalt: 'hash',
  localIdentHashFunction: 'md5',
  localIdentHashDigest: 'base64',
  localIdentHashDigestLength: 5,
  localIdentContext: 'src',
};

const modifyDefaultSassRules = (config) => {
  config.module.rules.forEach((rule, idx) => {
    // Find rule tests for CSS.
    // Then make sure it excludes .module.scss files.
    if (rule.test.test('test.css')) {
      rule.exclude = rule.exclude
        ? Array.isArray(rule.exclude)
          ? [...rule.exclude, sassModuleRegex]
          : [rule.exclude, sassModuleRegex]
        : sassModuleRegex;
    }
  });

  config.plugins.push(new MiniCssExtractPlugin());

  config.module.rules.unshift({
    test: sassModuleRegex,
    use: [
      { loader: MiniCssExtractPlugin.loader },
      {
        loader: 'css-loader',
        options: {
          modules: { ...cssLoaderLocalIdentConfig },
          importLoaders: 2,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: { fiber: false, precision: 8 },
        },
      },
    ],
  });

  return config;
};

module.exports = {
  modifyDefaultSassRules,
  sassModuleRegex,
  cssLoaderLocalIdentConfig,
};
