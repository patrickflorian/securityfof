import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import ProductCard from '../../components/widgets/ProductList/ProductCard';

import routenames from '../../routes'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const IncomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Income Screen</Text>
        <ProductCard />
      </View>
    );
  };
export default IncomeScreen;