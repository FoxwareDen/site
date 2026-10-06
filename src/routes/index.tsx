import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Code2, Globe2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

const heroImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8G270FkTN2OS0mOsxOPunGV8xULgmK.png";

function App() {
  return (
    <main className="overflow-hidden bg-[#fcfcfb] text-slate-950">
      <section className="relative isolate min-h-[calc(100vh-73px)] bg-[radial-gradient(circle_at_85%_18%,rgba(196,181,253,0.32),transparent_28%),radial-gradient(circle_at_14%_85%,rgba(251,191,36,0.12),transparent_24%)]">
        <div className="absolute right-0 top-0 -z-10 h-full w-[46%] skew-x-[-10deg] bg-gradient-to-br from-cyan-50/80 via-violet-50/70 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-12 md:py-28 lg:gap-4 lg:px-16">
          <div className="relative z-10 max-w-xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-lg shadow-violet-200">
              <Sparkles aria-hidden="true" /> Software Development Studio
            </div>
            <h1 className="text-6xl font-bold leading-[0.98] tracking-[-0.05em] md:text-8xl">Foxware-Den</h1>
            <p className="mt-8 max-w-lg text-lg leading-7 text-slate-500 md:text-xl md:leading-8">
              Building next-generation <span className="font-semibold text-violet-600">web applications</span>, <span className="font-semibold text-cyan-500">desktop software</span>, and <span className="font-semibold text-amber-500">custom solutions</span> with cutting-edge technology.
            </p>
            <div id="products" className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
              <span className="inline-flex items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-4 py-2 text-violet-600"><Globe2 aria-hidden="true" /> Web Apps</span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-cyan-200 bg-cyan-50 px-4 py-2 text-cyan-600"><Code2 aria-hidden="true" /> Desktop Apps</span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-amber-600"><Sparkles aria-hidden="true" /> Any Software</span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="mailto:foxwareden@gmail.com" className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-xl">Contact Us <ArrowRight aria-hidden="true" /></a>
              <a href="#about" className="rounded-lg border-2 border-slate-200 px-6 py-3.5 font-medium text-slate-800 transition hover:border-violet-300 hover:text-violet-600">View Our Work</a>
            </div>
            <a href="mailto:foxwareden@gmail.com" className="mt-7 inline-block text-sm text-slate-500 transition hover:text-violet-600">foxwareden@gmail.com</a>
          </div>

          <div id="about" className="relative flex min-h-[360px] items-center justify-center lg:min-h-[520px]">
            <div className="absolute left-[12%] top-[12%] size-32 rounded-2xl bg-pink-500 md:size-40" />
            <div className="absolute bottom-[6%] right-[8%] size-20 rounded-2xl bg-amber-400 md:size-24" />
            <div className="absolute right-[6%] top-1/2 size-16 rounded-r-xl bg-cyan-500 md:size-20" />
            <div className="relative z-10 w-[92%] rotate-[2deg] rounded-2xl border-[12px] border-white bg-white p-1 shadow-[0_24px_50px_rgba(15,23,42,0.16)] md:w-[88%] md:border-[14px]">
              <img src={heroImage} alt="Laptop displaying code in a warm workspace" className="aspect-[1.5] w-full rounded-lg object-cover" />
              <div className="absolute -bottom-5 -left-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-sm font-bold text-white shadow-lg md:-left-10">Full-Stack Development</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
