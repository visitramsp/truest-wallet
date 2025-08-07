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
import Congratulation from '../screens/congratulation/Congratulation';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomTabBarButton = ({children, onPress, accessibilityState}) => {
  const focused = accessibilityState?.selected;

  console.log(focused,"focusedr");
  
  return (
    <TouchableOpacity
      style={styles.tradeButtonContainer}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.tradeButton}>
        {children}
      </View>
      <Text
        style={{
          color: focused ? '#FFFFFF' : Colors.gray100,
          fontSize: 12,
          marginTop: 4,
        }}>
        Trade
      </Text>
    </TouchableOpacity>
  );
};


function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.labelStyle,
        tabBarActiveTintColor: '#FFFFFF',
      }}>
      
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="home"
              size={24}
              color={focused ? Colors.btnColor : Colors.gray100}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Accounts"
        component={Shop}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="credit-card"
              size={20}
              color={focused ? Colors.btnColor : Colors.gray100}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Trade"

        component={Cart}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <MaterialIcons name="compare-arrows" size={30} color={Colors.bgColor} />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Track"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="insights"
              size={22}
              color={focused ? Colors.btnColor : Colors.gray100}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="settings"
              size={22}
              color={focused ? Colors.btnColor : Colors.gray100}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}




export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="bottom-navigation" component={BottomNavigation} />

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

        {/* bottom tab inner sub pages */}
        <Stack.Screen name="send" component={Send} />
        <Stack.Screen name="receive" component={Receive} />
        <Stack.Screen name="congratulation" component={Congratulation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.bgColor,
    height: 70,
    position: 'absolute',
    paddingBottom: 10,
    paddingTop: 5,
    marginHorizontal:20,
    marginBottom:5,
    borderRadius:15,
    borderWidth:1,
    borderColor:Colors.gray90
  },
  labelStyle: {
    fontSize: 11,
    marginBottom: 2,
  },
  tradeButtonContainer: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tradeButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 3},
  },
});
