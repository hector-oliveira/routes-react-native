import * as React from 'react';
import * as screens from '@app/app-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppScreenParamsList } from '@params-list/AppScreenParamsList';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<AppScreenParamsList>();

export function AppTabRoutes() {
  return (
    <Tab.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='home'
        component={screens.Home}
        options={ {
          tabBarIcon: ({ size, color }) => <Feather name='home' size={size} color={color} />
        } }
      />

      <Tab.Screen
        name='notification'
        component={screens.Notification}
        options={ {
          tabBarIcon: ({ size, color }) => <Feather name='bell' size={size} color={color} />
        } }
      />

      

    </Tab.Navigator>
  );
}