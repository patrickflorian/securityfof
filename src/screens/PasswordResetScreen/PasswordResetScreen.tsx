/**
 * @author noumbissi patrick
 * @email noumbissipatrick@gmail.com
 * @description Composant sur lequel sera creer la vue de recuperation des mots de passe
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Surface } from 'react-native-paper';
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
const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))

const PasswordResetScreen = (props : any) => {
  /**
   * @description cette fonction est appelée lorsque l'utilisateur clique sur le bouton de soumission
   * @param {*} values 
   */
  const {navigation} = props;
  const onSubmit = (values: any) => {};

  return (
    <Surface style={styles.container}>
      <PasswordResetForm onSubmit={onSubmit}/>
      <LanguageComponent />
    </Surface>
  );
};

export default PasswordResetScreen;
