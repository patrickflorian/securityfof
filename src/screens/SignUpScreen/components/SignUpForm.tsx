import React, {useState} from 'react';
import {
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Headline, Surface, useTheme} from 'react-native-paper';
import {Field, reduxForm} from 'redux-form/immutable';
import {renderField} from '@components/widgets/FormBuilder/FieldBuilder';
import SubmitButton from '@components/widgets/Button/Button';
import {SIGN_UP_FORM} from '@constants/formNames';
import {normalizeLower} from '@helpers/normalize';

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

const SignUpFormComponent = (props: any) => {
  const {submitting} = props;
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Surface
      style={{
        flex: 1,
        flexDirection: 'column',
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
          {'creer un agent'}
        </Headline>
        <Field
        name={'email'}
        type="text"
        keyboardType="default"
        label={"Email"}
        placeholder=""
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required,]}
      />
      <Field
        name="password"
        type="password"
        keyboardType="default"
        label={'mot de passe'}
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
        name="firstname"
        type="text"
        keyboardType="default"
        label={'Noms'}
        component={renderField}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required]}
      />
         <Field
        name="lastname"
        type="text"
        keyboardType="default"
        label={'Prenoms'}
        component={renderField}
        passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required]}
      />
      <Field
        name="profession"
        type="text"
        keyboardType="default"
        label={'Profession'}
        component={renderField}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        validate={[required]}
      />
          <SubmitButton
            type="primary"
            filled
            onPress={props.handleSubmit}
            disabled={submitting}>
            {'creer un agent'}
          </SubmitButton>
      
      </ScrollView>
    </Surface>
  );
};

export const SignUpForm = reduxForm({
  form: SIGN_UP_FORM,
  //validate,
  //onSubmit: submit,
})(SignUpFormComponent);
