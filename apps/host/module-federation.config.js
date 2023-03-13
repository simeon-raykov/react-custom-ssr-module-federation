// @ts-check
const shared = require('../../config/module-federation.config');
/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'host',
  remotes: ['remote'],
  ...shared,
};

module.exports = moduleFederationConfig;
