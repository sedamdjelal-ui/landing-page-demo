"use client";

import { useState } from "react";
import { formatPrice, product } from "@/lib/product";
import { wilayas } from "@/lib/wilayas";

// Algerian mobile numbers: 05 / 06 / 07 followed by 8 digits.
const PHONE_PATTERN = /^0[567]\d{8}$/;

const fieldClass =
  "mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/30";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Demo only: nothing is sent anywhere, we just show a confirmation.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!PHONE_PATTERN.test(phone.replace(/\s/g, ""))) {
      setPhoneError("أدخل رقم هاتف صحيحًا من 10 أرقام يبدأ بـ 05 أو 06 أو 07.");
      return;
    }
    setPhoneError("");
    setSubmitted(true);
  }

  function reset() {
    setName("");
    setPhone("");
    setWilaya("");
    setSubmitted(false);
  }

  return (
    <section id="order" className="scroll-mt-6 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center font-display text-3xl font-bold text-forest sm:text-4xl">
          اطلب الآن
        </h2>
        <p className="mt-3 text-center text-muted">
          املأ النموذج وسنتصل بك لتأكيد الطلب. الدفع عند الاستلام.
        </p>

        <div className="mt-10 rounded-3xl border border-sand bg-white/70 p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div role="status" className="py-6 text-center">
              <p className="font-display text-2xl font-bold text-forest">
                شكرًا لك يا {name.trim()}!
              </p>
              <p className="mt-3 leading-7 text-muted">
                سجّلنا طلبك إلى ولاية {wilaya}، وسنتصل بك على الرقم{" "}
                <span dir="ltr">{phone}</span> لتأكيده.
              </p>
              <p className="mt-3 text-sm text-muted">
                (هذا عرض تجريبي: لم تُرسل أي بيانات.)
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-6 rounded-full border border-forest/30 px-6 py-2.5 font-medium text-forest transition hover:bg-forest hover:text-cream"
              >
                طلب جديد
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block font-medium">
                الاسم الكامل
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="مثال: أمينة بن علي"
                  className={fieldClass}
                />
              </label>

              <label className="block font-medium">
                رقم الهاتف
                <input
                  type="tel"
                  name="phone"
                  required
                  inputMode="numeric"
                  autoComplete="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="0550 12 34 56"
                  aria-invalid={phoneError ? true : undefined}
                  aria-describedby={phoneError ? "phone-error" : undefined}
                  className={`${fieldClass} text-end`}
                />
                {phoneError && (
                  <span
                    id="phone-error"
                    role="alert"
                    className="mt-2 block text-sm font-normal text-red-700"
                  >
                    {phoneError}
                  </span>
                )}
              </label>

              <label className="block font-medium">
                الولاية
                <select
                  name="wilaya"
                  required
                  value={wilaya}
                  onChange={(event) => setWilaya(event.target.value)}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    اختر ولايتك
                  </option>
                  {wilayas.map((item, index) => (
                    <option key={item} value={item}>
                      {String(index + 1).padStart(2, "0")} - {item}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-forest px-8 py-4 text-lg font-bold text-cream transition hover:bg-forest-deep"
              >
                تأكيد الطلب · {formatPrice(product.price)}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
