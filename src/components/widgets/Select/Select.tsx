import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {
  List,
  Modal,
  Portal,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //alignContent: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  content: {
    //alignSelf: 'stretch',
    width: '80%',
    marginTop: 10,
    //alignItems:'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
      width: '80%',
    //alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
});
const SelectModal = (props) => {
  const {items, onChoose, visible, onDismiss} = props;
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
            {/* <Text
              onPress={() => {
                onChoose('item.value');
              }}>
              Bonjour
            </Text> */}
            {items.map((item, index) => {
              return (
                <List.Item
                  key={index}
                  value={item.value}
                  title={item.title}
                  onPress={() => {
                    onChoose(item);
                  }}
                />
              );
            })}
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export const Select = (props) => {
  const {items, onSelect, value} = props;
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    if (value != null) {
      items
        .filter((item) => item.value === value)
        .map((item) => setSelectedItem(item));
    }
  }, [selectedItem]);
  return (
    <>
      <TextInput
        onFocus={() => setVisible(true)}
        value={selectedItem?.title}
        editable={false}
        {...props}
        right={
          <TextInput.Icon
            name="menu-down-outline"
            color={theme.colors.disabled}
            onPress={showModal}
          />
        }
        showSoftInputOnFocus={false}
      />
      <SelectModal
        items={items}
        visible={visible}
        onDismiss={hideModal}
        onChoose={(item) => {
          hideModal();
          setSelectedItem(item);
          onSelect(item.value);
        }}
      />
    </>
  );
};
