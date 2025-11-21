export function currencyFormatter(currency: number): string {
  return currency.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
}
