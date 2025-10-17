// src/App.tsx

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Server,
  Database,
  Cpu,
  Boxes,
  Network,
  Cog,
} from "lucide-react"

// ---------- Types ----------
type LinkMap = {
  github?: string
  linkedin?: string
  email?: string
}

type Profile = {
  name: string
  title: string
  location?: string
  summary: string
  links: LinkMap
  RESUME_URL?: string
}

type Skill = {
  label: string
  icon: React.ReactNode
  level: "Beginner" | "Working" | "Intermediate" | "Advanced" | string
}

type Project = {
  name: string
  description: string
  tags: string[]
  link?: string
}

type Experience = {
  role: string
  period: string
  bullets: string[]
}
<div className="min-h-screen bg-[#0b0c10] text-[#c5c6c7] overflow-x-hidden"></div>

// ---------- Data ----------
const PROFILE: Profile = {
  name: "Iain Zechender",
  title: "Homelab Engineer • Full-Stack Tinkerer",
  location: "Bowling Green, Kentucky",
  summary:
    "I build reliable homelab systems and tools: Proxmox clusters, TrueNAS storage, network automation, and custom web apps. I like clean UIs with clear purpose.",
  links: {
    github: "https://github.com/MrZech",
    linkedin: "https://www.linkedin.com/in/your-handle/",
    email: "mailto:mrzech@zechender.com",
  },
  RESUME_URL: "/resume.pdf",
}

const SKILLS: Skill[] = [
  { label: "HTML/CSS/JS", icon: <Cpu className="w-4 h-4" />, level: "Advanced" },
  { label: "PHP & SQL", icon: <Database className="w-4 h-4" />, level: "Advanced" },
  { label: "C# / .NET", icon: <Cog className="w-4 h-4" />, level: "Intermediate" },
  { label: "Proxmox / TrueNAS", icon: <Server className="w-4 h-4" />, level: "Intermediate" },
  { label: "Python", icon: <Server className="w-4 h-4" />, level: "Beginner" },
  { label: "Docker & Compose", icon: <Boxes className="w-4 h-4" />, level: "Beginner" },
  { label: "OPNsense / Routing", icon: <Network className="w-4 h-4" />, level: "Working" },
]

const PROJECTS: Project[] = [
  {
    name: "Nebula Control (WIP)",
    description:
      "Unifi-inspired homelab dashboard with live system cards for Proxmox, containers, and TrueNAS pools.",
    tags: ["React", "Tailwind", "Flask API", "Recharts"],
    link: "#",
  },
  {
    name: "Timeclock Web App",
    description: "Bootstrap/PHP timeclock with admin panel, QR check-ins, and hourly/volunteer reporting.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    name: "Drive Wipe & Clone Suite",
    description: "Parallel disk wipe/clone tools for Dell T330 with logs, progress, and registry.",
    tags: ["Python", "Bash", "smartctl", "perccli"],
    link: "#",
  },
  {
    name: "LAN Service Start Page",
    description: "Auto-discovers local services and renders a categorized start page with health indicators.",
    tags: ["Node", "mDNS", "Docker"],
    link: "#",
  },
]

const EXPERIENCE: Experience[] = [
  {
    role: "Homelab Architect (Personal)",
    period: "2021 — Present",
    bullets: [
      "Built Proxmox cluster (Lenovo SR650, HPE DL325 G10, Custom 'ProxBox') with LXC/VM workloads and GPU offload.",
      "TrueNAS storage with SMB/NFS shares; 10Gb SFP+ backbone",
      "Unifi networking VPN's, Firewalls, and Access Points.",
    ],
  },
  {
    role: "Full-Stack Projects",
    period: "Ongoing",
    bullets: [
      "Timeclock suite (PHP/MySQL) incl. volunteer module and reporting.",
      "Frigate NVR tuning with go2rtc live streams and VAAPI/QuickSync.",
      "Internal tools: Dockerized services, start pages, and health reporters.",
      "Custom automation for drive wiping, imaging, and inventory management.",
    ],
  },
]

