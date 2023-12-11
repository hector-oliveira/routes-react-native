import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppStackRoutes } from './appStack.routes';
import { AppTabRoutes } from './appTab.routes';

const Drawer = createDrawerNavigator();

export function AppDrawerRoutes() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name='Início' component={AppTabRoutes} />
      <Drawer.Screen name='Feed' component={AppStackRoutes} />
      <Drawer.Screen name='Perfil' component={AppStackRoutes} />
    </Drawer.Navigator>
  );
}