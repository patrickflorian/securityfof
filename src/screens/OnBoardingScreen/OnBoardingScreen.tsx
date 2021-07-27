import React from 'react';
import {Button,Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
/** importe la liste des routes de l'application */
import routenames from '@routes/index'


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

const OnBoardingScreen = (props: any) => {
  const {navigation} = props;
  return (
  
  <Onboarding
  pages={[
    {
        backgroundColor: '#fff',
        image: <Image source={require('@res/img/logo2.jpg')} style={styles.image} />,
        title: 'Bienvenu sur la meilleure application de securite',
        subtitle: 'Safety first only forever',
      },
      {
        backgroundColor: '#999',
        image: <Image source={require('@res/img/logo2.jpg')} style={styles.image} />,
        title: 'Sauvegarder et partagez les documents de securité',
        subtitle: "C'est beau, n'est ce pas?",
      },
  ]}
  onDone = {()=>navigation.replace(routenames.LOGIN)}
  onSkip = {()=>navigation.replace(routenames.LOGIN)}
/>
);}

export default OnBoardingScreen;
