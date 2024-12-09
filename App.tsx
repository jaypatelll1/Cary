import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import UserNav from './Navigation/UserNav';
import { store, persistor } from './redux/store';
import 'react-native-reanimated';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <NavigationContainer>
            <UserNav />
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? '10%' : 10,
  },
});
