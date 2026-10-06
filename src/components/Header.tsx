import { Link } from "@tanstack/react-router";
import { GitBranch, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="relative z-20 flex w-full items-center justify-between border-b border-slate-200/80 bg-white/90 px-6 py-4 text-slate-900 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/90 dark:text-slate-100 md:px-12">
      <Link to="/" className="text-xl font-bold tracking-tight" aria-label="Foxware-Den home">
        <span className="text-violet-600">Fox</span><span className="text-cyan-600">ware-Den</span>
      </Link>

      <nav className="hidden items-center gap-9 text-sm font-medium text-slate-800 dark:text-slate-200 md:flex" aria-label="Main navigation">
        {/* <a href="/products" className="transition-colors hover:text-violet-600">Products</a> */}
        <a href="/about" className="transition-colors hover:text-violet-600">About</a>
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white transition hover:border-violet-300 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-violet-400 dark:hover:text-violet-300"
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
        <button type="button" className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white transition hover:border-cyan-300 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-cyan-400 dark:hover:text-cyan-300" aria-label="Open integrations">
          <GitBranch aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
