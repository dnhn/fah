export const formatNumber = n => parseInt(n).toLocaleString('en');

export const formatDate = d => new Date(d)
  .toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
