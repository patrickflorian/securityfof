import React, { useState } from 'react';
import { Alert, Platform, View } from 'react-native';
import { reduxForm, SubmissionError } from 'redux-form';
import { DOCUMENT_FORM } from '@constants/formNames';
import DocumentIdentificationComponent from './steps/DocumentIdentification';
import * as documentsApi from '@routes/api/Documents';
import { ActivityIndicator } from 'react-native-paper';
import routenames from '@routes/index';
import AsyncStorage from '@react-native-community/async-storage';

const DocumentFormComponent = reduxForm({
  form: DOCUMENT_FORM,
  //validate,
  //onSubmit:onSubmit,
})(DocumentIdentificationComponent);

const DocumentForm = (props: any) => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const [loading, setLoading] = useState(false);
  let hasUnsavedChanges = true//Boolean(text);
  const { route, navigation } = props;
  const { type } = route.params;
  const [user, setUser] = useState({});
  let mounted = true;

  React.useEffect(
    () => {
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
      });
      if (mounted) {
        AsyncStorage.getItem('user').then(value => {
          if (value) {
            setUser(JSON.parse(value));
          }
        });
        mounted = false;
      }
      return () => {
        hasUnsavedChanges = false
      }
    },
    []
  );

  const createFormData = (formValues: any = {}) => {
    
    const { file,  ...rest } = formValues
    const data = new FormData();
    if(file) data.append('file', {
      name: file.replace(/^.*[\\\/]/, ''),
      type: 'image/jpeg',
      uri: Platform.OS === 'ios' ? file.replace('file://', '') : file,
    });

    Object.keys(rest).forEach((key) => {
      data.append(key, rest[key]);
    });
    return data;
  };

  const onSubmit = (values: any) => {
    setLoading(true)
    return documentsApi.add(createFormData({ ...values, type: type, title: values.lieu, dateAjout: values.dateAjout.toLocaleDateString(), userId: user.id })).then((res) => {
      hasUnsavedChanges = false;
      setLoading(false)
      console.log(res.status);
      if (!res.ok || res.status !== 200) {
        console.log(res.status);
      } else {
        res?.json().then((json) => {
          navigation.navigate(routenames.DOCUMENT_HOME);
        }).catch(e => { console.log(e) })
      }
    }).catch(e => { console.log(e) })
  };
  return (<View style={{ width: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
    {loading && <ActivityIndicator animating />}
    <DocumentFormComponent onSubmit={(values: any) => onSubmit(values)} />
  </View>);
};

export default DocumentForm;
