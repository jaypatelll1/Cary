import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from '../Screens/UserScreens/Login';
import SignUp from '../Screens/UserScreens/SignUp';
import Profile from '../Screens/UserScreens/Profile';
import Home from '../Screens/UserScreens/Home';
import Main from '../Screens/UserScreens/Main';
import DrawerContent from '../DrawerContent';
import Landing from '../Screens/Landing';
import planurride from '../Screens/UserScreens/Planurrude';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="planurride" component={planurride} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="UserHome" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />

      
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNav} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default function UserNav() {
  return <DrawerNavigation />;
}
