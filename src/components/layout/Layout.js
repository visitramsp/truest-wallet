import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../theme';


const MainLayout = ({ children, style, scrollable = true }) => {
  return (
    // <ImageBackground source={AppIcon.universalUI} style={[styles.safeArea]}>
      <SafeAreaView style={styles.safeArea}>
        {scrollable ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollable}
            style={[style]}
          >
            {children}
          </ScrollView>
        ) : (
          <View style={[styles.mainContainer, style]}>{children}</View>
        )}
      </SafeAreaView>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:Colors.bgColor
  },
  mainContainer: {
    flex: 1
  }
});

export default MainLayout;