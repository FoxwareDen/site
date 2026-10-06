import { Code2, Monitor, Puzzle, Rocket } from "lucide-react";

const services = [
  {
    title: "Web Applications",
    description: "Fast, scalable, and intuitive web experiences built for the modern internet.",
    icon: Code2,
    color: "bg-violet-100 text-violet-600",
    accent: "bg-violet-500",
  },
  {
    title: "Desktop Software",
    description: "Powerful desktop tools that feel right at home across your workflow.",
    icon: Monitor,
    color: "bg-cyan-100 text-cyan-600",
    accent: "bg-cyan-500",
  },
  {
    title: "Custom Solutions",
    description: "Thoughtful software crafted around your unique goals, team, and ideas.",
    icon: Puzzle,
    color: "bg-amber-100 text-amber-600",
    accent: "bg-amber-400",
  },
  {
    title: "Launch & Scale",
    description: "From first prototype to production, we help turn ambitious ideas into reality.",
    icon: Rocket,
    color: "bg-pink-100 text-pink-600",
    accent: "bg-pink-500",
  },
] as const;

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative overflow-hidden bg-background px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="absolute -left-24 top-20 size-64 rounded-full bg-violet-100/50 blur-3xl" />
      <div className="absolute -right-24 bottom-10 size-72 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-violet-100 px-3 py-1.5 text-sm font-medium tracking-wide text-violet-600">Our expertise</span>
          <h2 className="mt-5 text-4xl font-bold tracking-[0.04em] text-foreground md:text-5xl">WHAT WE DO</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">We turn complex challenges into elegant, reliable software that moves your business forward.</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon, color, accent }) => (
            <article key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className={`mb-7 grid size-12 place-items-center rounded-xl ${color}`}><Icon aria-hidden="true" /></div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              <div className={`absolute inset-x-0 bottom-0 h-1 ${accent} transition-transform duration-300 group-hover:scale-x-100`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
