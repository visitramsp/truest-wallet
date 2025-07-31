import React from 'react';
import MainLayout from '../../components/layout/Layout';
import {Image, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './Welcome.Styles';
import {mediaFile} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';
export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.gifView}>
          {/* <Image
            source={mediaFile.welcomeGIF}
            style={styles.gif}
          /> */}
          <WebView
            originWhitelist={['*']}
            source={mediaFile.welcomeGIF}
            style={styles.gif}
          />
        </View>
        <View>
          <CustomButton
            onPress={() => navigation.navigate('welcome-second-screen')}
            title="Get Started"
          />
          <Text style={styles.mainTitle}>
            By Trapping "Get Started" you agree and consent to our
            <Text style={styles.termsText}> Terms of Service </Text>
            and
            <Text style={styles.privacyText}> Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </MainLayout>
  );
}
