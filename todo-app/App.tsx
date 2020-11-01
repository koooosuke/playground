import React, { FC, useState } from 'react';
import * as UiContext from './contexts/ui';
import Routes from './navigations';

const App: FC = () => {
  const [applicationState, setApplicationState] = useState(UiContext.createApplicationInitialState());
  return (
    <UiContext.Context.Provider value={{ applicationState, setApplicationState }}>
      <Routes />
    </UiContext.Context.Provider>
  );
};

export default App;
