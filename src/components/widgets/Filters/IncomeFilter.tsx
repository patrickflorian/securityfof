import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, List, Surface, useTheme} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../Button/Button';
import DateInput from '../DateInput/DateInput';

/**
 * Composant qui contient les differents elements pour filtrer l'historique des comptes
 */

const IncomeFilter = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const theme = useTheme();
  const styles = StyleSheet.create({
    icon: {
      backgroundColor: 'transparent',
    },
  });
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <Surface
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: '100%',
      }}>
      <List.Accordion title="Filtre" style={{minWidth: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            minWidth: 200,
          }}>
          <Avatar.Icon
            icon="arrow-down"
            style={styles.icon}
            color={theme.colors.success}
            size={40}
          />
          <Avatar.Icon
            icon="arrow-up"
            style={styles.icon}
            color={theme.colors.notification}
            size={40}
          />
          <Avatar.Icon
            icon="cash"
            style={styles.icon}
            color={theme.colors.secondary}
            size={40}
          />
          <Avatar.Icon
            icon="sync"
            style={styles.icon}
            color={theme.colors.backdrop}
            size={40}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            minWidth: 200,
          }}>
          <Button
            outlined
            type=""
            labelStyle={{fontSize: 10}}
            contentStyle={{padding: 0}}
            style={{margin: 0}}>
            {' '}
            Aujourd'hui
          </Button>
          <Button
            outlined
            labelStyle={{fontSize: 10}}
            contentStyle={{padding: 0}}
            style={{margin: 0}}>
            cette semaine
          </Button>
          <Button
            outlined
            labelStyle={{fontSize: 10}}
            contentStyle={{padding: 0}}
            style={{margin: 0}}>
            ce mois
          </Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            minWidth: 200,
          }}>
          <DateInput label={'de'} />
          <DateInput label={'à'} />
        </View>
      </List.Accordion>
    </Surface>
  );
};

export default IncomeFilter;
