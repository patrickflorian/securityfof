import React, { useState } from 'react';
import { View } from 'react-native';
import { reduxForm, SubmissionError } from 'redux-form';
import { DOCUMENT_FORM } from '@constants/formNames';
import DocumentIdentificationComponent from './steps/DocumentIdentification';
import * as documentsApi from '@routes/api/Documents';
import { ActivityIndicator } from 'react-native-paper';

const DocumentFormComponent = reduxForm({
  form: DOCUMENT_FORM,
  //validate,
  //onSubmit:onSubmit,
})(DocumentIdentificationComponent);

const DocumentForm = (props: any) => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const [loading, setLoading] = useState(false);
  const hasUnsavedChanges = true//Boolean(text);
  const { route, navigation } = props;
  const { type } = route.params;
  /* React.useEffect(
    () =>{
      // navigation.addListener('beforeRemove', (e: any) => {
      //   if (!hasUnsavedChanges) {
      //     // If we don't have unsaved changes, then we don't need to do anything
      //     return;
      //   }

      //   // Prevent default behavior of leaving the screen
      //   e.preventDefault();

      //   // Prompt the user before leaving the screen
      //   Alert.alert(
      //     'Discard changes?',
      //     'You have unsaved changes. Are you sure to discard them and leave the screen?',
      //     [
      //       { text: "Don't leave", style: 'cancel', onPress: () => { } },
      //       {
      //         text: 'Discard',
      //         style: 'destructive',
      //         // If the user confirmed, then we dispatch the action we blocked earlier
      //         // This will continue the action that had triggered the removal of the screen
      //         onPress: () => navigation.dispatch(e.data.action),
      //       },
      //     ]
      //   );
      // }
    },
    [ hasUnsavedChanges]
  ); */

  const onSubmit = (values: any) => {
    setLoading(true)
    return documentsApi.add({ ...values, type: type, title: values.lieu }).then((res) => {
      setLoading(false)
      if (res.status != 200) {
        throw new SubmissionError({
          projet: 'User does not exist',
          _error: 'Login failed!',
        });

        return null;
      } else {
        return res;
      }
    }).then(res => {
      res?.json().then(json => {
        navigation.navigate(routenames.DOCUMENT_HOME)
      }).catch(e => { console.log(e) })
    }).catch(e => { console.log(e) })
  };
  return (<View style={{ width: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
    {loading && <ActivityIndicator animating />}
    <DocumentFormComponent onSubmit={(values: any) => onSubmit(values)} />
  </View>);
};

export default DocumentForm;
