// Core libraries such as react, angular, redux, ngrx, etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  'core-js',
  // Example: a workspace library for a publish/subscribe
  // system of communication.
  '@sw2.0/core',
  '@sw2.0/design-system/global-components',
]);

module.exports = {
  // Share core libraries, and avoid everything else
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return { ...defaultConfig, eager: true };
    }
    // Returning false means the library is not shared.
    return false;
  },
};
