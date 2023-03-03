import 'react-native-gesture-handler';
import React from 'react';
import {Feed} from './screens/feed/Feed';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/MaterialIcons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Balance from './screens/balance/Balance';
import Auth from './screens/auth/Auth';
import {Profile} from './screens/profile/Profile';





const MenuRoutes = {
  Feed: {
    name: 'Feed',
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" size={30} color={tintColor} />
      ),
    },
  },
  Add: {
    name: 'Balance',
    screen: Balance,
    navigationOptions: {
      title: 'Balance',
      tabBarIcon: ({tintColor}) => (
        <Icon5 name="account-balance-wallet" size={30} color={tintColor} />
      ),
    },
  },
  Profile: {
    name: 'Profile',
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon name="user" size={30} color={tintColor} />
      ),
    },
  },
};

const MenuConfig = {
  initialRouteName: 'Feed',
  tabBarOptions: {
    showLabel: false,
  },
};

const MenuNavigator = createAppContainer(
  createBottomTabNavigator(MenuRoutes, MenuConfig),
);

export default MenuNavigator;
