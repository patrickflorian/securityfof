import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Avatar,
  Divider,
  Headline,
  IconButton,
  Surface,
  Title,
  Text,
  useTheme,
  Subheading,
} from 'react-native-paper';
import PropTypes from 'prop-types';


/**
 * 
 * @param {title, subtitle, icon, hasActions, actions, onPress} props 
 */
const CustomCard = (props) => {
  const {title, subtitle, icon, hasActions,color, actions, onPress} = props;
  const theme = useTheme();
  const styles = StyleSheet.create({
    surface: {
      elevation: 4,
      borderRadius: 120,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.surface,
    },
    icon: {
      marginLeft: -30,
      backgroundColor: theme.colors.background,
      borderRadius: 5,
      elevation: 1,
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: color,
    },
    textView: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    bottom: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: theme.colors.surface,
    },
    title: {fontWeight: 'bold', fontSize: 26},
  });

  return (
    <TouchableOpacity onPress={onPress} style={[{marginLeft:60, marginVertical:5},props.style]}>
      <Surface style={styles.surface}>
        <View style={styles.container}>
          <Avatar.Icon
            icon={icon}
            color={color}
            size={50}
            style={styles.icon}
          />

          <View style={styles.textView}>
            <Subheading >{title}</Subheading>
            <Title>{subtitle}</Title>
          </View>
        </View>
        <Divider />
        {hasActions && (
          <View style={styles.bottom}>
            <IconButton icon="history" color={theme.colors.disabled} />
            <IconButton
              icon="plus"
              color={theme.colors.disabled}
              style={{
                borderLeftWidth: 0.5,
                borderLeftColor: theme.colors.disabled,
                borderRadius: 0,
              }}
            />
          </View>
        )}
      </Surface>
    </TouchableOpacity>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  hasActions: PropTypes.bool,
  actions: PropTypes.func,
};

export default CustomCard;
