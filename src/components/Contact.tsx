"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

// TODO: Integrate EmailJS. Install @emailjs/browser, add service/template/public key
// import emailjs from '@emailjs/browser';

const EMPTY = { name: "", company: "", email: "", message: "" };

const inputClass =
  "w-full px-3.5 py-3 md:py-2.5 text-base md:text-sm rounded-lg border border-line bg-paper text-ink placeholder:text-zinc-400 focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-colors";

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
    setFormData(EMPTY);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="07"
          label="Contact"
          title="Run a pilot with your team"
          intro="Tell us about your operation and the questions your team needs answered. We will follow up to scope a pilot."
        />

        <div className="grid gap-6 md:grid-cols-12">
          <div data-animate="fade" className="md:col-span-3 text-sm text-muted leading-relaxed">
            <p className="font-medium text-ink mb-2">What to include</p>
            <ul className="space-y-1">
              <li>Industry and site size</li>
              <li>Data sources you use</li>
              <li>Hardware you have today</li>
            </ul>
          </div>

          <form data-animate="stagger" onSubmit={handleSubmit} className="md:col-span-9 max-w-2xl grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Full name" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">Company</label>
              <input id="company" name="company" type="text" autoComplete="organization" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Company name" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Work email</label>
              <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">Message</label>
              <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Describe your use case" />
            </div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto h-12 sm:h-11 px-5 rounded-lg bg-ink text-paper text-sm font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Send inquiry"}
              </button>
              {submitted && (
                <p role="status" className="text-sm text-body">
                  Thank you. We will be in touch shortly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
