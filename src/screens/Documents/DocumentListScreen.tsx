import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Paragraph, Button, List, ActivityIndicator, Headline, Title, Subheading, Caption } from 'react-native-paper';
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
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    alignContent:'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: 140,
    height: 230,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  cardCover: {
    height: 100
  }
});

const DocumentsListScreen = (props: any) => {
  const { route, navigation } = props;
  const { type } = route.params;
  const [documents, setDocuments] = React.useState([]);

  const title = DocumentURLS.find(doc=>doc.id ===type)?.title
    navigation.setOptions({ title,  });

  const openDocumentForm = (type: String) => {
    
    navigation.navigate(routenames.DOCUMENT_FORM, { type: type })
  };
  const docPdf = DocumentURLS.find((item) => item.id === type)
  const [loading, setLoading] = React.useState(true)

  
  let mounted = true;
  React.useEffect(() => {
    mounted= true
    if (mounted) {
      docApi.all(type)
      .then(res =>{ 
          res.json().then((data) => { setLoading(false); setDocuments(data) }).catch(e => console.log(e))
      }).catch(e => console.log(e))
    }
    console.log(documents);
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {loading && <ActivityIndicator animating />}
      <View style={{flexDirection: 'row', alignItems:'flex-end', justifyContent:'flex-end', marginTop: 5 , marginRight: 5,}}>
        <View style={{ width: "40%"}}>
        <OpenURLButton url={docPdf?.url} icon="file-pdf">PDF</OpenURLButton>

        </View>
        <View style={{width: "40%"}}>
        <ButtonComponent type={"secondary"} outlined full={false} rounded onPress={() => openDocumentForm(type)} icon="file-plus">ajouter</ButtonComponent>
    
        </View>
      </View>
      <ScrollView >
        <View style={styles.container}>
          {
            documents.map((doc, index) => {
              return <Card key={index} style={styles.card}>
                <Card.Cover source={{ uri: doc.fileUrl }} style={styles.cardCover} />
                <Card.Content>
                  <Subheading numberOfLines={1}>{doc.projet}</Subheading>
                  <Text numberOfLines={1}>{doc.title}</Text>
                  <Caption numberOfLines={1}>{new Date(doc.dateAjout).toLocaleDateString("fr-Fr")}</Caption>
                </Card.Content>
                <Card.Actions>
                  {/* <FormModalButton icon="plus" style={{}} title="Nouveau">
                          <DocumentFormComponent/>
                        </FormModalButton> */}
                  <Button onPress={() => { openDocumentForm(type) }}>Details</Button>
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