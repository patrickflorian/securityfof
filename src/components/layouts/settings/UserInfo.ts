import React from 'react';
import {List, Surface, useTheme} from 'react-native-paper';
import {color} from 'react-native-reanimated';

const UserInfoComponent = () => {
  const theme = useTheme();
  return (
    <List.Section title='Compte Utilisateur'>
      <List.Item
        theme={theme}
        title="Modifier mes informations personnelles"
        left={(props) => <List.Icon {...props} icon="card-account-details-outline" />}
      />
      <List.Item
        theme={theme}
        title="Paramètres de connexion"
        titleStyle={{color: theme.colors.text}}
        left={(props) => <List.Icon {...props} icon="key-outline" />}
      />
      <List.Item
        theme={theme}
        title="Monnaie"
        left={(props) => <List.Icon {...props} icon="cash" />}
      />
      
    </List.Section>
  );
};

export default UserInfoComponent;
