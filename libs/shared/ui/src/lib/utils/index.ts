/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = `https://685rp9jkj1.execute-api.eu-west-1.amazonaws.com/prod/`;

const defaultOptions: RequestInit = {
  method: 'GET',
  //   mode: 'cors',
  headers: {
    'x-api-key': 'vIF58u6c7r5xSX7NQunU6LjLu6jgem25XCFcaWdb',
    'Content-Type': 'application/json',
  },
};

export const isEmpty = (value: any): boolean => {
  return (
    !value || (typeof value === 'object' && Object.keys(value).length === 0)
  );
};

interface CustomFetchParams {
  query: string;
  params?: Record<string, any>;
  options?: RequestInit;
}

/* custom fetch which takes query string, params and default options and returns data */
async function customFetch({
  query,
  params,
  options = defaultOptions,
}: CustomFetchParams) {
  const searchParams = new URLSearchParams();

  if (params && !isEmpty(params)) {
    Object.entries(params).forEach(([key, value]) => {
      if (key) {
        searchParams.set(key, value);
      }
    });
  }
  const searchParamsString = searchParams.toString();

  const response = await fetch(
    `${BASE_URL}/${query}${searchParamsString ? `$${searchParamsString}` : ''}`,
    options
  );
  return await response.json();
}

export { customFetch, BASE_URL };
