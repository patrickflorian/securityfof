import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme, Button} from 'react-native-paper';
import PropTypes from 'prop-types';

import buttonstyles from './ButtonStyle.android';


const ButtonComponent = (props: any) => {
  const theme = useTheme();
  const styles = StyleSheet.create(buttonstyles(theme));
  const {filled= false, outlined= false, borderless= false, type, full = false, rounded= false} = props;
  return (
    <Button
    {...props}
      style={[
        /* props.style, */
        type
          ? type === 'primary'
            ? filled
              ? styles.buttonPrimaryFilled
              : outlined
              ? styles.buttonPrimaryOutlined
              : borderless
              ? styles.buttonPrimaryBorderless
              : styles.buttonPrimary
            : type === 'secondary'
            ? filled
              ? styles.buttonSecondaryFilled
              : outlined
              ? styles.buttonSecondaryOutlined
              : borderless
              ? styles.buttonSecondaryBorderless
              : styles.buttonSecondary
            : filled
            ? styles.buttonBaseFilled
            : outlined
            ? styles.buttonBaseOutlined
            :borderless
            ? styles.buttonBaseBorderless
            : styles.baseButton
          : filled
          ? styles.buttonBaseFilled
          : outlined
          ? styles.buttonBaseOutlined
          : borderless
          ? styles.buttonBaseBorderless
          :styles.baseButton,
        full ? styles.buttonFullLength : '',
        rounded ? styles.buttonRounded : '',
      ]}
      color={
        type
          ? type === 'primary'
            ? filled
              ? styles.buttonPrimaryFilled.color
              : outlined
              ? styles.buttonPrimaryOutlined.color
              :borderless
              ? styles.buttonPrimaryBorderless.color
              : styles.buttonPrimary.color
            : type === 'secondary'
            ? filled
              ? styles.buttonSecondaryFilled.color
              : outlined
              ? styles.buttonSecondaryOutlined.color
              :borderless
              ? styles.buttonSecondaryBorderless.color
              : styles.buttonSecondary.color
            : filled
            ? styles.buttonBaseFilled.color
            : outlined
            ? styles.buttonBaseOutlined.color
            :borderless
            ? styles.buttonBaseBorderless.color
            : styles.baseButton.color
          : filled
          ? styles.buttonBaseFilled.color
          : outlined
          ? styles.buttonBaseOutlined.color
          : borderless
          ? styles.buttonBaseBorderless.color
          :styles.baseButton.color
      }
      >
      {props.children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string,
  filled: PropTypes.bool,
  outlined: PropTypes.bool,
  full: PropTypes.bool,
  rounded: PropTypes.bool,
  ...Button.propTypes,
};

export default ButtonComponent;
