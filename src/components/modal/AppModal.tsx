import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Modal, Portal, Text, Button, Provider, Avatar } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';


const AppModalButton = (props: any) => {
  const [visible, setVisible] = React.useState(false);
  const theme = useTheme();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const styles = StyleSheet.create({
    container:{
      //flex: 1,
      //alignItems: "center",
      //justifyContent: 'center',
      //alignContent: "center",
      //alignSelf: 'stretch',
    },
    contentContainerStyle: {
      flex: 0.6,
      alignContent: "flex-start",
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignSelf: "center",
      backgroundColor: theme.colors.background,
      padding: 20,
      width : 240,
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