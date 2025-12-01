import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-900">
          Futuristic<span className="text-blue-600">Noida</span>
        </Link>
        <div className="hidden md:flex space-x-8 font-medium text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/developers" className="hover:text-blue-600 transition">Developers</Link>
          <Link href="/contact" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}