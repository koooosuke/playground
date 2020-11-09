import React, { FC, ReactElement } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import * as Todo from './Todo';
import Colors from '../../../constants/colors';

export { Todo };
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  separator: {
    height: 1,
    backgroundColor: Colors.secoundry,
  },
});

export type State = Array<Todo.State>;
interface EditableProps {
  isEditable: true;
  todos: State;
  actions: Todo.EditableActions;
}
interface ReadonlyProps {
  isEditable: false;
  todos: State;
  header: ReactElement;
  actions: Todo.ReadonlyActions;
}

type Props = EditableProps | ReadonlyProps;

const Todos: FC<Props> = props => {
  if (props.isEditable) {
    return (
      <FlatList
        style={styles.container}
        data={props.todos}
        renderItem={({ item }) => <Todo.default isEditable={props.isEditable} state={item} actions={props.actions} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item.id}
      />
    );
  }
  return (
    <FlatList
      style={styles.container}
      data={props.todos}
      renderItem={({ item }) => <Todo.default isEditable={props.isEditable} state={item} actions={props.actions} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={props.header}
    />
  );
};

export default Todos;
