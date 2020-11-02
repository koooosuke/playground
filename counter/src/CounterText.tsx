import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

interface Props {
  count: number;
}

const CounterText: FC<Props> = ({ count }) => (
  <View style={styles.textContainer}>
    {count >= 10 && <Text>you&apos;re great!</Text>}
    <Text style={styles.text}>{count}</Text>
  </View>
);

export default CounterText;
