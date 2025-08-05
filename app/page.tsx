"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Code, Smartphone, Palette, Cloud, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const skills = [
    {
      name: "MERN Stack",
      icon: Code,
      description: "MongoDB, Express, React, Node.js",
      gradient: "from-emerald-400 to-cyan-400",
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      description: "React Native, Flutter",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Figma, Design Systems",
      gradient: "from-orange-400 to-red-400",
    },
    {
      name: "Cloud Services",
      icon: Cloud,
      description: "AWS, Deployment & Scaling",
      gradient: "from-cyan-400 to-blue-400",
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://your-project-url.vercel.app",
      githubUrl: "https://github.com/yourusername/project",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Task Management Mobile App",
      description: "Cross-platform mobile app with real-time synchronization",
      tech: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://your-app-store-link.com",
      githubUrl: "https://github.com/yourusername/project",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "SaaS Dashboard",
      description: "Modern dashboard with analytics and user management",
      tech: ["Next.js", "AWS", "PostgreSQL", "Tailwind"],
      liveUrl: "https://your-saas-url.vercel.app",
      githubUrl: "https://github.com/yourusername/project",
      gradient: "from-orange-500 to-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Zain Ul Abidin
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-gray-950 to-cyan-900/20"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
                Available for new opportunities
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Software
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              Crafting digital experiences with 4 years of expertise in full-stack development, mobile applications, and
              cloud solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group"
                asChild
              >
                <Link href="mailto:zainyounis776@gmail.com">
                  <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 hover:scale-105 hover:shadow-lg transition-all duration-300 group bg-transparent"
                asChild
              >
                <Link href="https://github.com/zainulabidin776" target="_blank">
                  <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  View Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-6">
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  I'm a passionate software developer with 4 years of experience building scalable web applications and
                  mobile solutions. I specialize in the MERN stack and have a keen eye for design, bridging the gap
                  between functionality and user experience.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or designing intuitive user interfaces in Figma.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["4+ Years Experience", "Full-Stack Expert", "Mobile Developer", "UI/UX Designer"].map(
                  (item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-sm text-gray-300 hover:from-emerald-800/50 hover:to-cyan-800/50 hover:text-emerald-300 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="relative group">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-gray-500 text-center relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full mx-auto mb-4 group-hover:from-emerald-600/50 group-hover:to-cyan-600/50 transition-all duration-500"></div>
                  <p className="group-hover:text-gray-400 transition-colors duration-300">Your Photo Here</p>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardHeader className="text-center pb-4 relative z-10">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 p-2 rounded-lg bg-gradient-to-br ${skill.gradient} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    <skill.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {skill.description}
                  </CardDescription>
                </CardContent>
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600 hover:text-white hover:scale-105 transition-all duration-300 group/btn bg-transparent"
                    >
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="text-gray-400 hover:text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 group/btn"
                    >
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-gray-950 to-cyan-900/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group"
              asChild
            >
              <Link href="mailto:zainyounis776@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                zainyounis776@gmail.com
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 hover:text-white hover:scale-105 transition-all duration-300 group bg-transparent"
            >
              <Link href="https://www.linkedin.com/in/zain-ul-abidin-dev/" target="_blank">
                <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 hover:text-white hover:scale-105 transition-all duration-300 group bg-transparent"
            >
              <Link href="https://github.com/zainulabidin776" target="_blank">
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-gray-700 text-gray-300 hover:bg-green-800 hover:border-green-600 hover:text-green-300 hover:scale-105 transition-all duration-300 group bg-transparent"
            >
              <Link href="https://wa.me/923276148420" target="_blank">
                <svg
                  className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p className="hover:text-gray-400 transition-colors duration-300">
            &copy; 2024 Zain Ul Abidin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
