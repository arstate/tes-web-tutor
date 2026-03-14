/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Works from './components/Works';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen selection:bg-neon-pink selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Works />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
