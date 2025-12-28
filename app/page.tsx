import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 sm:py-24">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-blue-600">Nidhal Gharbi</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            A passionate Full-Stack Developer specializing in building exceptional digital experiences. 
            I love turning complex problems into beautiful, intuitive designs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <Link 
              href="/projects" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="relative w-64 h-64 sm:w-80 sm:h-80">
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-2xl font-bold mb-8">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              description: "Creating responsive, high-performance web applications using React and Next.js.",
              icon: "🎨"
            },
            {
              title: "Backend Development",
              description: "Building scalable APIs and robust server-side logic using Node.js and Databases.",
              icon: "⚙️"
            },
            {
              title: "UI/UX Design",
              description: "Designing intuitive user interfaces that provide seamless user experiences.",
              icon: "✨"
            }
          ].map((service, index) => (
            <div key={index} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
