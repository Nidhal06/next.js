export default function About() {
  const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", 
    "Node.js", "PostgreSQL", "Prisma", "AWS"
  ];

  return (
    <div className="py-12 sm:py-24 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          I'm a self-taught developer with a passion for building products that matter. 
          With over 5 years of experience in the industry, I've worked with startups 
          and established companies to create scalable web applications.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">My Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="space-y-12">
          {[
            {
              company: "Tech Solutions Inc.",
              role: "Senior Full Stack Developer",
              period: "2021 - Present",
              description: "Leading the development of a cloud-based SaaS platform serving 10k+ active users."
            },
            {
              company: "Creative Digital Agency",
              role: "Frontend Developer",
              period: "2019 - 2021",
              description: "Built high-performance marketing sites and interactive web experiences for global brands."
            }
          ].map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
              <div className="space-y-2">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <span className="text-sm text-gray-500">{job.period}</span>
                </div>
                <p className="font-medium text-blue-600">{job.company}</p>
                <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
