import React, { useRef, useState } from 'react';
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
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const buttons = [
  { label: 'Send', icon: 'arrow-up', bg: "#D6F736", link: "send" },
  { label: 'Receive', icon: 'arrow-down', bg: "#D6F736", link: "receive" },
];

export default function HomeScreen() {
  const [currentTab, setCurrentTab] = useState(0)
  const navigation = useNavigation()
  const [animationKey, setAnimationKey] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      setAnimationKey(prev => prev + 1);
    }, [])
  );

  const handleTabPress = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View >
          <View style={styles.topContainer}>
            <MaterialIcons
              name={"qr-code-scanner"}
              size={25}
              color={Colors.gray70}
            />
            <Text style={styles.mainWalletText}>Main Wallet</Text>
            <Octicons
              name={"filter"}
              size={20}
              color={Colors.gray40}
            />

          </View>



          <View  style={styles.containerMiddle}>
          {/* <Animatable.View  key={`balance-${animationKey}`} animation="zoomIn" delay={300} duration={1000} style={styles.containerMiddle}> */}

            <View style={styles.balanceContainer}>
              <Text style={styles.balance}>$0.00</Text>
              <Text style={styles.subBalance}>$0.00 (0%)</Text>
            </View>


            <View style={styles.row}>
              {buttons.map((btn, index) => (
                <TouchableOpacity onPress={() => navigation.navigate(btn.link)} key={index} style={styles.buttonContainer}>
                  <View style={[styles.iconWrapper, { backgroundColor: btn.bg }]}>
                    <FontAwesome6
                      name={btn.icon}
                      size={22}
                      color={btn.label === 'Send' ? Colors.bgColor : Colors.bgColor}
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
        </View>
      </SafeAreaView>
    </>
  );
}
