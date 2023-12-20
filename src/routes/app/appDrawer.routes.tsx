import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppStackRoutes } from './appStack.routes';
import { AppTabRoutes } from './appTab.routes';
import { Feather } from '@expo/vector-icons';
import { theme } from '@themes/theme';
import { renderIcon } from '@layouts/renderIcon';

const Drawer = createDrawerNavigator();

export function AppDrawerRoutes() {
  
	const { icon } = renderIcon();
  
	return (
    <Drawer.Navigator
      screenOptions={{ 
        title: '',
        headerShown: false,
        headerTintColor: theme.colors.light,
        drawerActiveTintColor: theme.colors.light,
        drawerInactiveTintColor: theme.colors.light_200,
        
        headerStyle: { 
          backgroundColor: theme.colors.primary,
          borderBottomWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
        },
        
        drawerStyle: { backgroundColor: theme.colors.primary_800 },
      }}
    >
      <Drawer.Screen
        name='inicio'
        component={AppTabRoutes}
        options={{
          drawerIcon: ({ size, color }) => icon({ name: 'home', size, color }),
          drawerLabel: 'Início',
          headerShown: true,
        }}
      />
      
      <Drawer.Screen
        name='Feed'
        component={AppStackRoutes}
        options={{
          drawerIcon: ({ size, color }) => icon({ name: 'plus-circle', size, color }),
          drawerLabel: 'Feed'
        }}
      />
      
      <Drawer.Screen
        name='Profile'
        component={AppStackRoutes}
        options={{
          drawerIcon: ({ size, color }) => icon({ name: 'user-plus', size, color }),
          drawerLabel: 'Perfil'
        }}
      />
    </Drawer.Navigator>
  );
}