// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ status }) => (
  <View style={styles.header}>
    <Text style={styles.logo}>AETHER <Text style={{color:'#fff'}}>ENGINE</Text></Text>
    <Text style={styles.status}>{status}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#30363d' },
  logo: { color: '#58a6ff', fontWeight: '900', fontSize: 18 },
  status: { color: '#8b949e', fontSize: 10, marginTop: 4 }
});

export default Header;
