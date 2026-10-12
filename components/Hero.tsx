import Image from "next/image";
import { formatPrice, product } from "@/lib/product";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <span className="font-display text-2xl font-bold text-forest">
          {product.brand}
        </span>
        <a
          href="#order"
          className="rounded-full border border-forest/30 px-4 py-2 text-sm font-medium text-forest transition hover:bg-forest hover:text-cream"
        >
          اطلب الآن
        </a>
      </header>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 md:grid-cols-2 md:pb-24 md:pt-12">
        <div className="text-center md:text-start">
          <p className="mb-4 inline-block rounded-full bg-gold/15 px-4 py-1.5 text-sm font-medium text-gold">
            إصدار محدود · صُنع في الجزائر
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl lg:text-6xl">
            {product.name}
            <span className="mt-2 block text-2xl font-normal text-ink sm:text-3xl">
              عطرٌ يحكي دفء المساء في أزقّة القصبة
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-muted md:mx-0">
            مزيج شرقي من العنبر والياسمين وخشب الصندل، يرافقك من الصباح إلى
            آخر الليل.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#order"
              className="w-full rounded-full bg-forest px-8 py-4 text-center text-lg font-bold text-cream shadow-lg shadow-forest/20 transition hover:bg-forest-deep sm:w-auto"
            >
              اطلب عطرك الآن
            </a>
            <p className="text-muted">
              <span className="text-xl font-bold text-ink">
                {formatPrice(product.price)}
              </span>{" "}
              · الدفع عند الاستلام
            </p>
          </div>
        </div>

        <div className="order-first md:order-none">
          <Image
            src="/perfume.svg"
            alt={`قارورة عطر ${product.name} من ${product.brand}`}
            width={480}
            height={560}
            priority
            className="mx-auto h-auto w-64 sm:w-80 md:w-full md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
