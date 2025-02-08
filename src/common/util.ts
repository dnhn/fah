import { LOCALE } from './config';

export const formatNumber = (n: number) => new Intl.NumberFormat(LOCALE).format(n);

export const formatDate = (d: number | string | Date) => new Date(d)
  .toLocaleDateString(LOCALE, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
