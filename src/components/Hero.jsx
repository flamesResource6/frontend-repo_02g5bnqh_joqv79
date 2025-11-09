import { Rocket, Star, Gift } from "lucide-react";

function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-emerald-50" />
        <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-rose-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium shadow-sm ring-1 ring-black/5 backdrop-blur">
            <Gift className="h-4 w-4 text-amber-600" />
            Cita rasa tradisional untuk momen berkelas
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
            Wajit <span className="text-amber-700">Legieta</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
            Kelezatan wajit khas Nusantara dengan kualitas premium, dikemas elegan
            untuk kolaborasi acara—mulai dari pernikahan, lamaran, hingga
            gathering korporat. Hadirkan manis yang berkesan di setiap momen.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-3 text-white shadow hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Rocket className="h-5 w-5" /> Ajukan Kerja Sama
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-stone-800 shadow ring-1 ring-black/10 hover:bg-stone-50"
            >
              <Star className="h-5 w-5 text-amber-600" /> Lihat Paket
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
