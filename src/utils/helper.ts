export function currencyFormatter(currency: number): string {
  return currency.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 1
});
}


export function truncateString(str:string, maxLength: number) {
  if (str.length <= maxLength) {
    return str; // Return the original string if it's short enough
  }

  const truncated = str.slice(0, maxLength - 3); // Truncate to make room for "..."
  return truncated + '...'; // Append ellipsis
}