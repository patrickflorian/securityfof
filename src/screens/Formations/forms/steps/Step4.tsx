import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Caption,
  Subheading,
  Surface,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import { StepComponentProps } from '@components/stepper/Step';

/**
 *
 * @param {*} props
 */
const DocumentIdentificationComponent = (props: StepComponentProps) => {
  //const {submitting} = props;
  const [selected, setSelected] = useState('');
  const theme = useTheme();

  const options = [
    {
      value: 'a',
      title: 'a)	le caractère de l’intervenant, la sur confiance de ce dernier ;',
    },
    {
      value: 'b',
      title: 'b)	l’inexpérience ',
    },
    {
      value: 'c',
      title: 'c)	la pression de l’entreprise qui incite à intervenir dans l’urgence',
    },
  ];

  const styles = StyleSheet.create({
    defaultOption: { marginTop: 10, alignItems: 'flex-start', alignSelf: 'stretch', width: '100%', paddingHorizontal: 3 },
    activeOption: { marginTop: 10, alignItems: 'flex-start', alignSelf: 'stretch', width: '100%', paddingHorizontal: 3, backgroundColor: 'red' },
  })
  return (
    <View
      style={{
        //flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 35,
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <Title >Question 4 </Title>
      <Subheading>Les facteurs pouvant poussés à la précipitation sont :</Subheading>
      <Caption>(cliquez sur la bonne reponse)</Caption>
      <View style={{ marginTop: 30, alignItems: 'flex-start' }}>
        {options.map((option) => {
          return (
            <TouchableRipple key={option.value} onPress={() => { setSelected(option.value) }}>
              <Surface style={(selected === option.value) ? styles.activeOption : styles.defaultOption} >
                <Caption style={{ color: theme.colors.text }}>{option.title}</Caption>
              </Surface>
            </TouchableRipple>
          )
        })}
      </View>
    </View>
  );
};


export default DocumentIdentificationComponent;