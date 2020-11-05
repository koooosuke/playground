import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.main,
  },
  text: {
    color: Colors.white,
  },
});

const Initial: FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Initial</Text>
  </View>
);

export default Initial;
