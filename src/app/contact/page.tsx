"use client"; // Client component for form handling

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setStatus("Thank you! Our team from Futuristic Noida will contact you shortly.");
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 mb-8">
            Looking for a property in Noida or Greater Noida? Our team of experts is here to guide you through every step.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">📞</div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4">💬</div>
              <div>
                <h3 className="font-bold">WhatsApp</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-lg mr-4">🏢</div>
              <div>
                <h3 className="font-bold">Office</h3>
                <p>Sector 62, Noida, Uttar Pradesh 201309</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          {status ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg">{status}</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input required type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input required type="email" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Property of Interest</label>
                <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>General Inquiry</option>
                  <option>Gaurs Group Projects</option>
                  <option>Arihant Group Projects</option>
                  <option>Investment Opportunities</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="I am looking for a 3BHK in..." />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}