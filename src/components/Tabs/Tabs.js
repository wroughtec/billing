// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Router } from '@reach/router';
import { TabsNav } from '../TabsNav/TabsNav';
import { Rows } from '../Rows/Rows';
import { Spinner } from '../Spinner/Spinner';
import { tabs } from '../../consts/tabs';

class TabsContainer extends Component {
  componentDidMount() {
    const { store } = this.props;

    store.fetchTransactions();
  }

  displayTabs = () => {
    const { store } = this.props;

    const content = tabs.map(tab => {
      const { id, data, url } = tab;

      return <Rows key={id} path={url} data={store[data]} />;
    });

    return (
      <section className="c-tabs">
        <TabsNav />
        <Router>{content}</Router>
      </section>
    );
  };

  render() {
    const { store } = this.props;

    let content = <Spinner />;

    if (store.state === 'done') {
      content = this.displayTabs();
    }

    return content;
  }
}

const Tabs = observer(TabsContainer);
export { Tabs };
