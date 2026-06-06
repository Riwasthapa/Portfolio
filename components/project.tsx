import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    image: "/Blah.jpeg",
    description:
      "A full-stack online shopping platform with real-time inventory management and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "AI Content Generator",
    image: "/sp.jpeg",
    description:
      "Machine learning powered tool that generates creative content based on user prompts and preferences.",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
  },
  {
    title: "Task Management App",
    image: "/_.jpeg",
    description:
      "Collaborative project management tool with real-time updates and team communication features.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket"],
  },
];

export default function Projects() {
  return (
    <section className="border-t border-zinc-200 bg-[#f5f5f7] py-32">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-20 text-center text-6xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (
            <div
  key={project.title}
  className="
    group
    overflow-hidden
    rounded-2xl
    border
    border-zinc-200
    bg-white
    transition-all
    duration-300
    ease-out
    hover:-translate-y-2
    hover:shadow-xl
    hover:border-zinc-300
  "
>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="h-[260px] w-full object-cover"
              />

              <div className="p-8">

                <div className="mb-5 flex items-center justify-between">

                  <h3 className="text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <ExternalLink
                    size={24}
                    className="text-zinc-500"
                  />

                </div>

                <p className="mb-6 text-lg leading-relaxed text-zinc-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-4 py-2 text-sm"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}