import React, {Component, useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ActivityIndicator, Surface} from 'react-native-paper';
//import la liste des noms de routes
import routenames from '@routes/index';

//composants personnalises
import AsyncStorage from '@react-native-community/async-storage';
/**
 * Importer les images necessaire : le logo
 */
const logo = require('@res/img/logo2.jpg');
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: window.width * 0.5,
    height: window.width * 0.5,
  },
});

//Premiere interface representant le chargement de l'application
const LoaderScreen = (props: any) => {
  const {navigation} = props;
  const [loading, setLoading] = useState<boolean>(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>();
  const [isLogged, setLogged] = useState<boolean>();
  const theme = useTheme();

  useEffect(() => {
    if (isFirstLaunch === null) {
      AsyncStorage.getItem('alreadyLaunched').then((value) => {
        if (value == null) {
          AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      });
    } else if (isFirstLaunch == true) {
      navigation.replace(routenames.ONBOARDING);
    } else if(isLogged==null) {
      AsyncStorage.getItem('user').then((user) => {
        if (user == null) {
          setLogged(false);
        } else {
          setLogged(true);
        }
      });
     
    }else if(isLogged){
      navigation.replace(routenames.LOGIN, {screen : routenames.DRAWER})
    } else {
      navigation.replace(routenames.LOGIN);
    }
  }, [isFirstLaunch,isLogged]);

  return (
    <Surface style={styles.container}>
      <Image source={logo} style={styles.image} />
      <ActivityIndicator color={theme.colors.primary} animating={true} />
    </Surface>
  );
};
{
  /* <><UserInfo/><CardContainer /></> */
}
export default LoaderScreen;
