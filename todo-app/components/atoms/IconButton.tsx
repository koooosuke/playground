import React, { FC } from 'react';
import { IconButton as PaperIconButton } from 'react-native-paper';
import { StyleSheet, ViewStyle } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 0,
    margin: 0,
  },
});

interface Props {
  icon: string;
  onPress: () => void;
  style: ViewStyle | ViewStyle[];
  iconColor?: string;
  size?: number;
}

const IconButton: FC<Props> = ({ icon, onPress, style, iconColor = Colors.white, size = 18 }) => (
  <PaperIconButton onPress={onPress} color={iconColor} size={size} style={[styles.button, style]} icon={icon} />
);

export default IconButton;
