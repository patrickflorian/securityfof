import React , { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Surface } from 'react-native-paper';
import { SubmissionError } from 'redux-form';
import routenames from '@routes/index';
import { SignUpForm } from './components/SignUpForm';
import * as userApi from '@routes/api/Auth0';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


const SignUpScreen = (props: any) => {

  const [loading, setLoading] = useState(false);
  const hasUnsavedChanges = true//Boolean(text);
  const { route, navigation } = props;

  const onSubmit = (values: any) => {
    setLoading(true)
    return userApi.signUp({ ...values, username: values.email }).then((res) => {
      setLoading(false)
      if (!res.ok) {
        console.log(res.status);
      }
      if (res.status != 200) {
        
        return null;
      } else {
        res?.json().then(json => {
          navigation.navigate(routenames.AGENTS)
        }).catch(e => { console.log(e) });
      }
    }).catch(e => { console.log(e) });
  };
  return (
    <Surface style={styles.container}>
    {loading &&<ActivityIndicator animating/>}
      <SignUpForm onSubmit={onSubmit} />
    </Surface>
  );
};

export default SignUpScreen;
