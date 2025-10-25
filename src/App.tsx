import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductsPage } from './components/ProductsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products'>('home');

  const navigateToProducts = () => {
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = "Snug.crochet.by.nini - Handmade Crochet Creations";
  }, []);

  if (currentPage === 'products') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header onNavigateToProducts={navigateToProducts} onNavigateToHome={navigateToHome} />
        <main className="flex-grow pt-[64px] md:pt-[80px]">
          <ProductsPage onBack={navigateToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigateToProducts={navigateToProducts} onNavigateToHome={navigateToHome} />
      <main className="flex-grow">
        <Hero onNavigateToProducts={navigateToProducts} />
        <FeaturedProducts onNavigateToProducts={navigateToProducts} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

