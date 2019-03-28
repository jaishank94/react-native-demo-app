import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';

const HomeDrawer = createDrawerNavigator({
  Home: HomeScreen,
});

HomeDrawer.navigationOptions = {
    drawerLabel: 'Home',
};

const NotificationDrawer = createDrawerNavigator({
  Notification: NotificationScreen,
});

NotificationDrawer.navigationOptions = {
    drawerLabel: 'Notifications',
};


export default createDrawerNavigator({
    HomeDrawer,
    NotificationDrawer
  },
  {
      drawerPosition:'right',
      drawerBackgroundColor:'#fff',
      drawerWidth:200,
  }
  );
  