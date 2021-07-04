import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
import DrawerContent from '@components/layouts/drawercontent/DrawerContent';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import SuscriptionScreen from '@screens/SuscriptionScreen/SuscriptionScreen';
import AsyncStorage from '@react-native-community/async-storage';
import OutcomeScreen from '@screens/Outcome/OutcomeScreen';

const Drawer = createDrawerNavigator();

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
  const [hasSuscription, setSubscription] = useState(null);
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
    <Drawer.Navigator
      initialRouteName={
        routenames.HOME
      }
      drawerContent={(props) => <DrawerContent {...props} />}
      >
      {screens.map((screen,index) => (
        <Drawer.Screen
          key={index}
          name={screen.routename}
          component={screen.component}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name={screen.icon} style={{fontSize: size, color: color}} />
            ),
            drawerLabel: screen.label,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
