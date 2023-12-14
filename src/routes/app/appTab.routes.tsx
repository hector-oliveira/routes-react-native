import * as React from 'react';
import * as screens from '@app/app-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppScreenParamsList } from '@params-list/AppScreenParamsList';
import { Feather } from '@expo/vector-icons';
import { useRenderIcon } from '@hooks/useRenderIcon';

const Tab = createBottomTabNavigator<AppScreenParamsList>();

export function AppTabRoutes() {
  const { icon } = useRenderIcon();
  
  return (
    <Tab.Navigator 
      initialRouteName='home'
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name='home'
        component={screens.Home}
        options={{ tabBarIcon: ({ size, color }) => icon({ name: 'home', size, color }) }}
      />

      <Tab.Screen
        name='notification'
        component={screens.Notification}
        options={{ tabBarIcon: ({ size, color }) => icon({ name: 'bell', size, color }) }}
      />

      

    </Tab.Navigator>
  );
}