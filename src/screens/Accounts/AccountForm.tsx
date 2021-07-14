import React, { useState } from 'react';
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
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Trans, useTranslation} from 'react-i18next';
import {ACCOUNT_FORM, LOGIN_FORM} from '../../constants/formNames';
import SubmitButton from '../../components/widgets/Button/Button';
import {renderField} from '../../components/widgets/FormBuilder/FieldBuilder';
import routenames from '../../routes';
import { FormStepContainer } from '@components/stepper/StepContainer';
import { FormStep, StepComponentProps } from '@components/stepper/Step';

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
const FormComponent = (props: StepComponentProps) => {
  const {t, i18n} = useTranslation();
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
      {/* <SubmitButton
        type="primary"
        filled
        onPress={props.handleSubmit}
        disabled={submitting}>
        {'Creer '}
        <Icon name="briefcase-plus-outline" size={15} />
      </SubmitButton> */}
    </View>
  );
};

const AccountFormComponent = reduxForm({
  form: ACCOUNT_FORM,
  //validate,
  //onSubmit:onSubmit,
})(FormComponent);

export const AccountFormScreen = (props: any) => {
  const navigation = useNavigation();
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const [currentStep, setCurrentStep] = useState<number>(1);
  const onSubmit = (values: any) => {
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
  return <React.Fragment>
    <FormStepContainer 
    name="form-docs" 
    currentStep={currentStep} 
    initialValues={{date:''}}
    onSubmit={(values, helpers)=>{
      console.log('submitted');
      return new Promise((resolve)=>{})
    }}
    setStep={setCurrentStep}
    >
      <FormStep 
        name="date" 
        title="Date"
        validationSchema={Yup.object().shape({
          date: Yup.string()
        })}
        Component={(props)=><FormComponent {...props} />}
      >
      </FormStep>
    </FormStepContainer>
  

  </React.Fragment>;
};

export default AccountFormScreen;
