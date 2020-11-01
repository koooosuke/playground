import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home: FC = () => (
  <View style={styles.container}>
    <Text>Home</Text>
  </View>
);

export default Home;
