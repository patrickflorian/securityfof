/**
 * @author Noumbissi Patrick
 * @email noumbissipatrick@gmail.com
 * @Component DateInputComponent
 * @description ce composant est constitué d'un input customisable permettant de recuperer la date
 * @extends react-native-paper/TextInput
 * @version  0.0.1
 * @param
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Avatar,
  IconButton,
  List,
  Surface,
  TextInput,
  useTheme,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../Button/Button';
/**
 * Custom date input component
 */
const DateInput = (props) => {
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
      marginTop: 2,
      height: 25,
    },
  });
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const {icon} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <TextInput
        mode="outlined"
        value={date.toLocaleDateString()}
        style={styles.input}
        icon="date"
        {...props}
      />
      <IconButton
        icon="calendar"
        style={styles.icon}
        centered
        color={theme.colors.backdrop}
        size={25}
        onPress={() => setShow(true)}
      />
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateInput;
