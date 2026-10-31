
      
import NavbarLinks from "./navbar";

const projects = [
  {
    title: "Course Registration App",
    description: "A responsive course registration experience built with React and Next.js.",
    technology: "Next.js · React · Tailwind CSS",
  },
  {
    title: "PG complaint management system",
    description: "A clean dashboard interface for managing complaints.",
    technology: "React · JavaScript · CSS",
    href: "https://github.com/pranavashetty7-design/project-bootcamp",
  },
  {
    title: "Portfolio Website",
    description: "A modern personal website that presents skills, projects, and contact details.",
    technology: "Next.js · Tailwind CSS",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-900">
      <NavbarLinks />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-rose-300">
              wannabe Frontend Developer
            </p>
            <p className="mb-3 text-2xl font-bold text-white">Pranava</p>
            <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              I build simple, useful digital experiences.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              I am a aspiring developer focused on creating responsive websites, interactive interfaces,
              and modern web applications.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
              >
                View my work
              </a>
              <a
                href="/contact"
                className="rounded-lg border border-slate-400 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white hover:text-slate-900"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            ["2", "Years learning"],
            ["4", "Projects built"],
            ["100%", "Responsive design"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-4xl font-black text-slate-900">{value}</p>
              <p className="mt-2 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-500">Selected work</p>
            <h2 className="mt-3 text-4xl font-black">My projects</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
                <p className="mt-6 text-sm font-semibold text-rose-500">{project.technology}</p>
                {project.href && (
                  <a href={project.href}>click to see project</a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-300">Let&apos;s work together</p>
            <h2 className="mt-3 text-4xl font-black">Have a project in mind?</h2>
          </div>
          <a
            href="/contact"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Contact me
          </a>
        </div>
      </section>
    </main>
  );
}
