import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Paragraph, Button, List, ActivityIndicator } from 'react-native-paper';
import Animated from 'react-native-reanimated';

import routenames from '@routes/index'
import AppbarComponent from '@components/layouts/AppbarComponent/AppbarComponent';
import { useNavigation } from '@react-navigation/native';
import FormModalButton from '@components/modal/FormModalButton';
import DocumentFormComponent from './components/forms/DocumentForm';
import { OpenURLButton } from './components/OpenUrlButton';
import { DocumentURLS } from '@constants/documentTypes';

import * as docApi from "@routes/api/Documents";
import ButtonComponent from '@components/widgets/Button/Button';
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

const DocumentsListScreen = (props: any) => {
  const { route, navigation } = props;
  const { type } = route.params;
  const [documents, setDocuments] = React.useState([]);

  const openDocumentForm = (type: String) => {
    navigation.setOptions({ tabBarVisible: false });
    navigation.navigate(routenames.DOCUMENT_FORM, { type: type })
  };
  const docPdf = DocumentURLS.find((item) => item.id === type)
  const [loading, setLoading] = React.useState(true)
  const [didMount, setDidMount] = React.useState(false);

  React.useEffect(() => {
    if (!didMount){
      docApi.all()
        .then(res =>{ 
            res.json().then((data) => { setLoading(false); setDocuments(data) }).catch(e => console.log(e))
        }).catch(e => console.log(e))
    }
    setDidMount(true);
    return () =>{ setDidMount(false)};
  }, []);

  return (
    <>
      <AppbarComponent />
      {loading && <ActivityIndicator animating />}
      <OpenURLButton url={docPdf?.url}>Telecharger le Document PDF</OpenURLButton>
      <View style={{ marginTop: 15 }}>
        <ButtonComponent full={false} onPress={() => openDocumentForm(type)}>Ajouter un document</ButtonComponent>
      </View>
      <ScrollView >
        <View style={styles.container}>
          {
            documents.map((doc, index) => {
              return <Card key={index} style={styles.card}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cardCover} />
                <Card.Content>
                  <Paragraph>Documents de securité</Paragraph>
                </Card.Content>
                <Card.Actions>
                  {/* <FormModalButton icon="plus" style={{}} title="Nouveau">
                          <DocumentFormComponent/>
                        </FormModalButton> */}
                  <Button onPress={() => { openDocumentForm(type) }}>Nouveau</Button>
                </Card.Actions>
              </Card>
            })
          }

        </View>
      </ScrollView>
    </>
  );
};
export default DocumentsListScreen;