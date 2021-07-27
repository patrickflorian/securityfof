import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Paragraph, Button, List } from 'react-native-paper';
import Animated from 'react-native-reanimated';

import routenames from '@routes/index'

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

const FormationsScreen = (props: any) => {
  const { route, navigation } = props;
  const [documents, setDocuments] = React.useState([]);

  const openFormationDetails = () => {
    navigation.setOptions({ tabBarVisible: false });
    navigation.navigate(routenames.FORMATION_DETAILS)
  };
  return (
    <>
    
    <AppbarComponent/> 
    <ScrollView >
      <View style={styles.container}>
     {/*  <Card style={styles.card}>
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
      </Card> */}
      <View style={{width: '100%'}}>
        <List.Item
          title="Comportement à risque"
          description="cette formation met en evidence les comportements à risque"
          onPress={openFormationDetails}
          left={props => <List.Icon {...props} icon="play-box-outline" />}
        />
        <List.Item
          title="Gestion des travaux"
          description="cette formation porte sur la gestion des travaux"
          onPress={openFormationDetails}
          left={props => <List.Icon {...props} icon="play-box-outline" />}
        />
        <List.Item
          title="Equipements de protection"
          description="Que connaissez vous des equipements de protection"
          onPress={openFormationDetails}
          left={props => <List.Icon {...props} icon="play-box-outline" />}
        />
        <List.Item
          title="Travaux à risque"
          description="les travaux à rique"
          onPress={openFormationDetails}
          left={props => <List.Icon {...props} icon="play-box-outline" />}
        />
      </View>
      </View>
    </ScrollView>
    </>
  );
};
export default FormationsScreen;