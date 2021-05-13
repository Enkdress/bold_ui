const priceFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

const Price = ({ value }) => (
  <span>{priceFormatter.format(Number(value))}</span>
);

export default Price;
