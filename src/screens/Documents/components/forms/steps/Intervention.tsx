import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Divider,
  List,
  Switch,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { renderField } from '@components/widgets/FormBuilder/FieldBuilder';
import { StepComponentProps } from '@components/stepper/Step';
import DateInput from '@components/widgets/DateInput/DateInput';
import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
  listItem :{marginBottom: 10}
})

/**
 *
 * @param {*} props
 */
const InterventionComponent = (props: StepComponentProps) => {
  const { t, i18n } = useTranslation();
  //const {submitting} = props;

  const theme = useTheme();

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'column',
        marginTop: 35,
      }}>
      <List.Item
        title="Présence des personnes formées au secourisme"
        style={styles.listItem}
        right={props => <Switch /* value={theme.dark} pointerEvents="none" color={theme.colors.primary} onValueChange={(value) => toggleTheme()} */ />}
        />
      <Divider/>
      <List.Item
        title="Présence de véhicule"
        style={styles.listItem}
        right={props => <Switch /* value={theme.dark} pointerEvents="none" color={theme.colors.primary} onValueChange={(value) => toggleTheme()} */ />}
      />
      <Divider/>
      <List.Item
        title="Présence de la boîte à pharmacie"
        style={styles.listItem}
        right={props => <Switch /* value={theme.dark} pointerEvents="none" color={theme.colors.primary} onValueChange={(value) => toggleTheme()} */ />}
      />
      <Divider/>
      <List.Item
        title="Présence du point de rassemblement"
        style={styles.listItem}
        right={props => <Switch pointerEvents="none" /* value={theme.dark} color={theme.colors.primary} onValueChange={(value) => toggleTheme()} */ />}
      />
      <Divider/>
      <List.Item
        title="Présence d'extincteurs"
        style={styles.listItem}
        right={props => <Switch pointerEvents="none" /* value={theme.dark} color={theme.colors.primary} onValueChange={(value) => toggleTheme()} */ />}
      />
      <Divider/>
    </View>
  );
};

export default InterventionComponent;