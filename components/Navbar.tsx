import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-xl tracking-tight">
            <Link href="/" className="hover:text-blue-600 transition-colors">Portfolio</Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
              <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
