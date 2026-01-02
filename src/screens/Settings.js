import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <Text style={styles.note}>Choose ringtone and volume (placeholder UI).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  heading: {fontSize: 18, fontWeight: '600', marginBottom: 8},
  note: {color: '#555'}
});
