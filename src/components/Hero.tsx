import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroProps {
  onNavigateToProducts?: () => void;
}

export function Hero({ onNavigateToProducts }: HeroProps) {
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100" />
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: contentVisible ? 1 : 0, x: contentVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span className="text-pink-500 tracking-wide">Handcrafted with Love</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight"
            >
              Welcome to Snug.crochet.by.nini
            </motion.h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                Discover our collection of handcrafted crochet pieces, each telling a unique story of tradition, 
                creativity, and endless hours of passionate craftsmanship.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="group bg-pink-500 hover:bg-pink-600"
                  onClick={onNavigateToProducts}
                >
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="https://www.instagram.com/snug.crochet.by.nini" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-pink-200 hover:bg-pink-50 w-full">
                    Custom Orders
                  </Button>
                </a>
              </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border"
            >
              {[
                { number: '500+', label: 'Happy Customers' },
                { number: '1000+', label: 'Items Crafted' },
                { number: '5 Years', label: 'Experience' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl text-pink-500 mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: imageVisible ? 1 : 0, x: imageVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <ImageWithFallback
                src="/images/1000463386.jpg"
                alt="Sparky the Electric Wonder - Pikachu Plush"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-pink-500" />
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 10, 0],
                x: [0, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center shadow-lg"
            >
              ❤️
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}