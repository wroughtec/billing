import fetchMock from 'fetch-mock';
import requestItems from '../requestItems';
import { BASE_URL, billEndpoint, categoriesEndpoint } from '../../consts/endpoints';

fetchMock.get(`${BASE_URL}/${billEndpoint}/`, JSON.stringify({ status: `Data retrieved` }));
fetchMock.patch(`${BASE_URL}/${billEndpoint}/id`, JSON.stringify({ status: `Patched` }));
fetchMock.get(`${BASE_URL}/${categoriesEndpoint}/`, JSON.stringify({ status: `Categorised` }));

describe(`requestItems`, () => {
  test(`getBills`, async () => {
    const responseJson = await requestItems.getBills(billEndpoint);
    expect(responseJson).toHaveProperty(`status`, `Data retrieved`);
  });

  test(`getCategories`, async () => {
    const responseJson = await requestItems.getCategories(categoriesEndpoint);
    expect(responseJson).toHaveProperty(`status`, `Categorised`);
  });

  test(`updateBill`, async () => {
    const responseJson = await requestItems.updateBill('id', true);
    expect(responseJson).toHaveProperty(`status`, `Patched`);
  });
});
