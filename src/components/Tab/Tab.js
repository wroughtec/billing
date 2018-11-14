// @flow

import React, { Component } from 'react';
import { Link } from '@reach/router';
import './c-tab.scss';

type Props = {
  name: string,
  url: string
};

export class Tab extends Component<Props> {
  isActive = ({ isCurrent }: any) => (isCurrent ? { className: 'c-tab is-active' } : { className: 'c-tab' });

  render() {
    const { name, url } = this.props;

    return (
      <Link getProps={this.isActive} to={url}>
        {name}
      </Link>
    );
  }
}
