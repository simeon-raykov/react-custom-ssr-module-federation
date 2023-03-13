const { merge } = require('webpack-merge');
const { withModuleFederationForSSR } = require('@nrwl/react/module-federation');
const baseMFConfig = require('./module-federation.server.config');
const {
  baseWebpackServerConfig,
} = require('../../config/webpack.server.config');

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederationForSSR(baseMFConfig);

  return merge(federatedModules(config, context), baseWebpackServerConfig);
};