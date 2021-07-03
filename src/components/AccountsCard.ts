import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card, ProgressBar, useTheme} from 'react-native-paper';

const AccountsBalance = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    card: {
      width: '100%',
      padding: 8,
      elevation: 4,
      borderStyle: 'solid',
      borderRadius: 12,
      borderWidth: 1,
    },
    right: {
      color: theme.colors.primary,
      fontSize: 22,
      fontWeight: 'bold',
    },
  });
  return (
    <Card style={[styles.card, {borderColor: theme.colors.error}]}>
      <Card.Title
        title="Balance totale"
        right={() => <Text style={styles.right}>9999$</Text>}
      />
      <Card.Content>
        <Text>60% utilisés</Text>
        <ProgressBar progress={0.6} color={theme.colors.error} />
      </Card.Content>
    </Card>
  );
};

export default AccountsBalance;
