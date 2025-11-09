import { Gift, Heart, Crown } from "lucide-react";

const packages = [
  {
    name: "Elegant",
    icon: Gift,
    price: "Mulai 3.5 jt",
    desc: "Paket hemat untuk acara keluarga dan arisan. 150 kemasan premium.",
    items: ["Desain label standar", "Kemasan mika elegan", "Gratis kartu ucapan"],
  },
  {
    name: "Romansa",
    icon: Heart,
    price: "Mulai 7.5 jt",
    desc: "Pilihan populer untuk lamaran dan pernikahan. 300 kemasan premium.",
    items: ["Desain label kustom", "Pita satin pilihan warna", "Kartu ucapan emboss"],
    highlight: true,
  },
  {
    name: "Majestic",
    icon: Crown,
    price: "Mulai 14 jt",
    desc: "Untuk resepsi akbar dan korporat. 600 kemasan premium.",
    items: ["Desain eksklusif", "Kardus rigid box", "Kartu ucapan letterpress"],
  },
];

function Packages() {
  return (
    <section id="packages" className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Paket Kolaborasi Acara
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-stone-600">
            Pilih paket yang sesuai untuk pernikahan, lamaran, atau acara
            spesial lainnya. Fleksibel dan bisa disesuaikan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl bg-white p-6 shadow ring-1 ring-stone-200 ${
                p.highlight ? "ring-2 ring-amber-500" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <p.icon className="h-6 w-6 text-amber-600" />
                <h3 className="text-xl font-semibold text-stone-900">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm text-stone-600">{p.desc}</p>
              <p className="mt-4 text-2xl font-bold text-stone-900">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
