import { motion } from 'framer-motion';

const Achievements = () => {
    return (
        <section id="achievements" className="section-container bg-gray-50 dark:bg-gray-800">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Achievements
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
                <p className="text-gray-600 dark:text-gray-400">
                    Stay tuned! Exciting achievements will be added here soon.
                </p>
            </motion.div>
        </section>
    );
};

export default Achievements;
