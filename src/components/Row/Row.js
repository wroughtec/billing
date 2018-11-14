// @flow
import React, { Component } from 'react';
import { Transactions } from '../Transactions/Transactions';
import './c-row.scss';

type Props = {
  data: BillsType
};

type State = {
  imgLoaded: boolean,
  openTransaction: boolean
};

export class Row extends Component<Props, State> {
  state = {
    imgError: false,
    openTransaction: false
  };

  handleImageError = () => {
    this.setState({
      imgError: true
    });
  };

  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const {
      data: { isBill, id },
      store
    } = this.props;

    return store.updateBill(id, !isBill);
  };

  mapCategories = (id: number) => {
    const { store } = this.props;
    let categoryName = null;
    if (store.categories && store.categories.length) {
      const category = store.categories.find(item => id === item.id);
      categoryName = category.name.toUpperCase();
    }

    return categoryName;
  };

  handleOpeningTransactions = () => {
    const { openTransaction } = this.state;

    this.setState({
      openTransaction: !openTransaction
    });
  };

  render() {
    const {
        data: { name, iconUrl, isBill, categoryId, transactions }
      } = this.props,
      { imgError, openTransaction } = this.state,
      btnLabel = isBill ? 'Remove bill' : 'Add as bill',
      categoryName = this.mapCategories(categoryId),
      transactionNumber = transactions.length;

    let img = null;

    if (!imgError && iconUrl) {
      img = <img onError={this.handleImageError} src={iconUrl} alt={name} className="c-row__img" />;
    }

    return (
      <div className="c-row">
        <div
          className="c-row__item"
          onClick={this.handleOpeningTransactions}
          role="button"
          onKeyPress={this.handleOpeningTransactions}
          tabIndex="0"
        >
          <div className="c-row__obj c-row__obj--left">{img}</div>
          <div className="c-row__body">
            <h4 className="c-row__title">{name}</h4>
            {categoryName && <small className="c-row__category">{categoryName}</small>}
            <small className="c-row__trans">Number of transactions: {transactionNumber}</small>
          </div>
          <div className="c-row__obj c-row__obj--right">
            <button className="c-row__btn" onClick={this.handleClick}>
              {btnLabel}
            </button>
          </div>
        </div>
        {openTransaction && <Transactions data={transactions} />}
      </div>
    );
  }
}
