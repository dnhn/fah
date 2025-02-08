export const formatNumber = (n: number) => new Intl.NumberFormat('en-GB').format(n);

export const formatDate = (d: number | string | Date) => new Date(d)
  .toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
