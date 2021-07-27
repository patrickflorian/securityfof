import React from 'react';
import { View } from 'react-native';
import {
  useTheme,
} from 'react-native-paper';
import { Field } from 'redux-form';
import { renderField } from '@components/widgets/FormBuilder/FieldBuilder';
import SubmitButton from '@components/widgets/FormBuilder/SubmitButton';

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
const DocumentIdentificationComponent = (props) => {
  //const {submitting} = props;

  const theme = useTheme();

  return (
    <View
      style={{
        //flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop:35,
      }}>
      <Field
        name={'dateProjet'}
        type="date"
        keyboardType="default"
        label={'Date d\'enregistrement'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        //validate={[required, maxLength15]}
      />
      <Field
        name={'lieu'}
        type="text"
        keyboardType="default"
        label={'Lieu'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        //validate={[required]}
      />
      <Field
        name={'project'}
        type="text"
        keyboardType="default"
        label={'Projet'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
        //validate={[required]}
      />
       <Field
        name={'image'}
        type="camera"
        component={renderField}
<<<<<<< HEAD
        //normalize={normalizeLower}
=======
>>>>>>> master
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
          justifyContent: "center"
        }}
<<<<<<< HEAD
      />{/* 
      <Field
        name={'nbreIntervenant'}
        type="number"
        keyboardType="numeric"
        label={'Nombre d\'intervenants'}
        component={renderField}
        //normalize={normalizeLower}
        style={{
          width: '100%',
          backgroundColor: theme.colors.surface,
        }}
      /> */}
=======
      />
        <SubmitButton
        type="primary"
        filled
        onPress={()=>{props.handleSubmit();}}
        >{"Enregistrer"}</SubmitButton>
>>>>>>> master
    </View>
  );
};

export default DocumentIdentificationComponent;