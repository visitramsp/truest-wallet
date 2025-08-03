import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../theme';

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
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {settingsItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <Icon name="chevron-right" size={22} color="#ccc" />
          </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black100,
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
    fontWeight: '600',
    color: Colors.black100,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.gray70,
  },
});
