import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
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
import { Paragraph, List, Avatar } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import AppbarComponent from '@components/layouts/AppbarComponent/AppbarComponent';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: 2,
  },
  card: {
    width: "40%",
    height: 200,
    marginVertical: 5,
  },
  cardCover: {
    height: 100
  },
});

const AccountsBalance = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Card style={[styles.card, { borderColor: theme.colors.error }]}>
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
      <Card.Actions style={{ justifyContent: 'flex-end' }}>
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

const AccountScreen = (props: any) => {
  const { navigation } = props;
  return (
    <>
      
      <AppbarComponent/> 
      <ScrollView >
        <View style={styles.container}>

          <Animated.View style={styles.container}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (<Card style={styles.card} key={item}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cardCover} />
                <Card.Content>
                  <Paragraph>Documents de securité</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button icon='play' labelStyle={{ textTransform: 'none' }} >Lire</Button>
                </Card.Actions>
              </Card>))
            }
          </Animated.View>
        </View>
      </ScrollView>
    </>
  );
};

AccountScreen.navigationOptions = {
  headerTitle: 'Comptes',
};
export default AccountScreen;
