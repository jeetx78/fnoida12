import Link from "next/link";
import { developers } from "@/lib/data";

export default function Home() {
  // Flatten projects for "Featured" section
  const featuredProjects = developers.flatMap(d => d.projects).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-slate-900 text-white">
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Futuristic Noida</h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200">Your Trusted Real Estate Partner in Delhi NCR.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/developers" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">View Projects</Link>
            <Link href="/contact" className="px-8 py-3 bg-white text-blue-900 hover:bg-slate-100 rounded-lg font-semibold transition">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Developers Grid */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Top Developers in NCR</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((dev) => (
            <Link key={dev.id} href={`/developers/${dev.slug}`} className="group p-6 bg-white border border-slate-100 shadow-sm hover:shadow-xl rounded-xl transition">
              <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600">{dev.name}</h3>
              <p className="text-slate-600 mb-4 line-clamp-2">{dev.description}</p>
              <span className="text-blue-600 font-medium">View {dev.projects.length} Projects &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Quick Featured Listings */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {featuredProjects.map((project, idx) => (
               <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md">
                 <div className="h-48 bg-slate-300 relative">
                   {/* Real image would go here */}
                   <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">Verified</div>
                 </div>
                 <div className="p-5">
                   <h4 className="font-bold text-lg">{project.name}</h4>
                   <p className="text-slate-500 text-sm mb-2">{project.location}</p>
                   <p className="text-blue-900 font-bold">{project.price}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}