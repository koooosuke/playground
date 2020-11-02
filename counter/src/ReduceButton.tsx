import React, { FC, useCallback } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008080',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttnText: {
    color: 'white',
    fontSize: 20,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
});

interface Props {
  count: number;
  setCounter: (count: number) => void;
}

const ReduceButton: FC<Props> = ({ count, setCounter }) => {
  const reduceCounter = useCallback(() => {
    setCounter(count - 1);
  }, [count, setCounter]);
  return (
    <TouchableOpacity
      style={[styles.button, count <= 0 && styles.disabledButton]}
      onPress={reduceCounter}
      disabled={count <= 0}
    >
      <Text style={styles.buttnText}>-</Text>
    </TouchableOpacity>
  );
};

export default ReduceButton;
