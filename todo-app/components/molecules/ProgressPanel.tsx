import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Progress } from '../atoms';
import { HeaderText } from '../atoms';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  ratioArea: {
    padding: 20,
  },
  graphContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerTextContainer: {
    paddingLeft: 20,
    marginBottom: 8,
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    marginVertical: 3,
  },
  numberText: {
    marginLeft: 8,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    flexDirection: 'row',
  },
});

export interface Statistic {
  numofCompleted: number;
  numofAll: number;
  numonUncompleted: number;
  completedRatio: number;
  uncompletedRatio: number;
}

const ProgressPanel: FC<Statistic> = ({
  numofCompleted,
  numofAll,
  numonUncompleted,
  completedRatio,
  uncompletedRatio,
}) => (
  <View style={styles.ratioArea}>
    <View style={styles.headerTextContainer}>
      <HeaderText text="Progress" />
    </View>
    <View style={styles.graphContainer}>
      <Progress value={completedRatio} />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.text}>Done</Text>
          <Text style={styles.text}>UnDone</Text>
        </View>
        <View>
          <Text style={[styles.text, styles.numberText]}>{completedRatio}</Text>
          <Text style={[styles.text, styles.numberText]}>{uncompletedRatio}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default ProgressPanel;
