import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {HelperText, TextInput, useTheme} from 'react-native-paper';
import DateInput from '../DateInput/DateInput';
import {Select} from '../Select';

export const renderField = ({meta, input, type, ...inputProps}) => {
  const {touched, error, warning, asyncValidating} = meta;
  const theme = useTheme();

  const renderInput =(type: string)=>{
    let inputComponent;
    switch (type) {
            case 'select':
              inputComponent = <Select 
              onSelect={input.onChange}
              onBlur={input.onBlur}
              onFocus={input.onFocus}
              defaultValue={input.value}
              underlineColor={error && theme.colors.notification}
              {...inputProps}/>
              break;
            case 'date':
              inputComponent = <DateInput 
              onChange={input.onChange}
              onBlur={input.onBlur}
              onFocus={input.onFocus}
              //defaultValue={input.value}
              underlineColor={error && theme.colors.notification}
              {...inputProps}/>
              break;
          
            default: inputComponent = <TextInput
            onChange={input.onChange}
            onChangeText={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            defaultValue={input.value}
            underlineColor={error && theme.colors.notification}
            {...inputProps}
          />
              break;
          }
          return inputComponent;
  }
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginHorizontal: 5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {renderInput(type)}
      </View>
      
      {touched &&
        ((error && <HelperText type={'error'}>{error}</HelperText>) ||
          (warning && (
            <HelperText type="info" style={{color: 'orange'}}>{warning}</HelperText>
          )) ||
          (asyncValidating && (
            <HelperText  type="info" style={{color: 'orange'}}>Validating...</HelperText>
          )))}
    </View>
  );
};
