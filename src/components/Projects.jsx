import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaStar, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
  const githubStats = [
    { icon: FaCode, label: 'Public Repos', value: '25+' },
    { icon: FaStar, label: 'Total Stars', value: '150+' },
    { icon: FaCodeBranch, label: 'Contributions', value: '500+' }
  ];

  return (
    <section id="projects" className="py-20 bg-primary-50 dark:bg-primary-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900 dark:text-primary-50">
            My Work Lives on{' '}
            <span className="gradient-text">GitHub</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-600 dark:text-primary-300 mb-12">
            Instead of showcasing projects here, I invite you to explore my active GitHub profile where I continuously build, experiment, and contribute to open-source.
          </p>


          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Button */}
            <motion.a
              href="https://github.com/FatemehYpr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-3 px-10 py-6 bg-primary-900 dark:bg-primary-50 text-primary-50 dark:text-primary-900 rounded-2xl font-bold text-xl group overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
              <span>Visit My GitHub Profile</span>
              
              {/* Animated Arrow */}
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Secondary Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-sm text-primary-500 dark:text-primary-400"
          >
            🌟 Check out my latest projects, contributions, and code experiments
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
