import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Paragraph, Button, List } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import ProductCard from '../../components/widgets/ProductList/ProductCard';

import routenames from '../../routes'
import AppbarComponent from '@components/layouts/AppbarComponent/AppbarComponent';
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    flexWrap:'wrap',
  },
  card: {
    width: "40%",
    height: 200,
  },
  cardCover: {
    height: 100
  }
});

const IncomeScreen = (props: any) => {
  const { navigation } = props;
  return (
    <>
    
    <AppbarComponent/> 
    <ScrollView >
      <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cardCover} />
        <Card.Content>
          <Paragraph>Documents de securité</Paragraph>
        </Card.Content>
        <Card.Actions>
        <Button>Nouveau</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.card} >
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cardCover} />
        <Card.Content>
          <Paragraph>Documents de securité</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button icon={"plus"}>Add</Button>
        </Card.Actions>
      </Card>
      <Animated.View style={{width: '100%'}}>
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />

      </Animated.View>
      </View>
    </ScrollView>
    </>
  );
};
export default IncomeScreen;