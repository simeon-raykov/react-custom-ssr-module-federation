// core libraries to override to not be singletones on SSR host rendering
const coreLibraries = new Set([
  '@sw2.0/core',
  '@sw2.0/casino/widgets',
  '@sw2.0/host/widgets',
  '@sw2.0/sport/widgets',
  '@sw2.0/design-system/global-components',
]);

module.exports = {
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) return false;
    return defaultConfig;
  },
};
