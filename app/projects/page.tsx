import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store built with Next.js, Stripe, and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A real-time collaborative task manager with drag-and-drop features.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&auto=format&fit=crop&q=60",
      tags: ["React", "Firebase", "Tailwind"],
      link: "#"
    },
    {
      title: "AI Image Generator",
      description: "A tool that generates unique images from text prompts using OpenAI API.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
      tags: ["OpenAI", "Next.js", "TypeScript"],
      link: "#"
    }
  ];

  return (
    <div className="py-12 sm:py-24 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-center sm:text-left">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl text-center sm:text-left">
          Here are some of the projects I've worked on recently. Each one taught me 
          something new and helped me grow as a developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 space-y-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                href={project.link} 
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                Learn More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
