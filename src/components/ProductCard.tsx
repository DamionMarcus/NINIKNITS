import { motion } from 'motion/react';
import { Clock, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  story: string;
  craftTime: string;
  rating: number;
  isNew?: boolean;
  index: number;
  isReversed?: boolean;
  onClick: () => void;
}

export function ProductCard({ 
  name, 
  price, 
  image, 
  description, 
  story, 
  craftTime, 
  rating, 
  isNew,
  index,
  isReversed = false,
  onClick
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-2 sm:gap-3 md:gap-6 mb-4 sm:mb-6 md:mb-12`}
    >
      {/* Product Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        className="relative cursor-pointer group md:w-1/2"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay with "View Details" */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-2xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-white px-6 py-3 rounded-full shadow-lg"
            >
              <span className="text-sm">View Details</span>
            </motion.div>
          </motion.div>

          {/* Badges */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col space-y-1 sm:space-y-2">
            {isNew && (
              <Badge className="bg-pink-500 text-white shadow-lg">New</Badge>
            )}
          </div>

          {/* Rating */}
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-0.5 sm:py-1 flex items-center space-x-1 shadow-md sm:shadow-lg">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
      </motion.div>

      {/* Product Details */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className="md:w-1/2 flex flex-col justify-center"
      >
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {/* Name and Price */}
          <div>
            <h3 className="text-base sm:text-lg md:text-2xl mb-0.5 sm:mb-1 md:mb-2 hover:text-pink-500 transition-colors cursor-pointer line-clamp-2" onClick={onClick}>
              {name}
            </h3>
            <div className="text-lg sm:text-xl md:text-3xl text-pink-500">{price}</div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base line-clamp-2 md:line-clamp-none">
            {description}
          </p>

          {/* Craft Time */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Crafted in {craftTime}</span>
          </div>

          {/* Story Preview - Hidden on mobile for compactness */}
          <div className="hidden md:block border-l-4 border-pink-200 pl-4">
            <h4 className="text-sm text-pink-500 mb-2">The Story Behind</h4>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {story}
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 rounded-lg hover:shadow-lg transition-all duration-300 w-full md:w-auto text-xs sm:text-sm md:text-base"
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}