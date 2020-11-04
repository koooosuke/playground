import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Initial: FC = () => (
  <View style={styles.container}>
    <Text>Initial</Text>
  </View>
);

export default Initial;
