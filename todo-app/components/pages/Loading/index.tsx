import React, { FC, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as UiContext from '../../../contexts/ui';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.main,
  },
  text: {
    color: Colors.white,
  },
});

const ChangeStateButton: FC<{ state: UiContext.Status }> = ({ state }) => {
  const { setApplicationState } = useContext(UiContext.Context);
  return (
    <TouchableOpacity onPress={() => setApplicationState(state)}>
      <Text style={styles.text}>Change state to {state} </Text>
    </TouchableOpacity>
  );
};

const Loading: FC = () => (
  <View style={styles.container}>
    <ChangeStateButton state={UiContext.Status.AUTHORIZED} />
    <ChangeStateButton state={UiContext.Status.UN_AUTHORIZED} />
    <ChangeStateButton state={UiContext.Status.FIRST_OPEN} />
  </View>
);

export default Loading;
