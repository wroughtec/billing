// @flow
import React from 'react';
import { tabs } from '../../consts/tabs';
import { Tab } from '../Tab/Tab';
import './c-tabs-nav.scss';

export const TabsNav = () => {
  const tabsNav = tabs.map(tab => {
    const { id, name, url } = tab;

    return <Tab key={id} name={name} url={url} />;
  });

  return <nav className="c-tabs-nav">{tabsNav}</nav>;
};
