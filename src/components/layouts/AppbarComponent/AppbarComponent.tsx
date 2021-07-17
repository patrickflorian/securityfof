import React from 'react';
import { Dimensions, GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native';
import AppModalButton from '@components/modal/AppBarModalButton';
import { Text, TouchableRipple, Switch, List, Divider } from 'react-native-paper';
import { ThemeContext } from '@context/context';
import {
  Appbar,
  Avatar,
  useTheme,
} from 'react-native-paper';

const AppbarComponent = (props: any) => {
  const { navigation } = props;
  const windowWidth = Dimensions.get('window').width;

  const theme = useTheme();
  const { toggleTheme } = React.useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignSelf: 'stretch',
      //paddingTop: 5
    },
    linearGradiant: {
      width: '100%',
      borderRadius: 5,
    },
    cardContainer: {
      paddingTop: 15,
      width: windowWidth - 5,
      marginHorizontal: 3,
    },
    preference: {
      width: '100%',
      //height:'80%',
    },
  });
  return (
    <Appbar.Header style={{ width: '100%' }} theme={{ ...theme, colors: { ...theme.colors, primary: theme.colors.background } }} >
      <Appbar.Content title="Welcome back" subtitle={"To Secutity FOF"} />
      <AppModalButton>

        <View style={styles.preference}>
          <List.Item
            title="John Doe"
            description="technician"
            titleStyle={{ fontWeight: theme.fonts.medium.fontWeight, fontSize: 13 }}
            descriptionStyle={{ fontWeight: theme.fonts.thin.fontWeight, fontSize: 11 }}
            left={props => <Avatar.Text {...props} style={{ ...props.style, marginVertical: 5, paddingHorizontal: 0 }} size={40} label="JD" />}
            style={{ alignItems: "center", alignContent: 'center', justifyContent: 'center' }}
          />
          <Divider />
          <List.Item
            title="Mes documents"
            left={props => <List.Icon {...props} icon='file-pdf-outline' />}
          />
          <List.Item
            title="Mes formations"
            left={props => <List.Icon {...props} icon='briefcase-variant-outline' />}
          />
          <Divider />
          <List.Item
            title="Dark Theme"
            right={props => <Switch value={theme.dark} pointerEvents="none" color={theme.colors.primary} onValueChange={(value) => toggleTheme()} />}
          />
          <View /* style={{ bottom:0, left:0, width: '100%', position: 'absolute'}} */>
            <Divider />
            <List.Item
              title="Deconnexion"
              right={props => <List.Icon {...props} icon='logout-variant' />}
            //style={{bottom:0, left:0, width: '100%', position: 'absolute'}}
            />
          </View>
        </View>

      </AppModalButton>
    </Appbar.Header>
  );
};

export default AppbarComponent;
