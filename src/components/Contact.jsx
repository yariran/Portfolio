import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <HiMail className="w-6 h-6" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
  
    {
      icon: <HiLocationMarker className="w-6 h-6" />,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="contact" className="py-32 bg-primary-50 dark:bg-primary-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-950 dark:bg-white rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-header">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary-950 dark:bg-white mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6">Let's Talk</h3>
              <p className="text-lg text-primary-600 dark:text-primary-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 border-2 border-primary-200 dark:border-primary-800 rounded-xl hover:border-primary-950 dark:hover:border-white transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary-950 dark:bg-white text-white dark:text-primary-950 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-primary-500 dark:text-primary-400">
                      {info.label}
                    </div>
                    <div className="font-semibold text-lg">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8 border-t-2 border-primary-200 dark:border-primary-800">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {Object.entries(personalInfo.social).map(([platform, url]) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 border-2 border-primary-950 dark:border-white rounded-full flex items-center justify-center hover:bg-primary-950 hover:text-white dark:hover:bg-white dark:hover:text-primary-950 transition-all duration-300"
                  >
                    <span className="capitalize text-sm font-mono">
                      {platform.charAt(0).toUpperCase()}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-primary-950 border-2 border-primary-200 dark:border-primary-800 rounded-xl focus:border-primary-950 dark:focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="ِYour Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-primary-950 border-2 border-primary-200 dark:border-primary-800 rounded-xl focus:border-primary-950 dark:focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="Yariran@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white dark:bg-primary-950 border-2 border-primary-200 dark:border-primary-800 rounded-xl focus:border-primary-950 dark:focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary-950 dark:bg-white text-white dark:text-primary-950 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-6 h-6 border-2 border-white dark:border-primary-950 border-t-transparent rounded-full"
                  />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <HiPaperAirplane className="w-5 h-5" />
                  </motion.div>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
