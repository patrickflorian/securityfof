import React from 'react';
import {Alert, Text} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {ActivityIndicator, Headline, Surface, TextInput, useTheme} from 'react-native-paper';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {renderField} from '@components/widgets/FormBuilder/FieldBuilder';
import SubmitButton from '@components/widgets/Button/Button';
import {LOGIN_FORM} from '@constants/formNames';
import {normalizeLower} from '@helpers/normalize';
import routenames from '@routes/index';
import * as Auth0 from '@routes/api/Auth0';
import AsyncStorage from '@react-native-community/async-storage';
import { useState } from 'react';
import { View } from 'react-native';
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
const maxLength15 = maxLength(40);


/**
 *
 * @param {*} props
 */
const FormComponent = (props: any) => {
  const {submitting} = props;
  const navigation = useNavigation();

  const theme : any= useTheme();


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
        /* right={
          <TextInput.Icon
            name="email-outline"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        } */
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
        onPress={()=>{console.log(props.submitting); props.handleSubmit();}}
        disabled={submitting}>
        {"se connecter"}
      </SubmitButton>
      
      {submitting && <View style={{position: "absolute", top:0, left: 0, width: "100%", height: "100%"}}><ActivityIndicator animating/></View>}
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


export const LoginForm = (props: any)=>{
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false);
  const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit = (values: any) => {
    setLoading(true);
      return Auth0.login(values.username, values.password).then((res) => {
        setLoading(false)
        // simulate server latency
        if(res.status != 200) {
          throw new SubmissionError({
            username: 'User does not exist',
            _error: 'Login failed!',
          });
          throw new SubmissionError({
            password: 'Wrong password',
            _error: 'Login failed!',
          });
          return  null;
        } else {
          return res.json().then(json=>{
            //Alert.alert(`You submitted:${JSON.stringify(values)}`);
            AsyncStorage.setItem('user', JSON.stringify(json));
            navigation.navigate(routenames.DRAWER);
  
        }).catch(e=>{console.log(e)});
        }
      }).catch(e=>{console.log(e)});
    };
    return <LoginFormComponent onSubmit={onSubmit} submitting={loading}/>

}