// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'remote',
  exposes: {
    './UserBar': 'apps/remote/src/remote-entry.ts',
  },
  shared: (libraryName, defaultConfig) => {
    if (libraryName === '@sw2.0/core') defaultConfig.eager = true;
    return defaultConfig;
  },
};

module.exports = moduleFederationConfig;
