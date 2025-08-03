// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';
// import FastImage from 'react-native-fast-image';
// // import LinearGradient from 'react-native-linear-gradient';

// const { width } = Dimensions.get('window');

// export default function Congratulation() {
//   return (
//     <View style={styles.container}>
//       {/* Top MetaMask Logo */}
//       <View style={styles.logoContainer}>
//         <FastImage
//           source={{
//             uri: 'https://raw.githubusercontent.com/MetaMask/brand-resources/master/png/metamask-fox.png',
//           }}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//       </View>

//       {/* Fox Emoji Image */}
//       <FastImage
//         source={{ uri: 'https://emojiisland.com/cdn/shop/products/Fox_Emoji_large.png' }}
//         style={styles.fox}
//         resizeMode="contain"
//       />

//       {/* Text Box */}
//       <View style={styles.bottomContainer}>
//         <Image
//         source={{ uri: 'https://raw.githubusercontent.com/MetaMask/brand-resources/master/png/metamask-fox.png',}}
//         style={styles.fox}
//         resizeMode="contain"
//       />
//         <Text style={styles.heading}>MetaMask ll</Text>
//         <Text style={styles.description}>
//           By connecting your wallet, you agree to our Terms of Service and our Privacy Policy.
//         </Text>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Create Wallet</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingTop: 50,
//     backgroundColor: '#fdfdfd', // fallback background
//   },
//   logoContainer: {
//     marginBottom: 20,
//   },
//   logo: {
//     height: 40,
//     width: 100,
//   },
//   fox: {
//     height: 180,
//     width: 180,
//     marginVertical: 30,
//   },
//   bottomContainer: {
//     backgroundColor: '#fff',
//     width: width - 40,
//     borderRadius: 20,
//     padding: 24,
//     alignItems: 'center',
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 5 },
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: '700',
//     marginBottom: 12,
//     color: '#000',
//   },
//   description: {
//     textAlign: 'center',
//     color: '#555',
//     fontSize: 14,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#ff7b7b',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 30,
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });
