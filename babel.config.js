module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-reanimated/plugin',],
      [
        'module-resolver',
        {
          alias: {
            /** ASSETS */
            '@svg': './src/assets/svg',
            '@images': './src/assets/images',
            
            /** COMPONENTS */
            '@components': './src/components',
            
            /** ROUTES */
            '@navigate': './src/routes/RootNavigationParams',
            '@params-list': './src/routes/NavigationScreenParamsList',
            
            /** SCREENS */
            '@app': './src/screens/app',
            '@auth': './src/screens/auth',

            /** UTILS */
            '@data': './src/utils/data',
            '@hooks': './src/utils/hooks',
            '@interfaces': './src/utils/interfaces',
            '@themes': './src/utils/themes',
          
          }
        }
      ]
    ]
  };
};
