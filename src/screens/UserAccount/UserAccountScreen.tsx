import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Badge, Text, useTheme } from 'react-native-paper';

import routenames from '../../routes'
import { color } from 'react-native-reanimated';


const OutcomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      backgroundColor: theme.colors.disabled,
      height: 100,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom: 10,
      alignSelf: 'center',
      position: 'absolute',
      marginTop: 30
    },
    name: {
      fontSize: 22,
      color: theme.colors.text,
      fontWeight: '600',
    },
    body: {
      marginTop: 40,
    },
    bodyContent: {
      justifyContent: 'center',
      alignContent: 'center',
      padding: 30,
      alignItems: 'center',
      width: '100%',
    },
    info: {
      fontSize: 16,
      color: theme.colors.text,
      marginTop: 10
    },
    description: {
      fontSize: 16,
      color: theme.colors.text,
      marginTop: 10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop: 10,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: "#00BFFF",
    },
  });

  return (
    <View >
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>CHENDJOU Pierre</Text>
          <Text style={styles.info}>Technician</Text>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
          <View>
            <Badge theme={theme} style={{ backgroundColor: theme.colors.disabled }}>environnement</Badge>
          </View>
          {/*  <TouchableOpacity style={styles.buttonContainer}>
            <Text>Opcion 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Opcion 2</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};
export default OutcomeScreen;