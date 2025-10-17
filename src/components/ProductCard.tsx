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
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-12 items-center`}
    >
      {/* Product Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        className="relative cursor-pointer group lg:w-1/2"
      >
        <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-lg max-w-sm mx-auto lg:max-w-none">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isNew && (
              <Badge className="bg-pink-500 text-white text-xs px-2 py-1">
                New
              </Badge>
            )}
            <Badge className="bg-white/90 text-gray-700 text-xs px-2 py-1 flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {rating}
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* Product Content */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className="lg:w-1/2 flex flex-col justify-center space-y-4 lg:space-y-6 text-center lg:text-left"
      >
        {/* Product Name & Price */}
        <div className="space-y-2">
          <h3 className="text-xl lg:text-3xl font-bold text-gray-900 leading-tight">
            {name}
          </h3>
          <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            {price}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
          {description}
        </p>

        {/* Craft Time */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Crafted in {craftTime}</span>
        </div>

        {/* Story Preview */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 lg:p-6 rounded-xl border border-pink-100">
          <h4 className="text-sm font-semibold text-purple-600 mb-2">The Story Behind</h4>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {story}
          </p>
        </div>

        {/* View Details Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClick}
          className="self-center lg:self-start bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
        >
          View Details
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

