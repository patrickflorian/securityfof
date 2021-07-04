/**
 * @author noumbissi patrick
 * @email noumbissipatrick@gmail.com
 * @description Composant sur lequel sera creer la vue de recuperation des mots de passe
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Surface } from 'react-native-paper';
import { SubmissionError } from 'redux-form';
import LanguageComponent from '@components/widgets/Translation/Translation';
import routenames from '@routes/index';
import {PasswordResetForm} from './components/PasswordResetForm';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
<<<<<<< HEAD
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const PasswordResetScreen = ({navigation}) => {
=======
const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))

const PasswordResetScreen = (props : any) => {
>>>>>>> 46985c079ef7db0c5c05fe9b2763fbafe3c1353e
  /**
   * @description cette fonction est appelée lorsque l'utilisateur clique sur le bouton de soumission
   * @param {*} values 
   */
<<<<<<< HEAD
  const onSubmit = (values) => {
=======
  const {navigation} = props;
  const onSubmit = (values: any) => {
>>>>>>> 46985c079ef7db0c5c05fe9b2763fbafe3c1353e
    return sleep(2000).then(() => {
      // simulate server latency
      if (!values.email) {
        throw new SubmissionError({
          email: 'User does not exist',
          _error: 'Login failed!',
        });
      } else {
        //Alert.alert(`You submitted:${JSON.stringify(values)}`);
        navigation.navigate(routenames.SIGN_IN)
      }
    });
  };

  return (
    <Surface style={styles.container}>
      <PasswordResetForm onSubmit={onSubmit}/>
      <LanguageComponent />
    </Surface>
  );
};

export default PasswordResetScreen;
