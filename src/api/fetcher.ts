import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://api.foldingathome.org',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

const lambdaFetcher = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

fetcher.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.error(error.message);

    return Promise.reject(error.message);
  },
);

lambdaFetcher.interceptors.response.use(
  function (response) {
    if (typeof response.data === 'string' || response.data.hasOwnProperty('error')) return Promise.reject();

    return response.data;
  },
  function (error) {
    console.error(error.message);

    return Promise.reject(error.message);
  },
);

export { fetcher, lambdaFetcher };
