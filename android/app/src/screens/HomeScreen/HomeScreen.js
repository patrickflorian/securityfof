import React, {useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  Appbar,
  Avatar,
  Caption,
  Card,
  Colors,
  List,
  Subheading,
  Text,
  Title,
  useTheme,
} from 'react-native-paper';
import ViewPager from '@react-native-community/viewpager';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';


import CustomCard from '../../components/widgets/CustomCard/CustomCard';
import DateInput from '../../components/widgets/DateInput/DateInput';
import visa_black from '../../res/img/visa_black.png';
import visa from '../../res/img/visa.png';
import orangemoney from '../../res/img/om_black.png';
import mtn from '../../res/img/mtn.jpg';
import routenames from '../../routes';
const TransactionList = (props) => {
  const transactions = [
    {
      id: 1,
      type: '18 Sept',
      libelle: 'Freelance Jobs',
      solde: 500,
    },
    {
      id: 2,
      type: '08 Aout',
      libelle: 'Frais Medicaux',
      solde: 500,
    },
    {
      id: 3,
      type: '08 Aout',
      libelle: 'Nutrition',
      solde: 500,
    },
  ];
  const theme = useTheme();
  return (
    <ScrollView
      style={{flex: 0.4, alignSelf: 'stretch', marginTop: 10}}
      contentContainerStyle={{alignItems: 'stretch'}}>
      {transactions.map((account, index) => {
        return (
          <List.Item
            key={account.id}
            title={account.libelle}
            description={account.type}
            right={(color, style) => (
              <Text style={{color: theme.colors.notification}}>
                {account.solde}
              </Text>
            )}
            left={(color, style) => (
              <Avatar.Icon
                icon="credit-card"
                style={{...style, backgroundColor: 'transparent'}}
                color={theme.colors.text}
              />
            )}
          />
        );
      })}
    </ScrollView>
  );
};

const HomeScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

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
    card: {
      width: windowWidth - 5,
      padding: 8,
      elevation: 4,
      borderStyle: 'solid',
      borderRadius: 12,
      borderWidth: 1,
      marginHorizontal: 3,
    },
  });
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {/*       <Text>Home Screen</Text>
       */}
      <Appbar.Header style={{width: '100%'}}>
        <Appbar.Action
          icon="menu"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Appbar.Content title="Welcome back" />
      </Appbar.Header> 
    </View>
  );
};

export default HomeScreen;
