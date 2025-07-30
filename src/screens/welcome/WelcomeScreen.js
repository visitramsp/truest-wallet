import React from 'react';
import MainLayout from '../../components/layout/Layout';
import {Image, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './Welcome.Styles';
import {mediaFile} from '../../assets';
import FastImage from 'react-native-fast-image';
export default function WelcomeScreen() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.gifView}>
          <Image
            source={require('../../assets/images/welcome_gif.gif')}
            style={styles.gif}
          />
        </View>
        <View>
          <CustomButton title="Get Started" />
          <Text style={{color: 'black'}}>
            By Trapping "Get Started" you agree and consent to our
            <Text style={{color: 'red'}}>Terms of Service</Text>
            and
            <Text style={{color: 'red'}}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </MainLayout>
  );
}
