'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Code2, Server, ShieldCheck } from 'lucide-react';

const sections = [
  { id: 'introduction', title: 'Introduction', icon: <BookOpen /> },
  { id: 'api', title: 'API Reference', icon: <Code2 /> },
  { id: 'backend', title: 'Backend Setup', icon: <Server /> },
  { id: 'security', title: 'Security', icon: <ShieldCheck /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 flex">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block border-r border-zinc-200 dark:border-zinc-700 p-6 sticky top-0 h-screen">
        <nav className="space-y-4">
          <h2 className="text-lg font-bold">Documentation</h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-zinc-600 hover:text-purple-600 transition"
                >
                  {section.icon}
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 md:p-12 space-y-24">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeUp}
            className="scroll-mt-24"
          >
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ullamcorper orci, sed luctus elit. 
              Curabitur vel sapien at nulla imperdiet viverra sed in enim.
            </p>
          </motion.section>
        ))}
      </main>
    </div>
  );
}
