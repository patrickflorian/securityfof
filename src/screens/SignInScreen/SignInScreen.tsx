/**
 * @author noumbissi patrick
 * @email noumbissipatrick@gmail.com
 * @description Composant sur lequel sera creer la vue de login
 */
import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import {Surface, Switch, TouchableRipple, useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import LanguageComponent from '../../components/widgets/Translation/Translation';
import {LoginForm} from './components/LoginForm';
import { ThemeContext } from '../../context/context';


const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },image: {
    width: window.width * 0.5,
    height: 0.5 * window.width * 0.5,
  },
});

const SignInScreen = ({}) => {
  /**
   * @description cette fonction est appelée lorsque l'utilisateur clique sur le bouton de soumission
   * @param {*} values
   */
  const language = useSelector((state) => state.language);

  const theme = useTheme();
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <Surface style={styles.container}>
      <ScrollView
        style={{flex: 1,/*  backgroundColor:'black' */}}
        contentContainerStyle={{
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
        <Image source={require('../../res/img/logo2.jpg')} style={styles.image} />
        <LoginForm /* onSubmit={onSubmit} */ language={language} />
        {/* <LanguageComponent /> */}
      </ScrollView>
      <TouchableRipple onPress={() => {toggleTheme()}} style={{marginBottom:20}}>
      <View pointerEvents="none" >
        <Switch value={theme.dark} color={theme.colors.primary} />
      </View>

      </TouchableRipple>
    </Surface>
  );
};

export default SignInScreen;
