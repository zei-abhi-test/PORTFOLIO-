"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react";
import { owner } from "@/lib/site-data";
import { LinkButton } from "@/components/ui/button";

export function Hero() {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const context = gsap.context(() => {
      gsap.to(panel, {
        y: -6,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, panel);

    return () => context.revert();
  }, []);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="subtle-grid absolute inset-0" aria-hidden />
      <div className="container-page relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm text-muted">
            Available for ambitious product engineering work
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-normal text-foreground md:text-7xl lg:text-8xl">
            {owner.name}
          </h1>
          <p className="mt-7 text-xl font-medium text-foreground md:text-2xl">
            {owner.role}
          </p>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted md:text-xl">
            {owner.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href="/projects" variant="primary">
              View Projects
            </LinkButton>
            <LinkButton href="/resume" variant="secondary">
              <FileText className="h-4 w-4" aria-hidden />
              Resume
            </LinkButton>
            <LinkButton href={owner.github} external variant="secondary">
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </LinkButton>
            <LinkButton href={owner.linkedin} external variant="secondary">
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </LinkButton>
          </div>
        </motion.div>

        <div
          ref={panelRef}
          className="premium-border relative rounded-xl bg-card p-5 shadow-soft md:p-7"
        >
          <div className="mb-6 flex items-center justify-between border-b border-border pb-5">
            <div>
              <p className="text-sm text-muted">Product focus</p>
              <p className="mt-1 font-medium text-foreground">AI x Full Stack x Tools</p>
            </div>
            <div className="h-3 w-3 rounded-full bg-accent" aria-hidden />
          </div>
          <div className="space-y-4">
            {[
              ["01", "AI-native workflows", "Interfaces that make automation feel precise and trustworthy."],
              ["02", "Production web apps", "Typed, fast, responsive systems with clean architecture."],
              ["03", "Developer experience", "Tools that reduce friction for builders and teams."],
            ].map(([index, title, text]) => (
              <div key={index} className="rounded-[16px] border border-border bg-zinc-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-accent">{index}</span>
                  <div>
                    <h2 className="font-medium text-foreground">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="container-page mt-16 flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-4 w-4" aria-hidden />
        Scroll
      </a>
    </section>
  );
}
