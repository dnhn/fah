export const formatNumber = (n: number) => new Intl.NumberFormat('en-GB').format(n);

export const formatDate = (d: string) => new Date(d)
  .toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
