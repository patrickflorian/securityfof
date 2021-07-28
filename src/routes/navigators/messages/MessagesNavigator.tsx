import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
import { HomeScreen } from '@screens/HomeScreen';
import { MessageForm } from '@screens/HomeScreen/MessageForm';

const Stack = createStackNavigator();

const MessagesNavigator = ({}) => (
  <Stack.Navigator
    initialRouteName={routenames.MESSAGE}>
    <Stack.Screen
      name={routenames.MESSAGE}
      component={HomeScreen}
      options={{
        headerShown: false,
       }}
    />
    
    <Stack.Screen
      name={routenames.MESSAGE_FORM}
      component={MessageForm}
      options={{
        title: 'Modifier mon message'
       }}
    />
  </Stack.Navigator>
);

export default MessagesNavigator;
