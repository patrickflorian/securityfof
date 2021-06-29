import AsyncStorage from '@react-native-community/async-storage';

export const storeStringData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e)  
  }
};

export const storeObjectData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e)
  }
};

export const getStringData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Async Storage: ['+key+'] previous value : '+ value)
    return value;
    }
    return null
  } catch (e) {
    console.log(e)
    return null
  }
};
export const getObjectData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e)
  }
};

export const mergeObjectData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.mergeItem(key, jsonValue);
  } catch (e) {
    console.log(e)
  }
};
