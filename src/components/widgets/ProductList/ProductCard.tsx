import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import {
  Avatar,
    Caption,
  Headline,
  Subheading,
  Surface,
  Text,
  TextInput,
  Title,
} from 'react-native-paper';

const ProductCard = (props) => {

    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(1.19)
    const [total_price, setTotalPrice] = useState(price*quantity)
    useEffect(()=>{
        setTotalPrice((quantity*price));
    },[quantity])
  return (
    <Surface style={{alignSelf: 'stretch', flexDirection: 'row', margin: 5}}>
      <View style={{padding: 6, flex: 0.4}}>
        <Avatar.Icon icon="apple" size={130} style={{borderRadius: 0}} />
      </View>
      <View style={{alignSelf: 'stretch', flex: 0.7}}>
        <View
          style={{
            padding: 6,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Headline>Pommes</Headline>
            <Caption>Akwa Food, Douala</Caption>
          </View>

          <Title style={{alignSelf: 'flex-start'}}>{price.toString()}$</Title>
        </View>
        <View
          style={{
            padding: 6,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text>quantités</Text>
            <TextInput
              mode="outlined"
              style={{
                marginTop: 2,
                height: 25,
              }}
              value={quantity.toString()}
              textContentType='password'
              keyboardType={'number-pad'}
              onChangeText= {(value)=>{ setQuantity(parseInt(value)|1) ;}}
            />
          </View>
            <Title style={{alignSelf: 'flex-start'}}>{total_price.toString()}$</Title>
        </View>
      </View>
    </Surface>
  );
};

export default ProductCard;
