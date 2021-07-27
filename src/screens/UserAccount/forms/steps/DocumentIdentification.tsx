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
const DocumentIdentificationComponent = (props: StepComponentProps) => {
  const { t, i18n } = useTranslation();
  //const {submitting} = props;

  const theme = useTheme();

  const accounts_categories = [
    {
      value: 'Om',
      title: 'Orange Money',
    },
    {
      value: 'Mtn',
      title: 'Mobile Money',
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
        name={'dateProjet'}
        type="date"
        keyboardType="default"
        label={'Date d\'enregistrement'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        //validate={[required, maxLength15]}
      />
      <Field
        name={'lieu'}
        type="text"
        keyboardType="default"
        label={'Lieu'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        //validate={[required]}
      />
      <Field
        name={'project'}
        type="text"
        keyboardType="default"
        label={'Projet'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        //validate={[required]}
      />
       <Field
        name={'image'}
        type="camera"
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
          justifyContent: "center"
        }}
      />{/* 
      <Field
        name={'nbreIntervenant'}
        type="number"
        keyboardType="numeric"
        label={'Nombre d\'intervenants'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
      /> */}
    </View>
  );
};

export default DocumentIdentificationComponent;