import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { View, Text } from 'react-native';
import validate from '../../../helpers/validate';
import asyncValidate from '../../../helpers/asyncValidate';
import { LOGIN_FORM } from '../../../constants/formNames';
import RemoteSubmitButton from './SubmitButton';
//Normalize = "Auto correct input"
import normalizePhoneNumber from '../../../helpers/normalize';
import {renderField} from "./FieldBuilder"

const normalizeUpper = value => value && value.toUpperCase();
const normalizeLower = value => value && value.toLowerCase();



/**
 * fonction s'occupant de l'envoi des données du formulaire vers le serveur distant
 * @param {*} values 
 */
const submit = values => {
    alert(`Validation success. Values = ~${JSON.stringify(values)}`);    
}

/**
 * Composant contenant les elements du formulaire
 * @param {*} props 
 */
const ContactComponent = props => {
    const { submitting } = props;
    console.log(`submitting = ${submitting}`);
    return (
        <View style={{ flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start', }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Redux-form example</Text>
            <Text>username: must be hoang, hoangnd, or ndhoang</Text>
            <Text>email: must be sunlight4d@gmail.com</Text>
            <Field name="username" keyboardType="default" label="Username: " placeholder="Enter name(lowercase)" component={renderField}                 
                normalize={normalizeLower}   
            />
            <Field name="fullname" keyboardType="default" label="Fullname: " placeholder="Full name(uppercase)" component={renderField}  
                normalize={normalizeUpper}   
            />
            <Field name="email" keyboardType="email-address" label="Email: " placeholder="Enter email" component={renderField}                 
            />
            <Field name="phoneNumber" keyboardType="numeric" label="Phone(999.999.9999): " placeholder="Your phone number" component={renderField}  
                normalize={normalizePhoneNumber}         
            />
            <Field name="age" keyboardType="numeric" label="Age: " placeholder="Enter age" component={renderField}                 
            />
            <RemoteSubmitButton />                      
        </View>
    );
}

/**
 * construction du formulaire avec redux-form
 */
const ContactForm = reduxForm({
    form: LOGIN_FORM, // a unique identifier for this form        
    validate,
    asyncValidate,
    asyncBlurFields: ['username'],
    onSubmit: submit
})(ContactComponent);

export default ContactForm;
