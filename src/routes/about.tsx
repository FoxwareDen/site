import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Code2, Crosshair, Lightbulb, Rocket, Target } from "lucide-react";

export const Route = createFileRoute("/about")({ component: AboutPage });

const expertise = {
  FRONTEND: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Svelte"],
  BACKEND: ["Node.js", "Rust", "Python", "Go", "PostgreSQL", "Redis"],
  DESKTOP: ["Tauri", "Electron", "Rust", "WebView", "Cross-Platform"],
  DEVOPS: ["Docker", "Vercel", "AWS", "GitHub Actions", "Linux"],
};

const values = [
  { icon: Code2, title: "QUALITY CODE", text: "We write clean, maintainable, and well-documented code that stands the test of time." },
  { icon: Crosshair, title: "COLLABORATION", text: "Your success is our success. We work closely with clients to understand their needs." },
  { icon: Rocket, title: "PASSION", text: "We love what we do. Every project is an opportunity to create something amazing." },
];

function AboutPage() {
  return (
    <main className="bg-[#fcfcfb] text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[radial-gradient(circle_at_86%_35%,rgba(251,191,36,0.14),transparent_24%),radial-gradient(circle_at_35%_90%,rgba(196,181,253,0.15),transparent_30%)]">
        <div className="mx-auto max-w-7xl px-6 pb-28 pt-32 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <div className="mb-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-xs font-medium tracking-wide text-white"><Rocket aria-hidden="true" /> EST. 2024</div>
            <h1 className="bg-gradient-to-r from-violet-600 via-cyan-500 via-45% to-amber-500 bg-clip-text text-6xl font-bold tracking-[-0.06em] text-transparent md:text-8xl">FOXWAREDEN</h1>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-500 md:text-2xl">A passionate software development studio building <span className="font-semibold text-violet-600">web applications</span>, <span className="font-semibold text-cyan-500">desktop software</span>, and <span className="font-semibold text-amber-500">custom solutions</span> that push the boundaries of what's possible.</p>
            <a href="mailto:foxwareden@gmail.com" className="mt-9 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-mono text-sm font-semibold tracking-wide text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5">GET IN TOUCH <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-12 lg:px-16">
        <InfoBlock icon={Target} title="OUR MISSION">To empower businesses and individuals with innovative software solutions that are not only functional but exceptional. We believe great software should be accessible, performant, and a joy to use.</InfoBlock>
        <InfoBlock icon={Lightbulb} title="OUR VISION">To be the go-to development partner for ambitious projects, known for our technical excellence, creative problem-solving, and unwavering commitment to quality.</InfoBlock>
      </section>

      <section className="bg-gradient-to-br from-violet-50/70 via-white to-cyan-50/70 px-6 py-20 md:px-12 lg:px-16">
        <SectionIntro eyebrow="What Drives Us" title="OUR VALUES" />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">{values.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="mb-7 grid size-14 place-items-center rounded-xl border-2 border-violet-300 text-violet-600"><Icon aria-hidden="true" /></div><h3 className="font-mono text-lg font-bold tracking-wide">{title}</h3><p className="mt-4 leading-7 text-slate-500">{text}</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-16">
        <SectionIntro eyebrow="Technical Excellence" title="OUR EXPERTISE" description="We specialize in modern technologies that power today's best software." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{Object.entries(expertise).map(([group, items], index) => <article key={group} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className={`h-1.5 ${["bg-violet-500", "bg-cyan-500", "bg-amber-400", "bg-slate-500"][index]}`} /><div className="p-6"><h3 className="font-mono text-lg font-bold">{group}</h3><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600">{item}</span>)}</div></div></article>)}</div>
      </section>
    </main>
  );
}

function InfoBlock({ icon: Icon, title, children }: { icon: typeof Target; title: string; children: string }) {
  return <article><div className="mb-7 grid size-16 place-items-center rounded-2xl border-2 border-cyan-400 text-cyan-500"><Icon aria-hidden="true" /></div><h2 className="font-mono text-2xl font-bold tracking-wide">{title}</h2><p className="mt-5 max-w-xl text-lg leading-8 text-slate-500">{children}</p></article>;
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mx-auto max-w-7xl"><p className="font-mono text-sm font-medium text-cyan-600">{eyebrow}</p><h2 className="mt-3 font-mono text-4xl font-bold tracking-wide md:text-5xl">{title}</h2>{description && <p className="mt-5 text-lg text-slate-500">{description}</p>}</div>;
}

export default AboutPage;
