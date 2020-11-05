import React, { FC, useContext } from 'react';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  INITIAL,
  LOADING,
  HOME,
  CHOOSE_LOGIN,
  STATISTICS,
  USER_INFO,
  INPUT,
  SIGN_UP,
  SIGN_IN,
} from '../../constants/path';
import { Initial, Loading, ChooseLogin, Input, SignUp, SignIn } from '../../components/pages';
import Home from './Home';
import Statistics from './Statistics';
import UserInfo from './UserInfo';
import * as UiContext from '../../contexts/ui';
import Colors from '../../constants/colors';
import { headerStyle, headerTintColor } from '../Header';

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();
const ChooseLoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeDrawer = createDrawerNavigator();
const StatisticsDrawer = createDrawerNavigator();
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const cardStyle = {
  backgroundColor: Colors.main,
};
const drawerStyle = {
  backgroundColor: Colors.main,
};
const drawerOntentOptions = {
  activeTintColor: Colors.primary,
  inactiveTintColor: Colors.white,
};
const HomeWithDrawer: FC = () => (
  <HomeDrawer.Navigator initialRouteName={HOME} drawerStyle={drawerStyle} drawerContentOptions={drawerOntentOptions}>
    <HomeDrawer.Screen name={HOME} component={Home} />
    <HomeDrawer.Screen name={USER_INFO} component={UserInfo} />
  </HomeDrawer.Navigator>
);

const StatisticsWithDrawer: FC = () => (
  <StatisticsDrawer.Navigator drawerStyle={drawerStyle} drawerContentOptions={drawerOntentOptions}>
    <StatisticsDrawer.Screen name={STATISTICS} component={Statistics} />
    <StatisticsDrawer.Screen name={USER_INFO} component={UserInfo} />
  </StatisticsDrawer.Navigator>
);

const getActionRouteName = (state: any): string => {
  if (!state || !state.routes) {
    return '';
  }
  const route = state.routes[state.index];

  if (route.state) {
    return getActionRouteName(route.state);
  }
  return route.name;
};

const TabRoutes: FC = () => (
  <Tab.Navigator
    initialRouteName={HOME}
    screenOptions={(props: any) => {
      const routeName = getActionRouteName(props.route.state);
      return {
        tabBarVisible: routeName !== USER_INFO,
      };
    }}
  >
    <Tab.Screen name={HOME} component={HomeWithDrawer} />
    <Tab.Screen name={STATISTICS} component={StatisticsWithDrawer} />
  </Tab.Navigator>
);

const TabWithModalRoutes: FC = () => (
  <ModalStack.Navigator mode="modal" headerMode="none" screenOptions={{ cardStyle }}>
    <Stack.Screen name={HOME} component={TabRoutes} />
    <Stack.Screen name={INPUT} component={Input} />
  </ModalStack.Navigator>
);

const ChooseLoginNavigator: FC = () => (
  <ChooseLoginStack.Navigator
    mode="modal"
    headerMode="none"
    screenOptions={{ cardStyle, headerStyle, headerTintColor }}
  >
    <ChooseLoginStack.Screen name={CHOOSE_LOGIN} component={ChooseLogin} options={{ title: 'Choose login' }} />
    <ChooseLoginStack.Screen name={SIGN_UP} component={SignUp} options={{ title: 'Sign in' }} />
    <ChooseLoginStack.Screen name={SIGN_IN} component={SignIn} options={{ title: 'Sign up' }} />
  </ChooseLoginStack.Navigator>
);

const switchingAuthStatus = (status: UiContext.Status) => {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={CHOOSE_LOGIN} component={ChooseLoginNavigator} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={HOME} component={TabWithModalRoutes} />;
    case UiContext.Status.FIRST_OPEN:
    default:
      return <Stack.Screen name={INITIAL} component={Initial} />;
  }
};

const AuthWithRoutes: FC = () => {
  const uiContext = useContext(UiContext.Context);
  return (
    <Stack.Navigator initialRouteName={LOADING} headerMode="none" screenOptions={{ cardStyleInterpolator: forFade }}>
      {uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchingAuthStatus(uiContext.applicationState)
      ) : (
        <Stack.Screen name={LOADING} component={Loading} />
      )}
    </Stack.Navigator>
  );
};

export default AuthWithRoutes;
