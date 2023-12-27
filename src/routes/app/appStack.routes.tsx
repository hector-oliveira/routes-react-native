import * as React from 'react';
import * as screens from '@app/app-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreenParamsList } from '@params_list/AppScreenParamsList';
import { AppDrawerRoutes } from './appDrawer.routes';

const Stack = createNativeStackNavigator<AppScreenParamsList>();

export function AppStackRoutes() {
  return(
    <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }} >
      <Stack.Screen name='home' component={AppDrawerRoutes} />
			<Stack.Screen name='feed' component={screens.Feed} />
			<Stack.Screen name='details' component={screens.Details} />
			<Stack.Screen name='products' component={screens.Products} />
    </Stack.Navigator>
  );
}