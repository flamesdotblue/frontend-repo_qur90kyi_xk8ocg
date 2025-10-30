import React from 'react';
import Header from './components/Header';
import DecorativeGrid from './components/DecorativeGrid';
import DownloadLauncher from './components/DownloadLauncher';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <DecorativeGrid />
      <Header />
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pt-8 pb-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Elegant, Animated Report Modal
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A refined modal experience with motion, progress, and polished states — ready to impress your users.
            </p>
          </div>
          <div className="mt-10">
            <DownloadLauncher />
          </div>
        </section>
      </main>
      <footer className="relative z-10 py-8 text-center text-xs text-gray-500 dark:text-gray-400">
        Built with care — enjoy the vibes.
      </footer>
    </div>
  );
}

export default App;
