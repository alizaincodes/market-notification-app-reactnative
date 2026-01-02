import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import RemindersList from './src/screens/RemindersList';
import Settings from './src/screens/Settings';

export default function App() {
  const [tab, setTab] = useState('reminders');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Market Reminder</Text>
      </View>

      <View style={styles.content}>
        {tab === 'reminders' ? <RemindersList /> : <Settings />}
      </View>

      <View style={styles.footer}>
        <Button title="Reminders" onPress={() => setTab('reminders')} />
        <Button title="Settings" onPress={() => setTab('settings')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {padding: 12, borderBottomWidth: 1, borderColor: '#eee'},
  title: {fontSize: 20, fontWeight: '600'},
  content: {flex: 1, padding: 12},
  footer: {flexDirection: 'row', justifyContent: 'space-around', padding: 8}
});
