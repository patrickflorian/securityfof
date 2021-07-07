import * as React from "react";
import {
  View, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TabbarProps } from "./TabBar";

const { width } = Dimensions.get("window");

interface Tab {
  name: string;
}

interface StaticTabbarProps {
  value: Animated.Value;
  navigation: TabbarProps;
}

export default class StaticTabbar extends React.PureComponent<StaticTabbarProps> {
  values: Animated.Value[] = [];

  constructor(props: StaticTabbarProps) {
    super(props);
    this.values = props.navigation.state.routes.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0));
  }



  render() {
    const { value } = this.props;
    const { state, descriptors, navigation } = this.props.navigation;
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }

    return (
      <>
      <View style={{ flexDirection: 'row' }}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;
            
            const isFocused = state.index === index;
            
            const TabIcon =options.tabBarIcon !== undefined
              ? options.tabBarIcon
              : (props: any)=><Icon name="home" style={{fontSize: 24}} />
              

            const tabWidth = width / state.routes.length;
            const cursor = tabWidth * index;
            const opacity = value.interpolate({
              inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
              outputRange: [1, 0, 1],
              extrapolate: "clamp",
            });
            const translateY = this.values[index].interpolate({
              inputRange: [0, 1],
              outputRange: [64, 0],
              extrapolate: "clamp",
            });
            const opacity1 = this.values[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            });

            const onPress = (index: number) => {
              const { value } = this.props;
              const tabWidth = width / state.routes.length;
              Animated.sequence([
                Animated.parallel(
                  this.values.map(v => Animated.timing(v, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                  })),
                ),
                Animated.parallel([
                  Animated.spring(value, {
                    toValue: tabWidth * index,
                    useNativeDriver: true,
                  }),
                  Animated.spring(this.values[index], {
                    toValue: 1,
                    useNativeDriver: true,
                  }),
                ]),
              ]).start();
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <React.Fragment key={ index }>
                <TouchableWithoutFeedback onPress={() => onPress(index)}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onLongPress={onLongPress}>
                  <Animated.View style={[styles.tab, { opacity }]}>
                    <Icon name={route.name} color="black" size={25} />
                  </Animated.View>
                </TouchableWithoutFeedback>
                <Animated.View
                  style={{
                    position: "absolute",
                    top: -8,
                    left: tabWidth * index,
                    width: tabWidth,
                    height: 64,
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: opacity1,
                    transform: [{ translateY }],
                  }}
                >
                  <View style={styles.activeIcon}>
                    {TabIcon}
                  </View>
                </Animated.View>
              </React.Fragment>
            );
          })}</View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 64,
  },
  activeIcon: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});