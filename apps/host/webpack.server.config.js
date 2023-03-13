const { withModuleFederationForSSR } = require('@nrwl/react/module-federation');
const { merge } = require('webpack-merge');

const baseMFConfig = require('./module-federation.server.config');
const {
  baseWebpackServerConfig,
} = require('../../config/webpack.server.config');

const defaultConfig = {
  ...baseMFConfig,
  remotes: [['remote', 'http://localhost:4300/server/remoteEntry.js']],
};

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederationForSSR(defaultConfig);

  return merge(federatedModules(config, context), baseWebpackServerConfig);
};
