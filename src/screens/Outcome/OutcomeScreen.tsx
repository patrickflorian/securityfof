import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import routenames from '../../routes'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const OutcomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Outcome Screen</Text>
      </View>
    );
  };
export default OutcomeScreen;