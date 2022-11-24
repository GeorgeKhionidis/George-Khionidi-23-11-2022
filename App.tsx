import React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

import {ErrorBoundary} from './src/components/ErrorBoundary/ErrorBoundary';

import {Navigator} from './src/navigator/Navigator';

import {store, persistor} from './src/store';

export const App = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider style={styles.wrapper}>
            <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
            <Navigator />
            <FlashMessage position="top" />
          </SafeAreaProvider>
        </PersistGate>
      </ErrorBoundary>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
