import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !AccountScreen
 */
import {AccountScreen, AccountFormScreen} from '../../../screens/Accounts';

/**
 * importer l'espace de nom  des routes
 */
import routenames from '@routes/index'
import AccountTabNavigator from './AccountTabNavigator';
import AccountCategoriesScreen from '../../../screens/Accounts/AccountCategories/AccountCategories';
<<<<<<< HEAD
=======
import { SignUpScreen } from '@screens/SignUpScreen';
import UserListScreen from '@screens/UserAccount/UserListScreen';
>>>>>>> master

const Stack = createStackNavigator();

const Header = (props: any) => {
  const {scene, previous, navigation} = props;
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const theme = useTheme();
  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.primary}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color={theme.colors.accent}
        />
      ) : (
        <Appbar.Action
          icon="menu"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      )}
      <Appbar.Content title={previous ? title : "Comptes d'exploitation"} />
    </Appbar.Header>
  );
};

const AccountNavigator = ({}) => (
  <Stack.Navigator
    initialRouteName={routenames.c}>
    <Stack.Screen
      name={routenames.AGENTS}  component={UserListScreen}
      options={{headerShown: false}}
    />
   
   <Stack.Screen name={routenames.SIGN_UP} component={SignUpScreen} options={{headerTitle : 'Inscription'}}/>
  </Stack.Navigator>
);

export default AccountNavigator;
