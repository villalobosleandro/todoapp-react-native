/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import type { Node } from 'react';
import 'react-native-gesture-handler';

import { TasksProvider } from './src/context/TasksContext'
import { AppNavigator } from './src/navigation'

global.Constant = require('./src/utils/constant')


const App: () => Node = () => {

  return (
    <TasksProvider>
      <AppNavigator />
    </TasksProvider>
  );
};


export default App;
