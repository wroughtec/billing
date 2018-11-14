import fetchMock from 'fetch-mock';
import { BASE_URL, billEndpoint, categoriesEndpoint } from '../../consts/endpoints';
import { asyncFetch } from '../asyncFetch';

fetchMock.get(`${BASE_URL}/${billEndpoint}/`, JSON.stringify({ status: `Data retrieved` }));
fetchMock.patch(`${BASE_URL}/${billEndpoint}/id`, JSON.stringify({ status: `Patched` }));
fetchMock.get(`${BASE_URL}/${categoriesEndpoint}/`, JSON.stringify({ status: `Categorised` }));

describe(`Mocking fetch`, () => {
  test(`fails with synchronous code`, () => {
    const responseJson = asyncFetch(billEndpoint);
    expect(responseJson).not.toHaveProperty(`status`, `Data retrieved`);
  });

  test(`using promises`, () => {
    expect.assertions(1);
    return asyncFetch(billEndpoint).then(responseJson => {
      expect(responseJson).toHaveProperty(`status`, `Data retrieved`);
    });
  });

  test(`using async/await`, async () => {
    const responseJson = await asyncFetch(billEndpoint);
    expect(responseJson).toHaveProperty(`status`, `Data retrieved`);
  });

  test(`with params`, async () => {
    const responseJson = await asyncFetch(billEndpoint, 'id', { test: 'test' }, 'PATCH');
    expect(responseJson).toHaveProperty(`status`, `Patched`);
  });

  test('the fetch fails with an error', async () => {
    try {
      await asyncFetch('test/error');
    } catch (e) {
      expect(e).toBe(e);
    }
  });
});
