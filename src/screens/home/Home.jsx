import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable
} from 'react-native';
import styles from './Home.Styles';
import { ApplicationStyle } from '../../theme';
import ProductCard from '../../components/productCard';

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <ImageBackground
            source={{ uri: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg' }}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <View style={styles.content}>
              <Text style={styles.text}>Fashion Sale</Text>
              <Pressable style={styles.checkButton}>
                <Text style={styles.checkText}>Check</Text>
              </Pressable>
            </View>
          </ImageBackground>

          <View style={styles.boxContainer}>
            <View style={[ApplicationStyle.rowAlignCenterJustifyBetween, { paddingBottom: 10 }]}>
              <View>
                <Text style={styles.newText}>New</Text>
                <Text style={styles.newSubText}>You’ve never seen it before!</Text>
              </View>
              <Text style={styles.viewAllText}>View All</Text>
            </View>
            <ProductCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
