import React from 'react';
import { View } from 'react-native';
import {List, Surface, useTheme} from 'react-native-paper';
import { color } from 'react-native-reanimated';

const ContentComponent = () => {
  const theme = useTheme();
  return (
    <View style={{alignSelf:"stretch"}}>
        <List.Item
          theme={theme}
          title="Illmité et rapide"
          left={(props) => <List.Icon {...props} icon="flash-outline" />}
        />
        <List.Item
          theme={theme}
          title="Securisé" titleStyle ={{color: theme.colors.text}}
          left={(props) => <List.Icon {...props} icon="shield-check-outline" />}
        />
        <List.Item
          theme={theme}
          title="Assistance client 24h/24 7j/7"
          left={(props) => <List.Icon {...props} icon="phone-check-outline" />}
        />
        <List.Item
          theme={theme}
          title="Aucune publicité"
          left={(props) => <List.Icon {...props} icon="block-helper" />}
        />
        
    </View>
  );
};

export default ContentComponent;
