import React, {Component, useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ActivityIndicator, Surface} from 'react-native-paper';
import LottieView from 'lottie-react-native';
//import la liste des noms de routes
import routenames from '../../routes';

//composants personnalises
import UserInfo from '../../components/layouts/settings/UserInfo';
import Button from '../../components/widgets/Button/Button';
import CardContainer from '../../components/layouts/settings/Preferences';
import AsyncStorage from '@react-native-community/async-storage';
/**
 * Importer les images necessaire : le logo
 */
const logo = require('../../res/img/logo2.jpg');
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: window.width * 0.5,
    height: 0.5 * window.width * 0.5,
  },
});

const fakeLoad = (cb) => {
  setTimeout(cb, 300);
};

//Premiere interface representant le chargement de l'application
const LoaderScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isLogged, setLogged] = useState(null);
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
      {/* <LottieView
      source={require('../../res/lotties/lf30_editor_pbtbvdgs.json')}
      autoPlay
      loop
    /> */}{/* 
    <Text>Safety</Text> */}{/* 
    <Text>First Only Forever</Text> */}
      <ActivityIndicator color={theme.colors.primary} animating={true} />
    </Surface>
  );
};
{
  /* <><UserInfo/><CardContainer /></> */
}
export default LoaderScreen;
