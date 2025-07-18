"use client";

import { motion, useInView } from "framer-motion";
import { Code, Palette, Smartphone, Rocket, ArrowRight, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites using cutting-edge technologies.",
    icon: <Code className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and user-friendly designs for all platforms.",
    icon: <Palette className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform apps with smooth performance.",
    icon: <Smartphone className="w-10 h-10 text-green-500" />,
  },
  {
    title: "SEO & Growth",
    description: "Boost your presence with SEO and growth strategies.",
    icon: <Rocket className="w-10 h-10 text-yellow-500" />,
  },
];

// Simple rotating testimonial data (replace w/ CMS as needed)
const testimonials = [
  {
    quote: "They transformed our online presence—traffic up 240% in 3 months!",
    name: "Ayesha Khan",
    role: "Founder, StartUp PK",
    avatar: "/avatars/ayesha.jpg",
  },
  {
    quote: "Clean code, fast delivery, and amazing design. Highly recommended.",
    name: "Daniel Ahmed",
    role: "CTO, ByteStack",
    avatar: "/avatars/daniel.jpg",
  },
  {
    quote: "Our mobile app launch went flawlessly thanks to this team.",
    name: "Sarah Lee",
    role: "Product Lead, MoveNow",
    avatar: "/avatars/sarah.jpg",
  },
];

// Stats counters section
const stats = [
  { label: "Projects Delivered", value: 120 },
  { label: "Active Clients", value: 45 },
  { label: "Avg. NPS", value: 72 },
  { label: "Countries Served", value: 18 },
];


// Typing Effect for Hero Text
const useTypingEffect = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayedText;
};

// Animated counter when in view (RAF based; avoids MotionValue rendering issues)
const useCountUp = (target, start = 0, duration = 1) => {
  const node = useRef(null);
  const isInView = useInView(node, { once: true, amount: 0.3 });
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!isInView) return;
    let frame;
    const startTime = performance.now();
    const diff = target - start;
    const durMs = duration * 1000;

    const tick = (now) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / durMs, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(start + diff * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, start, target, duration]);

  return { node, value };
};

/* ------------------------------------------------------------------
 * PARTICLES (SSR-safe)
 * ------------------------------------------------------------------ */
const genId = () => Math.random().toString(36).slice(2, 11);

const useParticles = (count = 20) => {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const arr = Array.from({ length: count }).map(() => ({
      id: genId(),
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 3 + 1,
      dur: 10 + Math.random() * 10,
    }));
    setParticles(arr);
  }, [count]);
  return particles;
};

/* ------------------------------------------------------------------
 * COMPONENTS
 * ------------------------------------------------------------------ */
function ParticlesLayer({ count = 20 }) {
  const particles = useParticles(count);
  if (!particles.length) return null;
  const w = typeof window !== "undefined" ? window.innerWidth : 1920;
  const h = typeof window !== "undefined" ? window.innerHeight : 1080;
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white opacity-20"
          style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
          animate={{
            x: [p.x, Math.random() * w],
            y: [p.y, Math.random() * h],
          }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

function StatItem({ label, value }) {
  const { node, value: current } = useCountUp(value, 0, 1.8);
  return (
    <div ref={node} className="flex flex-col items-center p-4">
      <motion.span
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {current}
      </motion.span>
      <span className="mt-2 text-gray-400 text-sm text-center max-w-[8ch] leading-snug">
        {label}
      </span>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="relative z-10 py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <StatItem key={s.label} label={s.label} value={s.value} />
        ))}
      </div>
    </section>
  );
}

function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[index];
  return (
    <section className="relative z-10 py-24 px-6 md:px-16 text-center">
      <motion.div
        key={t.name + index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="mb-6 flex justify-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500">
            {t.avatar ? (
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                sizes="80px"
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            ) : (
              <div className="w-full h-full bg-purple-500" />
            )}
          </div>
        </div>
        <p className="text-xl md:text-2xl font-medium text-gray-100 leading-relaxed mb-4">
          “{t.quote}”
        </p>
        <p className="text-gray-400 text-sm">
          {t.name} • {t.role}
        </p>
      </motion.div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16">
      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/80 to-purple-700/80 p-[1px]">
        <div className="rounded-3xl bg-gray-900/90 p-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Build Something Great?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            <Mail className="w-5 h-5" /> Contact Us <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * MAIN PAGE
 * ------------------------------------------------------------------ */
export default function Services() {
  const typedText = useTypingEffect("Our Services", 120);

  // Variants reused
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <motion.div
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-700 via-gray-900 to-black opacity-40"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Particles */}
      <ParticlesLayer count={24} />

      {/* Hero Section */}
      <section className="relative text-center py-24 px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          {typedText}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          We provide world-class solutions for businesses, startups, and individuals.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0px rgba(255,255,255,0.0)",
              "0 0 20px rgba(59,130,246,0.8)",
              "0 0 0px rgba(255,255,255,0.0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg inline-block"
        >
          Get Started
        </motion.a>
      </section>

      {/* Services Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16 pb-20"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              rotateY: 10,
              rotateX: 5,
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(0,0,0,0.8)",
            }}
            className="relative bg-gray-800 p-6 rounded-xl shadow-lg overflow-hidden group will-change-transform [transform-style:preserve-3d]"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 group-hover:animate-pulse pointer-events-none" />
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Stats */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* Contact CTA */}
      <div id="contact">
        <ContactCTA />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-10">
        <p>© 2025 MyCompany. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          {["facebook", "twitter", "linkedin"].map((icon) => (
            <motion.a
              key={icon}
              whileHover={{ scale: 1.3, rotate: 10 }}
              className="cursor-pointer"
              href={`https://${icon}.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`/${icon}.svg`} alt={icon} className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </footer>
    </motion.div>
  );
}
