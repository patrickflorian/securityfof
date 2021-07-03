import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Appbar,
  Button,
  Card,
  ProgressBar,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper';
import CustomTab from '../../components/layouts/CustomTabBar/CustonTabBar';
import AccountFilter from '../../components/widgets/Filters/AccountFilter';

import routenames from '../../routes';
import AccountList from './components/AccountList';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    padding: 8,
  },
  card: {
    width: '100%',
    padding: 8,
    elevation: 4,
    borderStyle: 'solid',
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 5,
  },
  surface: {
    padding: 8,
    height: 'auto',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

const AccountsBalance = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Card style={[styles.card, {borderColor: theme.colors.error}]}>
      <Card.Title
        title="Solde total"
        right={() => (
          <Text
            style={{
              color: theme.colors.secondary,
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            9999$
          </Text>
        )}
      />
      <Card.Content>
        <Text>60% utilisés</Text>
        <ProgressBar progress={0.6} color={theme.colors.error} />
      </Card.Content>
      <Card.Actions style={{justifyContent: 'flex-end'}}>
        <Button
          icon="history"
          color={theme.colors.disabled}
          onPress={() => {
            navigation.push(routenames.ACCOUNT_CATEGORIES);
          }}>
          Categories
        </Button>
        <Button
          icon="plus-box"
          color={theme.colors.disabled}
          onPress={() => {
            navigation.push(routenames.ACCOUNT_FORM);
          }}>
          Ajouter
        </Button>
      </Card.Actions>
    </Card>
  );
};

const AccountScreen = ({navigation}) => {
  //console.log(theme)
  return (
    <>
      <Appbar.Header style={{width: '100%'}}>
        <Appbar.Action
          icon="menu"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Appbar.Content title="Comptes" />
      </Appbar.Header>
      <Surface style={styles.container}>
        <AccountsBalance />

        <AccountList />
      </Surface>
    </>
  );
};

AccountScreen.navigationOptions = {
  headerTitle: 'Comptes',
};
export default AccountScreen;
