// @ts-check
const { withModuleFederation } = require('@nrwl/react/module-federation');

const baseConfig = require('./module-federation.config');
const { modifyDefaultSassRules } = require('../../config/webpack.config');

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederation(baseConfig);

  return federatedModules(modifyDefaultSassRules(config));
};
