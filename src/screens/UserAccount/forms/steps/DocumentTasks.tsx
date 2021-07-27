import React, { useState } from 'react';
import { View } from 'react-native';
import {
  TextInput,
  useTheme,
} from 'react-native-paper';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { renderField } from '@components/widgets/FormBuilder/FieldBuilder';
import { StepComponentProps } from '@components/stepper/Step';
import DateInput from '@components/widgets/DateInput/DateInput';

/**
 *
 * @param {*} value
 */
const required = (value: any) =>
  value || typeof value === 'number' ? undefined : 'Required';
/**
 *
 * @param {*} max
 */
const maxLength = (max: number) => (value: any) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

/**
 *
 * @param {*} props
 */
const DocumentTasksComponent = (props: StepComponentProps) => {
  const { t, i18n } = useTranslation();
  //const {submitting} = props;

  const theme = useTheme();

  const risk_natures = [
    {
      value: 'electricity',
      title: 'Electricité',
    },
    {
      value: 'mecanic',
      title: 'Mécanique',
    },
    {
      value: 'environnement',
      title: 'Environnement',
    },
    {
      value: 'traffic',
      title: 'Trafic routier',
    },
    {
      value: 'chute',
      title: 'Chute',
    },
    {
      value: 'chimic',
      title: 'Chimique',
    },
  ];

  const mesure_types = [
    {
      value: 'elimination',
      title: 'Elimination',
    },
    {
      value: 'Exposition',
      title: 'Exposition',
    },
    {
      value: 'protection',
      title: 'Protection',
    },
    
  ];

  return (
    <View
      style={{
        //flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop:35,
      }}>
       <Field
        name={'taskTaf'}
        type="text"
        keyboardType="default"
        label={'TAF'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
      />
      <Field
        name={'danger'}
        type="text"
        keyboardType="default"
        label={'Danger'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        //validate={[required, maxLength15]}
      />
      <Field
        name={'risk'}
        type="text"
        keyboardType="default"
        label={'Risque'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        //validate={[required]}
      />
      <Field
        name={'account_type'}
        type="select"
        items={risk_natures}
        keyboardType="default"
        label={'Nature'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
        /* right={
          <TextInput.Icon
            name="email-outline"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        } */
      />
      <Field
        name={'corrective_mesure'}
        type="text"
        keyboardType="default"
        label={'Mesure corrective'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        //validate={[required]}
      />
      <Field
        name={'mesure_type'}
        type="select"
        items={mesure_types}
        keyboardType="default"
        label={'Type de mesure'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
        /* right={
          <TextInput.Icon
            name="email-outline"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        } */
      />
      <Field
        name={'necessary'}
        type="text"
        keyboardType="default"
        label={'Equipement necessaire'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        //validate={[required]}
      />
    </View>
  );
};

export default DocumentTasksComponent;