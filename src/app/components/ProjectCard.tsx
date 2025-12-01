import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, IndianRupee } from 'lucide-react';

interface ProjectProps {
  name: string;
  location: string;
  price: string;
  type: string;
  image?: string;
  developerName?: string;
}

export default function ProjectCard({ name, location, price, type, image, developerName }: ProjectProps) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-56 w-full bg-slate-200 overflow-hidden">
        {image ? (
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
            <span className="text-sm font-medium">Image Coming Soon</span>
          </div>
        )}

        {/* Price Overlay - Gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10">
           <p className="text-white font-bold text-lg flex items-center">
             {/* Simple check if price contains digits, otherwise show text as is */}
             {price}
           </p>
        </div>

        {/* Type Badge (e.g., 2/3 BHK Apts) */}
        <div className="absolute top-3 right-3 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md border border-white/50">
          {type}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        {developerName && (
          <p className="text-xs text-blue-600 font-bold mb-1 uppercase tracking-wider">
            {developerName}
          </p>
        )}
        
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-start text-slate-500 text-sm mb-6 flex-grow">
          <MapPin size={16} className="mr-1.5 mt-0.5 flex-shrink-0 text-slate-400" />
          <span className="line-clamp-2">{location}</span>
        </div>

        <Link 
          href="/contact" 
          className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white py-3 rounded-lg transition-all duration-300 font-medium border border-slate-200 hover:border-slate-900"
        >
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}