import { useState } from 'react';
import { motion } from 'motion/react';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const featuredProducts = [
  {
    id: '1',
    name: 'Sunset Dreams Blanket',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1633204094618-1d4623e365f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMGNvenl8ZW58MXx8fHwxNzU5MzI5OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A cozy, oversized blanket perfect for snuggling on cold winter nights.',
    story: 'Inspired by watching countless sunsets from my grandmother\'s porch, this blanket captures the warmth and comfort of those precious moments. Each stitch represents a memory, woven together with sunset hues that bring peace and tranquility to any space.',
    craftTime: '3 weeks',
    rating: 4.9,
    isNew: true
  },
  {
    id: '2',
    name: 'Autumn Harvest Sweater',
    price: '$124.99',
    image: 'https://images.unsplash.com/photo-1679847628912-4c3e7402abc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwc3dlYXRlciUyMGhhbmRtYWRlfGVufDF8fHx8MTc1OTMyOTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Hand-knitted sweater with intricate cable patterns and earthy tones.',
    story: 'Born from a walk through autumn woods, this sweater embodies the crisp air and golden leaves of fall. The cable pattern mimics tree branches reaching skyward, while the rich browns and oranges celebrate nature\'s most beautiful season.',
    craftTime: '2 weeks',
    rating: 4.8,
    isNew: false
  },
  {
    id: '3',
    name: 'Winter Wonderland Scarf',
    price: '$34.99',
    image: 'https://images.unsplash.com/photo-1457545195570-67f207084966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwc2NhcmYlMjB3aW50ZXJ8ZW58MXx8fHwxNzU5MjQ1ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Soft, luxurious scarf with delicate snowflake patterns throughout.',
    story: 'Created during the first snowfall of winter, each snowflake pattern is unique - just like real snow. This scarf holds the magic of winter mornings when everything is blanketed in pristine white, bringing that serene beauty wherever you go.',
    craftTime: '5 days',
    rating: 4.7,
    isNew: true
  },
  {
    id: '4',
    name: 'Little Angel Baby Hat',
    price: '$18.99',
    image: 'https://images.unsplash.com/photo-1757583012114-0a48ae0a6e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmFieSUyMGhhdHxlbnwxfHx8fDE3NTkzMjk5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Adorable baby hat with soft texture, perfect for newborns to 6 months.',
    story: 'Every baby deserves to be wrapped in love from their very first day. This hat was designed with the softest yarn and gentlest stitches, created while thinking of new beginnings and the precious moments that mark a little one\'s arrival into the world.',
    craftTime: '2 days',
    rating: 5.0,
    isNew: false
  },
  {
    id: '5',
    name: 'Bohemian Market Bag',
    price: '$42.99',
    image: 'https://images.unsplash.com/photo-1581672203752-b7851b1878da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmFnJTIwdG90ZXxlbnwxfHx8fDE3NTkyNDM0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Spacious, eco-friendly market bag with sturdy handles and beautiful texture.',
    story: 'Inspired by Saturday morning farmers markets and the dream of sustainable living, this bag was born from a passion for reducing waste. Each mesh stitch allows your fresh produce to breathe while making a statement about caring for our planet.',
    craftTime: '1 week',
    rating: 4.6,
    isNew: false
  },
  {
    id: '6',
    name: 'Zen Garden Meditation Cushion',
    price: '$67.99',
    image: 'https://images.unsplash.com/photo-1630238083594-43d3846190d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwaG9tZSUyMGRlY29yfGVufDF8fHx8MTc1OTI0NTg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Comfortable meditation cushion with removable cover and calming earth tones.',
    story: 'Crafted during my own journey into mindfulness, this cushion represents the peace found in quiet moments. The earth tones ground you to nature while the soft texture supports your practice, creating a sacred space wherever you choose to sit and breathe.',
    craftTime: '4 days',
    rating: 4.8,
    isNew: true
  }
];

interface FeaturedProductsProps {
  onNavigateToProducts?: () => void;
}

export function FeaturedProducts({ onNavigateToProducts }: FeaturedProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<typeof featuredProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const handleProductClick = (product: typeof featuredProducts[0]) => {
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