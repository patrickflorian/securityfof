import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Surface } from 'react-native-paper';
import routenames from '../../../../routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const StatsTab = ({navigation}) => {
  return (
    <Surface style={styles.container}>
      <Text>page d'enregistrement</Text>
    </Surface>
  );
};

export default StatsTab;
