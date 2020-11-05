import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAIL, HOME } from '../../constants/path';
import { Detail, Home } from '../../components/pages';
import { HeaderLeft, headerTintColor, headerStyle } from '../Header';
import Colors from '../../constants/colors';

const cardStyle = {
  backgroundColor: Colors.main,
};
const Stack = createStackNavigator();

const HomeNavigator: FC = () => (
  <Stack.Navigator initialRouteName={HOME} screenOptions={{ cardStyle, headerTintColor, headerStyle }}>
    <Stack.Screen name={HOME} component={Home} options={{ headerLeft: () => <HeaderLeft />, title: 'Home' }} />
    <Stack.Screen name={DETAIL} component={Detail} options={{ title: 'Details' }} />
  </Stack.Navigator>
);

export default HomeNavigator;
