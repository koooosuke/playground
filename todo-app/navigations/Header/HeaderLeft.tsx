import React, { FC, useCallback } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/routers';
import Colors from '../../constants/colors';

const HeaderLeft: FC = () => {
  const { dispatch } = useNavigation();
  const onPress = useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, [dispatch]);

  return <FontAwesome.Button name="bars" color={Colors.white} onPress={onPress} />;
};

export default HeaderLeft;
