import { decorate, observable, configure, flow, action } from 'mobx';
import RequestItems from '../utils/requestItems';

configure({ enforceActions: 'observed' });

class TransactionStore {
  bills = [];

  transactions = [];

  categories = [];

  state = 'pending';

  fetchTransactions = flow(function* getTransactions() {
    this.bills = [];
    this.transactions = [];
    this.categories = [];
    this.state = 'pending';

    try {
      const data = yield RequestItems.getBills();

      this.categories = yield RequestItems.getCategories();
      this.bills = data.filter(item => item.isBill);
      this.transactions = data.filter(item => !item.isBill);
      this.state = 'done';
    } catch (error) {
      this.state = 'error';
    }
  });

  updateBill = flow(function* updateTransactions(id, isBill) {
    try {
      const data = yield RequestItems.updateBill(id, isBill);

      if (isBill) {
        this.transactions = this.transactions.filter(item => item.id !== id);
        this.bills.push(data);
      } else {
        this.bills = this.bills.filter(item => item.id !== id);
        this.transactions.push(data);
      }
    } catch (error) {
      this.state = 'error';
    }
  });
}

decorate(TransactionStore, {
  bills: observable,
  transactions: observable,
  state: observable,
  fetchTransactions: action,
  updateBill: action
});

export const transactionStore = new TransactionStore();
