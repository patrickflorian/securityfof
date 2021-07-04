import React from 'react';
const {useTranslation} = require('react-i18next');
const {View} = require('react-native');
const {List, Avatar} = require('react-native-paper');

const AccountTypeList = (props: any) => {
  const {t, I18n} = useTranslation();
  const {onChoose} = props;
  const types = [
    {
      name: 'personal',
      title: t('forms.registrationForm.account_personal'),
      icon: 'account',
    },
    {
      name: 'entreprise',
      title: t('forms.registrationForm.account_entreprise'),
      icon: 'office-building',
    },
    {
      name: 'provider',
      title: t('forms.registrationForm.account_provider'),
      icon: 'archive-arrow-down',
    },
    {
      name: 'bank',
      title: t('forms.registrationForm.account_bank'),
      icon: 'bank',
    },
  ];
  return (
    <View style={{flex:1,alignSelf:"stretch"}}>
      {types.map((type,index) => {
        return (
          <List.Item
            key={index}
            style={{alignSelf:'stretch'}}
            title={type.title}
            left={(color: any, style: any) => <Avatar.Icon icon={type.icon} color={color} style={[style,{backgroundColor:'transparent'}]} size={50} />}
            onPress={()=>onChoose(type.name)}
          />
        );
      })}
    </View>
  );
};
export default AccountTypeList;