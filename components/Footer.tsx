import { product } from "@/lib/product";

export default function Footer() {
  return (
    <footer className="bg-forest-deep px-5 py-10 text-cream/80 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-start">
        <div>
          <p className="font-display text-2xl font-bold text-cream">
            {product.brand}
          </p>
          <p className="mt-1 text-sm">عطور جزائرية تُصنع بشغف.</p>
        </div>

        <ul className="space-y-1 text-sm">
          <li>الجزائر العاصمة، الجزائر</li>
          <li>
            الهاتف: <span dir="ltr">0550 00 00 00</span>
          </li>
          <li>من السبت إلى الخميس · 9:00 – 18:00</li>
        </ul>
      </div>

      <p className="mx-auto mt-8 max-w-6xl border-t border-cream/15 pt-6 text-center text-xs text-cream/60">
        © 2026 {product.brand}. موقع تجريبي لمنتج وهمي، ولا تُجرى عبره أي عملية
        بيع حقيقية.
      </p>
    </footer>
  );
}
