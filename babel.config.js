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
            '@root_navigation': './src/routes/RootNavigationParams',
            '@params_list': './src/routes/NavigationScreenParamsList',
						'@app_route_type': './src/routes/app',
						'@auth_route_type': './src/routes/auth',
            
            /** SCREENS */
            '@app': './src/screens/app',
            '@auth': './src/screens/auth',

            /** UTILS */
            '@data': './src/utils/data',
            '@hooks': './src/utils/hooks',
            '@interfaces': './src/utils/interfaces',
            '@layouts': './src/utils/layouts',
            '@themes': './src/utils/themes',
          
          }
        }
      ]
    ]
  };
};
