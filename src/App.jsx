import Hero from './components/Hero';
import Story from './components/Story';
import Packages from './components/Packages';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">
            Legieta <span className="text-amber-700">Wajit</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#packages" className="hover:text-amber-700">Paket</a>
            <a href="#contact" className="hover:text-amber-700">Kontak</a>
          </div>
          <a href="#contact" className="rounded-lg bg-amber-600 px-4 py-2 text-white shadow hover:bg-amber-700 text-sm">Kolaborasi</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Story />
        <Packages />
        <Contact />
      </main>

      <footer className="border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Legieta. Semua hak dilindungi.</p>
          <p>Manisnya tradisi untuk momen yang tak terlupakan.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
