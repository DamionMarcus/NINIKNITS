import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Filter, Search, Grid, List } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const allProducts = [
  {
    id: '1',
    name: 'Sunset Dreams Blanket',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1633204094618-1d4623e365f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMGNvenl8ZW58MXx8fHwxNzU5MzI5OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A cozy, oversized blanket perfect for snuggling on cold winter nights.',
    story: 'Inspired by watching countless sunsets from my grandmother\'s porch, this blanket captures the warmth and comfort of those precious moments.',
    craftTime: '3 weeks',
    rating: 4.9,
    category: 'Blankets',
    isNew: true
  },
  {
    id: '2',
    name: 'Autumn Harvest Sweater',
    price: '$124.99',
    image: 'https://images.unsplash.com/photo-1679847628912-4c3e7402abc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwc3dlYXRlciUyMGhhbmRtYWRlfGVufDF8fHx8MTc1OTMyOTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Hand-knitted sweater with intricate cable patterns and earthy tones.',
    story: 'Born from a walk through autumn woods, this sweater embodies the crisp air and golden leaves of fall.',
    craftTime: '2 weeks',
    rating: 4.8,
    category: 'Clothing'
  },
  {
    id: '3',
    name: 'Winter Wonderland Scarf',
    price: '$34.99',
    image: 'https://images.unsplash.com/photo-1457545195570-67f207084966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwc2NhcmYlMjB3aW50ZXJ8ZW58MXx8fHwxNzU5MjQ1ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Soft, luxurious scarf with delicate snowflake patterns throughout.',
    story: 'Created during the first snowfall of winter, each snowflake pattern is unique - just like real snow.',
    craftTime: '5 days',
    rating: 4.7,
    category: 'Accessories',
    isNew: true
  },
  {
    id: '4',
    name: 'Little Angel Baby Hat',
    price: '$18.99',
    image: 'https://images.unsplash.com/photo-1757583012114-0a48ae0a6e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmFieSUyMGhhdHxlbnwxfHx8fDE3NTkzMjk5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Adorable baby hat with soft texture, perfect for newborns to 6 months.',
    story: 'Every baby deserves to be wrapped in love from their very first day.',
    craftTime: '2 days',
    rating: 5.0,
    category: 'Baby'
  },
  {
    id: '5',
    name: 'Bohemian Market Bag',
    price: '$42.99',
    image: 'https://images.unsplash.com/photo-1581672203752-b7851b1878da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmFnJTIwdG90ZXxlbnwxfHx8fDE3NTkyNDM0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Spacious, eco-friendly market bag with sturdy handles and beautiful texture.',
    story: 'Inspired by Saturday morning farmers markets and the dream of sustainable living.',
    craftTime: '1 week',
    rating: 4.6,
    category: 'Bags'
  },
  {
    id: '6',
    name: 'Zen Garden Meditation Cushion',
    price: '$67.99',
    image: 'https://images.unsplash.com/photo-1630238083594-43d3846190d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwaG9tZSUyMGRlY29yfGVufDF8fHx8MTc1OTI0NTg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Comfortable meditation cushion with removable cover and calming earth tones.',
    story: 'Crafted during my own journey into mindfulness, this cushion represents the peace found in quiet moments.',
    craftTime: '4 days',
    rating: 4.8,
    category: 'Home Decor',
    isNew: true
  }
];

interface ProductsPageProps {
  onBack: () => void;
}

export function ProductsPage({ onBack }: ProductsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<typeof allProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: filtersRef, isVisible: filtersVisible } = useScrollAnimation();

  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleProductClick = (product: typeof allProducts[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/30">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : -30 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-b border-pink-200 sticky top-16 z-40"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="hover:bg-pink-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-xl md:text-2xl">Our Collection</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="hidden md:flex"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="hidden md:flex"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <motion.div
          ref={filtersRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: filtersVisible ? 1 : 0, y: filtersVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-pink-100">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 'bg-pink-500 hover:bg-pink-600' : 'hover:bg-pink-50'}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products */}
        <div className={`space-y-6 ${viewMode === 'grid' ? 'md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0' : ''}`}>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {viewMode === 'grid' ? (
                <div
                  onClick={() => handleProductClick(product)}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 group-hover:text-pink-500 transition-colors">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="text-xl text-pink-500">{product.price}</div>
                  </div>
                </div>
              ) : (
                <ProductCard
                  {...product}
                  index={index}
                  isReversed={index % 2 === 1}
                  onClick={() => handleProductClick(product)}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-muted-foreground mb-4">No products found matching your criteria.</div>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}