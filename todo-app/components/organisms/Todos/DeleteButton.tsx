import React, { FC, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import IconButton from '../../atoms/IconButton';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.caution,
  },
});

export interface RemoveTodo {
  (id: string): void;
}

interface Props {
  state: {
    id: string;
  };
  actions: {
    removeTodo: RemoveTodo;
  };
}

const Component: FC<Props> = ({ state: { id }, actions: { removeTodo } }) => {
  const onPress = useCallback(() => {
    removeTodo(id);
  }, [id, removeTodo]);

  return <IconButton onPress={onPress} icon="delete" style={styles.button} />;
};

export default Component;
