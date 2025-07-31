import React from 'react';
import MainLayout from '../../components/layout/Layout';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './Welcome.Styles';
import {mediaFile} from '../../assets';
import {useNavigation} from '@react-navigation/native';
export default function ChooseOption() {
  const navigation = useNavigation();
  const btnList = [
    {
      icons: '+',
      btnName: 'Create new wallet',
      desc: 'Generate a new multi-chain wallet',
      linkURL: 'bottom-navigation',
    },
    {
      icons: 'A',
      btnName: 'Add existing wallet',
      desc: 'Import, restore or view-only',
      linkURL: 'qrs-canner',
    },
  ];
  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.gifView}>
          <Image source={mediaFile.welcomeGIF} style={styles.topIcons} />
        </View>
        <View>
          <Text style={styles.mainTitleDesc}>
            Join 70M+ people shapping the future of the internet with us
          </Text>
        </View>
        <View style={styles.outerContainer}>
          {btnList.map((row, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(row.linkURL)}
              key={index}>
              <View style={styles.buttonContainer}>
                <View style={styles.iconsView}>
                  <Text style={styles.iconsText}>{row.icons}</Text>
                </View>
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
