import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaDatabase,
  FaCloud,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Python', icon: FaPython, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Database', icon: FaDatabase, color: 'text-indigo-500' },
    { name: 'Cloud', icon: FaCloud, color: 'text-orange-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Who I Am
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I'm a passionate full-stack developer with a love for creating elegant solutions
            to complex problems. With expertise in modern web technologies, I build
            scalable applications that deliver exceptional user experiences.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or sharing knowledge with the developer community.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
            Education
          </h3>
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Bachelor of Technology in Computer Science</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">Lovely Professional University | 2023 - 2027</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Skills & Technologies
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-4 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <skill.icon className={`text-4xl mb-2 ${skill.color}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

