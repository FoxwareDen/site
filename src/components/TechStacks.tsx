const technologies = [
  ["TypeScript", "#9bc6e8"],
  ["JavaScript", "#f9e88a"],
  ["React", "#a9e7f5"],
  ["Node.js", "#c5e3a4"],
  ["PostgreSQL", "#aec5d7"],
  ["Docker", "#9bd0f1"],
  ["Vercel", "#9b9b9b"],
  ["Next.js", "#d5a5dc"],
  ["Tailwind", "#8fdce8"],
  ["Rust", "#ffc098"],
  ["Python", "#a9c5dd"],
] as const;

export function TechStacks() {
  return (
    <section id="tech-stacks" className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(221,214,254,0.22),transparent_35%),radial-gradient(circle_at_88%_82%,rgba(153,246,228,0.18),transparent_38%)] px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium tracking-wide text-sky-600">Technologies</span>
          <h2 className="mt-5 text-4xl font-bold tracking-[0.04em] text-slate-950 md:text-5xl">TECH STACKS</h2>
          <p className="mt-5 text-lg text-slate-500">Powered by cutting-edge technologies and frameworks</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {technologies.map(([name, color]) => (
            <article key={name} className="group relative flex min-h-[62px] items-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <span className="absolute inset-x-0 top-0 h-1 rounded-t-xl" style={{ backgroundColor: color }} />
              <span className="absolute right-3 top-3 size-2 rounded-full" style={{ backgroundColor: color }} />
              <h3 className="text-sm font-semibold text-slate-800">{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStacks;
