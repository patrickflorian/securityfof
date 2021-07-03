import React from 'react';
import {Alert, View, Text, SafeAreaView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Caption, Surface, TextInput, useTheme} from 'react-native-paper';
import {Field, reduxForm} from 'redux-form/immutable';
import {renderField} from '../../../components/widgets/FormBuilder/FieldBuilder';
import SubmitButton from '../../../components/widgets/Button/Button';
import {PASSWORD_RESET_FORM} from '../../../constants/formNames';
import {normalizeLower} from '../../../helpers/normalize';
import validate from '../../../helpers/validate';
import {formValues, SubmissionError} from 'redux-form';
import routenames from '../../../routes';
import {useTranslation} from 'react-i18next';
const required = (value: any) =>
  value || typeof value === 'number' ? undefined : 'Required';
const maxLength = (max: any) => (value: any) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

const PasswordResetFormComponent = (props: any) => {
  const {submitting} = props;
  const navigation = useNavigation();
  const theme = useTheme();
  const {t} = useTranslation();
  return (
    <Surface
      style={{
        flex: 1,
        flexDirection: 'column',
        margin: 40,
        justifyContent: 'center',
      }}>
      <Caption style={{margin: 0}}>{t('forms.resetPasswordForm.password_forgot_header')}</Caption>
      <Field
        autoFocus
        name="email"
        type="text"
        keyboardType="default"
        placeholder={t('forms.resetPasswordForm.password_forgot_field_label')}
        component={renderField}
        normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
          paddingRight:0
        }} 
        validate={[required, maxLength15]}
        
        right={<TextInput.Icon name="email-outline" color={theme.colors.disabled} onPress={() => {}} />}
      />

      <SubmitButton
        type="primary"
        filled
        onPress={props.handleSubmit}
        disabled={submitting}>
        {t('forms.resetPasswordForm.password_forgot_btn_txt')}
      </SubmitButton>
      <Text
        style={{marginTop: 20, color: 'blue'}}
        onPress={() => navigation.navigate(routenames.SIGN_IN)}>
        {t('forms.registrationForm.already_have_account')}
      </Text>
    </Surface>
  );
};

export const PasswordResetForm = reduxForm({
  form: PASSWORD_RESET_FORM,
  //validate,
  //onSubmit: submit,
})(PasswordResetFormComponent);
