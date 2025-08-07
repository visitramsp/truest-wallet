// import React from 'react';
// import {
//   ImageBackground,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   View,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {Colors} from '../../theme';

// const MainLayout = ({children, style, scrollable = true}) => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar
//         backgroundColor="transparent"
//         translucent
//         barStyle="light-content"
//       />
//       {scrollable ? (
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           scrollEnabled={scrollable}
//           style={[style]}>
//           {children}
//         </ScrollView>
//       ) : (
//         <View style={[styles.mainContainer, style]}>{children}</View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: Colors.bgColor,
//   },
//   mainContainer: {
//     flex: 1,
//   },
// });

// export default MainLayout;


import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../theme';

const MainLayout = ({children, style, scrollable = true}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <LinearGradient
        colors={['#000000', '#0A0A0A', '#1A1A1A']}
        style={styles.gradient}>
        {scrollable ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollable}
            contentContainerStyle={style}>
            {children}
          </ScrollView>
        ) : (
          <View style={[styles.mainContainer, style]}>{children}</View>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black', // fallback
  },
  gradient: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
});

export default MainLayout;
