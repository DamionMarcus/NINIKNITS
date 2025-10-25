import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Heart, ShoppingCart, ChevronLeft, ChevronRight, Clock, Package, Truck, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductModalProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
    story: string;
    craftTime: string;
    rating: number;
    isNew?: boolean;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  // Generate multiple product images (mock data - in real app these would come from your product data)
  const productImages = [
    product.image,
    'https://images.unsplash.com/photo-1581672203752-b7851b1878da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMGRldGFpbCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzU5MzMwNDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1676557078316-eb85791d3cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwdGV4dHVyZSUyMHBhdHRlcm4lMjBjbG9zZXxlbnwxfHx8fDE3NTkzMzA0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1581672203752-b7851b1878da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwc2NhcmYlMjBkZXRhaWwlMjB0ZXh0dXJlfGVufDF8fHx8MTc1OTMzMDQ5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const features = [
    { icon: Package, text: 'Handcrafted with premium materials' },
    { icon: Truck, text: 'Free shipping on orders over $50' },
    { icon: Shield, text: '30-day satisfaction guarantee' },
    { icon: Clock, text: `Crafted in ${product.craftTime}` }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="h-full overflow-y-auto">
              <div className="grid lg:grid-cols-2 h-full">
                {/* Image Gallery */}
                <div className="relative bg-pink-50/30 flex flex-col">
                  {/* Main Image */}
                  <div className="flex-1 relative overflow-hidden">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={productImages[currentImageIndex]}
                        alt={`${product.name} - View ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Navigation Arrows */}
                    {productImages.length > 1 && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </motion.button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="p-4 bg-white border-t">
                    <div className="flex space-x-2 overflow-x-auto">
                      {productImages.map((image, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                            index === currentImageIndex
                              ? 'border-pink-500'
                              : 'border-gray-200 hover:border-pink-300'
                          }`}
                        >
                          <ImageWithFallback
                            src={image}
                            alt={`View ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 lg:p-8 flex flex-col">
                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-6">
                      {product.isNew && (
                        <Badge className="mb-3 bg-pink-500 text-white">New Arrival</Badge>
                      )}
                      
                      <h1 className="text-2xl lg:text-3xl mb-3">{product.name}</h1>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-lg">{product.rating}</span>
                          <span className="text-sm text-muted-foreground">(128 reviews)</span>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full hover:bg-pink-50 transition-colors"
                        >
                          <Heart className="w-5 h-5 text-pink-500" />
                        </motion.button>
                      </div>

                      <div className="text-3xl text-pink-500 mb-6">{product.price}</div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="mb-3">Description</h3>
                      <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>

                    {/* Story */}
                    <div className="mb-6">
                      <h3 className="mb-3 text-pink-500">The Story Behind</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{product.story}</p>
                    </div>

                    <Separator className="my-6" />

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="mb-4">Features & Benefits</h3>
                      <div className="space-y-3">
                        {features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-3 text-sm"
                          >
                            <feature.icon className="w-4 h-4 text-pink-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Purchase Section */}
                  <div className="border-t pt-6 space-y-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-4">
                      <span>Quantity:</span>
                      <div className="flex items-center border rounded-lg">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-2 hover:bg-gray-50 transition-colors"
                        >
                          -
                        </motion.button>
                        <span className="px-4 py-2 border-x">{quantity}</span>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-2 hover:bg-gray-50 transition-colors"
                        >
                          +
                        </motion.button>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button className="w-full bg-pink-500 hover:bg-pink-600 h-12">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Add to Cart
                      </Button>
                      
                      <Button variant="outline" className="w-full h-12">
                        Buy Now
                      </Button>
                    </div>

                    {/* Additional Info */}
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• Free returns within 30 days</p>
                      <p>• Handcrafted to order - ships in 3-5 business days</p>
                      <p>• Each piece is unique and may vary slightly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}