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
});

interface Props {
  count: number;
  setCounter: (count: number) => void;
}

const PlusButton: FC<Props> = ({ count, setCounter }) => {
  const addCounter = useCallback(() => {
    setCounter(count + 1);
  }, [count, setCounter]);
  return (
    <TouchableOpacity style={styles.button} onPress={addCounter}>
      <Text style={styles.buttnText}>+</Text>
    </TouchableOpacity>
  );
};

export default PlusButton;
