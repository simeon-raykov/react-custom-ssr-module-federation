// @ts-check

const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');
const { modifyDefaultSassRules } = require('../../config/webpack.config');

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const prodConfig = {
  ...baseConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'http://app1.example.com'],
   *   ['app2', 'http://app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', 'http://example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', 'http://example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
  remotes: [['remote', 'http://localhost:4300/']],
};

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederation(prodConfig);

  return federatedModules(modifyDefaultSassRules(config));
};
