import React, { FC } from 'react';
import { Avatar as PaperAvator } from 'react-native-paper';
import { ImageSourcePropType, ViewStyle } from 'react-native';

interface Props {
  size?: number;
  source: ImageSourcePropType;
  style?: ViewStyle | ViewStyle[];
}

const Avator: FC<Props> = ({ size = 220, source, style }) => (
  <PaperAvator.Image size={size} source={source} style={style} />
);

export default Avator;
