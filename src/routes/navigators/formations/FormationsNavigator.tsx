import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/**
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !DocumentScreen
 */
import FormationsScreen from '@screens/Formations/FormationsScreen';
import { FormationDetailScreen } from '@screens/Formations/FormationDetailScreen';
import FormationFormComponent from '@screens/Formations/forms/FormationForm';

/**
 * importer l'espace de nom  des routes
 */
import routenames from '@routes/index'

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
    <Stack.Screen
      name={routenames.FORMATION_FORM}
      component={FormationFormComponent}
      options={{headerShown: true, title: "Repondre au quizz"}}  
    />

  </Stack.Navigator>
);

export default FormationsNavigator;
