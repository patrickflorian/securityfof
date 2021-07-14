import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Avatar, useTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';
/**
 * importer les vues quiseront gerees par ce navigateur a savoir
 * !LoaderScreen, SignUpScreen , SignInScreen
 */
import {
  HistorTab,
  HomeTab,
  StatsTab,
  TransfertTab,
} from '@screens/Accounts/SingleAccount/tabs';
/**
 * importer l'espace de nom  des routes
 */
 import routenames from '@routes/index'
import CustomTab from '@components/layouts/CustomTabBar/CustonTabBar';

const Tab = createMaterialTopTabNavigator();
const AccountTabNavigator = (props:any) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    icon: {
      marginTop: 20,
      borderRadius: 0,
      padding: 0,
      backgroundColor : 'transparent'
    },
  });
  return (
    <Tab.Navigator
      tabBar={(props: any) => <CustomTab {...props} />}
      initialRouteName={routenames.SIGN_IN}>
      <Tab.Screen
        name={routenames.SINGLE_ACCOUNT_HOME}
        component={HomeTab}
        options={{
          title: (
            <Avatar.Icon
              icon="home"
              style={styles.icon}
              color={theme.colors.text}
              size={50}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routenames.SINGLE_ACCOUNT_HISTORY}
        component={HistorTab}
        options={{
          title: (
            <Avatar.Icon
              icon="history"
              style={styles.icon}
              color={theme.colors.text}
              size={50}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routenames.SINGLE_ACCOUNT_TRANSFERT}
        component={TransfertTab}
        options={{
          title: (
            <Avatar.Icon
              icon="sync"
              style={styles.icon}
              color={theme.colors.text}
              size={50}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routenames.SINGLE_ACCOUNT_STATS}
        component={StatsTab}
        options={{
          title: (
            <Avatar.Icon
              icon="chart-bar"
              style={styles.icon}
              color={theme.colors.text}
              size={50}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AccountTabNavigator;
