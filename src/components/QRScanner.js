// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   PermissionsAndroid,
//   Platform,
//   Alert,
// } from 'react-native';
// import {CameraScreen} from 'react-native-camera-kit';

// const QRScanner = () => {
//   const [isPermitted, setIsPermitted] = useState(false);

//   React.useEffect(() => {
//     requestCameraPermission();
//   }, []);

//   const requestCameraPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'App needs camera access to scan QR codes',
//           buttonPositive: 'OK',
//         },
//       );
//       setIsPermitted(granted === PermissionsAndroid.RESULTS.GRANTED);
//     } else {
//       setIsPermitted(true);
//     }
//   };

//   const onReadCode = event => {
//     Alert.alert('QR Code Scanned', event.nativeEvent.codeStringValue);
//   };

//   return (
//     <View style={styles.container}>
//       {isPermitted ? (
//         <CameraScreen
//           scanBarcode={true}
//           onReadCode={onReadCode}
//           showFrame={true}
//           laserColor="red"
//           frameColor="white"
//         />
//       ) : (
//         <Text>Waiting for camera permission...</Text>
//       )}
//     </View>
//   );
// };

// export default QRScanner;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';

const QRScanner = () => {
  const [isPermitted, setIsPermitted] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera access to scan QR codes',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setIsPermitted(true);
        } else {
          Alert.alert('Permission Denied', 'Camera permission is required');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      setIsPermitted(true);
    }
  };

  const onReadCode = event => {
    if (!scanned) {
      setScanned(true); // prevent multiple triggers
      const scannedValue = event.nativeEvent.codeStringValue;
      Alert.alert('QR Code Scanned', scannedValue, [
        {
          text: 'Scan Again',
          onPress: () => setScanned(false),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {isPermitted ? (
        <CameraScreen
          scanBarcode={true}
          onReadCode={onReadCode}
          showFrame={true}
          laserColor="red"
          frameColor="white"
          hideControls={true}
        />
      ) : (
        <Text style={styles.text}>Requesting Camera Permission...</Text>
      )}
    </View>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 18,
  },
});
