import React, { FC, useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Todos, { Todo, State as TodoState } from '../../organisms/Todos';
import ProgressPanel, { Statistic } from '../../molecules/ProgressPanel';
import { DETAIL } from '../../../constants/path';
import HeaderText from '../../atoms/HeaderText';

const styels = StyleSheet.create({
  headerTextContainer: {
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 8,
  },
});

const props = {
  statistics: {
    numofCompleted: 10,
    numofAll: 25,
    numonUncompleted: 15,
    completedRatio: 0.4,
    uncompletedRatio: 0.6,
  },
  histories: [
    {
      id: '1',
      title: 'Todo1',
      detail: 'Done',
      isDone: true,
    },
    {
      id: '2',
      title: 'Todo2',
      detail: 'Done',
      isDone: true,
    },
  ],
};

interface Props {
  statistics: Statistic;
  histories: TodoState;
}

const Header: FC<Props> = ({ statistics }) => (
  <View>
    <ProgressPanel {...statistics} />
    <View style={styels.headerTextContainer}>
      <HeaderText text="History" />
    </View>
  </View>
);

const Statistics: FC = () => {
  const { navigate } = useNavigation();
  const gotoDetail = useCallback(
    (state: Todo.State, isEditable: boolean) => {
      console.log({
        isEditable,
      });
      navigate(DETAIL, { ...state, isEditable });
    },
    [navigate],
  );
  const actions = useMemo(() => ({ gotoDetail }), [gotoDetail]);

  return <Todos isEditable={false} todos={props.histories} actions={actions} header={<Header {...props} />} />;
};

export default Statistics;
