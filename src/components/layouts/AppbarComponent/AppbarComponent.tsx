import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import AppModalButton from '@components/modal/AppModal';
import { Text } from 'react-native-paper';
import {
  Appbar,
  Avatar,
  useTheme,
} from 'react-native-paper';

const AppbarComponent = (props: any) => {
  const {navigation} = props;
  const windowWidth = Dimensions.get('window').width;

  const theme = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignSelf: 'stretch',
      //paddingTop: 5
    },
    linearGradiant: {
      width: '100%',
      borderRadius: 5,
    },
    cardContainer: {
      paddingTop: 15,
      width: windowWidth - 5,
      marginHorizontal: 3,
    },
  });
  return (
      <Appbar.Header style={{width: '100%'}} theme={{...theme,colors: {...theme.colors, primary: theme.colors.background}}} >
        <Appbar.Content title="Welcome back" subtitle={"To Secutity FOF"}/>
         <AppModalButton>
           <Text>Test</Text>
         </AppModalButton>
      </Appbar.Header> 
  );
};

export default AppbarComponent;
