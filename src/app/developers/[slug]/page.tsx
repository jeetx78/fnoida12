import { developers } from "@/lib/data";// Use relative path for safety
import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import { Building2, ArrowLeft, MapPin, CheckCircle } from "lucide-react";

// 🛠️ FIX 1: The component must be async
export default async function DeveloperPage({ 
  params 
}: { 
  // 🛠️ FIX 2: params must be defined as a Promise in Next.js 15/16
  params: Promise<{ slug: string }>; 
}) {
  
  // 🛠️ FIX 3: Await the params before accessing the slug
  const { slug } = await params;

  // Find the developer
  const developer = developers.find((d) => d.slug === slug);

  if (!developer) {
    // If no developer is found, trigger Next.js 404
    return notFound();
  }

  // NOTE: You must also ensure generateStaticParams is exported for Vercel deployment.
  // (This was included in a previous turn's code)

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* 1. Developer Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-10">
          <Link 
            href="/developers" 
            className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-6 transition font-medium"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Partners
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Developer Icon Placeholder */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-inner">
               <Building2 size={40} className="text-blue-500" />
            </div>

            <div className="flex-grow">
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {developer.name}
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-4">
                {developer.description}
              </p>
              
              {/* Dynamic Stats Row */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg font-medium border border-blue-100">
                   <CheckCircle size={16} className="mr-2" />
                   {developer.projects.length} Verified Projects
                </div>
                <div className="flex items-center text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                   <MapPin size={16} className="mr-2" />
                   Prime NCR Locations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Portfolio Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900">
            Project Portfolio
          </h2>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developer.projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              name={project.name}
              location={project.location}
              price={project.price}
              type={project.type}
              image={project.image}
              developerName={developer.name}
            />
          ))}
        </div>

        {/* Empty State Fallback */}
        {developer.projects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
            <p className="text-slate-500">No active listings available for this developer at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}