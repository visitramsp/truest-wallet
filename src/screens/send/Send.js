import React, {useState} from 'react';
import {styles} from './Send.Styles';
import MainLayout from '../../components/layout/Layout';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {height} from '../../theme/Matrics';
import {mediaFile} from '../../assets';

const buttons = [
  {label: 'Send', icon: 'arrow-up-right', bg: '#2c2c2e', link: 'send'},
  {label: 'Receive', icon: 'arrow-down-left', bg: '#2c2c2e', link: 'send'},
];
export default function Send() {
  const [fromAccount, setFromAccount] = useState('Account 3');
  const [toAddress, setToAddress] = useState('');
  const navigation = useNavigation();
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
  ];
  return (
    <MainLayout>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color={Colors.black100} />
          </TouchableOpacity>
          <Text
            style={{
              color: Colors.black100,
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 16,
            }}>
            Send
          </Text>
          <View />
        </View>
        <View
          style={[
            styles.container,
            {
              paddingHorizontal: 0,
              height: height - 200,
            },
          ]}>
          <Text style={{color: Colors.gray100, fontSize: 14, marginBottom: 6}}>
            From
          </Text>
          <TouchableOpacity style={styles.accountBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="wallet" size={28} color={Colors.red100} />
              <View style={{marginLeft: 12}}>
                <Text style={styles.accountTitle}>{fromAccount}</Text>
                <Text style={styles.accountAddress}>0x4e7DE...3Dd0E</Text>
              </View>
            </View>
            <Icon name="chevron-down" size={22} color={Colors.gray100} />
          </TouchableOpacity>

          <Text
            style={{
              color: Colors.gray100,
              fontSize: 14,
              marginTop: 16,
              marginBottom: 6,
            }}>
            To
          </Text>
          <View style={styles.inputBox}>
            <Text style={{color: Colors.gray100}}>
              {'Enter public address (0x) or domain name'}
            </Text>
            <Icon name="qrcode-scan" size={22} color="#888" />
          </View>

          <View style={styles.tabs}>
            <Text style={[styles.tabItem, {borderBottomColor: '#fff'}]}>
              Your accounts
            </Text>
            <Text style={styles.tabItem}>Contacts</Text>
          </View>

          {/* <View style={styles.row}>
            {buttons.map((btn, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(btn.link)}
                key={index}
                style={styles.buttonContainer}>
                <View style={[styles.iconWrapper, {backgroundColor: btn.bg}]}>
                  <Icon
                    name={btn.icon}
                    size={22}
                    color={btn.label === 'Fund' ? '#000' : '#fff'}
                  />
                </View>
                <Text style={styles.label}>{btn.label}</Text>
              </TouchableOpacity>
            ))}
          </View> */}

          <ScrollView style={{marginTop: 10}}>
            {accounts.map(acc => (
              <TouchableOpacity key={acc.id} style={styles.accountList}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* <Icon name={acc.icon} size={28} color="#4da6ff" /> */}
                  <Image
                    source={mediaFile.fox}
                    style={{height: 40, width: 40}}
                  />

                  <View style={{marginLeft: 12}}>
                    <Text style={styles.accountTitle}>{acc.name}</Text>
                    <Text style={styles.accountAddress}>{acc.address}</Text>
                  </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={styles.balance}>{acc.balance} USD</Text>
                  {acc.tag && <Text style={styles.tag}>{acc.tag}</Text>}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.continueBtn}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={{color: '#fff', fontSize: 16}}> Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
}
