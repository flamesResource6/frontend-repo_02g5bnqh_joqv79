import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Mulai Kolaborasi
            </h2>
            <p className="mt-3 text-stone-600">
              Ceritakan konsep acara Anda—kami bantu siapkan paket wajit yang
              pas, dari desain kemasan hingga pengiriman.
            </p>
            <div className="mt-6 space-y-3 text-stone-700">
              <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-amber-600"/> hello@legieta.id</p>
              <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-amber-600"/> +62 812-3456-7890</p>
              <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-amber-600"/> Bandung, Jawa Barat</p>
            </div>
          </div>
          <form className="rounded-2xl bg-stone-50 p-6 shadow ring-1 ring-stone-200">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-stone-700">Nama</label>
                <input className="mt-1 w-full rounded-lg border-stone-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Nama lengkap" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-stone-300 focus:border-amber-500 focus:ring-amber-500" placeholder="email@domain.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700">Telepon</label>
                <input className="mt-1 w-full rounded-lg border-stone-300 focus:border-amber-500 focus:ring-amber-500" placeholder="08xx" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-stone-700">Detail Acara</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border-stone-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Tanggal, lokasi, jumlah tamu, konsep..." />
              </div>
            </div>
            <button type="button" className="mt-6 w-full rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white shadow hover:bg-amber-700">Kirim Pertanyaan</button>
            <p className="mt-3 text-center text-xs text-stone-500">Kami akan membalas dalam 1x24 jam kerja.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
