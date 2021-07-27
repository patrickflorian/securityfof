import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Modal, Portal, Text, Button, Provider, Avatar } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const AppModalButton = (props: any) => {
  const [visible, setVisible] = React.useState(false);
  const theme = useTheme();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [user, setUser] = React.useState();
  AsyncStorage.getItem('user').then(value => {
    if (value) {
      setUser(JSON.parse(value));
    }
  });
  const styles = StyleSheet.create({
    container: {
      alignContent: "flex-start",
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    contentContainerStyle: {
      //flex: 0.7,
      alignContent: "flex-start",
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      alignSelf: "center",
      position: "absolute",
      top: 30,
      backgroundColor: theme.colors.surface,
      padding: 5,
      minWidth: 280,
      width: '85%',
      borderRadius: 5
    },
  });
  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.contentContainerStyle}
          theme={{ roundness: 50 }}>
          {props.children}
        </Modal>
      </Portal>
      <TouchableOpacity onPress={showModal}>
        <Avatar.Text size={40} label={user ? user.email.substr(0, 2) : 'XD'} style={{ backgroundColor: theme.colors.border, marginRight: 5, borderWidth: 1, borderColor: theme.colors.primary }} />
      </TouchableOpacity>
    </>
  );
}

export default AppModalButton