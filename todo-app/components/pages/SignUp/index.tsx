import React, { FC, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Context, Status } from '../../../contexts/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SignUp: FC = () => {
  const { setApplicationState } = useContext(Context);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setApplicationState(Status.UN_AUTHORIZED)}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
