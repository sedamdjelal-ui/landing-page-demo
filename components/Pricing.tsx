import { formatPrice, product } from "@/lib/product";

const included = [
  `قارورة ${product.size} ماء عطر (Eau de Parfum)`,
  "علبة هدية فاخرة",
  "عيّنة مجانية 5 مل من عطر آخر",
  "توصيل مجاني إلى باب المنزل",
];

const discount = Math.round(
  ((product.oldPrice - product.price) / product.oldPrice) * 100,
);

export default function Pricing() {
  return (
    <section className="bg-forest px-5 py-16 text-cream sm:px-8 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          عرض الافتتاح
        </h2>
        <p className="mt-3 text-cream/75">
          سعر خاص على الكمية الأولى، إلى غاية نفاد المخزون.
        </p>

        <div className="mt-10 rounded-3xl bg-cream p-7 text-ink shadow-2xl sm:p-10">
          <span className="inline-block rounded-full bg-gold px-4 py-1 text-sm font-bold text-white">
            خصم {discount}%
          </span>

          <p className="mt-5 text-lg text-muted">
            {product.name} · {product.size}
          </p>
          <p className="mt-2 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1">
            <span className="font-display text-5xl font-bold text-forest sm:text-6xl">
              {formatPrice(product.price)}
            </span>
            <s className="text-xl text-muted">{formatPrice(product.oldPrice)}</s>
          </p>

          <ul className="mx-auto mt-8 max-w-sm space-y-3 text-start">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mt-1 h-5 w-5 shrink-0 text-gold"
                  aria-hidden="true"
                >
                  <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.700-9.300-4 4a1 1 0 0 1-1.400 0l-2-2 1.400-1.400L9 10.600l3.300-3.300 1.400 1.400Z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#order"
            className="mt-9 block rounded-full bg-forest px-8 py-4 text-lg font-bold text-cream transition hover:bg-forest-deep"
          >
            استفد من العرض
          </a>
        </div>
      </div>
    </section>
  );
}
