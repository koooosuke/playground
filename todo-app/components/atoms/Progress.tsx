import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  progress: {
    height: 200,
    width: 200,
  },
});

interface Props {
  value: number;
}

const Progress: FC<Props> = ({ value }) => (
  <ProgressCircle style={styles.progress} progress={value} progressColor={Colors.primary} />
);

export default Progress;
