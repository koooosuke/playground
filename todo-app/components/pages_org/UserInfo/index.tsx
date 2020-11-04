import React, { FC, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context, Status } from '../../../contexts/ui';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const UserInfo: FC = () => {
  const { setApplicationState } = useContext(Context);
  return (
    <View style={styles.conatiner}>
      <Text>UserInfo</Text>
      <TouchableOpacity onPress={() => setApplicationState(Status.UN_AUTHORIZED)}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
