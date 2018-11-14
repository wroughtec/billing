// @flow

import { BASE_URL } from '../consts/endpoints';

export const asyncFetch = async (endpoint: string, id: string = '', params: any, method: string = 'GET') => {
  const url = `${BASE_URL}/${endpoint}/${id}`,
    body = params ? JSON.stringify({ ...params }) : null,
    options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body
    };
  try {
    const response = await fetch(url, options);

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
