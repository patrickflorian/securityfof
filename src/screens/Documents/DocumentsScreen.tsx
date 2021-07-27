import React from 'react';
import { StyleSheet, View, ScrollView, GestureResponderEvent } from 'react-native';
import { Text, Card, Paragraph, Button, List } from 'react-native-paper';
import Animated from 'react-native-reanimated';

import routenames from '@routes/index'
import AppbarComponent from '@components/layouts/AppbarComponent/AppbarComponent';
import { useNavigation } from '@react-navigation/native';
import FormModalButton from '@components/modal/FormModalButton';
import DocumentFormComponent from './components/forms/DocumentForm';
import { DocumentTypes } from '@constants/documentTypes';
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: "40%",
    height: 200,
  },
  cardCover: {
    height: 100
  }
});

const DocumentsScreen = (props: any) => {
  //const { navigation } = props;
  const navigation = useNavigation();

  const openDocumentForm =(type: String) =>{ 
    navigation.setOptions({tabBarVisible: false}) ;
    navigation.navigate(routenames.DOCUMENT_LIST, {type: type})
  };

  return (
    <>
      <AppbarComponent />
      <ScrollView >
        <View style={styles.container}>
          
          <View style={{ width: '100%' }}>
            <List.Item
              title="Analyse des risques"
              description="Item description"
              onPress={(e)=>{openDocumentForm(DocumentTypes.risk)}}
              left={props => <List.Icon {...props} icon="file-document-outline" />}
            />
            <List.Item
              title="Mode opératoire"
              description="Item description"
              onPress={(e)=>{openDocumentForm(DocumentTypes.mode)}}
              left={props => <List.Icon {...props} icon="file-document-outline" />}
            />
            <List.Item
              title="Feu vert de sécurité"
              description="Item description"
              onPress={(e)=>{openDocumentForm(DocumentTypes.feu)}}
              left={props => <List.Icon {...props} icon="file-document-outline" />}
            />
            <List.Item
              title="Visite de chantier"
              description="Item description"
              onPress={(e)=>{openDocumentForm(DocumentTypes.chantier)}}
              left={props => <List.Icon {...props} icon="file-document-outline" />}
            />
            <List.Item
              title="Sensibilisation"
              description="Item description"
               onPress={(e)=>{openDocumentForm(DocumentTypes.sensibilisation)}}
              left={props => <List.Icon {...props} icon="file-document-outline" />}
            />
            <List.Item
              title="Briefing"
              description="Item description"
              onPress={(e)=>{openDocumentForm(DocumentTypes.briefing)}}
              left={props => <List.Icon {...props} icon="file-document-outline" />}
            />

          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default DocumentsScreen;