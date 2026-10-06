import { Link } from "@tanstack/react-router";
import { GitBranch, Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-20 flex w-full items-center justify-between border-b border-slate-200/80 bg-white/90 px-6 py-4 backdrop-blur-md md:px-12">
      <Link to="/" className="text-xl font-bold tracking-tight" aria-label="Foxware-Den home">
        <span className="text-violet-600">Fox</span><span className="text-cyan-600">ware-Den</span>
      </Link>

      <nav className="hidden items-center gap-9 text-sm font-medium text-slate-800 md:flex" aria-label="Main navigation">
        {/* <a href="/products" className="transition-colors hover:text-violet-600">Products</a> */}
        <a href="/about" className="transition-colors hover:text-violet-600">About</a>
      </nav>

      <div className="flex items-center gap-3 text-slate-900">
        <button type="button" className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white transition hover:border-violet-300 hover:text-violet-600" aria-label="Toggle theme">
          <Sun aria-hidden="true" />
        </button>
        <button type="button" className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white transition hover:border-cyan-300 hover:text-cyan-600" aria-label="Open integrations">
          <GitBranch aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
