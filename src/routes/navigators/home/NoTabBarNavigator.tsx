import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, useTheme} from 'react-native-paper';
import {DocumentsScreen} from '@screens/Documents';
/**
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !DocumentScreen
 */

/**
 * importer l'espace de nom  des routes
 */
import routenames from '@routes/index'
import DocumentFormComponent from '@screens/Documents/components/forms/DocumentForm';
import ModalScreen from '@screens/ModalScreen/ModalScreen';

const Stack = createStackNavigator();

const NoTabBarNavigator = ({}) => (
  <Stack.Navigator
    screenOptions={{
     headerShown: false,
    }}
    >
   <Stack.Screen name={routenames.MODAL} component={ModalScreen} options={{headerShown: false}} />
  </Stack.Navigator>
);

export default NoTabBarNavigator;
