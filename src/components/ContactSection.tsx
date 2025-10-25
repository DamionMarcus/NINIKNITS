import { motion } from 'motion/react';
import { Mail, MessageSquare, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-pink-500 tracking-wide">Get in Touch</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-900 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Have Questions or Custom Orders?
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have questions about our products, 
              want to place a custom order, or just want to chat about crochet, feel free to reach out.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-pink-500" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Send us an email anytime, and we'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:snug.crochet.by.nini@gmail.com"
                className="text-pink-500 hover:text-pink-600 font-semibold"
              >
                snug.crochet.by.nini@gmail.com
              </a>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-pink-500" />
                <h3 className="text-xl font-semibold">Instagram</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Follow us on Instagram for behind-the-scenes content and new releases.
              </p>
              <a 
                href="https://www.instagram.com/snug.crochet.by.nini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 font-semibold"
              >
                @snug.crochet.by.nini
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

