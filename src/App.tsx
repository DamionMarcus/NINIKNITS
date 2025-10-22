import { useState } from 'react';
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

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = window.innerWidth >= 768 ? 80 : 70; // Responsive header height
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = window.innerWidth >= 768 ? 80 : 70; // Responsive header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  if (currentPage === 'products') {
    return (
      <div className="min-h-screen">
        <Header onNavigateToProducts={navigateToProducts} onScrollToSection={scrollToSection} />
        <main className="pt-20 md:pt-24">
          <ProductsPage onBack={navigateToHome} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onNavigateToProducts={navigateToProducts} onScrollToSection={scrollToSection} />
      <main>
        <Hero onNavigateToProducts={navigateToProducts} />
        <FeaturedProducts onNavigateToProducts={navigateToProducts} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}