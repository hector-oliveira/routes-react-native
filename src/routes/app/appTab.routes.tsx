import * as React from 'react';
import * as screens from '@app/app-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppScreenParamsList } from '@params-list/AppScreenParamsList';
import { theme } from '@themes/theme';
import { renderIcon } from '@layouts/renderIcon';

const Tab = createBottomTabNavigator<AppScreenParamsList>();

export function AppTabRoutes() {
  
	const { icon } = renderIcon();
  
  return (
    <Tab.Navigator 
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.active,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarHideOnKeyboard: true,

        tabBarStyle: { 
          backgroundColor: theme.colors.primary_800,
          paddingTop: 10,
          paddingBottom: 10,
          borderTopWidth: 0,
          height: 60
        },
        
        tabBarVisibilityAnimationConfig: {
          hide: { animation: 'timing', config: { duration: 0 } },
          show: { animation: 'timing', config: { duration: 1 } },
        },
      }}
    >
      <Tab.Screen
        name='home'
        component={screens.Home}
        options={{ 
          tabBarIcon: ({ size, color }) => icon({ name: 'home', size, color }),
          tabBarLabel: 'Início'
        }}
      />

      <Tab.Screen
        name='notification'
        component={screens.Notification}
        options={{
          tabBarIcon: ({ size, color }) => icon({ name: 'bell', size, color }),
          tabBarLabel: 'Notificações',
        }}
      />
    </Tab.Navigator>
  );
}