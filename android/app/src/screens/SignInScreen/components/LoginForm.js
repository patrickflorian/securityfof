import React from 'react';
import {Alert, Text} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Headline, Surface, TextInput, useTheme} from 'react-native-paper';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {renderField} from '../../../components/widgets/FormBuilder/FieldBuilder';
import SubmitButton from '../../../components/widgets/Button/Button';
import {LOGIN_FORM} from '../../../constants/formNames';
import {normalizeLower} from '../../../helpers/normalize';
import { useTranslation} from 'react-i18next';
import routenames from '../../../routes';
import AsyncStorage from '@react-native-community/async-storage';
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

  

  return (
    <Surface
      style={{
        //flex: 1,
        flexDirection: 'column',
        margin: 20,
        justifyContent: 'center',
      }}>
     {/*  <Headline style={{marginVertical: 20, alignSelf: 'center'}}>
        Connexion
      </Headline> */}
      <Field
        //autoFocus
        name={'username'}
        type="text"
        keyboardType="default"
        placeholder={'email'}
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required, maxLength15]}
        right={
          <TextInput.Icon
            name="email-outline"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        }
      />
      <Field
        name="password"
        type="password"
        keyboardType="default"
        placeholder={'mot de passe'}
        secureTextEntry
        component={renderField}
        passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required]}
        right={
          <TextInput.Icon
            name="key-outline"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        }
      />
      <Text
        style={{
          color: theme.colors.secondary,
          marginVertical: 10,
          alignSelf: 'flex-end',
        }}
        onPress={() => navigation.navigate(routenames.PASSWORD_RESET)}>
        {'mot de passe oublie?'}
      </Text>
      <SubmitButton
        type="primary"
        filled
        onPress={props.handleSubmit}
        disabled={submitting}>
        {"se connecter"}
      </SubmitButton>
     {/*  <Text style={{marginTop: 20}}>
        {t('forms.loginForm.dont_have_account')}
        <Text
          style={{alignSelf: 'center', color: 'blue'}}
          onPress={() => navigation.navigate(routenames.SIGN_UP)}>
          {t('forms.loginForm.create_one_account')}
        </Text>
      </Text> */}
    </Surface>
  );
};
const LoginFormComponent = reduxForm({
  form: LOGIN_FORM,
  //validate,
  //onSubmit:onSubmit,
})(FormComponent);


export const LoginForm = (props)=>{
  const navigation = useNavigation()
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
          AsyncStorage.setItem('user',JSON.stringify(values));
          navigation.navigate(routenames.DRAWER);
        }
      });
    };
    return <LoginFormComponent onSubmit={onSubmit}/>

}