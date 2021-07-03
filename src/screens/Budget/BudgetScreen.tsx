import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Button, Text } from 'react-native-paper';

import routenames from '../../routes'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const BudgetScreen = ({navigation}) => {
    //console.log(theme)
    return (
      <View style={styles.container}>
        <Text>Budget Screen</Text>
        <Button onPress={()=>{navigation.navigate(routenames.ACCOUNT_HOME,{screen  : routenames.ACCOUNT_FORM})}}>Formulaire</Button>
      </View>
    );
  };

  BudgetScreen.navigationOptions = {
  headerTitle : 'Budgets'
};
export default BudgetScreen;