import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCamera, FiFilm, FiMusic } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: 'HTML5 & CSS3', level: 90, icon: FiCode },
    { name: 'JavaScript', level: 60, icon: FiCode },
    { name: 'React.js', level: 60, icon: FiCode },
    { name: 'Tailwind CSS', level: 60, icon: FiCode },
    { name: 'UI/UX Design', level: 50, icon: FiCode },
  ];

  const interests = [
    {
      icon: FiCamera,
      title: 'Photography',
      description: 'Capturing moments and telling stories through visual art',
    },
    {
      icon: FiFilm,
      title: 'Cinema',
      description: 'Exploring narratives and cinematography in film',
    },
    {
      icon: FiMusic,
      title: 'Music',
      description: 'Finding inspiration in diverse soundscapes',
    },
  ];

  return (
    <section id="about" className="py-32 bg-primary-100 dark:bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.05] text-primary-950 dark:text-primary-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary-950 dark:text-primary-50">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves creating beautiful, functional experiences.
            When I'm not coding, you'll find me behind a camera or immersed in art.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-primary-950 dark:text-primary-50">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary-700 dark:text-primary-300" />
                      <span className="font-medium text-primary-800 dark:text-primary-200">{skill.name}</span>
                    </div>
                    <span className="text-sm text-primary-600 dark:text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-primary-200 dark:bg-primary-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8 text-primary-950 dark:text-primary-50">My Story</h3>
            <p className="text-primary-700 dark:text-primary-300 leading-relaxed">
            My journey began as a Computer Engineering student at Amirkabir University, where I developed strong foundations in problem‑solving and logical thinking. While working on data‑driven projects, I discovered that my true drive comes from building interactive and visually engaging digital experiences.
            </p>
            <p className="text-primary-700 dark:text-primary-300 leading-relaxed">
            I believe in the intersection of technology and art. Whether I’m writing clean code or composing a photograph, I strive for elegance and purpose in everything I create. Inspired by photography and cinema, I approach front‑end development with a focus on clean design, intuitive user interaction, and storytelling through visuals.
            </p>
            <p className="text-primary-700 dark:text-primary-300 leading-relaxed">
            I am committed to growing as a front‑end developer and exploring how creativity and technology can work together to craft meaningful user experiences.
            </p>
          </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-primary-950 dark:text-primary-50">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="p-8 bg-primary-50 dark:bg-primary-950 rounded-2xl border border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:scale-105 group"
              >
                <interest.icon className="w-12 h-12 mb-4 text-primary-700 dark:text-primary-300 group-hover:text-primary-900 dark:group-hover:text-primary-100 transition-colors" />
                <h4 className="text-xl font-bold mb-3 text-primary-950 dark:text-primary-50">
                  {interest.title}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
