import React, { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 20,
  },
})

interface Props {
  count: number
  actions: {
    increment: () => void
    decrement: () => void
  }
}

const Counter: FC<Props> = ({ count, actions: { increment, decrement } }) => (
  <View style={styles.container}>
    <Text style={styles.counter}>{count}</Text>
    <Button onPress={increment} title="increment" />
    <Button onPress={decrement} title="decrement" />
  </View>
)

export default Counter
