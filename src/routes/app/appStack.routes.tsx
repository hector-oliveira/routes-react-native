import * as React from 'react';
import * as screens from '@app/app-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreenParamsList } from '@params-list/AppScreenParamsList';

const Stack = createNativeStackNavigator<AppScreenParamsList>();

export function AppStackRoutes() {
  return(
    <Stack.Navigator >
      <Stack.Screen name='feed' component={screens.Feed}/>
      <Stack.Screen name='profile' component={screens.Profile}/>
    </Stack.Navigator>
  );
}