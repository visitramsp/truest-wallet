import React from 'react';
import MainLayout from '../../components/layout/Layout';
import {Image, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './Welcome.Styles';
import {mediaFile} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {height} from '../../theme/Matrics';
import {Colors} from '../../theme';
import imageJson from '../../assets/startup.json';
import LottieView from 'lottie-react-native';
export default function WelcomeSecondScreen() {
  const navigation = useNavigation();

  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={[styles.gifView, {}]}>
          <View style={{height: 200}} />
          {/* <WebView
            originWhitelist={['*']}
            source={mediaFile.welcomeGIF}
            style={styles.gif}
          /> */}
          <View>
            <LottieView source={imageJson} autoPlay loop style={styles.gif} />
          </View>
        </View>
        <View>
          <CustomButton
            onPress={() => navigation.navigate('otp-screen', {isFirst: true})}
            title="Create new wallet"
          />
          <CustomButton
            style={{marginTop: 15, backgroundColor: Colors.gray60}}
            btnColor={{color: Colors.black80}}
            onPress={() => navigation.navigate('otp-screen', {isFirst: false})}
            title="I already have a wallet"
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
