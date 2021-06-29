/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

/**
 * import des providers de react native paper pour les themes et de redux pour les stockage des etats
 */
import {
  Colors,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';

import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  NavigationContainer,
} from '@react-navigation/native';

/** importer la vue principale */
import {RootNavigator} from './src/routes/navigators';

/**importer le store */
import {configureStore} from './src/store/redux';
import {ThemeContext} from './src/context/context';

const store = configureStore();

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#085394',
    secondary: '#F7BE31',
    default: '#1FADF4',
    success: '#6aa84f',
  },
};

const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    notification: Colors.red500,
    primary: '#085394',
    secondary: '#F7BE31',
    default: '#1FADF4',
    success: '#6aa84f',
  },
};

const App: () => React$Node = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme; // Use Light/Dark theme based on a state

  const themeContext = React.useMemo(() => ({
    toggleTheme: () => {
      setIsDarkTheme((isDarkTheme) => !isDarkTheme);
    },
  }));
  return (
    <>
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <ThemeContext.Provider value={themeContext}>
            <NavigationContainer theme={theme}>
              <RootNavigator />
            </NavigationContainer>
          </ThemeContext.Provider>
        </PaperProvider>
      </StoreProvider>
    </>
  );
};

export default App;
