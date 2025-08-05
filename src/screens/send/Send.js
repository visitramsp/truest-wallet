import React, { useState } from 'react';
import { styles } from './Send.Styles';
import MainLayout from '../../components/layout/Layout';
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Fonts } from '../../theme';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { height } from '../../theme/Matrics';
import { mediaFile } from '../../assets';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import { ColorProperties } from 'react-native-reanimated/lib/typescript/Colors';

const buttons = [
  { label: 'Send', icon: 'arrow-up-right', bg: '#2c2c2e', link: 'send' },
  { label: 'Receive', icon: 'arrow-down-left', bg: '#2c2c2e', link: 'send' },
];
export default function Send() {
  const [fromAccount, setFromAccount] = useState('Account 3');
  const [fromAddress, setFromAddress] = useState({
    name: "Account 3",
    address: "0x4e7DE...3Dd0E"
  });
  const [toAddress, setToAddress] = useState({
    address: ""
  });
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Account 1',
      address: '0x0ceC8...d2A6c',
      balance: '$0.00',
      icon: 'wallet-outline',
      tag: 'SRP #1',
    },
    {
      id: 2,
      name: 'Account 2',
      address: '0x74516...25518',
      balance: '$0.00',
      icon: 'wallet-outline',
      tag: 'SRP #2',
    },
  ]);
  const [currentTab, setCurrentTab] = useState(0)
  const navigation = useNavigation()
  const [isModalVisible, setModalVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      setAnimationKey(prev => prev + 1);
    }, [])
  );


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const handleTabPress = (index) => {
    setCurrentTab(index);
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            marginTop: 4
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={40} color={Colors.gray100} />
          </TouchableOpacity>
          <Text
            style={{
              color: Colors.white80,
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 16,
            }}>
            Send
          </Text>
          <View style={{ width: 50 }} />
        </View>
        <View
          style={[
            styles.container,
            {
              paddingHorizontal: 0,
              height: height - 180,
            },
          ]}>
          <Text style={{ color: Colors.gray40, fontSize: 14, marginBottom: 6 }}>
            From
          </Text>
          <Pressable onPress={toggleModal} style={styles.accountBox}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="wallet" size={28} color={Colors.red100} />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.accountTitle}>{fromAddress.name}</Text>
                <Text style={styles.accountAddress}>{fromAddress.address}</Text>
              </View>
            </View>
            <Icon name="chevron-down" size={22} color={Colors.gray100} />
          </Pressable>

          <Text
            style={{
              color: Colors.gray40,
              fontSize: 14,
              marginTop: 16,
              marginBottom: 6,
            }}>
            To
          </Text>
          <View style={styles.inputBox}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              {
                toAddress.address && <Image
                  source={mediaFile.fox}
                  style={{ height: 30, width: 30 }}
                />
              }
              <View >
                {toAddress?.name && <Text style={{ color: Colors.white80,fontSize:17 }}>

                {toAddress.name}
              </Text>}
              <Text style={[{ color: Colors.gray100 }, toAddress.address && {color: Colors.btnColor}]}>

                {toAddress.address ? toAddress.address : 'Enter public address (0x) or domain name'}
              </Text>
              </View>
            </View>

            {
              toAddress.address ?

                <TouchableOpacity
                  onPress={() => {
                    setAccounts(prev => {
                      // Add back the removed account only if it had an id
                      return toAddress.id ? [...prev, toAddress] : prev;
                    });
                    setToAddress({ address: "" });
                  }}
                >

                  <AntDesign name="close" size={22} color="#888" />
                </TouchableOpacity>

                : <Icon name="qrcode-scan" size={22} color="#888" />
            }
          </View >

          <View style={styles.tabContainer}>
            {
              ["Your accounts", "Contacts"].map((row, index) =>

                <TouchableOpacity onPress={() => handleTabPress(index)}>
                  <View key={index} style={[styles.tabView, currentTab === index && styles.activeTab]}>
                    <Text style={[styles.tabText, currentTab === index && styles.activeText]}>{row}</Text>
                  </View>
                </TouchableOpacity>
              )
            }
          </View>



          <ScrollView style={{ marginTop: 10 }}>
            {accounts.map((acc, index) => (
              <Animatable.View key={`${animationKey}-${index}`} animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'} delay={700 + index * 200} duration={1000}>
                <TouchableOpacity key={acc.id}

                  onPress={() => {
                    setAccounts((prev) => {
                      const updated = toAddress.id
                        ? [...prev, toAddress]
                        : [...prev];
                      return updated.filter((item) => item.id !== acc.id);
                    });

                    setToAddress(acc);
                  }}
                  style={styles.accountList}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Image
                      source={mediaFile.fox}
                      style={{ height: 40, width: 40 }}
                    />

                    <View style={{ marginLeft: 12 }}>
                      <Text style={styles.accountTitle}>{acc.name}</Text>
                      <Text style={styles.accountAddress}>{acc.address}</Text>
                    </View>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.balance}>{acc.balance} USD</Text>
                    {acc.tag && <Text style={styles.tag}>{acc.tag}</Text>}
                  </View>
                </TouchableOpacity>
              </Animatable.View>
            ))}
          </ScrollView>
        </View>

        <Animatable.View key={`${animationKey}index}`} animation="slideInUp" delay={1000} duration={1000} style={styles.btnContainer}>
          <TouchableOpacity style={styles.continueBtn}>
            <Text style={{ color: Colors.btnColor, fontSize: 16, fontWeight: Fonts.Weight.bold,fontFamily:Fonts.type.montserratBold }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={{ color: Colors.bgColor, fontSize: 16,fontWeight: Fonts.Weight.bold,fontFamily:Fonts.type.montserratBold }}> Continue</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>

      <ToAddress isModalVisible={isModalVisible} setFromAddress={setFromAddress} toggleModal={toggleModal} />
    </MainLayout>
  );
}

