import { motion } from 'framer-motion';

const Achievements = () => {
    const achievementsList = [
        {
            title: "Core Team Member (Cloud Computing & Coding)",
            organization: "AWS Community Event",
            description: "Mentored 50+ students in AWS cloud and coding, assisting with concepts and real-time troubleshooting."
        },
        {
            title: "AI/ML Track Winner",
            organization: "InnovateX Hackathon - GDG IIIT Kalyani",
            description: "Built an innovative AI/ML solution as part of team LogicXDev, competing against top student developers."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

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
                <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto space-y-8"
            >
                {achievementsList.map((achievement, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 shadow-xl overflow-hidden group"
                    >
                        {/* Ambient Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400/20 rounded-full blur-3xl group-hover:bg-primary-400/30 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {achievement.title}
                            </h3>
                            <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-500 mb-4">
                                {achievement.organization}
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {achievement.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Achievements;
