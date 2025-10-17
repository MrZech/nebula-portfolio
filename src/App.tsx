// src/App.tsx

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
  ChevronUp,
  Filter,
  Activity,
  HardDrive,
  Wifi,
  Zap,
  Send,
  Menu,
  ExternalLink,
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
  proficiency: number
  category: "Frontend" | "Backend" | "Infrastructure" | "Other"
}

type Project = {
  name: string
  description: string
  tags: string[]
  link?: string
  status?: "Active" | "WIP" | "Completed"
  image?: string
}

type Experience = {
  role: string
  period: string
  bullets: string[]
}

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
  { label: "HTML/CSS/JS", icon: <Cpu className="w-4 h-4" />, level: "Advanced", proficiency: 90, category: "Frontend" },
  { label: "React & Tailwind", icon: <Cpu className="w-4 h-4" />, level: "Advanced", proficiency: 85, category: "Frontend" },
  { label: "PHP & SQL", icon: <Database className="w-4 h-4" />, level: "Advanced", proficiency: 88, category: "Backend" },
  { label: "C# / .NET", icon: <Cog className="w-4 h-4" />, level: "Intermediate", proficiency: 70, category: "Backend" },
  { label: "Python", icon: <Cog className="w-4 h-4" />, level: "Intermediate", proficiency: 65, category: "Backend" },
  { label: "Proxmox / TrueNAS", icon: <Server className="w-4 h-4" />, level: "Advanced", proficiency: 85, category: "Infrastructure" },
  { label: "Docker & Compose", icon: <Boxes className="w-4 h-4" />, level: "Intermediate", proficiency: 70, category: "Infrastructure" },
  { label: "OPNsense / Routing", icon: <Network className="w-4 h-4" />, level: "Intermediate", proficiency: 75, category: "Infrastructure" },
]

