import React from 'react';
import {useRoutes} from 'hookrouter';
import Routes from './routes'


function App() {
  const routeResult = useRoutes(Routes);
  return routeResult
}

export default App
