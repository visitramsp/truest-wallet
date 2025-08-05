import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { mediaFile } from '../../../assets';
import { Colors, Fonts } from '../../../theme';
import * as Animatable from 'react-native-animatable';
import { useFocusEffect } from '@react-navigation/native';
const coinData = [
  {
    id: '1',
    name: 'Ethereum',
    icon: mediaFile.etherium,
    percentChange: '+1.10%',
    earnRate: '2.4%',
    balance: '0',
    value: '$0.00',
  },
  {
    id: '2',
    name: 'Bitcoin',
    icon: mediaFile.bnb,
    percentChange: '+0.85%',
    earnRate: '1.8%',
    balance: '0.05',
    value: '$3,000.00',
  },
  {
    id: '3',
    name: 'Polygon',
    icon: mediaFile.polygon,
    percentChange: '-0.24%',
    earnRate: '4.5%',
    balance: '1.3',
    value: '$280.10',
  },
 
 
  
];

const CoinCard = ({ coin, index, animationKey }) => (

  <Animatable.View key={`${animationKey}-${index}`} animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'} delay={200 + index * 200} duration={1000} style={styles.card}>
    <View style={styles.left}>
      <Image source={coin.icon} style={styles.icon} />
      <View>
        <Text style={styles.name}>{coin.name}</Text>
        <View style={styles.row}>
          <Text style={[styles.change, { color: coin.percentChange.includes('-') ? 'red' : Colors.btnColor }]}>
            {coin.percentChange}
          </Text>
          <Text style={styles.earn}> • Earn {coin.earnRate}</Text>
        </View>
      </View>
    </View>
    <View style={styles.right}>
      <Text style={styles.balance}>{coin.balance} {coin.name === 'Ethereum' ? 'ETH' : ''}</Text>
      <Text style={styles.value}>{coin.value}</Text>
    </View>
  </Animatable.View>
);

const CointList = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      setAnimationKey(prev => prev + 1);
    }, [])
  );
  return (
   
    <FlatList
      data={coinData}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <CoinCard coin={item} index={index} animationKey={animationKey} />
      )}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{ paddingBottom: 16 }}
    />
  );
};

export default CointList;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.black70,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderRadius: 10
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  name: {
    color: Colors.white80,
    fontSize: 16,
    fontWeight: '600',
  },
  change: {
    fontSize: 12,
  },
  earn: {
    fontSize: 12,
    color: Colors.custombBlue100,
  },
  balance: {
    color: Colors.white80,
    fontSize: 14,
    fontWeight: Fonts.Weight.medium,
  },
  value: {
    color: Colors.gray100,
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
