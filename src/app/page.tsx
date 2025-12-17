import Link from "next/link";
import ProjectCard from "./components/ProjectCard"; 
import ReviewCarousel from "./components/ReviewCarousel"; // ⬅️ Restoring Carousel Import
import { developers } from "@/lib/data";
import { staticReviews } from "@/lib/review";

export default function Home() {
  
  // Logic to select 3 specific featured projects
  const desiredProjectNames = [
    "Gaur Chrysalis", 
    "M3M Jacob & Co", 
    "Ace Edit", 
  ];
  const allProjects = developers.flatMap(dev => dev.projects);
  const featuredProjects = allProjects.filter(project => desiredProjectNames.includes(project.name));
  const finalFeaturedProjects = featuredProjects.slice(0, 3);


  return (
    <div className="flex flex-col">
      
      {/* 1. Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Futuristic Noida</h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200">Your Trusted Real Estate Partner in Delhi NCR.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/developers" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">View Projects</Link>
            <Link href="/contact" className="px-8 py-3 bg-white text-blue-900 hover:bg-slate-100 rounded-lg font-semibold transition">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* 2. Developers Grid (Original position restored) */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-slate-800 mb-10 text-center text-white">Top Developers in NCR</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.slice(0, 3).map((dev) => (
            <Link 
              key={dev.id} 
              href={`/developers/${dev.slug}`} 
              className="group p-6 bg-white border border-slate-100 shadow-sm hover:shadow-xl rounded-xl transition"
            >
              <h3 className="text-2xl font-heading font-bold text-slate-800 mb-2 group-hover:text-blue-600">{dev.name}</h3>
              <p className="text-slate-600 mb-4 line-clamp-2">{dev.description}</p>
              <span className="text-blue-600 font-medium">View {dev.projects.length} Projects &rarr;</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/developers" className="px-8 py-3 bg-slate-200 text-slate-800 hover:bg-slate-300 rounded-lg font-semibold transition">
            See All {developers.length} Partners
          </Link>
        </div>
      </section>
      
      {/* 4. Featured Opportunities */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center text-slate-900">Featured Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {finalFeaturedProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                name={project.name}
                location={project.location}
                price={project.price}
                type={project.type}
                image={project.image}
                developerName={developers.find(d => d.projects.includes(project))?.name || 'Top Seller'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. ⭐️ REVIEWS CAROUSEL SECTION (Horizontal Navigation Restored) ⭐️ */}
      <section className="py-20 container mx-auto px-4 border-t border-slate-200 bg-white">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center text-slate-900">What Our Clients Say</h2>
        
        <div className="mx-auto max-w-7xl">
          {/* Using the Carousel component and passing ALL 10+ reviews */}
          <ReviewCarousel reviews={staticReviews} />
        </div>
        
        {/* Optional: Add a call-to-action */}
        <div className="text-center mt-12">
            <a 
                href="https://www.google.com/search?sca_esv=0ee57afbb50ab6e4&rlz=1C1PNFE_enIN1187IN1187&sxsrf=AE3TifOwURvVjYUmBCESlBTw8bB-5kJApw:1765649473467&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4A8p_wo8sTgd8tD6mHol_hX93X5XWbkSY2ZXRo9M8IsT05HoiM2bZl5zz4NqRYLwudPUBOygmztDiZOvlCVbiF933LuT4urOExEbxgNnZeV1oBLvA%3D%3D&q=Futuristic+Noida+Reviews&sa=X&ved=2ahUKEwj4xqftlLuRAxVQ7TgGHZZWFMwQ0bkNegQIHxAE&biw=1280&bih=712&dpr=1.5"
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 transition"
            >
                See All Verified Reviews on Google &rarr;
            </a>
        </div>
      </section>
    </div>
  );
}