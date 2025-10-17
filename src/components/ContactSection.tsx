import { motion } from 'motion/react';
import { Mail, Instagram, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-purple-500 tracking-wide mb-4 block">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Contact Nini's Knits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your crochet dreams to life? Get in touch for custom orders, 
            questions, or just to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Instagram,
              title: "Instagram",
              content: "@snug.crochet.by.nini",
              description: "Follow for updates & custom orders",
              link: "https://www.instagram.com/snug.crochet.by.nini?igsh=MW5jbHJkYzY5Mm9qYQ%3D%3D&utm_source=qr"
            },
            {
              icon: Mail,
              title: "Email",
              content: "hello@ninisknits.com",
              description: "Send us your questions"
            },
            {
              icon: MapPin,
              title: "Location",
              content: "Handmade with Love",
              description: "Shipped worldwide"
            },
            {
              icon: Clock,
              title: "Response Time",
              content: "24-48 hours",
              description: "We'll get back to you soon"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium mb-2 transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-purple-600 font-medium mb-2">{item.content}</p>
                )}
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Ready to start your custom crochet journey? Let's create something magical together!
          </p>
          <motion.a
            href="https://www.instagram.com/snug.crochet.by.nini?igsh=MW5jbHJkYzY5Mm9qYQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 text-lg font-medium"
          >
            <Instagram className="w-5 h-5" />
            Start Your Custom Order
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

