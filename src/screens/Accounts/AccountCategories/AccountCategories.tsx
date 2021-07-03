import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {Appbar, Menu, Modal, Portal, Surface, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountCategoriesFormScreen from './AccountCategoriesForm';
import AccountCategoriesList from './components/AccountCategoriesList';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    padding: 8,
  },
  card: {
    width: '100%',
    padding: 8,
    elevation: 4,
    borderStyle: 'solid',
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 5,
  },
  surface: {
    padding: 8,
    height: 'auto',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  header: {
    width: '80%',
  //alignSelf: 'stretch',
  backgroundColor: 'transparent',
},
});
const MenuComponent = (props) => {
  const {t, i18n} = useTranslation();
  const {anchor, closeMenu, visible, openModal} = props;
  const theme = useTheme();
  return (
    <Menu visible={visible} onDismiss={closeMenu} anchor={anchor}>
      <Menu.Item
        onPress={() => {
          closeMenu();
          openModal();
        }}
        title={'Nouvelle Categorie'}
      />
    </Menu>
  );
};

const ModalComponent = (props) => {
  const {visible, onDismiss} = props;
  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={false}
        onDismiss={onDismiss}
        contentContainerStyle={{height: '30%'}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon
              name="close-box-outline"
              color="black"
              size={30}
              style={{alignSelf: 'flex-end'}}
              onPress={() => onDismiss()}
            />
          </View>
          <View style={styles.content}>
            <AccountCategoriesFormScreen {...props}/>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};
const AccountCategoriesScreen = (props) => {
  //console.log(theme)
  const navigation = useNavigation();
  const [anchor, setAnchor] = useState({x: 0, y: 0});
  /** Menu states and actions */
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
/** Modal states  and actions */
  const [modalvisible, setmodalVisible] = useState(false);
  const openModal = () => setmodalVisible(true);
  const closeModal = () => setmodalVisible(false);
  return (
    <>
      <MenuComponent
        anchor={anchor}
        visible={visible}
        closeMenu={closeMenu}
        openModal={openModal}
        {...props}
      />
      <ModalComponent visible={modalvisible} onDismiss={closeModal} {...props} />
      <Appbar.Header style={{width: '100%'}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Categories de comptes" />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {
            openMenu();
          }}
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            setAnchor({x: layout.x + layout.width, y: layout.y});
          }}
        />
      </Appbar.Header>
      <Surface style={styles.container}>
        <AccountCategoriesList />
      </Surface>
    </>
  );
};

export default AccountCategoriesScreen;
