import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  row: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 50,
    flexDirection: 'row',
    marginBottom: 10,
  },
  labelContainer: {
    minWidth: 100,
  },
  labelText: {
    color: Colors.white,
    fontSize: 18,
  },
  valueContainer: {
    flexShrink: 1,
    paddingLeft: 10,
  },
  valueText: {
    color: Colors.white,
    fontSize: 16,
  },
});

interface Props {
  label: string;
  value: string | number | null;
}

const LabelValueContainer: FC<Props> = ({ label, value = '' }) => (
  <View style={styles.row}>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{label}</Text>
    </View>
    <View style={styles.valueContainer}>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  </View>
);

export default LabelValueContainer;
