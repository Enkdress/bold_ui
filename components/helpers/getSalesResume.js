export function getSalesResume(sales) {
  if (!sales) return 0;

  let totalPrice = 0;
  sales.forEach((sale) => {
    totalPrice += sale.amount - sale.bold_reduction;
  });

  return totalPrice;
}
