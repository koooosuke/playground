import React, { FC, useContext } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useControlledComponent } from '../../../lib/hooks';
import { Button, dismiss, TextField } from '../../atoms';
import SigInWithGoogle from './SignInWithGoogle';
import { Context, Status } from '../../../contexts/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  text: {
    marginVertical: 20,
  },
  button: {
    marginTop: 50,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

const SignIn: FC = () => {
  const { setApplicationState } = useContext(Context);
  const mainAddress = useControlledComponent('');
  const password = useControlledComponent('');

  return (
    <TouchableWithoutFeedback onPress={dismiss}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextField
            label="email"
            value={mainAddress.value}
            onChangeText={mainAddress.onChangeText}
            style={styles.text}
            autoCompleteType="email"
          />
          <TextField
            label="password"
            value={password.value}
            onChangeText={password.onChangeText}
            style={styles.text}
            autoCompleteType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <SigInWithGoogle />
          <Button style={styles.button} onPress={() => setApplicationState(Status.AUTHORIZED)} label="SignIn" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
