import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Signup from '../screens/auth/Signup';
import ForgetPassword from '../screens/auth/ForgetPassword';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Shop from '../screens/shop/Shop';
import Favorites from '../screens/favorites/Favorites';
import Profile from '../screens/profile/Profile';
import HomeScreen from '../screens/home/Home';
import Cart from '../screens/cart/Cart';
import {Colors} from '../theme';
import Login from '../screens/auth/login';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import ChooseOption from '../screens/welcome/ChooseOption';
import WelcomeSecondScreen from '../screens/welcome/WelcomeSecondScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Shop') iconName = 'shopping-cart';
          else if (route.name === 'Bag') iconName = 'shopping-bag';
          else if (route.name === 'Favorites') iconName = 'heart';
          else if (route.name === 'Profile') iconName = 'user';

          return route.name === 'Home' ? (
            <MaterialIcons
              name={iconName}
              size={30}
              color={focused ? Colors.red100 : Colors.gray100}
            />
          ) : (
            <Icon
              name={iconName}
              size={24}
              color={focused ? Colors.red100 : Colors.gray100}
            />
          );
        },
        tabBarActiveTintColor: Colors.red100,
        tabBarInactiveTintColor: Colors.gray100,
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          backgroundColor: Colors.white80,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Bag" component={Cart} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="welcome-second-screen" component={WelcomeSecondScreen} />
        <Stack.Screen name="choose-option" component={ChooseOption} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="forget-password" component={ForgetPassword} />
        <Stack.Screen name="bottom-navigation" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
