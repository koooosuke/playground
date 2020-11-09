import React, { FC, useCallback, useContext, useMemo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../../constants/colors';
import { Button, Avatar, LabelValueContainer } from '../../atoms';
import formatDate from '../../../lib/format-date';
import { UiContext } from '../../../contexts';
import { Status } from '../../../contexts/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  nameText: {
    color: Colors.white,
    fontSize: 20,
    marginTop: 5,
  },
  button: {
    marginTop: 30,
  },
});

const userState = {
  name: 'test',
  createdAt: '2020/01/01',
  mailAddress: 'text@rn.com',
};

const UserInfo: FC = () => {
  const { setApplicationState } = useContext(UiContext);
  const signOut = useCallback(async () => {
    setApplicationState(Status.UN_AUTHORIZED);
  }, [setApplicationState]);

  const source = useMemo(() => require('../../../assets/person.png'), []);

  return (
    <View style={styles.container}>
      <View style={styles.imageIconContainer}>
        <Avatar source={source} />
        <Text style={styles.nameText}>{userState.name}</Text>
      </View>
      <LabelValueContainer label="e-mail" value={userState.mailAddress} />
      <LabelValueContainer
        label="registereAt"
        value={userState.createdAt && formatDate(new Date(userState.createdAt))}
      />
      <Button style={styles.button} onPress={signOut} label="Sign Out" />
    </View>
  );
};

export default UserInfo;
