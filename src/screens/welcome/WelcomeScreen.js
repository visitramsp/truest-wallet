import React from 'react';
import MainLayout from '../../components/layout/Layout';
import {Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './Welcome.Styles';
import {useNavigation} from '@react-navigation/native';
import imageJson from '../../assets/startup.json';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import waterImage from '../../assets/images/water.gif';
import GifImage from '@lowkey/react-native-gif';
import {opacity} from 'react-native-reanimated/lib/typescript/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';
import {horizontalScale, verticalScale} from '../../theme/Matrics';
import {Colors} from '../../theme';
export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <Animatable.View
        style={styles.container}
        animation="fadeIn"
        duration={1000}>
        <View style={styles.gifView}>
          <View style={{height: 300}} />
          {/* <Animatable.View animation="zoomIn" delay={300} duration={1500}> */}
          {/* <LottieView source={imageJson} autoPlay loop style={styles.gif} /> */}
          {/* <LottieView
            source={waterImage}
            style={{height: 300, width: 300}}
            autoPlay
            loop
          /> */}
          <Animatable.View animation="zoomIn" delay={300} duration={1500}>
            <View
              style={{
                flex: 1,
                opacity: 0.3,
                overflow: 'hidden',
                opacity: 0.5,
                backgroundColor: Colors.bgColor,
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
          </Animatable.View>
        </View>

        <Animatable.View animation="slideInUp" delay={1000} duration={1000}>
          <CustomButton
            onPress={() => navigation.navigate('welcome-second-screen')}
            title="Get Started"
          />
          <Text style={styles.mainTitle}>
            By tapping "Get Started" you agree and consent to our
            <Text style={styles.termsText}> Terms of Service </Text>
            and
            <Text style={styles.privacyText}> Privacy Policy</Text>
          </Text>
        </Animatable.View>
      </Animatable.View>
    </MainLayout>
  );
}
