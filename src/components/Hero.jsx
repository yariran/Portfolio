import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/yariran', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/fatemeh-yaripour-23510b241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://instagram.com/yarirann', label: 'Instagram' },
    { icon: FiMail, href: 'mailto:yariran1380@gmail.com', label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.05] text-primary-950 dark:text-primary-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-block"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                <div className="relative">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border-4 border-primary-50 dark:border-primary-950 grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-primary-50 dark:border-primary-950 animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary-950 dark:text-primary-50"
            >
              Fatemeh <span className="gradient-text">Yaripour</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl text-primary-700 dark:text-primary-300 font-light mb-4">
               Front-End Developer & Photographer              </p>
              <p className="text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto leading-relaxed">
                Crafting elegant solutions through code, capturing moments through lens,
                and finding inspiration in cinema and music.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center gap-4 mb-12"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-primary-200 dark:bg-primary-900 rounded-full hover:bg-primary-300 dark:hover:bg-primary-800 transition-colors group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-primary-800 dark:text-primary-200 group-hover:text-primary-950 dark:group-hover:text-primary-50 transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-950 dark:bg-primary-50 text-primary-50 dark:text-primary-950 rounded-full font-medium hover:scale-105 transition-transform group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Work Together</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - خارج از container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary-500 dark:border-primary-500 rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-3 bg-primary-600 dark:bg-primary-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
