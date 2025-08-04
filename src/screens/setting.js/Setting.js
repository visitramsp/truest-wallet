import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors, Fonts } from '../../theme';
import * as Animatable from 'react-native-animatable';
import { useFocusEffect } from '@react-navigation/native';
const settingsItems = [
  {
    title: 'General',
    subtitle: 'Currency conversion, primary currency, language and search engine',
  },
  {
    title: 'Security & Privacy',
    subtitle: 'Privacy settings, MetaMetrics, private key and wallet Secret Recovery Phrase',
  },
  {
    title: 'Advanced',
    subtitle: 'Access developer features, reset account, setup testnets, sync with extension, state logs, IPFS gateway and custom RPC',
  },
  {
    title: 'Contacts',
    subtitle: 'Add, edit, remove, and manage your accounts',
  },
  {
    title: 'Networks',
    subtitle: 'Add and edit custom RPC networks',
  },
];

export default function Settings() {

  const [animationKey, setAnimationKey] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      // Trigger re-render with new animation key on screen focus
      setAnimationKey(prev => prev + 1);
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {settingsItems.map((item, index) => (
          <Animatable.View  key={`${animationKey}-${index}`}  animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'} delay={200 + index * 200} duration={1000}  style={styles.item}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <Icon name="chevron-right" size={22} color="#ccc" />
          </Animatable.View>
        ))}
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: Fonts.size.f22,
    fontWeight: Fonts.Weight.medium,
    fonntFamily:Fonts.type.montserratSemiBold,
    color: Colors.btnColor,
    marginBottom: 24,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
   fontWeight:Fonts.Weight.semi,
    fonntFamily:Fonts.type.montserratMedium,
    color: Colors.black100,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: Fonts.size.small,
    fontWeight:Fonts.Weight.low,
    fonntFamily:Fonts.type.montserratMedium,
    color: Colors.gray70,
  },
});
