const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const configFn = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components'],
      },
    },
    argv,
  );
  return config;
};

module.exports = configFn;
