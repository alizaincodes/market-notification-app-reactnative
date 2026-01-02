import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import BinanceSocket from '../services/binance';

const sampleReminders = [
  {id: '1', symbol: 'BTCUSDT', target: '50000'},
  {id: '2', symbol: 'ETHUSDT', target: '3000'}
];

export default function RemindersList() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    // Create a combined stream for sample assets
    const assets = sampleReminders.map(r => r.symbol.toLowerCase());
    const socket = new BinanceSocket(assets);

    socket.onPrice((symbol, price) => {
      setPrices(prev => ({...prev, [symbol]: price}));
    });

    socket.connect();

    return () => socket.disconnect();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Active Reminders</Text>
      <FlatList
        data={sampleReminders}
        keyExtractor={i => i.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.symbol}>{item.symbol}</Text>
              <Text style={styles.target}>Target: {item.target}</Text>
            </View>
            <View style={styles.priceWrap}>
              <Text style={styles.price}>
                {prices[item.symbol.toLowerCase()] ?? '—'}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  heading: {fontSize: 18, fontWeight: '600', marginBottom: 8},
  item: {flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderBottomWidth: 1, borderColor: '#eee'},
  symbol: {fontSize: 16, fontWeight: '600'},
  target: {color: '#555'},
  priceWrap: {justifyContent: 'center'},
  price: {fontSize: 16, fontWeight: '700'}
});
