const features = [
  {
    title: "ثبات يدوم طويلًا",
    description:
      "تركيز عالٍ من الزيوت العطرية يبقى على بشرتك وملابسك لأكثر من 12 ساعة.",
    icon: (
      <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    title: "مكوّنات مختارة بعناية",
    description:
      "ياسمين وعنبر وخشب صندل، تُمزج يدويًا على دفعات صغيرة في ورشتنا.",
    icon: (
      <path d="M12 21c4-2.5 7-6 7-10a7 7 0 0 0-7-7 7 7 0 0 0-7 7c0 4 3 7.500 7 10Zm0 0V10" />
    ),
  },
  {
    title: "توصيل إلى 58 ولاية",
    description:
      "يصلك طلبك خلال 2 إلى 5 أيام، وتدفع عند الاستلام بعد معاينة الطرد.",
    icon: (
      <path d="M3 7h11v9H3V7Zm11 3h4l3 3v3h-7v-6ZM7.500 19a1.500 1.500 0 1 0 0-3 1.500 1.500 0 0 0 0 3Zm10 0a1.500 1.500 0 1 0 0-3 1.500 1.500 0 0 0 0 3Z" />
    ),
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <h2 className="text-center font-display text-3xl font-bold text-forest sm:text-4xl">
        لماذا {`«ليالي القصبة»`}؟
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted">
        ثلاثة أسباب تجعل زبائننا يعودون إليه في كل مرة.
      </p>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="rounded-3xl border border-sand bg-white/60 p-7 text-center md:text-start"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-gold-soft md:mx-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
                aria-hidden="true"
              >
                {feature.icon}
              </svg>
            </span>
            <h3 className="mt-5 text-xl font-bold text-ink">{feature.title}</h3>
            <p className="mt-2 leading-7 text-muted">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
