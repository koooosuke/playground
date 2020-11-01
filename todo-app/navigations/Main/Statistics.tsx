import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAIL, STATISTICS } from '../../constants/path';
import { Detail, Statistics } from '../../components/pages';
import { HeaderLeft } from './Header';

const Stack = createStackNavigator();

const StatisticsNavigator: FC = () => (
  <Stack.Navigator initialRouteName={STATISTICS}>
    <Stack.Screen name={STATISTICS} component={Statistics} options={{ headerLeft: () => <HeaderLeft /> }} />
    <Stack.Screen name={DETAIL} component={Detail} />
  </Stack.Navigator>
);

export default StatisticsNavigator;
