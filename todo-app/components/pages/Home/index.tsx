import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback, useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DETAIL, INPUT } from '../../../constants/path';
import Colors from '../../../constants/colors';
import Todos, { Todo } from '../../organisms/Todos';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: Colors.mainDark,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

const todos = [
  {
    id: '1',
    title: 'Todo',
    detail: 'to do',
    isDone: false,
  },
  {
    id: '2',
    title: 'Done',
    detail: 'done task',
    isDone: true,
  },
];

const Home: FC = () => {
  const { navigate } = useNavigation();
  const onPress = useCallback(() => {
    navigate(INPUT);
  }, [navigate]);
  const gotoDetail = useCallback(
    (state: Todo.State, isEditable: boolean) => {
      navigate(DETAIL, { ...state, isEditable });
    },
    [navigate],
  );
  const actions = useMemo(
    () => ({
      removeTodo: () => {},
      toggleTodo: () => {},
      gotoDetail,
    }),
    [gotoDetail],
  );

  return (
    <View style={styles.container}>
      <Todos isEditable todos={todos} actions={{ ...actions, gotoDetail }} />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <FontAwesome color={Colors.primary} size={24} name="plus" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
