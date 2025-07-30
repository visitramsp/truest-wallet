import React from 'react';
import MainLayout from '../../components/layout/Layout';
import {Image, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './Welcome.Styles';
import {mediaFile} from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { height } from '../../theme/Matrics';
import { Colors } from '../../theme';
export default function WelcomeSecondScreen() {
  const navigation=useNavigation()


  
  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={[styles.gifView,{height:height-250}]}>
          <Image
            source={mediaFile.welcomeGIF}
            style={styles.gif}
          />
        </View>
        <View>
          <CustomButton onPress={()=>navigation.navigate("choose-option")} title="Create new wallet" />
          <CustomButton style={{marginTop:15,backgroundColor:Colors.gray60}} btnColor={{color:Colors.black80}} onPress={()=>navigation.navigate("choose-option")} title="I already have a wallet" />
          <Text style={styles.mainTitle}>
            By Trapping "Get Started" you agree and consent to our
            <Text style={styles.termsText}>{ " "}Terms of Service {" "}</Text>
            and
            <Text style={styles.privacyText}> {" "}Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </MainLayout>
  );
}
