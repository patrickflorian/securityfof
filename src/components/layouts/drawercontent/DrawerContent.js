import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Avatar, Divider, Drawer, List, Surface, Switch, Text, TouchableRipple, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '@context/context';
import routenames from '@routes/index';
import {screens} from '@routes/navigators/home/HomeNavigator';



const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});


const DrawerContent = (props) => {
  const theme = useTheme();
  const { toggleTheme } = React.useContext(ThemeContext);
  const {navigation} = props;
  return (<DrawerContentScrollView {...props}>
      <Surface style={{backgroundColor: theme.colors.primary}}>
        <List.Item
          title={'Utilisateur 1'}
          //onPress={()=>props.navigation.}
          description={'Artisan'}
          left={({color, style}) => (
            <Avatar.Icon icon="account" color={color} style={style} />
          )}
        />
      </Surface>
      <Divider />
      {screens
        .filter(
          (screen) =>
            /* screen.routename !== routenames.HOME && */
            screen.routename !== routenames.SUSCRIPTION,
        )
        .map((screen, index) => {
          return (
            <DrawerItem
              key={index}
              focused={props.state.index == index}
              activeBackgroundColor={theme.colors.primary}
              inactiveBackgroundColor={'transparent'}
              activeTintColor={'white'}
              inactiveTintColor={theme.colors.text}
              onPress={() => navigation.navigate(screen.routename)}
              label={screen.label}
              icon={({color, size}) => (
                <Icon
                  name={screen.icon}
                  style={{fontSize: size, color: color}}
                />
              )}
              {...props}
            />
          );
        })}

      {/* <DrawerItemList {...props} /> */}
      <Divider />
      {/* <DrawerItem
        label={'Abonnements'}
        icon={({focused, color, size}) => (
          <Icon
            name="cog"
            style={{fontSize: size, color: color}}
          />
        )}
      /> */}
      <DrawerItem
        label={'Catalogue'}
        icon={({color, size}) => (
          <Icon
            name="shopping-outline"
            style={{fontSize: size, color: color}}
          />
        )}
        {...props}
      />
      <DrawerItem
        label={'Employés'}
        icon={({color, size}) => (
          <Icon
            name="account-group-outline"
            style={{fontSize: size, color: color}}
          />
        )}
        {...props}
      />
      <Divider />
      <DrawerItem
        label={'Parametres'}
        icon={({color, size}) => (
          <Icon name="cog-outline" style={{fontSize: size, color: color}} />
        )}
        {...props}
      />
      <DrawerItem
        label={'Deconnexion'}
        icon={({color, size}) => (
          <Icon
            name="account-arrow-left-outline"
            style={{fontSize: size, color: color}}
          />
        )}
        {...props}
      />
      <Drawer.Section title="Preferences">
        <TouchableRipple onPress={() => {toggleTheme()}}>
            <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                    <Switch value={theme.dark} color={theme.colors.primary}/>
                </View>
            </View>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
