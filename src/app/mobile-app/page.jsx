'use client';

import { motion } from 'framer-motion';
import { Smartphone, Star, Smile, Download } from 'lucide-react';

const sectionFade = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function MobileAppPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-800 dark:text-white">
      {/* Background animation */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 animate-backgroundBlur bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-200 via-blue-300 to-transparent opacity-40 dark:opacity-20 blur-2xl" />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-32">
        {/* Hero Section */}
        <motion.section
          variants={sectionFade}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-purple-600 dark:text-purple-400">
            Experience Mobile Innovation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Our app brings powerful features and elegant design to your fingertips.
          </p>
          <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg transition duration-300">
            Download Now
          </button>
        </motion.section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <Smartphone size={36} />,
              title: 'Cross-Platform',
              desc: 'Works seamlessly on iOS and Android devices.',
            },
            {
              icon: <Star size={36} />,
              title: 'Top Rated',
              desc: 'Loved by thousands of users worldwide.',
            },
            {
              icon: <Smile size={36} />,
              title: 'Intuitive UI',
              desc: 'A delightful experience from first tap to last.',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Screenshots */}
        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">App Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="rounded-xl bg-gray-200 dark:bg-neutral-800 h-60 shadow-inner animate-pulse"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">Screenshot {n}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-10">What Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Ali Khan', text: 'Absolutely love the simplicity and speed!' },
              { name: 'Sarah Malik', text: 'Makes my daily workflow so much smoother.' },
              { name: 'John Doe', text: 'A must-have app in 2025.' },
            ].map((user, i) => (
              <motion.div
                key={i}
                variants={sectionFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg"
              >
                <p className="italic text-gray-600 dark:text-gray-300 mb-2">"{user.text}"</p>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400">{user.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold">Ready to Try the App?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Join thousands already enjoying the experience.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg transition duration-300">
            <Download size={20} /> Get It Now
          </button>
        </motion.section>
      </main>
    </div>
  );

}