declare type TransactionsType = {
  amount: number,
  date: string,
  id: number
};

declare type BillsType = {
  categoryId: number,
  iconUrl: string,
  id: string,
  isBill: boolean,
  name: string,
  transactions: TransactionsType[]
};
