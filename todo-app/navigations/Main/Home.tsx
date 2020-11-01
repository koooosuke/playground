import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAIL, HOME } from '../../constants/path';
import { Detail, Home } from '../../components/pages';
import { HeaderLeft } from './Header';

const Stack = createStackNavigator();

const HomeNavigator: FC = () => (
  <Stack.Navigator initialRouteName={HOME}>
    <Stack.Screen name={HOME} component={Home} options={{ headerLeft: () => <HeaderLeft /> }} />
    <Stack.Screen name={DETAIL} component={Detail} />
  </Stack.Navigator>
);

export default HomeNavigator;
