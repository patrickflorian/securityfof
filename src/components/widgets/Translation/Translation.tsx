import React, {useState} from 'react';
import {View} from 'react-native';
import {Chip, Menu, Text, useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
const LanguageComponent = (props : any) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language
  const [visible, setVisible] = useState(false);

  const changeLanguage = () => {
    const nextLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(nextLanguage);
  };

  const theme = useTheme();
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View
      style={{
        /* flex: 1, */
        paddingTop: 50,
        flexDirection: 'row',
        /* justifyContent: 'center', */
        /* position: 'absolute', */
        margin: 16,
        paddingRight:20,
        /* right: 0,
          top: 0, */
        //backgroundColor:'black',
        alignSelf: "flex-end",
        zIndex: 10000000,
      }}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
            <Chip onPress={openMenu} icon='menu-down-outline' style={{backgroundColor:'transparent'}}>
              {currentLanguage === 'fr' ? 'Francais' : 'English'}
            </Chip>
        }
        >
        <Menu.Item
          onPress={() => {
            closeMenu();
            changeLanguage();
          }}
          title={currentLanguage !== 'fr' ? 'Francais' : 'English'}
        />
      </Menu>
    </View>
  );
};

export default LanguageComponent;
