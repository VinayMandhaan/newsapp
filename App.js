import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Home from './src/screens/home';
import store from './src/store';
import { NativeBaseProvider } from 'native-base';

export default function App() {

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Home />
      </NativeBaseProvider>

    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
