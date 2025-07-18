"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      // API call simulation (replace with your API endpoint)
      await new Promise((res) => setTimeout(res, 1500));
      setStatus("Message Sent ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error sending message ❌");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Got a project in mind? Let's talk and build something amazing together.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <span>support@mycompany.com</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-green-400" />
              <span>+92 300 1234567</span>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-pink-400" />
              <span>Lahore, Pakistan</span>
            </li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl p-8 shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            <Send className="w-5 h-5" /> Send Message
          </motion.button>
          {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
        </motion.form>
      </div>
    </motion.div>
  );
}
