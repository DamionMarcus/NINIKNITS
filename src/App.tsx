import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { AboutSection } from './components/AboutSection';
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

  if (currentPage === 'products') {
    return (
      <div className="min-h-screen">
        <Header onNavigateToProducts={navigateToProducts} />
        <main className="pt-16">
          <ProductsPage onBack={navigateToHome} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onNavigateToProducts={navigateToProducts} />
      <main>
        <Hero onNavigateToProducts={navigateToProducts} />
        <FeaturedProducts onNavigateToProducts={navigateToProducts} />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}