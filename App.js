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