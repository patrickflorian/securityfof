import React, { useEffect, useState } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/**
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !HomeScreen, IncomeScreen , OutcomeScreen, AccountScreen
 */
import { AccountNavigator } from '../account';
import { DocumentNavigator } from '../documents';

/**
 * importer l'espace de nom  des routes
 */
import routenames from '@routes/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import AsyncStorage from '@react-native-community/async-storage';
import OutcomeScreen from '@screens/UserAccount/UserAccountScreen';
import Tabbar from '@components/widgets/TabBar/TabBar';
import { useTheme } from 'react-native-paper';
import FormationsScreen from '@screens/Formations/FormationsScreen';
import UserListScreen from '@screens/UserAccount/UserListScreen';
import FormationsNavigator from '../formations/FormationsNavigator';

const Tab = createBottomTabNavigator();

function getHeaderVisibility(route: any): boolean {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? routenames.DOCUMENT;

  switch (routeName) {
    case routenames.DOCUMENT_FORM:
      return false;
    default:
      return true
  }
}

const HomeNavigator = () => {
  const [hasSuscription, setSubscription] = useState<boolean>();
  const theme = useTheme();

  const [user, setUser] = React.useState();

  const screens = [
    {
      routename: routenames.HOME,
      icon: 'home',
      component: HomeScreen,
      label: 'Acceuil',
    },
    {
      routename: routenames.DOCUMENT,
      icon: 'file-pdf-outline',
      component: DocumentNavigator,
      label: 'Documents',
    },
    {
      routename: routenames.FORMATION,
      icon: 'briefcase-variant-outline',
      component: FormationsNavigator,
      label: 'Formations',
    },
    {
      routename: routenames.OUTCOME,
      icon: 'account',
      component: OutcomeScreen,
      label: 'Moi',
    },
  ];
  
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
    AsyncStorage.getItem('user').then(value => {
        if (value) {
            setUser(JSON.parse(value));
        }
    });

  }, [hasSuscription]);

  return (
    <Tab.Navigator
      initialRouteName={
        routenames.HOME
      }
      tabBarOptions={(props)=>({safeAreaInsets:{bottom: 10}})}
    //tabBar={(props)=><Tabbar {...props}/>}
    >
      { !(user?.is_admin) &&
        screens.map((screen, index) => (
          <Tab.Screen name={screen.routename} key={index} component={screen.component}
            options={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => (
                <Icon name={screen.icon} style={{ fontSize: 30, color: focused ? theme.colors.primary : color }} />
              ),
              tabBarLabel: screen.label,
              tabBarVisible: getHeaderVisibility(route),

            })} />
        ))
      }
      { (user?.is_admin) &&
          <Tab.Screen name={routenames.HOME}  component={HomeScreen}
            options={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => (
                <Icon name={'home'} style={{ fontSize: 30, color: focused ? theme.colors.primary : color }} />
              ),
              tabBarLabel: 'Accueil',
              tabBarVisible: getHeaderVisibility(route),

            })} />
      }
      { !(user?.is_admin) &&(user?.is_manager) &&
          <Tab.Screen name={routenames.ACCOUNT}  component={AccountNavigator}
            options={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => (
                <Icon name={'account-multiple-plus-outline'} style={{ fontSize: 30, color: focused ? theme.colors.primary : color }} />
              ),
              tabBarLabel: 'Agents',
              tabBarVisible: getHeaderVisibility(route),

            })} />
      }
    </Tab.Navigator>
  );
};

export default HomeNavigator;
