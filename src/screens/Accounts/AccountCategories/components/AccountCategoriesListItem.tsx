import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Avatar, List, Menu} from 'react-native-paper';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import routenames from '../../../../routes';
const ItemMenu = (props) => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const theme = useTheme();
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Icon
          style={props.style}
          size={35}
          color={props.color}
          name="dots-vertical"
          onPress={openMenu}
        />
      }>
      <Menu.Item
        onPress={() => {
          closeMenu();
        }}
        title={'modifier'}
      />
      <Menu.Item
        onPress={() => {
          closeMenu();
        }}
        title={'supprimer'}
      />
    </Menu>
  );
};

const AccountCategoriesListItem = (props) => {
  const {categorie} = props;
  const navigation= useNavigation()
const theme = useTheme()
  return (
    <List.Item
      key={categorie.id}
      title={categorie.libelle}
      right={({color, style}) => <ItemMenu style={style} color={color} />}
      left={({color, style}) => <Avatar.Icon icon='credit-card' style={[style,{backgroundColor:'transparent'}]} color={theme.colors.text} />}
    onPress={()=>navigation.navigate(routenames.SINGLE_ACCOUNT)}
    />
  );
};

export default AccountCategoriesListItem;
