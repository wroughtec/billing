// @flow
import React from 'react';
import DevTools from 'mobx-react-devtools';
import { Tabs } from './components/Tabs/Tabs';
import { transactionStore } from './store/transactionStore';

export const App = () => (
    <div className="c-app">
      <Tabs store={transactionStore} />
      <DevTools />
    </div>
  );
