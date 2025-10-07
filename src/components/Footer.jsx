import { motion } from 'framer-motion';
import { HiHeart, HiCode } from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-primary-950 border-t-2 border-primary-200 dark:border-primary-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4 cursor-pointer inline-block"
              onClick={scrollToTop}
            >
              {personalInfo.name}
            </motion.h3>
            <p className="text-primary-600 dark:text-primary-400 max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-primary-600 dark:text-primary-400 hover:text-primary-950 dark:hover:text-white transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {Object.entries(personalInfo.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="w-10 h-10 border-2 border-primary-950 dark:border-white rounded-full flex items-center justify-center hover:bg-primary-950 hover:text-white dark:hover:bg-white dark:hover:text-primary-950 transition-all duration-300"
                >
                  <span className="capitalize text-xs font-mono">
                    {platform.charAt(0).toUpperCase()}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-primary-200 dark:border-primary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-600 dark:text-primary-400 flex items-center gap-2">
            © {currentYear} {personalInfo.name}. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <HiHeart className="text-red-500" />
            </motion.span>
            and
            <HiCode className="text-primary-950 dark:text-white" />
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="px-6 py-2 border-2 border-primary-950 dark:border-white rounded-full hover:bg-primary-950 hover:text-white dark:hover:bg-white dark:hover:text-primary-950 transition-all duration-300 flex items-center gap-2"
          >
            <span>Back to Top</span>
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ↑
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
