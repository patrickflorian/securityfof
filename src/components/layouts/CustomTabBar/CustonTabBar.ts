import React, {useState} from 'react';

import {TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Card, Divider, Title, useTheme} from 'react-native-paper';

const CustomTab = (props) => {
  const theme = useTheme();
  const [indicatorContainerProps, setIndicatorContainerProps] = useState({});
  const [indicatorProps, setIndicatorProps] = useState({});
  const {state, descriptors, navigation, position} = props;

  //const activeTabIndex = navigation.state.index;
  const styles = StyleSheet.create({
    containerHeader: {
      //flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: theme.colors.text,
      borderWidth: 1,
      borderRadius: 5,
      margin: 20,
    },
    textContainer: {
      marginTop: 70,
    },
    icon: {
      marginTop: 20,
      //backgroundColor: 'transparent',
      borderRadius: 0,
      /* borderBottomColor: theme.colors.primary,
      borderBottomWidth: 5, */
      padding: 0,
    },
    tabContainer: {
      backgroundColor: 'transparent',
      borderTopWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      height: 40,
    },
    card: {
      alignSelf: 'stretch',
      paddingLeft: 8,
      paddingRight: 8,
      elevation: 4,
      borderStyle: 'solid',
      borderRadius: 12,
      //borderWidth: 1,
      marginTop: 5,
      marginHorizontal: 6,
    },
    headerText: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignContent: 'stretch',
    },
    headerTextRight: {
      alignSelf: 'flex-end',
    },
    headerTextLeft: {
      alignSelf: 'flex-end',
    },
    /* indicator: {
      height: 5,
      width: 70,
      backgroundColor: theme.colors.primary,
    },
    indicatorContainer: {
      alignSelf: 'flex-end',
      backgroundColor: theme.colors.primary,
    }, */
  });
  return (
    <Card style={styles.card}>
      {/*  <View style={styles.textContainer}>
        <Text style={styles.textWhite}>Holi</Text>
        <Text style={styles.textWhite}>1,004 tweets</Text>
      </View> */}
      <Card.Title
        style={styles.headerText}
        title="solde"
        right={() => (
          <Text
            style={{
              color: theme.colors.primary,
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            9999$
          </Text>
        )}
      />
      <Card.Content>
        <View style={styles.tabContainer}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            const inputRange = state.routes.map((_, i) => i);
            const opacity = Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map((i) => (i === index ? 1 : 0.5)),
            });

            const color = isFocused
              ? theme.colors.primary
              : theme.colors.disabled;

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{flex: 1}}>
                <Animated.View style={{opacity}}>{label}</Animated.View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Card.Content>
    </Card>
  );
};

export default CustomTab;
