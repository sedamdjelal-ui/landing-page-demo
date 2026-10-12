export const product = {
  brand: "دار مِسك",
  name: "ليالي القصبة",
  size: "100 مل",
  price: 4900,
  oldPrice: 6500,
};

export function formatPrice(amount: number) {
  return `${amount.toLocaleString("en-US")} د.ج`;
}
