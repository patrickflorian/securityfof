import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Surface } from 'react-native-paper';
import AccountFilter from '../../../../components/widgets/Filters/AccountFilter';
import routenames from '../../../../routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const HistoryTab = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AccountFilter/>
    </View>
  );
};

export default HistoryTab;
