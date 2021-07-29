import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/** 
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !LoaderScreen, SignUpScreen , SignInScreen
 */
import { PasswordResetScreen } from '@screens/PasswordResetScreen';
import { SignInScreen } from '@screens/SignInScreen';
import {HomeNavigator} from '@routes/navigators/home'
import NoTabBarNavigator from '@routes/navigators/home/NoTabBarNavigator';

/**
 * importer l'espace de nom  des routes
 */
import routenames from '@routes/index'

const Stack = createStackNavigator();
const LogInNavigator = () => (<Stack.Navigator initialRouteName={routenames.SIGN_IN} screenOptions={{headerShown: false}}>
    <Stack.Screen name={routenames.SIGN_IN} component={SignInScreen} options={{headerTitle: "Connexion"}}/>
    <Stack.Screen name={routenames.PASSWORD_RESET} component={PasswordResetScreen} options={{headerTitle : 'Mot de passe oublie'}}/>
    <Stack.Screen name={routenames.NOTABBAR} component={NoTabBarNavigator} options={{headerShown: false}} />
    <Stack.Screen name={routenames.DRAWER} component={HomeNavigator} options={{headerTitle: "Home"}}/>
</Stack.Navigator>);

export default LogInNavigator;
