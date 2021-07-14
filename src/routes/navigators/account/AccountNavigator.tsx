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
    screenOptions={{
      header: ({scene, previous, navigation}) => (
        <Header scene={scene} previous={previous} navigation={navigation} />
      ),
    }}
    initialRouteName={routenames.ACCOUNT_HOME}>
    <Stack.Screen
      name={routenames.ACCOUNT_HOME}
      component={AccountScreen}
      options={{headerTitle: "Comptes d'exploitation", headerShown: false}}
    />
    <Stack.Screen
      name={routenames.SINGLE_ACCOUNT}
      component={AccountTabNavigator}
      /* options={{headerTitle: "Comptes d'exploitation", headerShown: true}} */
    />
    <Stack.Screen
      name={routenames.ACCOUNT_FORM}
      component={AccountFormScreen}
      options={{headerTitle: 'Ajouter un compte'}}
    />
    <Stack.Screen
      name={routenames.ACCOUNT_CATEGORIES}
      component={AccountCategoriesScreen}
      options={{
        headerTitle: 'Categories de comptes',
        headerShown: false
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