// ---------- App ----------
export default function App(){
  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#c5c6c7]">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-black/20 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
            className="w-12 h-12 bg-center bg-cover"
            style={{ backgroundImage: "url('/logo.png')" }}
            />
            <span className="tracking-wide font-semibold text-white"></span>
          </div>
          <nav className="flex items-center gap-2">
            <HeaderLink href="#projects">Projects</HeaderLink>
            <HeaderLink href="#skills">Skills</HeaderLink>
            <HeaderLink href="#experience">Experience</HeaderLink>
            <HeaderLink href="#contact">Contact</HeaderLink>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">{PROFILE.name}</h1>
            <p className="mt-2 text-lg text-purple-300">{PROFILE.title}</p>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#a2a4a6]">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {PROFILE.RESUME_URL && (
                <a 
                  href={PROFILE.RESUME_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl transition border text-sm font-medium leading-6 bg-purple-600/90 text-white border-white/10 hover:bg-purple-500/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                >
                  <Download className="w-4 h-4" />
                  Download Résumé
                </a>
              )}

              {PROFILE.links.github && (
                <GhostLinkButton href={PROFILE.links.github}>
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </GhostLinkButton>
              )}
              {PROFILE.links.linkedin && (
                <GhostLinkButton href={PROFILE.links.linkedin}>
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </GhostLinkButton>
              )}
              {PROFILE.links.email && (
                <GhostLinkButton href={PROFILE.links.email}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </GhostLinkButton>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 pb-4 grid md:grid-cols-3 gap-4">
        <StatCard title="Projects" value={String(PROJECTS.length)} sub="active repos" />
        <StatCard title="Core Stack" value="6+" sub="primary tools" />
        <StatCard title="Uptime" value="89%" sub="home services" />
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
        <SectionTitle title="Projects" subtitle="Selected work and lab tools" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Card className="bg-[#111318] border-white/5 hover:border-purple-500/40 transition">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center justify-between">
                    {p.name}
                    {p.link && (
                      <a
                        href={p.link}
                        className="text-purple-400 hover:text-purple-300 text-sm inline-flex items-center gap-1"
                      >
                        View <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[#a2a4a6]">
                  <p>{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} className="bg-[#1a1c22] text-[#c5c6c7] border-white/10">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-8">
        <SectionTitle title="Skills" subtitle="Tools I use to ship" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Card className="bg-[#111318] border-white/5">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white">
                    <div className="p-2 rounded-xl bg-[#151821] border border-white/5">{s.icon}</div>
                    <div>
                      <div className="font-medium">{s.label}</div>
                      <div className="text-xs text-[#8d8f92]">{s.level}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-8">
        <SectionTitle title="Experience" subtitle="Recent work & initiatives" />
        <div className="space-y-4">
          {EXPERIENCE.map((e) => (
            <Card key={e.role} className="bg-[#111318] border-white/5">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-white font-semibold">{e.role}</div>
                    <ul className="mt-2 list-disc list-inside text-sm text-[#a2a4a6] space-y-1">
                      {e.bullets.map((b, i2) => (
                        <li key={i2}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-xs text-[#8d8f92] whitespace-nowrap">{e.period}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle title="Contact" subtitle="Let’s build something" />
        <div className="flex flex-wrap items-center gap-3">
          {PROFILE.links.email && (
            <GhostLinkButton href={PROFILE.links.email}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email
            </GhostLinkButton>
          )}
          {PROFILE.links.github && (
            <GhostLinkButton href={PROFILE.links.github}>
                  <Mail className="w-4 h-4 mr-2" />
                  Github
            </GhostLinkButton>
          )}
          {PROFILE.links.linkedin && (
            <GhostLinkButton href={PROFILE.links.linkedin}>
                  <Mail className="w-4 h-4 mr-2" />
                  LinkedIn
            </GhostLinkButton>
          )}
        </div>
        <p className="mt-4 text-xs text-[#8d8f92]">This site is built with React, Tailwind, shadcn/ui, and Framer Motion.</p>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 text-xs text-[#8d8f92] flex items-center justify-between">
          <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          <a href="#" className="hover:text-purple-300">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

// ---------- Small components (TS-friendly) ----------
function HeaderLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm px-3 py-1.5 rounded-xl text-[#c5c6c7] hover:text-white hover:bg-white/5 transition">
      {children}
    </a>
  )
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-white text-xl font-semibold">{title}</h2>
      {subtitle && <p className="text-sm text-[#8d8f92]">{subtitle}</p>}
    </div>
  )
}

function StatCard({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <Card className="bg-[#111318] border-white/5">
      <CardContent className="p-4">
        <div className="text-xs text-[#8d8f92]">{title}</div>
        <div className="text-2xl text-white font-semibold mt-1">{value}</div>
        {sub && <div className="text-xs text-[#8d8f92] mt-0.5">{sub}</div>}
      </CardContent>
    </Card>
  )
}

function GhostLinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  // Looks like a subtle secondary button linking out
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-white/10 bg-[#151821] text-[#c5c6c7] hover:border-purple-500/40 hover:text-white transition"
    >
      {children}
    </a>
  )
}
