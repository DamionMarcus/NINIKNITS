import { useState } from 'react';
import { motion } from 'motion/react';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { products } from '../data/products';
import { Button } from './ui/button';

interface FeaturedProductsProps {
  onNavigateToProducts?: () => void;
}

export function FeaturedProducts({ onNavigateToProducts }: FeaturedProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  // Display first 6 products as featured
  const featuredProductsList = products.slice(0, 6);

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-12 md:py-20 bg-gradient-to-b from-white to-pink-50/30">
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
            <Sparkles className="w-6 h-6 text-pink-500" />
            <span className="text-pink-500 tracking-wide">Handcrafted Collection</span>
            <Sparkles className="w-6 h-6 text-pink-500" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Featured Creations
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece in our collection tells a unique story, crafted with love and attention to detail. 
            Discover the passion and artistry behind every stitch.
          </p>
        </motion.div>

        {/* Products List - Mobile First Layout */}
        <div className="space-y-8 md:space-y-0">
          {featuredProductsList.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleProductClick(product)}
                />
              </motion.div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {product.name}
                  </h3>
                  
                  <p className="text-lg text-pink-600 font-semibold mb-4">
                    ${product.price}
                  </p>

                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>

                  <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6">
                    <h4 className="text-pink-600 font-semibold mb-2">The Story Behind</h4>
                    <p className="text-gray-700 text-sm">
                      {product.story}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-2 text-gray-700 font-semibold">{product.rating}</span>
                    </div>
                    {product.isNew && (
                      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        New
                      </span>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProductClick(product)}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
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
          <p className="text-lg text-gray-600 mb-6">
            Love what you see? Explore our complete collection of handcrafted treasures.
          </p>
          <Button
            size="lg"
            className="group bg-pink-500 hover:bg-pink-600"
            onClick={onNavigateToProducts}
          >
            Explore Full Collection
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

