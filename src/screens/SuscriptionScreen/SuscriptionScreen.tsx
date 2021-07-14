import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Appbar, Modal, Portal, Surface, Text} from 'react-native-paper';
import CardContainer from '@components/widgets/Subscription/CardContainer';
import ContentComponent from '@components/widgets/Subscription/Content';
import HeaderComponent from '../../components/widgets/Subscription/Header';
import SuscriptionFormScreen from './components/SuscriptionForm';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*  alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black' */
  },
  header: {
    width: '90%',
    //alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  content: {
    //alignSelf: 'stretch',
    //marginTop: 10,
    //alignItems:'center',
    //backgroundColor: 'white',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },
});

const ModalComponent = (props: any) => {
  const {visible, onDismiss} = props;
  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={true}
        onDismiss={onDismiss}
        contentContainerStyle={{height: '90%'}}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Icon
              name="close-box-outline"
              color="black"
              size={30}
              style={{alignSelf: 'flex-end'}}
              onPress={onDismiss}
            />
          </View>
          <View style={styles.content}>
            <SuscriptionFormScreen {...props} />
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
};
const SuscriptionScreen = (props: any) => {
  const {navigation} = props;
  /** Modal states  and actions */
  const [modalvisible, setmodalVisible] = useState(false);
  const [paiement, setPaiement] = useState(null);
  const openModal = () => setmodalVisible(true);
  const closeModal = () => setmodalVisible(false);
  return (
    <>
      <Appbar.Header style={{width: '100%'}}>
        <Appbar.Action
          icon="menu"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Appbar.Content title="Mon abonnement" />
      </Appbar.Header>
      <ModalComponent
        visible={modalvisible}
        onDismiss={closeModal}
        {...props}
        paiement={paiement}
      />
      <ScrollView style={{flex: 1}}>
        <HeaderComponent />
        <ContentComponent />
        <CardContainer
          onItemClick={(item: any) => {
            setPaiement(item);
            openModal();
          }}
        />
      </ScrollView>
    </>
  );
};

export default SuscriptionScreen;