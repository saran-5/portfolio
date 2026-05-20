import { createFileRoute } from "@tanstack/react-router";
import { Mail, Download, Github, Linkedin, ExternalLink, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { link } from "fs";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Saran R — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Saran R, Computer Science student and aspiring full-stack developer specializing in the MERN stack.",
      },
      { property: "og:title", content: "Saran R — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Saran R, Computer Science student and aspiring full-stack developer specializing in the MERN stack.",
      },
    ],
  }),
});

const EMAIL = "saran.zoro2@gmail.com";
const RESUME = "https://drive.google.com/file/d/18F92-N_sMqvDxm48JKET6G6_drtXZDb2/view?usp=drivesdk";
const LINKEDIN = "https://www.linkedin.com/in/saran-r-a35a2b2a4";
const GITHUB = "https://github.com/saran-5";

const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["C", "Java", "Python", "JavaScript"] },
  { label: "Frameworks", items: ["React.js", "Next.js", "Bootstrap"] },
  { label: "Backend", items: ["Node.js", "Express.js"] },
  { label: "Database", items: ["MongoDB", "SQL"] },
  { label: "Tools", items: ["VS Code", "GitHub", "Postman", "Canva", "MS Office"] },
  { label: "Concepts", items: ["DSA", "OOP", "RESTful APIs"] },
];

const projects = [
  {
    name: "GPS Tracking System for Ambulance",
    year: "SIH-2025",
    desc: "Real-time ambulance tracking with live location updates and efficient assignment for emergency response.",
    stack: ["React Native (Expo)", "Node.js", "Express.js", "Socket.IO", "MongoDB Atlas"],
    link: "https://github.com/saran-5/GPS-tracking-system-for-ambulance",
  },
  {
  name: "SpendWise",
  year: "2026",
  desc: "A smart expense and rent tracking mobile application built with React Native and Expo. Features include income & expense management, rent tracking, calendar-based transaction history, financial summaries, filters, edit/delete transactions, and a clean modern UI.",
  stack: ["React Native", "Expo", "AsyncStorage", "JavaScript"],
  link: "https://github.com/saran-5/spendwise",
  },
  {
    name: "Smart Public Grievance System",
    year: "2025",
    desc: "Web-based complaint submission and tracking platform with real-time status updates for citizens.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/saran-5/smart_public_grievance_system",
  },
  {
    name: "Event Booking System",
    year: "2026",
    desc: "Browse events, book tickets and verify entry through QR-based ticket scanning.",
    stack: ["React.js (Vite)", "Node.js", "MongoDB"],
    link: "https://github.com/saran-5/event-booking",
  },
];

const timeline = [
  {
    tag: "Experience",
    title: "Full Stack Development Intern",
    org: "Career Ladder",
    when: "April 2025 · 1 month",
    body: "Built dynamic MERN stack web applications. Worked across front-end, back-end, REST APIs and database management.",
  },
  {
    tag: "Workshop",
    title: "Full Stack Development Workshop",
    org: "CIT",
    when: "February 2025",
    body: "Hands-on MERN stack training following modern industry practices.",
  },
  {
    tag: "Education",
    title: "B.E. Computer Science",
    org: "Hindusthan College of Engineering and Technology",
    when: "2023 – 2027",
    body: "CGPA: 8.65",
  },
  {
    tag: "Education",
    title: "HSC",
    org: "Kids Park Matriculation Higher Secondary School",
    when: "2023",
    body: "87%",
  },
];

const certs = [
  "NPTEL — Elite + Silver, Cloud Computing",
  "NPTEL — Elite, Cyber Security & Privacy",
  "Web Development — Udemy",
  "Problem Solving Using Python — Great Learning",
];

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Saran<span className="text-muted-foreground">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
            <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
            <a href="#certifications" className="transition-colors hover:text-foreground">Certifications</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-32">
        <p className="fade-in-up text-sm font-medium tracking-wider text-primary">
          AVAILABLE FOR ENTRY-LEVEL ROLES
        </p>
        <h1 className="fade-in-up mt-4 text-5xl font-bold tracking-tight sm:text-7xl" style={{ animationDelay: "60ms" }}>
          Saran R
        </h1>
        <p className="fade-in-up mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl" style={{ animationDelay: "120ms" }}>
          Full Stack Developer · CSE Student at Hindusthan College of Engineering and Technology
        </p>
        <p className="fade-in-up mt-6 max-w-2xl text-base leading-relaxed text-foreground/80" style={{ animationDelay: "180ms" }}>
          Passionate about building real-world web applications using the MERN stack. Currently
          pursuing my B.E. in Computer Science (CGPA: 8.65) and actively seeking entry-level
          opportunities in web and software development.
        </p>

        <div className="fade-in-up mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href={RESUME}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Skills */}
      <Section id="skills" eyebrow="01" title="Skills">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div
              key={g.label}
              className="reveal rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {g.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="02" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="reveal group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                  {p.year}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:gap-2"
              >
                <Github className="h-4 w-4" /> View on GitHub
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="03" title="Experience & Education">
        <ol className="relative space-y-8 border-l border-border pl-8">
          {timeline.map((t, i) => (
            <li key={i} className="reveal relative">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.tag} · {t.when}
              </p>
              <h4 className="mt-1 text-lg font-semibold tracking-tight">{t.title}</h4>
              <p className="text-sm text-foreground/70">{t.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Certs */}
      <Section id="certifications" eyebrow="04" title="Certifications">
        <ul className="grid gap-3 sm:grid-cols-2">
          {certs.map((c) => (
            <li
              key={c}
              className="reveal flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft"
            >
              <ExternalLink className="h-4 w-4 shrink-0 text-primary" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Footer */}
      <footer className="mt-24 border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold">Saran R</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-primary/30 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-primary/30 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="pb-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Saran R. Built with care.
        </p>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <div className="reveal mb-10 flex items-baseline gap-4">
        <span className="text-xs font-mono text-muted-foreground">{eyebrow}</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
