import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Surface} from 'react-native-paper';
import { SubmissionError } from 'redux-form';
import LanguageComponent from '@components/widgets/Translation/Translation';
import routenames from '@routes/index';
import {SignUpForm} from './components/SignUpForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


const SignUpScreen = (props: any) => {
  const {navigation} = props;
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
        navigation.navigate(routenames.DRAWER);
      }
    });
  };
  return (
    <Surface style={styles.container}>
        <SignUpForm onSubmit={onSubmit}/>
        <LanguageComponent />
    </Surface>
  );
};

export default SignUpScreen;
