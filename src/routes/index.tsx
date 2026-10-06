import { createFileRoute } from "@tanstack/react-router";
import TechStacks from "../components/TechStacks";
import WhatWeDo from "../components/WhatWeDo";
import Hero from "@/components/Hero";

export const Route = createFileRoute("/")({
  component: App,
});


function App() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Hero heroImage="/hero.jpg" />
      <WhatWeDo />
      <TechStacks />
    </main>
  );
}
