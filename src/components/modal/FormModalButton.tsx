import React from "react";
import { TouchableOpacity, StyleSheet, StyleProp, StyleSheetProperties } from 'react-native';
import { Modal, Portal, Text, Button, Provider, Avatar } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

interface FormModalButtonProps{
    title: string;
    icon: string;
    style: any;
    children?: any;
}

const FormModalButton = (props: FormModalButtonProps) => {
  const [visible, setVisible] = React.useState(false);
  const theme = useTheme();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const styles = StyleSheet.create({
    container:{
      
    },
    contentContainerStyle: {
      flex: 0.7,
      alignContent: "flex-start",
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignSelf: "center",
      backgroundColor: theme.colors.surface,
      padding: 5,
      width : 240,
      borderRadius: 5
    },
    fullscreen:{
      flex:1,
      alignContent: "center",
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: "center",
      backgroundColor: theme.colors.surface,
      padding: 5,
      width : "100%",
      height : "100%",
      top:-10,
    }
  });

  const {title, ...rest} = props;
  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.fullscreen}
          theme={{ roundness: 50 }}>
          {props.children}
        </Modal>
      </Portal>
        <Button {...rest}  onPress={showModal}>{title}</Button>
    </>
  );
}

export default FormModalButton