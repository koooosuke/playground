import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAIL, STATISTICS } from '../../constants/path';
import { Detail, Statistics } from '../../components/pages';
import { HeaderLeft, headerStyle, headerTintColor } from '../Header';
import Colors from '../../constants/colors';

const cardStyle = {
  backgroundColor: Colors.main,
};
const Stack = createStackNavigator();

const StatisticsNavigator: FC = () => (
  <Stack.Navigator initialRouteName={STATISTICS} screenOptions={{ cardStyle, headerStyle, headerTintColor }}>
    <Stack.Screen
      name={STATISTICS}
      component={Statistics}
      options={{ headerLeft: () => <HeaderLeft />, title: 'Statistics' }}
    />
    <Stack.Screen name={DETAIL} component={Detail} options={{ title: 'Details' }} />
  </Stack.Navigator>
);

export default StatisticsNavigator;
