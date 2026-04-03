// App.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Editor from './components/Editor';
import StorageService from './services/StorageService';

export default function AetherEngine() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('Imehifadhiwa Ndani (Local)');

  useEffect(() => {
    StorageService.loadCode().then(setCode);
  }, []);

  const handleChange = async (text) => {
    setCode(text);
    setStatus('Inahifadhiwa...');
    await StorageService.saveCode(text);
    setStatus('Imehifadhiwa Ndani (Local)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header status={status} />
      <Editor code={code} onChange={handleChange} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#0d1117' } });
