/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Index from './src/navigate';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/Store';
import { Colors } from './src/theme';
// import BootSplash from 'react-native-bootsplash';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  //  useEffect(() => {
  //   // Hide splash screen when app is ready
  //   BootSplash.hide({ fade: true });
  // }, []);
  useEffect(() => {
    // Simulate loading (API call or startup task)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.btnColor} />
        <Text style={{color:Colors.gray80,marginTop:5}}>Loading App...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Index />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
