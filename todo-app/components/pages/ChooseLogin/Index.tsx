import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SIGN_IN, SIGN_UP } from '../../../constants/path';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ChooseLogin: FC = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Choose Login</Text>
      <TouchableOpacity onPress={() => navigate(SIGN_IN)}>
        <Text>go to Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(SIGN_UP)}>
        <Text>go to Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ChooseLogin;
