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
import QRScanner from '../components/QRScanner';
import OtpScreen from '../screens/welcome/OtpScreen';
import Setting from '../screens/setting.js/Setting';
import RecoveryPhraseScreen from '../screens/welcome/RecoveryPhraseScreen';
import ConfirmRecoveryScreen from '../screens/welcome/ConfirmRecoveryScreen';
import firstTimeRecoveryPhase from '../screens/welcome/firstTimeRecoveryPhase/FirstTimeRecoveryPhrase';
import FirstTimeConfirmPhrase from '../screens/welcome/firstTimeRecoveryPhase/FirstTimeConfirmPhrase';
import Send from '../screens/send/Send';
import Receive from '../screens/receive/Receive';
// import Congratulation from '../screens/congratulation/Congratulation';
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
          else if (route.name === 'Setting') iconName = 'settings';

          return route.name === 'Home' || route.name === 'Setting' ? (
            <MaterialIcons
              name={iconName}
              size={30}
              color={focused ? Colors.blue100 : Colors.gray100}
            />
          ) : (
            <Icon
              name={iconName}
              size={24}
              color={focused ? Colors.blue100 : Colors.gray100}
            />
          );
        },
        tabBarActiveTintColor: Colors.blue100,
        tabBarInactiveTintColor: Colors.gray100,
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          position: 'absolute',
          backgroundColor: Colors.white80,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Bag" component={Cart} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} /> */}
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
 <Stack.Screen name="bottom-navigation" component={BottomNavigation} />


        {/* <Stack.Screen name="congratulation" component={Congratulation} /> */}
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="welcome-second-screen"
          component={WelcomeSecondScreen}
        />
        <Stack.Screen name="choose-option" component={ChooseOption} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="qrs-canner" component={QRScanner} />
        <Stack.Screen
          name="first-time-recovery-phase"
          component={firstTimeRecoveryPhase}
        />
        <Stack.Screen
          name="confirm-first-recovery-phase"
          component={FirstTimeConfirmPhrase}
        />
        <Stack.Screen name="recovery-phase" component={RecoveryPhraseScreen} />
        <Stack.Screen
          name="confirm-recovery-phase"
          component={ConfirmRecoveryScreen}
        />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="otp-screen" component={OtpScreen} />
        <Stack.Screen name="forget-password" component={ForgetPassword} />
        {/* <Stack.Screen name="bottom-navigation" component={BottomNavigation} /> */}

        {/* bottom tab inner sub pages */}
        <Stack.Screen name="send" component={Send} />
         <Stack.Screen name="receive" component={Receive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
