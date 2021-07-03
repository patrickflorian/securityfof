import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Caption, Divider, Headline, Subheading, Surface, Text, Title} from 'react-native-paper';
import PropTypes from 'prop-types';

const CardComponent = (props) => {
  const {title, subtitle, value, period, type} = props;
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch',
      justifyContent: 'center',
      minWidth: 140,
      minHeight: 200,
      elevation: 3,
      marginRight: 15,
    },
    header: {
      flex: 0.8,
      backgroundColor: type
        ? type === 'primary'
          ? theme.colors.primary
          : type === 'secondary'
          ? theme.colors.secondary
          : theme.colors.background
        : theme.colors.background,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      flex: 0.6,
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      color: theme.colors.primary,
    },
    title: {
      color: type
      ? type === 'primary'
        ? theme.colors.background
        : type === 'secondary'
        ? theme.colors.surface
        : theme.colors.text
      : theme.colors.text,
    },
    subtitle: {
      color: type
      ? type === 'primary'
        ? theme.colors.background
        : type === 'secondary'
        ? theme.colors.surface
        : theme.colors.text
      : theme.colors.text,
    },
    divider: {
      backgroundColor: '#000000',
      height: 10,
    },
  });
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Surface style={styles.container} {...props}>
        <View style={styles.header}>
          <Headline style={styles.title}>{title}</Headline>
          <Subheading style={styles.subtitle}>{subtitle}</Subheading>
        </View>
        <View style={styles.body}>
          <Title >{value}</Title>
          <Caption>{period}</Caption>
        </View>
      </Surface>
    </TouchableOpacity>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default CardComponent;
