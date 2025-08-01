import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Animated
} from 'react-native';
import styles from './Home.Styles';
import { ApplicationStyle, Colors, verticalScale } from '../../theme';
import ProductCard from '../../components/productCard';
import CointList from './components/CointList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const buttons = [
  { label: 'Send', icon: 'arrow-up-right', bg: '#2c2c2e',link:"send" },
  { label: 'Receive', icon: 'arrow-down-left', bg: '#2c2c2e',link:"send" },
  // { label: 'Swap', icon: 'repeat', bg: '#2c2c2e' },
  // { label: 'Fund', icon: 'zap', bg: '#00ff8b' },
  // { label: 'Sell', icon: 'home', bg: '#2c2c2e' },
];

export default function HomeScreen() {
  const [currentTab, setCurrentTab] = useState(0)
  const navigation=useNavigation()


  const handleTabPress = (index) => {
    setCurrentTab(index);
    // Animated.timing(translateX, {
    //   toValue: index * tabWidth,
    //   duration: 200,
    //   useNativeDriver: true,
    // }).start();
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.topContainer}>
            <MaterialIcons
              name={"qr-code-scanner"}
              size={25}
              color={Colors.black100}
            />
            <Text style={styles.mainWalletText}>Main Wallet</Text>
            <Octicons
              name={"filter"}
              size={20}
              color={Colors.black100}
            />

          </View>



          <View style={styles.containerMiddle}>

            <View style={styles.balanceContainer}>
              <Text style={styles.balance}>$0.00</Text>
              <Text style={styles.subBalance}>$0.00 (0%)</Text>
            </View>


            <View style={styles.row}>
              {buttons.map((btn, index) => (
                <TouchableOpacity onPress={()=>navigation.navigate(btn.link)} key={index} style={styles.buttonContainer}>
                  <View style={[styles.iconWrapper, { backgroundColor: btn.bg }]}>
                    <Icon
                      name={btn.icon}
                      size={22}
                      color={btn.label === 'Fund' ? '#000' : '#fff'}
                    />
                  </View>
                  <Text style={styles.label}>{btn.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>









          <View style={styles.tabContainer}>
            {
              ["Coins", "Activity"].map((row, index) =>
                <TouchableOpacity onPress={() => handleTabPress(index)}>
                  <View key={index} style={[styles.tabView, currentTab === index && styles.activeTab]}>
                    <Text style={[styles.tabText, currentTab === index && styles.activeText]}>{row}</Text>
                  </View>
                </TouchableOpacity>
              )
            }
          </View>
          {
            currentTab === 0 ? <CointList /> : <Text style={{ paddingHorizontal: verticalScale(20), fontSize: 20, fontWeight: "bold", textAlign: "center", color: "red" }}>No Activity</Text>
          }
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
