import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  TextInput,
  useTheme,
} from 'react-native-paper';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import {SUSCRIPTION_FORM} from '@constants/formNames';
import SubmitButton from '@components/widgets/Button/Button';
import {renderField} from '@components/widgets/FormBuilder/FieldBuilder';
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

/**
 *
 * @param {*} props
 */
const FormComponent = (props: any) => {
  const {submitting} = props;

  const theme = useTheme();
  return (
    <View
      style={{
        //flex: 1,
        flexDirection: 'column',
        margin: 20,
        alignItems:'stretch',
        justifyContent: 'center',
        alignSelf:'stretch',
        
      }}>
      {/*<Headline style={{marginVertical: 20, alignSelf: 'center'}}>
        <Trans>login</Trans>Nouveau Compte
      </Headline> */}
      <Field
        //autoFocus
        name={'firstname'}
        type="text"
        keyboardType="default"
        label={'Noms'}
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: 'transparent',
        }}
        //validate={[required, maxLength15]}
        /* right={
          <TextInput.Icon
            name="alpha-l-box-outline"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        } */
      />
      <Field
        //autoFocus
        name={'lastname'}
        type="text"
        keyboardType="default"
        label={'Prenoms'}
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: 'transparent',
        }}
        //validate={[required, maxLength15]}
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
        name={'email'}
        type="text"
        keyboardType="default"
        label={'Email'}
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: 'transparent',
        }}
        //validate={[required, maxLength15]}
        /* right={
          <TextInput.Icon
            name="numeric"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        } */
      />
      <Field
        //autoFocus
        name={'tel'}
        type="text"
        keyboardType="default"
        label={'Numero de telephone'}
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: 'transparent',
        }}
        //validate={[required, maxLength15]}
        /* right={
          <TextInput.Icon
            name="numeric"
            color={theme.colors.disabled}
            onPress={() => {}}
          />
        } */
      />
      <SubmitButton
        type="primary"
        filled
        onPress={props.handleSubmit}
        outlined= {false} borderless= {false}
        full = {false} 
        rounded= {false}
        disabled={submitting}>
        {'Souscrire '}
      </SubmitButton>
    </View>
  );
};
const SuscriptionFormComponent = reduxForm({
  form: SUSCRIPTION_FORM,
  //validate,
  //onSubmit:onSubmit,
})(FormComponent);

export const SuscriptionFormScreen = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit = (values) => {
    return sleep(2000).then(() => {
      // simulate server latency
      if (!values.username) {
        throw new SubmissionError({
          username: 'User does not exist',
          _error: 'Login failed!',
        });
      } else {
        //Alert.alert(`You submitted:${JSON.stringify(values)}`);
        // navigation.navigate(routenames.DRAWER);
      }
    });
  };
  return <SuscriptionFormComponent onSubmit={onSubmit} />;
};

export default SuscriptionFormScreen;
