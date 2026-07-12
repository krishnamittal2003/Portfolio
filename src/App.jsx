import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileSpreadsheet,
  FolderGit2,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Table2,
  Wrench,
  X,
} from 'lucide-react'

function Github({ size = 24, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function Linkedin({ size = 24, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A5.98 5.98 0 0 1 16 8z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const LINKS = {
  email: 'mittalkrishna58@gmail.com',
  phone: '+91 7009898418',
  linkedin: 'https://www.linkedin.com/in/krishna-mittal-88382317a/',
  github: 'https://github.com/krishnamittal2003',
  blinkit:
    'https://app.powerbi.com/view?r=eyJrIjoiMDg1N2E4ZDEtNzZjMi00ZTQyLWFmMDEtZTdhYWVmYmUzODU5IiwidCI6ImVkNGI1YWIzLWM0MzctNGNiMi05NzczLTYzZDdlMTc0OWVhNyJ9',
  bankLoan:
    'https://public.tableau.com/app/profile/krishna.mittal6200/viz/BankLoanDataAnalysis_17592567907460/SUMMARY#1',
  resume: '/Krishna_Mittal_Resume.pdf',
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ kicker, title }) {
  return (
    <Reveal className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
        {kicker}
      </p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-14 bg-terracotta" />
    </Reveal>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="text-lg font-bold">
          Krishna<span className="text-terracotta">.</span>Mittal
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-terracotta"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={LINKS.resume}
              download
              className="border-2 border-ink px-4 py-2 text-sm font-semibold transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line px-5 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-medium text-ink-soft"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <div className="mb-6 inline-flex items-center gap-2 border border-line bg-cream-2 px-3 py-1.5 text-sm font-medium text-ink-soft">
          <BarChart3 size={16} className="text-terracotta" />
          MIS &amp; Data Analyst | Turning Raw Data into Decisions
        </div>
        <h1 className="max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
          Krishna Mittal
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Detail-oriented analyst experienced in dashboards, reporting, and data
          validation — turning messy records into clear, decision-ready insight.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-terracotta px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta-dark"
          >
            View Projects
          </a>
          <a
            href={LINKS.resume}
            download
            className="inline-flex items-center gap-2 border-2 border-ink px-6 py-3 font-semibold transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={16} className="text-terracotta" /> Gurugram, Haryana
          </span>
          <a
            href={`mailto:${LINKS.email}`}
            className="inline-flex items-center gap-1.5 hover:text-terracotta"
          >
            <Mail size={16} className="text-terracotta" /> {LINKS.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Phone size={16} className="text-terracotta" /> {LINKS.phone}
          </span>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-terracotta"
          >
            <Linkedin size={16} className="text-terracotta" /> LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-terracotta"
          >
            <Github size={16} className="text-terracotta" /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}

function About() {
  const points = [
    {
      icon: GraduationCap,
      title: 'Education',
      text: 'B.Tech in Computer Science and Engineering, Shaheed Bhagat Singh State University (Oct 2021 – June 2025).',
    },
    {
      icon: Code2,
      title: 'Technical + Process-Driven',
      text: 'A blend of technical skills (SQL, Python, Power BI/Tableau) and process-driven back-office experience.',
    },
    {
      icon: ShieldCheck,
      title: 'Core Strength',
      text: 'Accuracy, validation, and structured reporting under strict process guidelines.',
    },
  ]
  return (
    <section id="about" className="bg-cream-2 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="About" title="Who I Am" />
        <div className="grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="h-full border border-line bg-cream p-6">
                <div className="mb-4 inline-flex bg-terracotta p-3 text-white">
                  <p.icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                <p className="text-ink-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const bullets = [
    'Verified UK customer business addresses as part of the 999DI verification process.',
    'Ensured data accuracy and compliance while cross-checking customer-submitted business details against internal and third-party records.',
    'Worked within strict SLA and quality benchmarks in a process-driven, high-volume back-office environment.',
  ]
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Experience" title="Where I've Worked" />
        <Reveal>
          <div className="relative border-l-2 border-terracotta pl-8">
            <span className="absolute -left-[9px] top-1 h-4 w-4 bg-terracotta" />
            <div className="border border-line bg-cream-2 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  Back Office Executive — 999DI Process
                </h3>
                <span className="bg-terracotta px-3 py-1 text-sm font-medium text-white">
                  6 months
                </span>
              </div>
              <p className="mt-1 inline-flex items-center gap-2 font-medium text-terracotta">
                <Briefcase size={16} /> BT Group
              </p>
              <ul className="mt-5 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-ink-soft">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-terracotta"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const PROJECTS = [
  {
    icon: LineChart,
    title: 'Blinkit Sales Analysis & KPI Dashboard',
    tools: ['Power BI', 'Excel', 'SQL'],
    bullets: [
      'Consolidated & cleaned 8.5K+ grocery sales records; resolved data discrepancies.',
      'Built an interactive Power BI dashboard: total sales, AOV, and category-wise performance.',
      'Delivered insights on top-selling items and regional trends.',
    ],
    href: LINKS.blinkit,
    cta: 'View Dashboard',
  },
  {
    icon: Database,
    title: 'Bank Loan MIS & Risk Analysis Dashboard',
    tools: ['Tableau', 'Power BI', 'Excel', 'SQL'],
    bullets: [
      'Processed and validated 30K+ loan records; analyzed approvals, defaults, and repayment trends.',
      'Built summary, customer, and risk dashboards replicating monthly MIS reporting.',
      'Identified high-risk borrower patterns supporting credit policy refinement.',
    ],
    href: LINKS.bankLoan,
    cta: 'View Dashboard',
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-cream-2 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Projects" title="Selected Work" />
        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="flex h-full flex-col border border-line bg-cream p-6 transition-colors hover:border-terracotta sm:p-8">
                <div className="mb-4 inline-flex w-fit bg-terracotta p-3 text-white">
                  <p.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="bg-cream-2 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 flex-1 space-y-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-ink-soft">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-terracotta"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 bg-terracotta px-5 py-2.5 font-semibold text-white transition-colors hover:bg-terracotta-dark"
                >
                  {p.cta} <ExternalLink size={16} />
                </a>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="flex flex-col items-start justify-between gap-5 border border-line bg-cream p-6 transition-colors hover:border-terracotta sm:flex-row sm:items-center sm:p-8">
              <div className="flex items-center gap-4">
                <div className="bg-ink p-3 text-white">
                  <FolderGit2 size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    More on GitHub
                  </h3>
                  <p className="text-ink-soft">
                    SQL scripts, Python notebooks, and project files live in my
                    repositories.
                  </p>
                </div>
              </div>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-ink px-5 py-2.5 font-semibold transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <Github size={18} /> View Repos
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const SKILL_GROUPS = [
  {
    icon: FileSpreadsheet,
    title: 'Excel',
    skills: [
      'VLOOKUP',
      'Pivot Tables',
      'Power Query',
      'Conditional Formatting',
      'Data Validation',
    ],
  },
  {
    icon: Database,
    title: 'Databases & Programming',
    skills: ['SQL', 'Python', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    icon: BarChart3,
    title: 'BI & Reporting',
    skills: ['Power BI', 'Tableau', 'MIS Report Preparation', 'KPI Dashboards'],
  },
  {
    icon: Table2,
    title: 'Analytics',
    skills: [
      'Data Cleaning',
      'Discrepancy Resolution',
      'Insight Generation',
      'Ad-hoc Analysis',
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Jupyter', 'Git'],
  },
  {
    icon: ShieldCheck,
    title: 'Process & Domain',
    skills: ['Data Verification', 'Compliance', 'SLA-driven QA'],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Skills" title="What I Work With" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07}>
              <div className="h-full border border-line bg-cream-2 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-terracotta p-2.5 text-white">
                    <g.icon size={20} />
                  </div>
                  <h3 className="font-semibold">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ y: -2 }}
                      className="border border-line bg-cream px-3 py-1.5 text-sm font-medium text-ink-soft"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  const certs = [
    'Tata Data Visualisation: Empowering Business with Effective Insights — Forage Job Simulation',
    'Tata Group Data Analytics — Forage Job Simulation',
  ]
  return (
    <section id="certifications" className="bg-cream-2 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Certifications" title="Credentials" />
        <div className="grid gap-6 md:grid-cols-2">
          {certs.map((c, i) => (
            <Reveal key={c} delay={i * 0.1}>
              <div className="flex h-full items-start gap-4 border border-line bg-cream p-6">
                <div className="bg-amber-warm p-3 text-white">
                  <GraduationCap size={22} />
                </div>
                <p className="font-medium">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Contact" title="Let's Talk Data" />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <form
              action={`mailto:${LINKS.email}`}
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full border border-line bg-cream-2 px-4 py-3 outline-none focus:border-terracotta"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-line bg-cream-2 px-4 py-3 outline-none focus:border-terracotta"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-line bg-cream-2 px-4 py-3 outline-none focus:border-terracotta"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-terracotta px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: LINKS.email,
                  href: `mailto:${LINKS.email}`,
                },
                { icon: Phone, label: LINKS.phone, href: `tel:+917009898418` },
                {
                  icon: Linkedin,
                  label: 'linkedin.com/in/krishna-mittal-88382317a',
                  href: LINKS.linkedin,
                },
                {
                  icon: Github,
                  label: 'github.com/krishnamittal2003',
                  href: LINKS.github,
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-line bg-cream-2 p-5 transition-colors hover:border-terracotta"
                >
                  <div className="bg-terracotta p-2.5 text-white">
                    <c.icon size={20} />
                  </div>
                  <span className="break-all font-medium">{c.label}</span>
                </a>
              ))}
              <div className="flex items-center gap-4 border border-line bg-cream-2 p-5">
                <div className="bg-ink p-2.5 text-white">
                  <MapPin size={20} />
                </div>
                <span className="font-medium">Gurugram, Haryana, India</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line bg-cream-2 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <p className="text-sm text-ink-soft">
          © {new Date().getFullYear()} Krishna Mittal. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft transition-colors hover:text-terracotta"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-soft transition-colors hover:text-terracotta"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            aria-label="Email"
            className="text-ink-soft transition-colors hover:text-terracotta"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
)
}
