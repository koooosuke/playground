import { createContext } from 'react';

export enum Status {
  LOADING = 'loading',
  FIRST_OPEN = 'firstOpen',
  UN_AUTHORIZED = 'unAuthorized',
  AUTHORIZED = 'authorized',
}

export const createApplicationInitialState = (): Status => Status.LOADING;

export const Context = createContext({
  applicationState: createApplicationInitialState(),
  setApplicationState: (_: Status) => {},
});
