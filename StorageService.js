// services/StorageService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  static async loadCode() {
    return await AsyncStorage.getItem('@aether_code') || '';
  }

  static async saveCode(code) {
    await AsyncStorage.setItem('@aether_code', code);
  }
}

export default StorageService;
