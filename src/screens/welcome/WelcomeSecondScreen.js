import React from 'react';
import MainLayout from '../../components/layout/Layout';
import {Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './Welcome.Styles';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../theme';
import imageJson from '../../assets/startup.json';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
export default function WelcomeSecondScreen() {
  const navigation = useNavigation();

  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={[styles.gifView, {}]}>
          <View style={{height: 200}} />
        
         <Animatable.View animation="zoomIn" delay={300} duration={1500}>
            <LottieView source={imageJson} autoPlay loop style={styles.gif} />
          </Animatable.View>
        </View>
        <Animatable.View animation="slideInUp" delay={1000} duration={1000}>
          <CustomButton
            onPress={() => navigation.navigate('otp-screen', {isFirst: true})}
            title="Create new wallet"
          />
          <CustomButton
            style={{marginTop: 15, backgroundColor: Colors.gray60}}
            btnColor={{color: "#B455FA"}}
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
