// @flow
import { billEndpoint, categoriesEndpoint } from '../consts/endpoints';
import { asyncFetch } from './asyncFetch';

class RequestItems {
  getBills = () => asyncFetch(billEndpoint);

  getCategories = () => asyncFetch(categoriesEndpoint);

  updateBill = (id: string, isBill: boolean) => {
    const body = {
      isBill
    };

    return asyncFetch(billEndpoint, id, body, 'PATCH');
  };
}

export default new RequestItems();
