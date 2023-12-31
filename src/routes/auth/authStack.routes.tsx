import * as React from 'react';
import * as screens from '@auth/SignIn/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreenParamsList } from '@params_list/AuthScreenParamsList';
import { AppStackRoutes } from '@app_route_type/appStack.routes';

const Stack = createNativeStackNavigator<AuthScreenParamsList>();

export function AuthStackRoutes() {
  return (
    <Stack.Navigator 
			initialRouteName='signIn' 
			screenOptions={{ headerShown: false }}
		>
      <Stack.Screen name='signIn' component={screens.SignIn} />
      <Stack.Screen name='app' component={AppStackRoutes} />
    </Stack.Navigator>
  );
}