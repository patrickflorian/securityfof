/**
 * @author Noumbissi Patrick
 * @email noumbissipatrick@gmail.com
 * @Component DateInputComponent
 * @description ce composant est constitué d'un input customisable permettant de recuperer la date
 * @extends react-native-paper/TextInput
 * @version  0.0.1
 * @param
 */

import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {
  TextInput,
  useTheme,
} from 'react-native-paper';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useEffect } from 'react';
/**
 * Custom date input component
 */
const DateInput = (props: any) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const theme = useTheme();
  const styles = StyleSheet.create({
    icon: {
      backgroundColor: 'transparent',
      padding: 0,
      margin: 0,
      borderRadius: 0,
      alignSelf: 'center',
    },
    input: {
      //marginTop: 2,
      //height: 25,
      width: "100%",
    },
  });
  const onChange = (event: Event, selectedDate?: Date) => {
    if (event.type === "set") console.log("value:" , selectedDate);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    props.onChange(currentDate);
  };
  const { icon } = props;

  useEffect(()=>{
    
  },[date])
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "100%",
      }}>
        <TextInput
          mode="outlined"
          value={date.toLocaleDateString()}
          //style={styles.input}
          
          icon="calendar"
          right={<TextInput.Icon name="calendar"color={theme.colors.disabled}
          size={25}
          onPress={() => setShow(true)}/>}
          disabled
          {...props}
        />
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          dateFormat={'day month year'}
        />
      )}
    </View>
  );
};

export default DateInput;
