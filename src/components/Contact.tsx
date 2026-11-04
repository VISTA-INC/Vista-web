"use client";

import { useState } from "react";

// TODO: Integrate EmailJS. Install @emailjs/browser, add service/template/public key
// import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    // TODO: Replace with EmailJS integration
    // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSending(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-sm text-indigo-600">
            Contact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Interested in PRISM? Want to run a pilot? Drop us a line.
          </p>
        </div>

        <div className="reveal max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors resize-none"
                placeholder="Tell us about your use case..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/25"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <div className="text-center p-4 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-700 text-sm">
                Message sent! We&apos;ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
