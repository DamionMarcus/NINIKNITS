import { motion } from 'motion/react';
import { Heart, Award, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AboutSection() {
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const achievements = [
    {
      icon: Heart,
      number: '500+',
      label: 'Happy Customers',
      description: 'Families who have welcomed our creations into their homes'
    },
    {
      icon: Award,
      number: '1000+',
      label: 'Items Crafted',
      description: 'Unique pieces created with passion and dedication'
    },
    {
      icon: Users,
      number: '50+',
      label: 'Custom Orders',
      description: 'Personalized pieces designed just for you'
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Years Experience',
      description: 'Perfecting the art of crochet craftsmanship'
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: contentVisible ? 1 : 0, x: contentVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-pink-500 tracking-wide">About Nini's Knits</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl mb-6"
            >
              Where Passion Meets
              <span className="text-pink-500"> Purpose</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 text-muted-foreground mb-8"
            >
              <p>
                Welcome to StitchCraft, where every thread tells a story and every creation carries a piece of my heart. 
                What started as a childhood hobby watching my grandmother's nimble fingers transform simple yarn into 
                beautiful treasures has blossomed into a passionate pursuit of bringing handmade warmth to homes everywhere.
              </p>
              
              <p>
                Each piece in our collection is more than just a product - it's a labor of love, crafted during quiet 
                moments filled with intention and care. From the first loop to the final stitch, every creation is 
                infused with the joy of making something beautiful with my own hands.
              </p>

              <p>
                Our mission is simple: to bring you heirloom-quality pieces that not only beautify your space but 
                also carry the warmth and love that only handmade items can provide. Every purchase supports a small 
                business built on passion, authenticity, and the timeless art of crochet.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">With love and stitches,</p>
                <p className="text-pink-500 italic">Sarah Chen, Founder</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: imageVisible ? 1 : 0, x: imageVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633204094618-1d4623e365f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMGNvenl8ZW58MXx8fHwxNzU5MzI5OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Artisan crafting"
                className="w-full h-96 object-cover"
              />
              
              {/* Overlay Quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg italic mb-2">
                    "Every stitch is a meditation, every piece a prayer of gratitude."
                  </p>
                  <p className="text-sm opacity-90">- Our Daily Inspiration</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg p-4 md:p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <achievement.icon className="w-6 h-6 text-pink-500" />
                    <span className="text-2xl text-pink-500">{achievement.number}</span>
                  </div>
                  <h4 className="text-sm mb-1">{achievement.label}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}