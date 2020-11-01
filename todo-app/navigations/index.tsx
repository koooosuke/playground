import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoutes from './Main';

const LoggingRoutes: FC = () => (
  <NavigationContainer>
    <MainRoutes />
  </NavigationContainer>
);

export default LoggingRoutes;
