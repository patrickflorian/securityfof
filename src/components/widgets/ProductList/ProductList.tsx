import {ThemeProvider} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Avatar, List, Surface, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonComponent from '../Button/Button';
const ProductListItem = (props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          alignSelf: 'stretch',
        }}>
        <Avatar.Icon icon="apple" style={{marginLeft:6}}/>
      <View style={{
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          alignSelf: 'stretch',
        }}>
        <List.Item
          title={'Pomme'}
          style={{alignSelf: 'stretch', width: '100%',paddingLeft:0}}
          description={'Artisan'}
          right={({color, style, size}) => (
            <Icon name="dots-vertical" size={30} style={[style,{ color, paddingTop: 6}]} />
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
          }}>
          <Text style={{
            alignSelf: 'center',
            paddingLeft:6,
          }}>25 Unités</Text>
          <ButtonComponent
            labelStyle={{fontSize: 10}}
            color={ThemeProvider.colors}
            contentStyle={{padding: 0}}
            style={{margin: 0}} type={'primary'} borderless>
            {'commander>'}
          </ButtonComponent>
        </View>
      </View>
    
      </View></View>
  );
};

export default ProductListItem;
