import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/**
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !HomeScreen, IncomeScreen , OutcomeScreen, AccountScreen
 */
import {AccountNavigator} from '../account';
import {IncomeScreen} from '@screens/Income';
import {BudgetScreen} from '@screens/Budget';

/**
 * importer l'espace de nom  des routes
 */
import routenames from '@routes/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import SuscriptionScreen from '@screens/SuscriptionScreen/SuscriptionScreen';
import AsyncStorage from '@react-native-community/async-storage';
import OutcomeScreen from '@screens/Outcome/OutcomeScreen';

const Tab = createBottomTabNavigator();
export const screens = [
  {
    routename: routenames.HOME,
    icon: 'home',
    component: HomeScreen,
    label: 'Acceuil',
  },
  {
    routename: routenames.ACCOUNT,
    icon: 'briefcase-variant-outline',
    component: AccountNavigator,
    label: 'Comptes',
  },
  {
    routename: routenames.INCOME,
    icon: 'file-pdf-outline',
    component: IncomeScreen,
    label: 'Documents',
  },
  {
    routename: routenames.OUTCOME,
    icon: 'cash-minus',
    component: OutcomeScreen,
    label: 'Formations',
  },
];
const HomeNavigator = () => {
  const [hasSuscription, setSubscription] = useState<boolean>();
  useEffect(() => {
    if (hasSuscription === null) {
      AsyncStorage.getItem('hasSubscription').then((value) => {
        if (value == null) {
          AsyncStorage.setItem('hasSubscription', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
          setSubscription(true);
        } else {
          setSubscription(true);
        }
      });
    }
  }, [hasSuscription]);

  return (
      <Tab.Navigator initialRouteName={
        routenames.HOME
      }>
        {
          screens.map((screen,index) => (
            <Tab.Screen name={screen.routename} key={index}  component={screen.component} options={{
              tabBarIcon: ({focused, color, size}) => (
                <Icon name={screen.icon} style={{fontSize: size, color: color}} />
              ),
              tabBarLabel: screen.label,
            }}/>
          ))
        }        
      </Tab.Navigator>
   );
};

export default HomeNavigator;
