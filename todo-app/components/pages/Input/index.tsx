import React, { FC, useCallback } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import IconButton from '../../atoms/IconButton';
import { useNavigation } from '@react-navigation/native';
import { TextField, Button, dismiss } from '../../atoms';
import Colors from '../../../constants/colors';
import { useControlledComponent } from '../../../lib/hooks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: Colors.main,
  },
  text: {
    marginBottom: 16,
  },
  button: {
    marginTop: 20,
  },
  IconButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

const Input: FC = () => {
  const title = useControlledComponent('');
  const detail = useControlledComponent('');

  const { goBack } = useNavigation();
  const back = useCallback(() => {
    goBack();
  }, [goBack]);
  const addTodo = useCallback(() => {
    back();
    title.onChangeText('');
    detail.onChangeText('');
  }, [back, title, detail]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.container}>
          <IconButton icon="close" size={30} iconColor={Colors.primary} onPress={back} style={styles.IconButton} />
          <TextField label="Title" value={title.value} onChangeText={title.onChangeText} style={styles.text} />
          <TextField label="Detail" value={detail.value} onChangeText={detail.onChangeText} style={styles.text} />
          <Button onPress={addTodo} label="Add" style={styles.button} disabled={!title.value} />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Input;
