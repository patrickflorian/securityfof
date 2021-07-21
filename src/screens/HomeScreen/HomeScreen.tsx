import AppbarComponent from '@components/layouts/AppbarComponent/AppbarComponent';
import FormWithStep from '@screens/FormWithStep';
import React, {useState} from 'react';
import { Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Appbar,
  Avatar,
  useTheme,
} from 'react-native-paper';
import DirectorMessageCard from './components/DirectorMessageCard';
import RHSEMessageCard from './components/RHSEMessageCard';

const HomeScreen = (props: any) => {
  const {navigation} = props;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
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
      justifyContent: 'space-around',
    },
  });
  return (
    <View style={styles.container}>
      <AppbarComponent/> 

      <ScrollView contentContainerStyle={styles.cardContainer}>
        <DirectorMessageCard/>
        <RHSEMessageCard/>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
