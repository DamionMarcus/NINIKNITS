import { motion } from 'motion/react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/snug.crochet.by.nini', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const supportLinks = [
    { name: 'Care Instructions', href: '#' },
    { name: 'Custom Orders', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'Size Guide', href: '#' }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-pink-50 to-purple-100">


      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="w-8 h-8 text-pink-500" />
              <span className="text-xl tracking-wide">Snug.crochet.by.nini</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Handcrafted crochet pieces made with love and attention to detail. 
              Each creation tells a story and brings warmth to your home.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pink-500" />
                <span>snug.crochet.by.nini@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                
              </div>
              <div className="flex items-center space-x-3">
                
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-pink-500 transition-colors text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6">Customer Care</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-pink-500 transition-colors text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-pink-200 bg-white/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 Snug.crochet.by.nini. All rights reserved. Made with ❤️ and countless hours of love.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="hover:text-pink-500 transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="hover:text-pink-500 transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}