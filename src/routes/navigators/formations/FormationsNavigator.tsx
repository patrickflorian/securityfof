import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {Appbar, useTheme} from 'react-native-paper';

/**
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !DocumentScreen
 */

/**
 * importer l'espace de nom  des routes
 */
import routenames from '@routes/index'
import FormationsScreen from '@screens/Formations/FormationsScreen';
import { FormationDetailScreen } from '@screens/Formations/FormationDetailScreen';

const Stack = createStackNavigator();

const FormationsNavigator = ({}) => (
  <Stack.Navigator
    screenOptions={{
     headerShown: false,
    }}
    initialRouteName={routenames.FORMATION_HOME}>
    <Stack.Screen
      name={routenames.FORMATION_HOME}
      component={FormationsScreen}
    />
    <Stack.Screen
      name={routenames.FORMATION_DETAILS}
      component={FormationDetailScreen}
    />
    {/* <Stack.Screen
      name={routenames.DOCUMENT_FORM}
      component={DocumentFormComponent}
      options={{headerShown: true, title: "Enregistrer un Document"}}
      
    /> */}

  </Stack.Navigator>
);

export default FormationsNavigator;
