import React, {useState} from 'react';
import {Checkbox, List, Surface, Switch, useTheme} from 'react-native-paper';
import {color} from 'react-native-reanimated';

const UserPreferencesComponent = () => {
  const [mode, setMode] = useState(false);
  const [notification, setNotification] = useState(true);
  const theme = useTheme();
  return (
    <List.Section title="Preferences et Apparences">
      <List.Item
        theme={theme}
        title="Notifications"
        left={(props) => <List.Icon {...props} icon="bell" />}
        right={(props) => <Checkbox status={notification?'checked':'unchecked'} onPress={()=>setNotification(!notification)} />}
      />
      <List.Item
        theme={theme}
        title="Mode sombre"
        titleStyle={{color: theme.colors.text}}
        left={(props) => <List.Icon {...props} icon="moon-waning-crescent" />}
        right={(props) => <Switch value={mode} onValueChange={value=>setMode(value)}/>}
      />
    </List.Section>
  );
};

export default UserPreferencesComponent;
