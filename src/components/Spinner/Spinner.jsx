// @flow

import React from 'react';
import { Icon } from '../Icon/Icon';
import { spinnerIcon } from '../../consts/iconIds';
import './c-spinner.scss';

export const Spinner = () => (
  <div className="c-spinner">
    <div className="c-spinner__wrapper">
      <Icon iconClass="c-spinner__icon" iconId={spinnerIcon} />
    </div>
  </div>
);
