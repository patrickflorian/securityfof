import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  TextInput,
  useTheme,
} from 'react-native-paper';
import { SubmissionError } from 'redux-form';
import { DOCUMENT_FORM } from '@constants/formNames';
import FormStepContainer from '@components/stepper/StepContainer';
import { FormStep, StepComponentProps } from '@components/stepper/Step';
import DocumentIdentificationComponent from './steps/DocumentIdentification';
import DocumentTasksComponent from './steps/DocumentTasks';
import InterventionComponent from './steps/Intervention';

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
      {/* <FormStep name='time' title='date' Component={(props) => <Text>Bonjour dechet</Text>} /> */}
      <FormStep
        name="identification"
        title="Identification"
        Component={(props) => <DocumentIdentificationComponent {...props} />}
      />
      <FormStep
        name="taches"
        title="Taches"
        Component={(props) => <DocumentTasksComponent {...props} />}
      />
      <FormStep
        name="intervention"
        title="Interventions"
        Component={(props) => <InterventionComponent {...props} />}
      />
    </FormStepContainer>
  </React.Fragment>);
};

export default DocumentFormComponent;
