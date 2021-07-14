import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {
  ProgressBar,
  Colors,
  Surface,
  Title,
  Subheading,
} from 'react-native-paper';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  title: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
  progressContainer: {
    alignSelf: 'stretch',
    marginVertical: 5,
  },
});
const CashFlow = (props) => {
  const {income, outcome, style, ...rest} = props;
  const cashflow = income - outcome;
  const ratio = outcome / income;
  const indicatorColor =
    ratio > 0.75
      ? Colors.red400
      : ratio > 0.5
      ? Colors.orange400
      : Colors.green400;
  return (
    <Surface style={[styles.container, style]} {...rest}>
      <View style={styles.header}>
        <Subheading style={styles.title}>Cash Flow</Subheading>
        <Title style={styles.right}>
          {cashflow > 0 ? '+' + cashflow : cashflow}$
        </Title>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar progress={ratio} color={indicatorColor} />
      </View>
    </Surface>
  );
};

export default CashFlow;
