"use client";
import { MapPin, Phone, MessageSquare } from 'lucide-react';
import Script from 'next/script'; // CRITICAL: Must be imported correctly.

// Ensure all component names (Contact) start with a capital letter
export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info Section */}
        <div>
          {/* Using font-heading for the large title (requires Tailwind config update) */}
          <h1 className="text-4xl font-heading font-bold mb-6 text-slate-900 text-white">Get in Touch</h1>
          <p className="text-lg text-slate-600 mb-8 text-white">
            Speak directly with an NCR specialist. Fill out the secure form or use the contact details below to start your property consultation today.
          </p>
          
          <div className="space-y-6">
            
            {/* Phone Numbers */}
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-700">📞</div>
              <div>
                <h3 className="font-bold text-slate-800 text-white">Phone Numbers</h3>
                <p className="text-slate-600 text-white">+91 96500 33511</p>
                <p className="text-slate-600 text-white">+91 99537 93147</p>
              </div>
            </div>
            
            {/* WhatsApp */}
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4 text-green-700">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-white">WhatsApp Support</h3>
                {/* Use wa.me link for direct chat */}
                <a href="https://wa.me/919818927589" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    +91 98189 27581 (Click to Chat)
                </a>
              </div>
            </div>
            
            {/* Office Location */}
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-lg mr-4 text-slate-700">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-white">Office</h3>
                <p className="text-slate-600 text-white">LG 16, Rise Shoplex, Atul Marg, Sector 1, Greater Noida, Uttar Pradesh</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* HubSpot Form Embedding Section - Ensures secure submission */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Our NCR Specialist</h2>
          
          {/* 1. HubSpot Script Load */}
          <Script 
            src="https://js-na2.hsforms.net/forms/embed/244503526.js" 
            strategy="lazyOnload" // Loads script only when visible
          />

          {/* 2. HubSpot Form Container */}
          <div 
            className="hs-form-frame" 
            data-region="na2" 
            data-form-id="79c7e573-c4f3-4403-bbbe-97057e4ad1a6" 
            data-portal-id="244503526"
          >
            {/* The secure HubSpot form will render here */}
          </div>
        </div>
      </div>
    </div>
  );
}