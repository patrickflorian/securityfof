import React from 'react';
import {Alert, Text, View} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  Headline,
  Surface,
  TextInput,
  Title,
  useTheme,
} from 'react-native-paper';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Trans, useTranslation} from 'react-i18next';
import {ACCOUNT_FORM, LOGIN_FORM} from '../../constants/formNames';
import SubmitButton from '../../components/widgets/Button/Button';
import {renderField} from '../../components/widgets/FormBuilder/FieldBuilder';
import routenames from '../../routes';
/**
 *
 * @param {*} value
 */
const required = (value) =>
  value || typeof value === 'number' ? undefined : 'Required';
/**
 *
 * @param {*} max
 */
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

/**
 *
 * @param {*} props
 */
const FormComponent = (props) => {
  const {t, i18n} = useTranslation();
  const {submitting} = props;
  const navigation = useNavigation();

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
        margin: 40,
        justifyContent: 'center',
      }}>
      {/*<Headline style={{marginVertical: 20, alignSelf: 'center'}}>
        <Trans>login</Trans>Nouveau Compte
      </Headline> */}
      <Field
        //autoFocus
        name={'libelle'}
        type="text"
        keyboardType="default"
        label={'libelle'}
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
        right={
          <TextInput.Icon
            name="alpha-l-box-outline"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        }
      />
      <Field
        //autoFocus
        name={'account_type'}
        type="select"
        items={accounts_categories}
        keyboardType="default"
        label={'Type de compte'}
        right={() => <Icon name="account" size={60} />}
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
        //autoFocus
        name={'account_number'}
        type="text"
        keyboardType="default"
        label={'Numero de compte'}
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
        right={
          <TextInput.Icon
            name="numeric"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        }
      />
      <Field
        name="account_solde"
        keyboardType="number"
        label={'Solde'}
        component={renderField}
        keyboardType={'number-pad'}
        passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required]}
        right={
          <TextInput.Icon
            name="alpha-s-circle-outline"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        }
      />
      <Field
        //autoFocus
        name={'account_seuil'}
        type="text"
        keyboardType={'number-pad'}
        label={'Seuil'}
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
        right={
          <TextInput.Icon
            name="lock-outline"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        }
      />
      <SubmitButton
        type="primary"
        filled
        onPress={props.handleSubmit}
        disabled={submitting}>
        {'Creer '}
        <Icon name="briefcase-plus-outline" size={15} />
      </SubmitButton>
    </View>
  );
};

const AccountFormComponent = reduxForm({
  form: ACCOUNT_FORM,
  //validate,
  //onSubmit:onSubmit,
})(FormComponent);

export const AccountFormScreen = (props) => {
  const navigation = useNavigation();
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit = (values) => {
    return sleep(2000).then(() => {
      // simulate server latency
      if (!values.username) {
        throw new SubmissionError({
          username: 'User does not exist',
          _error: 'Login failed!',
        });
      } else if (!values.password) {
        throw new SubmissionError({
          password: 'Wrong password',
          _error: 'Login failed!',
        });
      } else {
        //Alert.alert(`You submitted:${JSON.stringify(values)}`);
        // navigation.navigate(routenames.DRAWER);
      }
    });
  };
  return <AccountFormComponent onSubmit={onSubmit} />;
};

export default AccountFormScreen;
