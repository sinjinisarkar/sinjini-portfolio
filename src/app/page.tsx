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
    "Building intelligent systems with AI, cloud technologies, and data-driven solutions.",
  location: "UK — Milton Keynes / Leeds",
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
    title: "Fairness & Explainability in Machine Learning for Insurance Risk Prediction",
    period: "Nov 2025 – Apr 2026",
    summary:
      "First Class final-year dissertation investigating fairness, explainability, and predictive performance of machine learning models for young driver collision severity prediction.",
    bullets: [
      "Compared multiple machine learning classifiers for high vs low collision severity prediction",
      "Integrated fairness evaluation and Explainable AI techniques throughout the modelling pipeline",
      "Analysed model transparency, bias considerations, and ethical implications of AI-driven decision making",
      "Awarded First Class grade (76%)"
    ],
    links: [
      {
        label: "Read Dissertation Report",
        href: "https://github.com/sinjinisarkar/fyp-insurance-fairness-xai/blob/main/SARKAR26-FINAL.pdf"
      },
      {
        label: "Repo",
        href: "https://github.com/sinjinisarkar/fyp-insurance-fairness-xai"
      }
    ]
  },

  {
    title: "Phishing Email Detection using Machine Learning",
    period: "Mar–Apr 2025",
    summary:
      "Built a phishing email detection system using TF-IDF and machine learning models, achieving 90.2% classification accuracy.",
    bullets: [
      "Implemented and evaluated Naive Bayes, SVM, and Random Forest classifiers",
      "Used TF-IDF feature extraction for text preprocessing and classification",
      "Analysed Precision, Recall, F1-Score, and ROC-AUC metrics",
      "Compared model performance and interpretability trade-offs"
    ],
    links: [
      {
        label: "Read Report",
        href: "https://1drv.ms/b/c/c048f9979257834b/EUkhOXky6RlPjXVUjxLwTegBApTV2o2MPufOmxj4kH1PDQ?e=bZHFIj"
      }
    ]
  },

  {
    title: "AI Search Algorithms & Heuristics",
    period: "Feb 2025",
    summary:
      "Implemented and benchmarked classical AI search algorithms across puzzle-solving and robotic planning problems.",
    bullets: [
      "Implemented BFS, DFS, Best-First Search, and A* algorithms",
      "Designed and evaluated heuristics including Manhattan Distance, Blocking Obstacle, and Combined heuristics",
      "Compared execution time, path length, and node expansions across problem difficulties",
      "Documented trade-offs between completeness, optimality, and computational efficiency"
    ],
    links: [
      {
        label: "Read Report (PDF)",
        href: "https://1drv.ms/b/c/c048f9979257834b/EclLU8oVgOVFmaV2etM74bcBgpss381B5guXDaqGsUdZ9g?e=HhfkpN"
      }
    ]
  },

  {
    title: "CatchMyRide — Full Stack Ride Sharing Platform",
    period: "Feb–Apr 2025",
    summary:
      "Contributed to a full-stack ride-sharing platform supporting ride publishing, booking, payments, and user dashboards.",
    bullets: [
      "Designed and documented user journeys and wireframes across multiple Agile sprints",
      "Performed QA testing, issue reporting, and verification of bug fixes",
      "Implemented Flask-based UI flows and responsive layouts",
      "Collaborated within a 5-person Agile software engineering team"
    ],
    links: [
      {
        label: "GitHub Wiki",
        href: "https://github.com/COMP2913-24-25/software-engineering-project-team-19/wiki/UI-Designs"
      },
      {
        label: "Repo",
        href: "https://github.com/COMP2913-24-25/software-engineering-project-team-19"
      }
    ]
  },

  {
    title: "Cloud E-Commerce Platform",
    period: "Nov–Dec 2024",
    summary:
      "Developed and deployed a cloud-hosted e-commerce application with responsive design and checkout functionality.",
    bullets: [
      "Built frontend and backend functionality using Flask",
      "Improved usability through enhanced validation and error handling",
      "Documented deployment, rollback, and maintenance procedures",
      "Tested responsiveness across mobile and desktop environments"
    ],
    links: [
      {
        label: "Repo",
        href: "https://github.com/sinjinisarkar/NakshiKantha_comp2011"
      },
      {
        label: "Live Site",
        href: "https://ssinjini2611.pythonanywhere.com/"
      }
    ]
  },

  {
    title: "Numerical Methods — Firework Trajectory Simulation",
    period: "Dec 2024",
    summary:
      "Modelled projectile motion with drag using numerical methods and analysed accuracy, stability, and convergence.",
    bullets: [
      "Implemented Heun, SSPRK3, and Runge-Kutta methods in Python",
      "Performed error and convergence analysis across multiple time steps",
      "Applied root-finding techniques including Bisection and Secant methods",
      "Visualised simulation results using NumPy, Pandas, and Matplotlib"
    ],
    links: [
      {
        label: "Repo",
        href: "https://github.com/sinjinisarkar/numerical-methods-visualization"
      },
      {
        label: "View Report",
        href: "https://github.com/sinjinisarkar/numerical-methods-visualization/blob/main/Final_coursework.pdf"
      }
    ]
  }
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

const EXPERIENCE = [
  {
    role: "Data Science & AI Industrial Placement",
    company: "Lloyds Banking Group",
    period: "June 2026 – June 2027",
    location: "Leeds, United Kingdom",
    bullets: [
      "Incoming placement student focusing on data analytics, market insight, and AI-driven decision making.",
      "Expected to work with large-scale data, machine learning concepts, and analytics to support business decisions in financial services.",
      "Keen to develop skills in Google Cloud, BigQuery, Vertex AI, MLOps, and responsible AI during the placement year.",
    ],
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
            <span>Milton Keynes / Leeds</span>
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
            I am a Computer Science with Artificial Intelligence student at the University of Leeds with a strong interest in Data Science, Artificial Intelligence, Cloud Computing, and Analytics. I enjoy transforming data into meaningful insights and building intelligent systems that solve real-world problems.
          </p>

          <p>
            Throughout my degree, I have developed experience across machine learning, cloud technologies, software engineering, and data analysis. My projects have included developing a phishing email detection system using machine learning, building cloud-hosted web applications, implementing AI search algorithms, and analysing complex datasets to support data-driven decision making.
          </p>

          <p>
            I hold both the AWS Certified Cloud Practitioner and AWS Certified AI Practitioner certifications, which have strengthened my understanding of cloud infrastructure, machine learning workflows, generative AI, and responsible AI practices. I am particularly interested in how AI and analytics can be applied at scale to improve business outcomes and customer experiences.
          </p>

          <p>
            Alongside my technical development, I have built strong communication and collaboration skills through tutoring, mentoring, group projects, and public speaking. These experiences have taught me how to explain complex technical concepts clearly and work effectively within diverse teams.
          </p>

          <p>
            I will be joining Lloyds Banking Group as a Data Science & AI Industrial Placement Student, where I am excited to further develop my skills in analytics, machine learning, cloud technologies, and AI-driven decision making while contributing to business challenges within financial services.
          </p>
          </CardContent>
        </Card>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="grid gap-4">
          {EXPERIENCE.map((e) => (
            <Card key={e.company} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{e.role}</CardTitle>
                <p className="text-sm text-gray-600">{e.company}</p>
                <p className="text-sm text-gray-500">
                  {e.period} · {e.location}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-gray-700">{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
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
