import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppStackRoutes } from './appStack.routes';
import { AppTabRoutes } from './appTab.routes';
import { Feather } from '@expo/vector-icons';
import { theme } from '@themes/theme';
import { useRenderIcon } from '@hooks/useRenderIcon';

const Drawer = createDrawerNavigator();

export function AppDrawerRoutes() {
  const { icon } = useRenderIcon();
  return (
    <Drawer.Navigator screenOptions={{ 
      title: '',
      headerTintColor: theme.colors.light,
      headerTransparent: true,
      drawerStyle: { backgroundColor: theme.colors.primary_800 },
      drawerActiveTintColor: theme.colors.light,
      drawerInactiveTintColor: theme.colors.light_200,
    }}>
      <Drawer.Screen
        name='inicio'
        component={AppTabRoutes}
        options={{
          drawerIcon: ({ size, color }) => icon({ name: 'home', size, color }),
          drawerLabel: 'Início'
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