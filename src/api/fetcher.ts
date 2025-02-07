import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://api.foldingathome.org',
  headers: { 'Content-Type': 'application/json' },
});

const internalFetcher = axios.create({
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

internalFetcher.interceptors.response.use(
  function (response) {
    if (typeof response.data === 'string') return Promise.reject();

    return response.data;
  },
  function (error) {
    console.error(error.message);
    return Promise.reject(error.message);
  },
);

export { fetcher, internalFetcher };
