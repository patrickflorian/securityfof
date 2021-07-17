import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {Appbar, useTheme} from 'react-native-paper';

/**
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !DocumentScreen
 */
import {DocumentsScreen} from '@screens/Documents';
import DocumentFormComponent from '@screens/Documents/components/forms/DocumentForm';

/**
 * importer l'espace de nom  des routes
 */
import routenames from '@routes/index'

const Stack = createStackNavigator();

const DocumentNavigator = ({}) => (
  <Stack.Navigator
    screenOptions={{
     headerShown: false,
    }}
    initialRouteName={routenames.DOCUMENT_HOME}>
    <Stack.Screen
      name={routenames.DOCUMENT_HOME}
      component={DocumentsScreen}
    />
    <Stack.Screen
      name={routenames.DOCUMENT_FORM}
      component={DocumentFormComponent}
      options={{headerShown: true, title: "Enregistrer un Document"}}
      
    />

  </Stack.Navigator>
);

export default DocumentNavigator;