const ToAddress = ({ isModalVisible, toggleModal, setFromAddress }) => {
  const accounts = [
    {
      id: 1,
      name: 'Account 1',
      address: '0x0ceC8...d2A6c',
      balance: '$0.00',
      icon: 'wallet-outline',
      tag: 'SRP #1',
    },
    {
      id: 2,
      name: 'Account 2',
      address: '0x74516...25518',
      balance: '$0.00',
      icon: 'wallet-outline',
    },
    {
      id: 3,
      name: 'Account 1',
      address: '0x0ceC8...d2A6c',
      balance: '$0.00',
      icon: 'wallet-outline',
      tag: 'SRP #1',
    },
    {
      id: 4,
      name: 'Account 4',
      address: '0x74516...25518',
      balance: '$0.00',
      icon: 'wallet-outline',
    },
    // {
    //   id: 5,
    //   name: 'Account 5',
    //   address: '0x0ceC8...d2A6c',
    //   balance: '$0.00',
    //   icon: 'wallet-outline',
    //   tag: 'SRP #1',
    // },

  ];
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <View
        style={{
          backgroundColor: '#302424ff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 16,
          height: '60%',
          opacity:0.9
          // borderTopColor:Colors.gray100,
          // borderWidth:1
        }}
      >
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <View
            style={{
              height: 5,
              width: 50,
              backgroundColor: '#ccc',
              borderRadius: 3,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: Fonts.Weight.semi,
            fontFamily: Fonts.type.montserratSemiBold,
            color: Colors.gray40,
          }}
        >
          Select Account 
        </Text>

        <ScrollView>
          {accounts.map((acc) => (
            <TouchableOpacity key={acc.id} onPress={() => {
              setFromAddress(acc)
              toggleModal()
            }} style={styles.accountList}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={mediaFile.fox}
                  style={{ height: 40, width: 40 }}
                />
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.accountTitle}>{acc.name}</Text>
                  <Text style={styles.accountAddress}>{acc.address}</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.balance}>{acc.balance} USD</Text>
                {acc.tag && <Text style={styles.tag}>{acc.tag}</Text>}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* <TouchableOpacity
          onPress={toggleModal}
          style={{ marginTop: 12, alignSelf: 'flex-end' }}
        >
          <Text style={{ color: 'red' }}>Close</Text>
        </TouchableOpacity> */}
      </View>
    </Modal>
  )
}
