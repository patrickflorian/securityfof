/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/** 
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !LoaderScreen, OnBoardingScreen , LoginNvigator
 */
import { LoaderScreen } from '../../screens/LoaderScreen';
import { OnBoardingScreen } from '../../screens/OnBoardingScreen';
import LogInNavigator from './LogInNavigator';

/**
 * importer l'espace de nom  des routes
 */
import routenames from '..'

const Stack = createStackNavigator();
const OnBoardingNavigator = () => (<Stack.Navigator>
    <Stack.Screen name={routenames.LOADER} component={LoaderScreen} options={{ headerShown: false }} />
    <Stack.Screen name={routenames.ONBOARDING} component={OnBoardingScreen} options={{ headerShown: false }} />
    <Stack.Screen name={routenames.LOGIN} component={LogInNavigator} options={{ headerShown: false }} />
</Stack.Navigator>);

export default OnBoardingNavigator;
