import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Field} from 'redux-form/immutable';
import {renderField} from '@components/widgets/FormBuilder/FieldBuilder';
import {normalizeLower} from '@helpers/normalize';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
const maxLength = (max: any) => (value: any) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

const BankFormFields = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  return (
    <View>
      <Field
        name={'entrepriseName'}
        type="text"
        keyboardType="default"
        label={t('forms.registrationForm.entreprise_name')}
        placeholder=""
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
      />
      <Field
        name={'email'}
        type="text"
        keyboardType="default"
        label={t('forms.registrationForm.email')}
        placeholder=""
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
      />
      <Field
        name={'website'}
        type="text"
        keyboardType="default"
        label={t('forms.registrationForm.web_site')}
        placeholder=""
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
      />
      <Field
        name={'activity'}
        type="text"
        keyboardType="default"
        label={t('forms.registrationForm.activity')}
        placeholder=""
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
      />
      <Field
        name={'immatriculation'}
        type="text"
        keyboardType="default"
        label={t('forms.registrationForm.immatriculation')}
        placeholder=""
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
      />
      <Field
        name="password"
        type="password"
        keyboardType="default"
        label={t('forms.registrationForm.password')}
        secureTextEntry
        component={renderField}
        passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required]}
      />
      <Field
        name="confirmPassword"
        type="password"
        keyboardType="default"
        label={t('forms.registrationForm.confirm_password')}
        secureTextEntry
        component={renderField}
        passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required]}
      />
    </View>
  );
};

export default BankFormFields;
