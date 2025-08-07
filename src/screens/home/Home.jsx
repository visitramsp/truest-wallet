import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './Home.Styles';
import { Colors, verticalScale } from '../../theme';
import CointList from './components/CointList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import lineChart from '../../assets/images/lineChart.png';
import lineChar2 from '../../assets/images/lineChart32.png';
import MainLayout from '../../components/layout/Layout';
const buttons = [
  { label: 'Send', iconTag: Icon, icon: 'arrow-up', bg: Colors.btnColor, link: 'send' },
  {
    label: 'Receive',
    iconTag: Icon,
    icon: 'arrow-down',
    bg: Colors.btnColor,
    link: 'receive',
  },
  {
    label: 'History',
    iconTag: MaterialIcons,
    icon: 'history',
    bg: Colors.btnColor,
    link: null,
  },
  {
    label: 'More',
    iconTag: MaterialIcons,
    icon: 'dashboard-customize',
    bg: Colors.btnColor,
    link: null,
  },
];

export default function HomeScreen() {
  const [currentTab, setCurrentTab] = useState(0);
  const navigation = useNavigation();
  const [animationKey, setAnimationKey] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      setAnimationKey(prev => prev + 1);
    }, []),
  );

  const handleTabPress = index => {
    setCurrentTab(index);
  };

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
    
      <MainLayout scrollable={true}  style={{paddingBottom:90}} >
        <View> 
          <View style={styles.topContainer}>
            <MaterialIcons
              name={'qr-code-scanner'}
              size={25}
              color={Colors.gray70}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Fontisto name={'world-o'} size={22} color={Colors.btnColor} />
              {/* <Octicons name={'filter'} size={20} color={Colors.gray40} /> */}
            </View>
          </View>
          <View
            style={{
              // paddingTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
              paddingHorizontal: 20,
            }}>
            <Fontisto name={'wallet'} size={22} color={'#6df736ff'} />

            
            <View style={{ marginTop: 4,flexDirection: 'row',
              alignItems: 'center',
              gap: 5, }}>
              <Text style={styles.mainWalletText}>Main Wallet</Text>
              <MaterialIcons
                name={'keyboard-arrow-down'}
                size={29}
                color={Colors.gray100}
              />
            </View>
          </View>

          <View style={styles.containerMiddle}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={styles.balanceContainer}>
                <Text style={styles.balance}>$0.00</Text>
                <Text style={styles.subBalance}>+$0.00 (0%)</Text>
              </View>
              <Image source={lineChar2} style={{ width: 180, height: 100, opacity: 0.3 }} />
            </View>

            <View style={styles.row}>
              {buttons.map((btn, index) => (
                <TouchableOpacity
                  onPress={() => btn.link && navigation.navigate(btn.link)}
                  key={index}
                  style={styles.buttonContainer}>
                  <View style={[styles.iconWrapper, { backgroundColor: btn.bg }]}>
                    <btn.iconTag
                      name={btn.icon}
                      size={22}
                      color={
                        btn.label === 'Send' ? Colors.bgColor : Colors.bgColor
                      }
                    />
                  </View>
                  <Text style={styles.label}>{btn.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.tabContainer}>
            {['Coins',"DeFi", 'Activity'].map((row, index) => (
              <TouchableOpacity onPress={() => handleTabPress(index)}>
                <View
                  key={index}
                  style={[
                    styles.tabView,
                    currentTab === index && styles.activeTab,
                  ]}>
                  <Text
                    style={[
                      styles.tabText,
                      currentTab === index && styles.activeText,
                    ]}>
                    {row}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {currentTab === 0 ? (
            <CointList />
          ) : (
            <Text
              style={{
                paddingHorizontal: verticalScale(20),
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'red',
              }}>
              No Activity
            </Text>
          )}
        </View>
      </MainLayout>
 
    </>
  );
}
