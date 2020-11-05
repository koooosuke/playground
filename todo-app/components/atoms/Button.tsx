import React, { FC } from 'react';
import { StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.white,
  },
});

interface Props {
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  label?: string;
  color?: string;
  disabled?: boolean;
  disabledColor?: string;
  icon?: string;
}

const Button: FC<Props> = ({
  onPress,
  style,
  textStyle,
  label,
  color = Colors.secoundry,
  disabled,
  disabledColor = Colors.mainLight,
  icon,
}) => (
  <PaperButton
    mode="contained"
    onPress={onPress}
    style={style}
    disabled={disabled}
    contentStyle={{ backgroundColor: disabled ? disabledColor : color }}
    icon={icon}
  >
    {label && <Text style={[styles.text, textStyle]}>{label}</Text>}
  </PaperButton>
);

export default Button;
