import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { USER_INFO } from '../../constants/path';
import { UserInfo } from '../../components/pages';
import { HeaderLeft, headerStyle, headerTintColor } from '../Header';
import Colors from '../../constants/colors';

const cardStyle = {
  backgroundColor: Colors.main,
};
const Stack = createStackNavigator();

const UserInfoNavigator: FC = () => (
  <Stack.Navigator screenOptions={{ cardStyle, headerStyle, headerTintColor }}>
    <Stack.Screen
      name={USER_INFO}
      component={UserInfo}
      options={{ headerLeft: () => <HeaderLeft />, title: 'User info' }}
    />
  </Stack.Navigator>
);

export default UserInfoNavigator;
