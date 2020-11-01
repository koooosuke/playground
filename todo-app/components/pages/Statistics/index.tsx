import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Statistics: FC = () => (
  <View style={styles.container}>
    <Text>Statistics</Text>
  </View>
);

export default Statistics;
