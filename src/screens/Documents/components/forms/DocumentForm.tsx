import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  TextInput,
  useTheme,
} from 'react-native-paper';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { DOCUMENT_FORM } from '@constants/formNames';
import { renderField } from '@components/widgets/FormBuilder/FieldBuilder';
import FormStepContainer from '@components/stepper/StepContainer';
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
            onPress={() => { }}
          />
        }
      />
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
            onPress={() => { }}
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
            onPress={() => { }}
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
            onPress={() => { }}
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
            onPress={() => { }}
          />
        }
      />
    </View>
  );
};

export const DocumentFormComponent = (props: any) => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { navigation } = props;
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = true//Boolean(text);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e: any) => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => { } },
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, hasUnsavedChanges]
  );
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
  return (<React.Fragment>
    <FormStepContainer >
      <FormStep name='time' title='date' Component={(props) => <Text>Bonjour dechet</Text>} />
      <FormStep
        name="date"
        title="Date"
        Component={(props) => <FormComponent {...props} />}
      >
      </FormStep>
    </FormStepContainer>
  </React.Fragment>);
};

export default DocumentFormComponent;
