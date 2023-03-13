// @ts-check
const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');
const { modifyDefaultSassRules } = require('../../config/webpack.config');

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const defaultConfig = {
  ...baseConfig,
};

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederation(defaultConfig);

  return federatedModules(modifyDefaultSassRules(config));
};
