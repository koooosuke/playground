import React, { FC, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import IconButton from '../../atoms/IconButton';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
  },
  done: {
    backgroundColor: Colors.mainDark,
  },
});

export interface ToggleTodo {
  (id: string): void;
}

interface Props {
  state: {
    id: string;
    isDone?: boolean;
  };
  actions: {
    toggleTodo: ToggleTodo;
    closeRow: () => void;
  };
}

const Component: FC<Props> = ({ state: { id, isDone }, actions: { toggleTodo, closeRow } }) => {
  const onPress = useCallback(async () => {
    toggleTodo(id);
    closeRow();
  }, [id, closeRow, toggleTodo]);

  return (
    <IconButton onPress={onPress} icon={isDone ? 'restore' : 'check'} style={isDone ? styles.done : styles.button} />
  );
};

export default Component;
