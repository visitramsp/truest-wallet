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
          <Text style={{color: 'red'}}>Welcome Screen</Text>
          <CustomButton title="Get Started" />
        </View>
      </View>
    </MainLayout>
  );
}
