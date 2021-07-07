import * as React from "react";
import { SafeAreaView, StyleSheet, Dimensions, View, Animated, TouchableOpacity } from "react-native";
import * as shape from "d3-shape";
import * as Svg from "react-native-svg";
import { TabBarProps } from "react-native-tab-view";
import { BottomTabBarOptions, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text } from 'react-native-paper';
import StaticTabBar from "./StaticTabBar";

const AnimatedSvg = Animated.createAnimatedComponent(Svg.Svg);
const { width } = Dimensions.get("window");
const height = 64;
const { Path } = Svg;
const tabs = [
    {
        name: "grid",
    },
    {
        name: "list",
    },
    {
        name: "repeat",
    },
    {
        name: "map",
    },
    {
        name: "user",
    },
];
const tabWidth = width / tabs.length;
const backgroundColor = "white";

const getPath = (): string => {
    const left = shape.line().x((d: any) => d.x).y((d: any) => d.y)([
        { x: 0, y: 0 },
        { x: width, y: 0 },
    ]);
    const tab = shape.line().x((d: any) => d.x).y((d: any) => d.y).curve(shape.curveBasis)([
        { x: width, y: 0 },
        { x: width + 5, y: 0 },
        { x: width + 10, y: 10 },
        { x: width + 15, y: height },
        { x: width + tabWidth - 15, y: height },
        { x: width + tabWidth - 10, y: 10 },
        { x: width + tabWidth - 5, y: 0 },
        { x: width + tabWidth, y: 0 },
    ]);
    const right = shape.line().x((d: any) => d.x).y((d: any) => d.y)([
        { x: width + tabWidth, y: 0 },
        { x: width * 2, y: 0 },
        { x: width * 2, y: height },
        { x: 0, y: height },
        { x: 0, y: 0 },
    ]);
    return `${left} ${tab} ${right}`;
};
const d = getPath();
export interface TabbarProps extends BottomTabBarProps<BottomTabBarOptions> {

}

// eslint-disable-next-line react/prefer-stateless-function
export default class Tabbar extends React.PureComponent<TabbarProps> {
    value = new Animated.Value(0);
    render() {
        const { value } = this;

        const translateX = value.interpolate({
            inputRange: [0, width],
            outputRange: [-width, 0],
        });
        return (
            <>
                <View {...{ height, width }}>
                    <AnimatedSvg width={width * 2} {...{ height }} style={{ transform: [{ translateX }] }}>
                        <Path fill={backgroundColor} {...{ d }} />
                    </AnimatedSvg>
                    <View style={StyleSheet.absoluteFill}>
                        <StaticTabBar {...{value }} navigation={this.props} />
                    </View>
                </View>
                <SafeAreaView style={styles.container} />
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor,
    },
});