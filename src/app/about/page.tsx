import Link from "next/link";
import { ShieldCheck, TrendingUp, Users, Home, CheckCircle, Search } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Redefining Real Estate in NCR</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Futuristic Noida is more than just a consultancy. We are your strategic partners in navigating the complex landscape of Noida and Greater Noida real estate with absolute transparency.
          </p>
        </div>
      </section>

      {/* 2. Mission & Transparency (The Core Value) */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] bg-slate-200 rounded-2xl overflow-hidden">
             {/* Replace with a real team or office image */}
             <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                <span className="font-semibold">Office / Team Image Placeholder</span>
             </div>
             {/* Floating Badge */}
             <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
               <div className="flex items-center gap-3 mb-2">
                 <ShieldCheck className="text-blue-600" size={24} />
                 <span className="font-bold text-slate-800">100% Verified</span>
               </div>
               <p className="text-xs text-slate-500">Every listing on our platform undergoes a strict legal and physical verification process.</p>
             </div>
          </div>
          
          <div>
            <h2 className="text-blue-600 font-bold tracking-wide uppercase mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Transparency is our Currency.</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              In a market flooded with information, finding the truth can be hard. Futuristic Noida was born out of a need for a professional, ethical, and data-driven approach to property consulting.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We specialize in the <strong>Delhi-NCR region</strong>, with a hyper-focus on the rapidly developing corridors of Noida Expressway, Greater Noida West, and the Yamuna Expressway.
            </p>
            
            <ul className="space-y-4">
              {[
                "RERA Compliant Projects Only",
                "Direct Developer Deals (No Middlemen)",
                "End-to-End Documentation Support",
                "Post-Sales Assistance"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-medium">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Our Services */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Real Estate Services</h2>
            <p className="text-slate-600">From the first search to handing over the keys.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Buying</h3>
              <p className="text-slate-500 text-sm">
                Curated selection of premium apartments and villas. We help you find the perfect home that fits your lifestyle and budget.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border border-slate-100">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Investment</h3>
              <p className="text-slate-500 text-sm">
                Data-backed advice on high-growth corridors. We identify commercial and residential assets with the highest ROI potential.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Home size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Selling</h3>
              <p className="text-slate-500 text-sm">
                Market your property to verified buyers. We handle the valuation, marketing, and negotiation to get you the best price.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border border-slate-100">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Consultation</h3>
              <p className="text-slate-500 text-sm">
                Confused about RERA? Need help with home loans? Our legal and financial experts are here to guide you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-20 container mx-auto px-4 text-center">
        <div className="bg-blue-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
           {/* Decorative circles */}
           <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mt-16"></div>
           <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full -mr-24 -mb-24"></div>

           <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to find your dream space?</h2>
           <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
             Whether you are looking for a luxury apartment in Sector 150 or a commercial plot in Greater Noida, we have the inventory and the expertise.
           </p>
           <Link href="/contact" className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-lg hover:bg-slate-100 transition shadow-lg relative z-10">
             Talk to an Expert
           </Link>
        </div>
      </section>

    </div>
  );
}