import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput, useTheme} from 'react-native-paper';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import {ACCOUNT_CATEGORIES_FORM} from '../../../constants/formNames';
import SubmitButton from '../../../components/widgets/Button/Button';
import {renderField} from '../../../components/widgets/FormBuilder/FieldBuilder';
import routenames from '../../../routes';
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
  const {submitting} = props;

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
const AccountCategoriesFormComponent = reduxForm({
  form: ACCOUNT_CATEGORIES_FORM,
  //validate,
  //onSubmit:onSubmit,
})(FormComponent);

export const AccountCategoriesFormScreen = (props) => {
  const {navigation} = props;
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit = (values) => {
    return sleep(2000).then(() => {
      // simulate server latency
      if (!values.libelle) {
        throw new SubmissionError({
          libelle: 'Entrez un libelle',
          _error: 'Login failed!',
        });
      } else {
        //Alert.alert(`You submitted:${JSON.stringify(values)}`);
        //navigation.navigate(routenames.DRAWER);
      }
    });
  };
  return <AccountCategoriesFormComponent onSubmit={onSubmit} {...props} />;
};

export default AccountCategoriesFormScreen;
