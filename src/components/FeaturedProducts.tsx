import { useState } from 'react';
import { motion } from 'motion/react';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { products } from '../data/products';

const featuredProducts = products.slice(0, 4); // Show first 4 products as featured

interface FeaturedProductsProps {
  onNavigateToProducts?: () => void;
}

export function FeaturedProducts({ onNavigateToProducts }: FeaturedProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/30 scroll-mt-20 md:scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-purple-500" />
            <span className="text-purple-500 tracking-wide">Handcrafted Collection</span>
            <Sparkles className="w-6 h-6 text-purple-500" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Magical Collection
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece in our collection tells a unique story, crafted with love and attention to detail. 
            Discover the passion and artistry behind every stitch.
          </p>
        </motion.div>

        {/* Products List - Alternating Layout */}
        <div className="space-y-12 lg:space-y-20">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              index={index}
              isReversed={index % 2 === 1}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: ctaVisible ? 1 : 0, y: ctaVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Love what you see? Explore our complete collection of handcrafted treasures.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNavigateToProducts}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            View All Products
          </motion.button>
        </motion.div>

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}

