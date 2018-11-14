import fetchMock from 'fetch-mock';
import { transactionStore } from '../transactionStore';
import { BASE_URL, billEndpoint, categoriesEndpoint } from '../../consts/endpoints';

fetchMock.get(`${BASE_URL}/${billEndpoint}/`, JSON.stringify([{ id: '1', isBill: false }, { id: '2', isBill: true }]));
fetchMock.get(`${BASE_URL}/${categoriesEndpoint}/`, JSON.stringify([{ category: 1 }, { category: 2 }]));
fetchMock.patch(`${BASE_URL}/${billEndpoint}/1`, JSON.stringify([{ id: '1', isBill: true }]));
fetchMock.patch(`${BASE_URL}/${billEndpoint}/2`, JSON.stringify([{ id: '2', isBill: false }]));

describe('transactionStore', () => {
  it('gets data', async () => {
    await transactionStore.fetchTransactions();

    expect(transactionStore.state).toEqual('done');
    expect(transactionStore.bills.length).toBe(1);
    expect(transactionStore.transactions.length).toBe(1);
    expect(transactionStore.categories.length).toBe(2);
  });

  it('state is pending', () => {
    transactionStore.fetchTransactions();

    expect(transactionStore.state).toEqual('pending');
  });

  it('updates item to true', async () => {
    await transactionStore.fetchTransactions();
    await transactionStore.updateBill('1', true);

    expect(transactionStore.bills.length).toBe(2);
    expect(transactionStore.transactions.length).toBe(0);
  });

  it('updates item to false', async () => {
    await transactionStore.fetchTransactions();
    await transactionStore.updateBill('2', false);

    expect(transactionStore.bills.length).toBe(0);
    expect(transactionStore.transactions.length).toBe(2);
  });
});
