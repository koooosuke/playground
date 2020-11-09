import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  headerText: {
    color: Colors.white,
    fontSize: 24,
  },
});

interface Props {
  text: string;
}

const HeaderText: FC<Props> = ({ text }) => <Text style={styles.headerText}>{text}</Text>;

export default HeaderText;
