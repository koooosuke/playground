import React, { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008080',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
});

interface Props {
  disabled?: boolean;
  label: string;
  onPress: () => void;
}

const Button: FC<Props> = ({ disabled, label, onPress }) => (
  <TouchableOpacity style={[styles.button, disabled && styles.disabledButton]} disabled={disabled} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
