import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/** 
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !LoaderScreen, SignUpScreen , SignInScreen
 */
import { PasswordResetScreen } from '@screens/PasswordResetScreen';
import { SignUpScreen } from '@screens/SignUpScreen';
import { SignInScreen } from '@screens/SignInScreen';
import {HomeNavigator} from './home'

/**
 * importer l'espace de nom  des routes
 */
import routenames from '@routes/index'
import DocumentFormComponent from '../../screens/Documents/components/forms/DocumentForm';
import ModalScreen from '@screens/ModalScreen/ModalScreen';
import NoTabBarNavigator from './home/NoTabBarNavigator';

const Stack = createStackNavigator();
const LogInNavigator = () => (<Stack.Navigator initialRouteName={routenames.SIGN_IN} screenOptions={{headerShown: false}}>
    <Stack.Screen name={routenames.SIGN_IN} component={SignInScreen} options={{headerTitle: "Connexion"}}/>
    <Stack.Screen name={routenames.PASSWORD_RESET} component={PasswordResetScreen} options={{headerTitle : 'Mot de passe oublie'}}/>
    <Stack.Screen name={routenames.SIGN_UP} component={SignUpScreen} options={{headerTitle : 'Inscription'}}/>
    <Stack.Screen name={routenames.NOTABBAR} component={NoTabBarNavigator} options={{headerShown: false}} />
    <Stack.Screen name={routenames.DRAWER} component={HomeNavigator} options={{headerTitle: "Home"}}/>
</Stack.Navigator>);

export default LogInNavigator;
