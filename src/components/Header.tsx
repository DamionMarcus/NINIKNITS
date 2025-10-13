import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Heart, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  onNavigateToProducts?: () => void;
}

export function Header({ onNavigateToProducts }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
            <span className="text-lg md:text-xl tracking-wide font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Nini's Knits</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Products', action: 'products' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  if (item.action === 'products' && onNavigateToProducts) {
                    onNavigateToProducts();
                  } else if (item.href) {
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-foreground hover:text-purple-500 transition-colors relative"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ShoppingBag className="w-6 h-6 text-foreground hover:text-purple-500 cursor-pointer transition-colors" />
            </motion.div>
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              onClick={onNavigateToProducts}
            >
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Products', action: 'products' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  if (item.action === 'products' && onNavigateToProducts) {
                    onNavigateToProducts();
                  } else if (item.href) {
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-foreground hover:text-purple-500 transition-colors"
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
            <div className="pt-4 border-t border-border">
              <Button 
                variant="default" 
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                onClick={() => {
                  onNavigateToProducts?.();
                  setIsMenuOpen(false);
                }}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}