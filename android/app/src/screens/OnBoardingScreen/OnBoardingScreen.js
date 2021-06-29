import React from 'react';
import {Button,Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
/** importe la liste des routes de l'application */
import routenames from '../../routes'


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

const OnBoardingScreen = ({navigation}) => (
 
  <Onboarding
  pages={[
    {
        backgroundColor: '#fff',
        image: <Image source={require('../../res/img/logo2.jpg')} style={styles.image} />,
        title: 'Bienvenu sur la meilleure application de securite',
        subtitle: 'Safety first only forever',
      },
      {
        backgroundColor: '#999',
        image: <Image source={require('../../res/img/triangle.png')} />,
        title: 'Triangle',
        subtitle: "Beautiful, isn't it?",
      },
  ]}
  onDone = {()=>navigation.replace(routenames.LOGIN)}
  onSkip = {()=>navigation.replace(routenames.LOGIN)}
/>
);

export default OnBoardingScreen;