const PROJECTS: Project[] = [
  {
    name: "Nebula Control",
    description:
      "Unifi-inspired homelab dashboard with live system cards for Proxmox, containers, and TrueNAS pools.",
    tags: ["React", "Tailwind", "Flask API", "Recharts"],
    link: "#",
    status: "WIP",
  },
  {
    name: "Timeclock Web App",
    description: "Bootstrap/PHP timeclock with admin panel, QR check-ins, and hourly/volunteer reporting.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    link: "#",
    status: "Active",
  },
  {
    name: "Drive Wipe & Clone Suite",
    description: "Parallel disk wipe/clone tools for Dell T330 with logs, progress, and registry.",
    tags: ["Python", "Bash", "smartctl", "perccli"],
    link: "#",
    status: "Completed",
  },
  {
    name: "LAN Service Start Page",
    description: "Auto-discovers local services and renders a categorized start page with health indicators.",
    tags: ["Node", "mDNS", "Docker"],
    link: "#",
    status: "Active",
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
  const [selectedFilter, setSelectedFilter] = React.useState<string>("All")
  const [showScrollTop, setShowScrollTop] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { scrollYProgress } = useScroll()
  
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMenuOpen && !target.closest('.menu-container')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  const filteredProjects = selectedFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.includes(selectedFilter))

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#c5c6c7] relative">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none -z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1a1c2e 1px, transparent 1px), linear-gradient(90deg, #1a1c2e 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Hamburger Menu */}
          <div className="relative menu-container">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Dropdown Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-[#0d0e12] border border-purple-500/30 rounded-lg shadow-xl shadow-purple-500/10 overflow-hidden backdrop-blur-xl"
              >
                <a
                  href="https://dispo.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 text-sm text-[#c5c6c7] hover:bg-purple-500/10 hover:text-white transition-colors"
                >
                  <span>Dispo.tech</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-sm text-[#c5c6c7] hover:bg-purple-500/10 hover:text-white transition-colors text-left"
                >
                  <span>Template Link</span>
                  <ExternalLink className="w-4 h-4 opacity-30" />
                </button>
              </motion.div>
            )}
          </div>
          
          <nav className="flex items-center gap-2">
            <HeaderLink href="#projects">Projects</HeaderLink>
            <HeaderLink href="#skills">Skills</HeaderLink>
            <HeaderLink href="#dashboard">Dashboard</HeaderLink>
            <HeaderLink href="#contact">Contact</HeaderLink>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8 relative">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <TypewriterText text={PROFILE.name} className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3" />
              <p className="mt-2 text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{PROFILE.title}</p>
              <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#a2a4a6] leading-relaxed">{PROFILE.summary}</p>
              
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {PROFILE.RESUME_URL && (
                  <motion.a 
                    href={PROFILE.RESUME_URL} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl transition border text-sm font-medium leading-6 bg-purple-600/90 text-white border-purple-500/50 hover:bg-purple-500/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Download className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Download Résumé</span>
                  </motion.a>
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

          {/* Floating Stats Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <Card className="bg-gradient-to-br from-[#111318] to-[#1a1c2e] border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-purple-400 mb-4">Live Status</h3>
                <div className="space-y-4">
                  <StatusItem icon={<Activity className="w-4 h-4" />} label="System Uptime" value="89.2%" status="online" />
                  <StatusItem icon={<Server className="w-4 h-4" />} label="Active Services" value="24" status="online" />
                  <StatusItem icon={<HardDrive className="w-4 h-4" />} label="Storage Used" value="67%" status="warning" />
                  <StatusItem icon={<Wifi className="w-4 h-4" />} label="Network Load" value="Low" status="online" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle title="Projects" subtitle="Selected work and lab tools" />
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "React", "PHP", "Python", "Docker"].map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedFilter === filter
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-[#111318] text-[#c5c6c7] hover:bg-[#1a1c2e] border border-white/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-3 h-3 inline-block mr-1" />
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <Card className="h-full bg-gradient-to-br from-[#111318] to-[#0d0e12] border-white/5 hover:border-purple-500/50 transition-all duration-300 overflow-hidden relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                  
                  <CardHeader>
                    <div className="flex items-start justify-between relative">
                      <CardTitle className="text-white text-lg group-hover:text-purple-300 transition-colors">
                        {p.name}
                      </CardTitle>
                      {p.status && (
                        <Badge className={`text-xs ${
                          p.status === "Active" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                          p.status === "WIP" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                          "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        }`}>
                          {p.status}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-[#a2a4a6] relative">
                    <p className="mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map((t) => (
                        <Badge key={t} className="bg-[#1a1c22] text-[#c5c6c7] border-white/10 hover:border-purple-500/30 transition-colors">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium"
                      >
                        View Project <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle title="Skills" subtitle="Tools & technologies I work with" />
        
        {["Frontend", "Backend", "Infrastructure"].map((category) => {
          const categorySkills = SKILLS.filter(s => s.category === category)
          if (categorySkills.length === 0) return null
          
          return (
            <div key={category} className="mb-8">
              <h3 className="text-purple-400 text-sm font-semibold mb-4">{category}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {categorySkills.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Card className="bg-[#111318] border-white/5 hover:border-purple-500/30 transition-all group">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                              {s.icon}
                            </div>
                            <div>
                              <div className="font-medium text-white">{s.label}</div>
                              <div className="text-xs text-[#8d8f92]">{s.level}</div>
                            </div>
                          </div>
                          <span className="text-sm font-semibold text-purple-400">{s.proficiency}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-2 bg-[#1a1c2e] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* Homelab Dashboard */}
      <section id="dashboard" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle title="Homelab Status" subtitle="Live infrastructure monitoring" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <DashboardCard 
            icon={<Server className="w-5 h-5" />} 
            label="Proxmox Nodes" 
            value="3" 
            status="online"
            details="SR650, DL325, ProxBox"
          />
          <DashboardCard 
            icon={<Database className="w-5 h-5" />} 
            label="TrueNAS Pools" 
            value="2" 
            status="online"
            details="12TB mirrored + 8TB"
          />
          <DashboardCard 
            icon={<Boxes className="w-5 h-5" />} 
            label="Containers" 
            value="18" 
            status="online"
            details="Docker & LXC"
          />
          <DashboardCard 
            icon={<Network className="w-5 h-5" />} 
            label="Network" 
            value="10Gb" 
            status="online"
            details="SFP+ backbone"
          />
        </div>

        <Card className="bg-gradient-to-br from-[#111318] to-[#0d0e12] border-white/10">
          <CardContent className="p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-400" />
              Active Services
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {["Frigate NVR", "Jellyfin", "Paperless-NGX", "Home Assistant", "Vaultwarden", "Nextcloud"].map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-[#1a1c2e] border border-white/5 hover:border-purple-500/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-[#c5c6c7]">{service}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle title="Experience" subtitle="Recent work & initiatives" />
        <div className="space-y-4">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-[#111318] to-[#0d0e12] border-white/5 hover:border-purple-500/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="text-white font-semibold text-lg">{e.role}</div>
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 whitespace-nowrap">
                      {e.period}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {e.bullets.map((b, i2) => (
                      <li key={i2} className="flex items-start gap-2 text-sm text-[#a2a4a6]">
                        <ArrowRight className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
        <SectionTitle title="Get In Touch" subtitle="Let's build something amazing together" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-[#111318] to-[#0d0e12] border-white/10">
            <CardContent className="p-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-[#c5c6c7] mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-[#0b0c10] border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#c5c6c7] mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-[#0b0c10] border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#c5c6c7] mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 bg-[#0b0c10] border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {PROFILE.links.email && (
                  <a href={PROFILE.links.email} className="flex items-center gap-3 p-3 rounded-lg bg-[#111318] border border-white/5 hover:border-purple-500/50 transition-all group">
                    <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                      <Mail className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-[#c5c6c7]">Email</div>
                      <div className="text-xs text-[#8d8f92]">mrzech@zechender.com</div>
                    </div>
                  </a>
                )}
                {PROFILE.links.github && (
                  <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-[#111318] border border-white/5 hover:border-purple-500/50 transition-all group">
                    <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                      <Github className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-[#c5c6c7]">GitHub</div>
                      <div className="text-xs text-[#8d8f92]">@MrZech</div>
                    </div>
                  </a>
                )}
                {PROFILE.links.linkedin && (
                  <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-[#111318] border border-white/5 hover:border-purple-500/50 transition-all group">
                    <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                      <Linkedin className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-[#c5c6c7]">LinkedIn</div>
                      <div className="text-xs text-[#8d8f92]">Connect with me</div>
                    </div>
                  </a>
                )}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
              <CardContent className="p-4">
                <p className="text-sm text-[#c5c6c7]">
                  <Zap className="w-4 h-4 inline-block mr-1 text-purple-400" />
                  Open to collaboration on homelab projects, automation tools, and full-stack development opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-xs text-[#8d8f92] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind & Framer Motion.</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-purple-600 text-white rounded-full shadow-lg shadow-purple-500/50 z-50 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
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

function SectionTitle({ title, subtitle, className = "" }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-sm text-[#8d8f92]">{subtitle}</p>}
    </div>
  )
}

function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return <h1 className={className}>{displayText}<span className="animate-pulse">|</span></h1>
}

function StatusItem({ icon, label, value, status }: { icon: React.ReactNode; label: string; value: string; status: "online" | "warning" | "offline" }) {
  const statusColors = {
    online: "bg-green-500",
    warning: "bg-yellow-500",
    offline: "bg-red-500"
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="text-purple-400">{icon}</div>
        <span className="text-sm text-[#a2a4a6]">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-white">{value}</span>
        <div className={`w-2 h-2 rounded-full ${statusColors[status]} animate-pulse`} />
      </div>
    </div>
  )
}

function DashboardCard({ icon, label, value, status, details }: { icon: React.ReactNode; label: string; value: string; status: string; details?: string }) {
  return (
    <Card className="bg-gradient-to-br from-[#111318] to-[#0d0e12] border-white/10 hover:border-purple-500/30 transition-all group">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
            <div className="text-purple-400">{icon}</div>
          </div>
          <div className={`w-2 h-2 rounded-full ${status === "online" ? "bg-green-500" : "bg-yellow-500"} animate-pulse`} />
        </div>
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div className="text-xs text-[#8d8f92]">{label}</div>
        {details && <div className="text-xs text-purple-400 mt-2">{details}</div>}
      </CardContent>
    </Card>
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
