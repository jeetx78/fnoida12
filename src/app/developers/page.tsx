import Link from "next/link";
// Go up 2 levels: developers -> app -> src -> then into lib
import { developers } from "../../lib/data";
import { Building2, ArrowRight, MapPin } from "lucide-react";

// ✅ CRITICAL: This 'export default' must be here
export default function DevelopersIndex() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Premium Partners</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We collaborate with the most trusted names in Delhi NCR real estate to bring you verified, high-quality living spaces.
          </p>
        </div>
      </div>

      {/* Developers Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev) => (
            <Link 
              key={dev.id} 
              href={`/developers/${dev.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="h-32 bg-slate-100 relative flex items-center justify-center border-b border-slate-100 group-hover:bg-blue-50 transition-colors">
                <Building2 size={48} className="text-slate-300 group-hover:text-blue-200 transition-colors" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-600 shadow-sm border border-slate-100">
                  {dev.projects.length} Active Projects
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-heading text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {dev.name}
                </h2>
                
                {/* Description Truncated */}
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
                  {dev.description}
                </p>

                {/* Locations Preview */}
                <div className="mb-6 space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Locations</p>
                  <div className="flex flex-wrap gap-2">
                    {/* Extract unique locations (first 2) */}
                    {Array.from(new Set(dev.projects.map(p => p.location.split(',')[0]))).slice(0, 2).map((loc, i) => (
                      <span key={i} className="inline-flex items-center text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                        <MapPin size={10} className="mr-1" /> {loc}
                      </span>
                    ))}
                    {dev.projects.length > 2 && (
                       <span className="text-xs text-slate-400 px-1 py-1">+ more</span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform mt-auto">
                  View Portfolio <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}