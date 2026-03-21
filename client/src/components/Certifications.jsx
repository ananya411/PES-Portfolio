import { motion } from 'framer-motion';

const Certifications = () => {
    const certs = [
        {
            title: 'Red Hat System Administration (RH124-RHA)',
            issuer: 'Certificate',
            date: "Dec' 25"
        },
        {
            title: 'Technology Job Simulation',
            issuer: 'Deloitte',
            date: "Jun' 25"
        },
        {
            title: 'ChatGPT-4 Prompt Engineering',
            issuer: 'Infosys',
            date: 'Certificate'
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
        <section id="certifications" className="section-container bg-white dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Certifications
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-primary-500"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{cert.title}</h3>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">{cert.issuer}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-auto">{cert.date}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Certifications;
