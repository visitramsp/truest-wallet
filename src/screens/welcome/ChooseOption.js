import React from 'react';
import MainLayout from '../../components/layout/Layout';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Welcome.Styles';
import {mediaFile} from '../../assets';
import {useNavigation} from '@react-navigation/native';
// import WebView from 'react-native-webview';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../theme';
export default function ChooseOption() {
  const navigation = useNavigation();
  const btnList = [
    {
      icons: <Ionicons name={'add-sharp'} size={20} color={Colors.blue100} />,
      btnName: 'Create new wallet',
      desc: 'Generate a new multi-chain wallet',
      linkURL: 'bottom-navigation',
      isFirst: true,
    },
    {
      icons: <Feather name={'arrow-down'} size={20} color={Colors.blue100} />,
      btnName: 'Add existing wallet',
      desc: 'Import, restore or view-only',
      linkURL: 'qrs-canner',
      isFirst: false,
    },
  ];
  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.gifView}>
          {/* <WebView
            originWhitelist={['*']}
            source={mediaFile.welcomeGIF}
            style={styles.gif}
          /> */}
        </View>
        <View>
          <Text style={styles.mainTitleDesc}>
            Join 70M+ people shapping the future of the internet with us
          </Text>
        </View>
        <View style={styles.outerContainer}>
          {btnList.map((row, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(row.linkURL, {isFirst: row.isFirst})
              }
              key={index}>
              <View style={styles.buttonContainer}>
                <View style={styles.iconsView}>{row.icons}</View>
                <View>
                  <Text style={styles.btnName}>{row.btnName}</Text>
                  <Text style={styles.iconsDesc}>{row.desc}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </MainLayout>
  );
}
