import React, { FC } from 'react';
import { ViewStyle, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import Colors from '../../constants/colors';

interface Props {
  label: string;
  value: string;
  onChangeText?: (str: string) => void;
  style?: ViewStyle;
  autoCompleteType?:
    | 'off'
    | 'username'
    | 'password'
    | 'email'
    | 'name'
    | 'tel'
    | 'street-address'
    | 'postal-code'
    | 'cc-number'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year';
  secureTextEntry?: boolean;
  disabled?: boolean;
}

const theme = {
  dark: true,
  colors: {
    primary: Colors.primary,
    background: Colors.main,
    text: Colors.white,
    placeholder: Colors.primary,
  },
};

const TextField: FC<Props> = ({
  label,
  value,
  onChangeText = () => {},
  style,
  autoCompleteType,
  secureTextEntry,
  disabled,
}) => (
  <TextInput
    label={label}
    value={value}
    disabled={disabled}
    onChangeText={onChangeText}
    mode="outlined"
    theme={theme}
    style={style}
    autoCompleteType={autoCompleteType}
    autoCapitalize="none"
    secureTextEntry={secureTextEntry}
  />
);

export const dismiss = (): void => {
  Keyboard.dismiss();
};

export default TextField;
