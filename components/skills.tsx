import {
  Code2,
  Server,
  Palette,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Design",
    icon: Palette,
    items: ["Figma", "UI/UX", "Responsive Design", "Prototyping"],
  },
  {
    title: "Other",
    icon: Sparkles,
    items: ["Git", "Docker", "CI/CD", "AWS"],
  },
];

export default function Skills() {
  return (
   <section className="border-t border-zinc-100 bg-[#efeff1] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-16 text-center text-5xl font-bold">
          Skills & Expertise
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-xl bg-zinc-100 p-3">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {skill.title}
                  </h3>
                </div>

                <ul className="space-y-4 text-zinc-500">
                  {skill.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}