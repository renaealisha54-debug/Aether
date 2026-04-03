// components/Editor.js
import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';

const Editor = ({ code, onChange }) => (
  <TextInput
    style={styles.editor}
    multiline value={code} onChangeText={onChange}
    autoCapitalize="none" spellCheck={false}
    placeholder="// Anza kuandika msimbo hapa..." placeholderTextColor="#444"
  />
);

const styles = StyleSheet.create({
  editor: { flex: 1, color: '#c9d1d9', padding: 20, fontSize: 16, fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace', textAlignVertical: 'top' }
});

export default Editor;
