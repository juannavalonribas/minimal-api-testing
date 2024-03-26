import { beforeAll, describe, expect, test } from 'vitest';
import { HOST, TIMEOUT } from '../utils/env';

interface Pokemon {
  name: string;
  url: string;
}

interface ResponseBody {
  count: number;
  next: null;
  previous: null;
  results: Pokemon[];
}

const URL = '/pokemon?limit=100000&offset=0';

describe(`API - Pokeapi - ${HOST}${URL}`, () => {
  let response: Response;
  let body: ResponseBody;

  beforeAll(async () => {
    const url = `${HOST}${URL}`;
    response = await fetch(url);
    body = await response.json();
  }, TIMEOUT);

  test('Should return status code 200', () => {
    expect(response.status).toBe(200);
  });

  test('Should have content-type equals to application/json', () => {
    expect(response.headers.get('Content-Type')).toBe(
      'application/json; charset=utf-8'
    );
  });

  test('Should match the expected response structure', () => {
    const expectedStructure = {
      count: expect.any(Number),
      next: null,
      previous: null,
      results: expect.arrayContaining([
        expect.objectContaining({
          name: expect.not.stringContaining(' '),
          url: expect.stringContaining(HOST),
        }),
      ]),
    };
    expect(body).toEqual(expectedStructure);
  });
});
