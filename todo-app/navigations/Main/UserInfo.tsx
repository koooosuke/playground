import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { USER_INFO } from '../../constants/path';
import { UserInfo } from '../../components/pages';
import { HeaderLeft } from './Header';

const Stack = createStackNavigator();

const UserInfoNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name={USER_INFO} component={UserInfo} options={{ headerLeft: () => <HeaderLeft /> }} />
  </Stack.Navigator>
);

export default UserInfoNavigator;
