import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Modal, Portal, Text, Button, Provider, Avatar } from 'react-native-paper';
import { useTheme } from 'react-native-paper';


const AppModalButton = (props: any) => {
  const [visible, setVisible] = React.useState(false);
  const theme = useTheme();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const styles = StyleSheet.create({
    container:{
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
      minWidth : 280,
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
        <Avatar.Text size={24} label="XD" style={{ backgroundColor: theme.colors.border , borderWidth:1, borderColor:theme.colors.primary}} />
      </TouchableOpacity>
    </>
  );
}

export default AppModalButton