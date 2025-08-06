import React from 'react';
import MainLayout from '../../components/layout/Layout';
import {Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './Welcome.Styles';
import {useNavigation} from '@react-navigation/native';
import {Colors, horizontalScale, verticalScale} from '../../theme';
import imageJson from '../../assets/startup.json';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import {WebView} from 'react-native-webview';
import waterImage from '../../assets/images/water.gif';

export default function WelcomeSecondScreen() {
  const navigation = useNavigation();

  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={[styles.gifView, {}]}>
          <View style={{height: 300}} />
          <View
            style={{
              flex: 1,
              opacity: 0.3,
              overflow: 'hidden',
              opacity: 0.5,
            }}>
            <WebView
              originWhitelist={['*']}
              source={waterImage}
              style={{
                height: verticalScale(270),
                width: horizontalScale(320),
                opacity: 0.3,
                borderRadius: 20,
              }}
            />
          </View>
          {/* <Animatable.View animation="zoomIn" delay={300} duration={1500}>
            <LottieView source={imageJson} autoPlay loop style={styles.gif} />
          </Animatable.View> */}
        </View>
        <Animatable.View animation="slideInUp" delay={1000} duration={500}>
          <CustomButton
            onPress={() => navigation.navigate('otp-screen', {isFirst: true})}
            title="Create new wallet"
          />
          <CustomButton
            style={{marginTop: 15, backgroundColor: Colors.gray60}}
            btnColor={{color: Colors.gray90}}
            onPress={() => navigation.navigate('otp-screen', {isFirst: false})}
            title="I already have a wallet"
          />
          <Text style={styles.mainTitle}>
            By Trapping "Get Started" you agree and consent to our
            <Text style={styles.termsText}> Terms of Service </Text>
            and
            <Text style={styles.privacyText}> Privacy Policy</Text>
          </Text>
        </Animatable.View>
      </View>
    </MainLayout>
  );
}
