// @ts-check
const shared = require('../../config/module-federation.config');
/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  ...shared,
  name: 'remote',
  exposes: {
    './UserBar': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
