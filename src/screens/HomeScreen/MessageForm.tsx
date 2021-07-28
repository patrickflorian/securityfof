import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ActivityIndicator, Headline, Surface, TextInput, useTheme} from 'react-native-paper';
import {Field, reduxForm} from 'redux-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {renderField} from '@components/widgets/FormBuilder/FieldBuilder';
import SubmitButton from '@components/widgets/Button/Button';
import {MESSAGE_FORM} from '@constants/formNames';
import {normalizeLower} from '@helpers/normalize';
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
const minLength = (min: any) => (value: any) =>
  value && value.length < min ? `Must be ${min} characters or less` : undefined;
const minLength15 = minLength(40);


/**
 *
 * @param {*} props
 */
const FormComponent = (props: any) => {
  const {submitting} = props;
  const navigation = useNavigation();

  const theme : any= useTheme();

    const route = useRoute();
  const { message } = route.params;
  return (
    <Surface
      style={{
        //flex: 1,
        flexDirection: 'column',
        margin: 20,
        justifyContent: 'center',
      }}>
      <Field
        //autoFocus
        name={'Message'}
        type="text"
        keyboardType="default"
        placeholder={'entrer le message'}
        right={() => <Icon name="account" size={60} />}
        component={renderField}
        normalize={normalizeLower}
        style={{
          width: '100%',
          maxHeight: 300
        }}
        validate={[required, minLength15]}
        multiline= {true}
        numberOfLines={10}
        defaultValue= {message}
      />
    
      <SubmitButton
        type="primary"
        filled
        onPress={()=>{console.log(props.submitting); props.handleSubmit();}}
        disabled={submitting}>
        {"Sauvegarder"}
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
const MessageFormComponent = reduxForm({
  form: MESSAGE_FORM,
  //validate,
  //onSubmit:onSubmit,
})(FormComponent);


export const MessageForm = (props: any)=>{
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false);
  const onSubmit = (values: any) => {
    setLoading(true);
      /* return Auth0.login(values.email, values.password).then((res) => {
        setLoading(false)
        // simulate server latency
        if(res.status != 200) {
          console.log(res.status);
          
        } else {
          return res.json().then(json=>{
            //Alert.alert(`You submitted:${JSON.stringify(values)}`);
            AsyncStorage.setItem('user', JSON.stringify(json));
            navigation.navigate(routenames.DRAWER);
  
        }).catch(e=>{console.log(e)});
        }
      }).catch(e=>{console.log(e)}); */
    };
    return <MessageFormComponent onSubmit={onSubmit} submitting={loading}/>

}