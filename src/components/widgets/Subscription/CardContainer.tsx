import React, {useEffect, useState} from 'react';
import {Alert, FlatList} from 'react-native';

import Card from './Card';

const CardContainer = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {onItemClick} = props;
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '30J',
      subtitle: 'Essai gratuit',
      value: '10$',
      period: 'par Mois',
      
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Mensuel',
      type: 'primary',
      subtitle: 'Promo -5%',
      value: '100$',
      period: 'par Mois',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Annuel',
      type: 'secondary',
      subtitle: 'Promo -15%',
      value: '500$',
      period: 'par An',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <Card
        title={item.title}
        type={item.type}
        subtitle={item.subtitle}
        value={item.value}
        period={item.period}
        onPress={() => {setSelectedItem(item)}}
      />
    );
  };

  useEffect(
   ()=>{
      if(selectedItem!==null){
        //Alert.alert(JSON.stringify(selectedItem))
        onItemClick(selectedItem);
      }
   } 
  ,[selectedItem]);
  return (
    <FlatList
      style={{minHeight: 220, flex: 0.1}}
      contentContainerStyle={{alignItems: 'center'}}
      horizontal={true}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedItem}
      alwaysBounceHorizontal
    />
  );
};

export default CardContainer;
