function Story() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Cerita Rasa yang Menyatukan
            </h2>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Legieta lahir dari resep keluarga yang turun-temurun. Kami
              meracik wajit dari beras ketan pilihan, gula aren asli, dan
              santan yang wangi—dimasak perlahan hingga menghasilkan tekstur
              legit dan rasa manis yang seimbang.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Untuk kebutuhan acara, kami fokus pada tampilan yang anggun dan
              kualitas yang konsisten. Setiap paket dikemas rapi, siap
              menjadi <em>souvenir</em> berkelas yang membuat tamu merasa istimewa.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
                alt="Wajit Legieta — tekstur legit dan kemasan elegan"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
