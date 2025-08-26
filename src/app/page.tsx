"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Link as LinkIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";

// ===== Helper components
const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
    {children}
  </section>
);

const TagRow = ({ items = [] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <Badge key={t} className="rounded-2xl px-3 py-1 text-sm">{t}</Badge>
    ))}
  </div>
);

// ===== Content (edit me!)
const ME = {
  name: "Sinjini Sarkar",
  title: "Computer Science with AI — UI/UX + Cloud",
  blurb:
    "Designing clear user flows for internal tools and dashboards. Bonus: cloud + Python so I speak developer too.",
  location: "UK — London/Leeds (remote-friendly)",
  email: "sinjini.brampton@gmail.com",
  github: "https://github.com/sinjinisarkar",
  linkedin: "https://www.linkedin.com/in/sinjini-sarkar",
  portfolio: "#",
};

const SKILLS = [
  { group: "Design", items: ["User flows", "Wireframing", "Low/High‑fi prototyping", "Usability testing", "Accessibility basics"] },
  { group: "Tools", items: ["Figma", "Canva", "iPad design apps", "GitHub Wiki/Markdown"] },
  { group: "Web", items: ["HTML", "CSS", "Basic JavaScript", "Flask/Jinja2"] },
  { group: "Systems & Cloud", items: ["Python", "SQL", "AWS (CCP, AI Practitioner)", "CI/CD (GitHub Actions)", "Linux (bash)"] },
  { group: "AI/ML", items: ["Naive Bayes", "SVM", "Random Forest", "TF‑IDF", "Model eval (P/R/F1, ROC‑AUC)"] },
  { group: "Soft Skills", items: ["Agile teamwork", "GitHub project boards", "Public speaking (Toastmasters)", "Tutoring/teaching"] },
];

const PROJECTS = [
  {
    title: "CatchMyRide — UI/UX flows (Group Project)",
    period: "Feb–Apr 2025",
    summary:
      "Designed end‑to‑end flows for login, booking, payment, and dashboards; iterated across 4 sprints based on feedback & QA.",
    bullets: [
      "Wireframes & user flows documented in GitHub Wiki",
      "QA uncovered multiple issues (e.g., penalty logic, layout misalignment); raised issues and verified fixes",
      "Implemented flows in Flask templates; cross‑device responsive checks",
    ],
    links: [
      { label: "GitHub Wiki (UI Designs)", href: "https://github.com/COMP2913-24-25/software-engineering-project-team-19/wiki/UI-Designs" },
      { label: "Repo", href: "https://github.com/COMP2913-24-25/software-engineering-project-team-19" },
    ],
  },
  {
    title: "Cloud E‑commerce — Storefront & Checkout UX",
    period: "Nov–Dec 2024",
    summary:
      "Developed responsive storefront and refined checkout; validated mobile/desktop behaviour; documented deploy/rollback.",
    bullets: [
      "Reduced friction via clearer error states & form labels",
      "Repeatable deployment steps (Flask on AWS/PythonAnywhere)",
      "Responsive testing across common breakpoints",
    ],
    links: [],
  },
  {
    title: "Phishing Detector — Data UX for results",
    period: "Mar–Apr 2025",
    summary:
      "Built TF‑IDF pipeline with classical models; presented metrics clearly for non‑ML readers; 90.2% accuracy.",
    bullets: [
      "Tables/plots for precision, recall, F1, ROC‑AUC",
      "Recommendations on model trade‑offs (accuracy vs interpretability)",
    ],
    links: [],
  },
  {
    title: "Unix Shell in C — DX & reliability",
    period: "Oct–Nov 2024",
    summary:
      "Created a Unix‑style shell; added defensive error handling & a concise test checklist to improve developer experience.",
    bullets: ["Parsing, piping, redirection; known‑issues doc & test steps"],
    links: [],
  },
];

const CERTS = [
  { name: "AWS Certified AI Practitioner", when: "Aug 2025", note: "Bedrock, SageMaker, Rekognition; responsible AI" },
  { name: "AWS Certified Cloud Practitioner (CLF‑C02)", when: "Apr 2025", note: "EC2, S3, IAM, CloudWatch; security & resilient design" },
];

// ===== Page
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{ME.name}</h1>
          <p className="mt-2 text-lg text-gray-700">{ME.title}</p>
          <p className="mt-3 max-w-3xl text-gray-600">{ME.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`mailto:${ME.email}`} className="inline-flex items-center gap-2 text-sm underline hover:no-underline"><Mail size={16}/> {ME.email}</a>
            <a href={ME.github} className="inline-flex items-center gap-2 text-sm underline hover:no-underline" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
            <a href={ME.linkedin} className="inline-flex items-center gap-2 text-sm underline hover:no-underline" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
          </div>
        </motion.div>
      </header>

      {/* About */}
      <Section id="about" title="About">
        <Card className="rounded-2xl">
          <CardContent className="pt-4 text-sm text-gray-700 space-y-3">
            <p>
              BSc Computer Science with Artificial Intelligence, University of Leeds — First‑Class trajectory. I enjoy designing
              usable internal tools and collaborating closely with engineers.
            </p>
            <p>
              Recent highlights: led UI/UX flows for a ride‑sharing app (multi‑sprint wireframes, QA‑driven iteration), refined
              a cloud storefront checkout, and presented ML results with clear, decision‑ready visuals.
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s) => (
            <Card key={s.group} className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-base">{s.group}</CardTitle></CardHeader>
              <CardContent className="pt-0"><TagRow items={s.items} /></CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Selected Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
              <Card className="h-full rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{p.title}</CardTitle>
                  <p className="text-sm text-gray-500">{p.period}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-700">{p.summary}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {p.bullets.map((b, i) => (<li key={i} className="text-sm text-gray-700">{b}</li>))}
                  </ul>
                  {p.links?.length ? (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.links.map((l) => (
                        <Button key={l.href} asChild variant="outline" className="rounded-2xl h-8">
                          <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><LinkIcon size={14} />{l.label}</a>
                        </Button>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certs" title="Certifications">
        <div className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c) => (
            <Card key={c.name} className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{c.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-gray-700">
                <p className="mb-1">{c.when}</p>
                <p>{c.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>


      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4 text-sm text-gray-500">
        <div className="flex flex-wrap gap-3 items-center">
          <a href={`mailto:${ME.email}`} className="inline-flex items-center gap-2 underline hover:no-underline"><Mail size={16}/> {ME.email}</a>
          <a href={ME.github} className="inline-flex items-center gap-2 underline hover:no-underline" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
          <a href={ME.linkedin} className="inline-flex items-center gap-2 underline hover:no-underline" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
