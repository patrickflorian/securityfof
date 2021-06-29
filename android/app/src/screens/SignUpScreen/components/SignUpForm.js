import React, {useState} from 'react';
import {
  Alert,
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Caption, Headline, Surface, useTheme} from 'react-native-paper';
import {Field, reduxForm} from 'redux-form/immutable';
import {renderField} from '../../../components/widgets/FormBuilder/FieldBuilder';
import SubmitButton from '../../../components/widgets/Button/Button';
import {PASSWORD_RESET_FORM} from '../../../constants/formNames';
import {normalizeLower} from '../../../helpers/normalize';
import validate from '../../../helpers/validate';
import {formValues, SubmissionError} from 'redux-form';
import routenames from '../../../routes';
import {Trans, useTranslation} from 'react-i18next';
import AccountTypeList from './AccountTypeList';
import {types} from '../../../constants/accountTypes';
import PersonalFormFields from './PersonalFormFields';
import EntrepriseFormFields from './EntrepriseFormFields';
import BankFormFields from './BankFormFields';
import ProviderFormFields from './ProviderFormFields';
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

const SignUpFormComponent = (props) => {
  const {submitting} = props;
  const navigation = useNavigation();
  const theme = useTheme();
  const {t, i181n} = useTranslation();
  const [type, setType] = useState(null);
  return (
    <Surface
      style={{
        flex: 1,
        flexDirection: 'column',
        margin: 40,
        justifyContent: 'center',
        alignSelf: 'stretch',
      }}>
      <ScrollView
        style={{flex: 1, alignSelf: 'stretch'}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Headline style={{marginVertical: 20, alignSelf: 'center'}}>
          {t('forms.registrationForm.sign_up')}
        </Headline>
        {type ? (
          type === types.personal ? (
            <PersonalFormFields />
          ) : type === types.entreprise ? (
            <EntrepriseFormFields />
          ) : type === types.bank ? (
            <BankFormFields />
          ) : type === types.provider ? (
            <ProviderFormFields />
          ) : (
            ''
          )
        ) : (
          <AccountTypeList onChoose={setType} />
        )}
        {type && (
          <SubmitButton
            type="primary"
            filled
            onPress={props.handleSubmit}
            disabled={submitting}>
            {t('forms.registrationForm.create_one_account_btn_text')}
          </SubmitButton>
        )}
        <Text
          style={{marginTop: 20, color: 'blue'}}
          onPress={() => navigation.navigate(routenames.SIGN_IN)}>
          {t('forms.registrationForm.already_have_account')}
        </Text>
      </ScrollView>
    </Surface>
  );
};

export const SignUpForm = reduxForm({
  form: PASSWORD_RESET_FORM,
  //validate,
  //onSubmit: submit,
})(SignUpFormComponent);
