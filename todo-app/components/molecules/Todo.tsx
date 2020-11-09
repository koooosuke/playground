import React, { FC, useMemo } from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.main,
    height: 120,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: Colors.white,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  detail: {
    fontSize: 16,
    color: Colors.white,
  },
});

interface Props {
  onPress: () => void;
  title: string | undefined;
  detail: string | undefined;
  isDone: boolean | undefined;
}

const TodoDisplay: FC<Props> = ({ onPress, title, detail, isDone }) => {
  const labelStyle = useMemo(() => (isDone ? [styles.title, styles.doneText] : styles.title), [isDone]);
  return (
    <TouchableHighlight style={styles.contentContainer} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={labelStyle}>{title}</Text>
          {!!detail && <Text style={styles.detail}>{detail}</Text>}
        </View>
        <FontAwesome name="angle-right" size={32} color={Colors.white} />
      </View>
    </TouchableHighlight>
  );
};

export default TodoDisplay;
