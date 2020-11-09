import React, { FC, useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import Colors from '../../../constants/colors';
import * as DoneButton from './DoneButton';
import * as DeleteButton from './DeleteButton';
import TodoDisplay from '../../molecules/Todo';
export { DoneButton, DeleteButton };
export interface GotoDetail {
  (state: State, isEditable: boolean): void;
}

export interface State {
  id: string;
  title: string;
  detail?: string;
  isDone?: boolean;
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.main,
    height: 120,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export interface EditableActions {
  toggleTodo: DoneButton.ToggleTodo;
  removeTodo: DeleteButton.RemoveTodo;
  gotoDetail: GotoDetail;
}

interface EditableProps {
  isEditable: true;
  state: State;
  actions: EditableActions;
}

const EditableRow: FC<EditableProps> = ({ state, isEditable, actions: { gotoDetail, toggleTodo, removeTodo } }) => {
  const rowRef = useRef<SwipeRow<View>>(null);
  const closeRow = useCallback(() => {
    rowRef.current?.closeRow();
  }, [rowRef]);

  const toggleActions = useMemo(() => {
    return {
      toggleTodo,
      closeRow,
    };
  }, [closeRow, toggleTodo]);

  const removeActions = useMemo(() => {
    return {
      removeTodo,
      closeRow,
    };
  }, [closeRow, removeTodo]);

  const onPress = useCallback(() => {
    gotoDetail(state, isEditable);
  }, [state, isEditable, gotoDetail]);

  return (
    <SwipeRow
      disableLeftSwipe={!isEditable}
      disableRightSwipe={!isEditable}
      rightOpenValue={-80}
      leftOpenValue={80}
      ref={rowRef}
    >
      <View style={styles.contentContainer}>
        <DoneButton.default state={state} actions={toggleActions} />
        <DeleteButton.default state={state} actions={removeActions} />
      </View>
      <TodoDisplay onPress={onPress} title={state.title} detail={state.detail} isDone={state.isDone} />
    </SwipeRow>
  );
};

export interface ReadonlyActions {
  gotoDetail: GotoDetail;
}

interface ReadonlyProps {
  isEditable: false;
  state: State;
  actions: ReadonlyActions;
}

const ReadonlyRow: FC<ReadonlyProps> = ({ isEditable, state, actions: { gotoDetail } }) => {
  const onPress = useCallback(() => {
    gotoDetail(state, isEditable);
  }, [state, isEditable, gotoDetail]);

  return <TodoDisplay onPress={onPress} title={state.title} detail={state.detail} isDone={state.isDone} />;
};

type Props = EditableProps | ReadonlyProps;

const Component: FC<Props> = props => {
  if (props.isEditable) {
    return <EditableRow {...props} />;
  }
  return <ReadonlyRow {...props} />;
};

export default Component;
