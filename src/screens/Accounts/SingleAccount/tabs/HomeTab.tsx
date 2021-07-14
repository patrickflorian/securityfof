import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import routenames from '@routes/index';
import {Surface, useTheme} from 'react-native-paper';
import CashFlow from './components/CashFlow';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
});
const HomeTab = ({navigation}) => {
  const theme = useTheme()
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {/* <CustomCard title='Entrées' subtitle='99$' icon='arrow-down' color={theme.colors.success} hasActions style={{marginRight:20}}/>
        <CustomCard title='Depenses' subtitle='99$' icon='arrow-up' color={theme.colors.notification} hasActions style={{marginRight:20}}/> */}
      
      </View>
      <View style={{alignSelf:'stretch'}}>
        <CashFlow income={100} outcome={10}/>
      </View>
    </View>
  );
};

export default HomeTab;
