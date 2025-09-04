"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Link as LinkIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


// ===== Helper components (typed so TS doesn't complain)
type SectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};
const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
    {children}
  </section>
);

type TagRowProps = {
  items?: string[];
};
const TagRow: React.FC<TagRowProps> = ({ items = [] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <Badge key={t} className="rounded-2xl px-3 py-1 text-sm">{t}</Badge>
    ))}
  </div>
);


// ===== Content (edit me!)
const ME = {
  name: "Sinjini Sarkar",
  title: "Computer Science with AI @ University of Leeds",
  blurb:
    "I design the flow, code the logic and make the cloud do the heavy lifting.",
  location: "UK — Milton Keynes/Leeds (remote-friendly)",
  email: "sinjini.brampton@gmail.com",
  github: "https://github.com/sinjinisarkar",
  linkedin: "https://www.linkedin.com/in/sinjini-sarkar",
};

const SKILLS = [
  { group: "Design", items: ["User flows", "Wireframing", "Usability testing", "Accessibility basics"] },
  { group: "Tools", items: ["Figma", "Canva", "iPad design apps", "GitHub Wiki/Markdown"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript", "Flask"] },
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
    title: "Cloud E‑commerce",
    period: "Nov–Dec 2024",
    summary:
      "Developed responsive storefront and refined checkout; validated mobile/desktop behaviour; documented deploy/rollback.",
    bullets: [
      "Reduced friction via clearer error states & form labels",
      "Repeatable deployment steps (Flask on AWS/PythonAnywhere)",
      "Responsive testing across common breakpoints",
    ],
    links: [
      { label: "Repo", href: "https://github.com/sinjinisarkar/NakshiKantha_comp2011" },
      { label: "Live Site", href: "https://ssinjini2611.pythonanywhere.com/" }
    ],
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
    links: [
      { label: "Read Report", href: "https://1drv.ms/b/c/c048f9979257834b/EUkhOXky6RlPjXVUjxLwTegBApTV2o2MPufOmxj4kH1PDQ?e=bZHFIj" }

    ],
  },
  {
    title: "Unix Shell in C",
    period: "Oct–Nov 2024",
    summary:
      "Created a Unix‑style shell; added defensive error handling & a concise test checklist to improve developer experience.",
    bullets: ["Parsing, piping, redirection; known‑issues doc & test steps"],
    links: [
      { label: "Repo", href: "https://github.com/sinjinisarkar/xv6_simpleshell" }
    ],
  },
  {
    title: "Numerical Methods — Firework Trajectory",
    period: "Dec 2024",
    summary:
      "Applied Heun, SSPRK3, and Runge-Kutta solvers to model projectile motion with drag; compared accuracy, stability, and efficiency.",
    bullets: [
      "Implemented ODE solvers in Python (NumPy, Matplotlib, Pandas)",
      "Error & convergence analysis across multiple time steps",
      "Root-finding (Bisection, Secant) to compute required launch velocity",
    ],
    links: [
      { label: "Repo", href: "https://github.com/sinjinisarkar/numerical-methods-visualization" },
      { label: "View Report (PDF)", href: "https://github.com/sinjinisarkar/numerical-methods-visualization/blob/main/Final_coursework.pdf" }
    ],
  },
];

const CERTS = [
  { 
    name: "AWS Certified AI Practitioner", 
    when: "Aug 2025", 
    note: "Bedrock, SageMaker, Rekognition; responsible AI",
    badge: "/aws-ai.png", 
    link: "https://www.credly.com/badges/9d64f958-5427-4094-b3a4-b02d7a8e3caf/public_url"
  },
  { 
    name: "AWS Certified Cloud Practitioner (CLF-C02)", 
    when: "Apr 2025", 
    note: "EC2, S3, IAM, CloudWatch; security & resilient design",
    badge: "/aws-ccp.png",
    link: "https://www.credly.com/badges/0286a652-6d34-4e21-9c19-af2a7a62924f/public_url"
  },
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
          <p className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
            <span>📍 Milton Keynes / Leeds</span>
            <span className="text-gray-400">|</span>
            <span>🌍 Remote-friendly</span>
          </p>

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
              I am a Computer Science student at the University of Leeds, specialising in Artificial Intelligence and Cloud Computing. I have recently achieved the AWS Certified Cloud Practitioner and AWS Certified AI Practitioner certifications, which reflect my passion for building reliable, scalable systems that also integrate AI.
            </p>
            <p>
              I have applied these skills through academic and group projects, including designing UI/UX flows and building a full-stack ride-sharing web app, developing a cloud-hosted e-commerce platform, and creating a phishing detection system using machine learning models such as Naive Bayes and SVM. These experiences taught me how to balance usability, technical implementation, and performance.
            </p>
            <p>
              Beyond my degree, I am an active learner with strong communication skills. Through Toastmasters, I have built confidence in public speaking, and through tutoring/mentoring, I have developed the ability to explain technical ideas clearly.
            </p>
            <p>
              Looking ahead, I am keen to apply my skills in AI, cloud, and software engineering within professional settings where I can continue to grow, contribute, and learn from industry experts.
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
      <Section id="projects" title="Technical Projects">
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
                <div className="flex items-center gap-3">
                  {c.badge ? (
                    <a href={c.link} target="_blank" rel="noreferrer" className="shrink-0">
                      {/* Use next/image for optimization; falls back to <img> if you prefer */}
                      <Image src={c.badge} alt={`${c.name} badge`} width={40} height={40} />
                    </a>
                  ) : null}
                  <CardTitle className="text-base">
                    <a href={c.link} target="_blank" rel="noreferrer" className="hover:underline">
                      {c.name}
                    </a>
                  </CardTitle>
                </div>
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
