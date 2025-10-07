import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiLetterboxd, SiSpotify } from 'react-icons/si';
import { FiFilm, FiMusic, FiExternalLink } from 'react-icons/fi';

const Interests = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const favoriteFilms = [
    { title: 'Persona', year: '1966', director: ' Ingmar Bergman' },
    { title: 'In the Mood for Love', year: '2000', director: 'Wong Kar-wai' },
    { title: 'The Grand Budapest Hotel', year: '2014', director: 'Wes Anderson' },
    { title: 'Psycho', year: '1960', director: ' Alfred Hitchcock' },
  ];

  const currentlyListening = [
    { artist: 'London Grammer', genre: 'Alternative/Indie' },
    { artist: 'Anathema', genre: 'Post-progressive Rock' },
    { artist: 'Pink Floyd', genre: 'Progressive Rock' },
    { artist: 'Florence and the Machine', genre: ' Indie Rock' },
  ];

  return (
    <section id="interests" className="py-32 bg-primary-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Beyond <span className="gradient-text">Code</span>
          </h2>
          <p className="text-xl text-primary-300 max-w-2xl mx-auto">
            When I'm not coding, I'm immersed in the worlds of cinema and music.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Cinema Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group p-10 bg-primary-900/30 backdrop-blur-sm border border-primary-800/50 rounded-3xl hover:border-primary-700 transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary-800/50 rounded-2xl group-hover:bg-primary-700/50 transition-colors">
                <FiFilm className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Cinema</h3>
                <p className="text-primary-400">Visual Storytelling</p>
              </div>
            </div>

            <p className="text-primary-300 mb-8 leading-relaxed">
              I find endless inspiration in the art of filmmaking—from the subtle emotions
              in a close-up to the poetry of a well-composed frame.
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
                Recent Favorites
              </h4>
              {favoriteFilms.map((film, index) => (
                <motion.div
                  key={film.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-primary-900/40 rounded-xl border border-primary-800/30 hover:border-primary-700/50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium mb-1">{film.title}</h5>
                      <p className="text-sm text-primary-400">{film.director}</p>
                    </div>
                    <span className="text-sm text-primary-500">{film.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://boxd.it/dHCCr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary-50 text-primary-950 rounded-full font-medium hover:bg-primary-100 transition-all duration-300 hover:scale-105 group/btn"
            >
              <SiLetterboxd className="w-5 h-5" />
              <span>Follow on Letterboxd</span>
              <FiExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Music Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group p-10 bg-primary-900/30 backdrop-blur-sm border border-primary-800/50 rounded-3xl hover:border-primary-700 transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary-800/50 rounded-2xl group-hover:bg-primary-700/50 transition-colors">
                <FiMusic className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Music</h3>
                <p className="text-primary-400">Sonic Landscapes</p>
              </div>
            </div>

            <p className="text-primary-300 mb-8 leading-relaxed">
              Music shapes my creative process. From ambient soundscapes to indie rock,
              every track tells a story and sets a mood.
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
                Currently On Repeat
              </h4>
              {currentlyListening.map((track, index) => (
                <motion.div
                  key={track.artist}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-primary-900/40 rounded-xl border border-primary-800/30 hover:border-primary-700/50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium mb-1">{track.artist}</h5>
                      <p className="text-sm text-primary-400">{track.genre}</p>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-primary-600 rounded-full animate-pulse" />
                      <div className="w-1 h-4 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1 h-4 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://open.spotify.com/user/yarirann"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary-50 text-primary-950 rounded-full font-medium hover:bg-primary-100 transition-all duration-300 hover:scale-105 group/btn"
            >
              <SiSpotify className="w-5 h-5" />
              <span>Follow on Spotify</span>
              <FiExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
