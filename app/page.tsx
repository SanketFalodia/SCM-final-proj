"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
      {/* Navigation */}
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Nikhil Parashar</div>
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-purple-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-purple-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
              }}
            />
          ))}
        </div>

        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 animate-pulse opacity-70"></div>
          <div className="absolute inset-2 rounded-full bg-slate-900"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold">NP</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Nikhil Parashar
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">Software Developer & Creative Problem Solver</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Link href="#contact" className="flex items-center">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/20">
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-purple-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Hello! I'm Nikhil Parashar, a passionate software developer with a strong foundation in building web
              applications and solving complex problems.
            </p>
            <p className="text-lg text-gray-300">
              I enjoy creating elegant solutions and working collaboratively with teams to deliver high-quality
              products. My approach combines technical expertise with creative thinking to tackle challenges
              effectively.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-lg relative overflow-hidden border border-purple-500/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Star className="w-16 h-16 text-white animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-20 bg-slate-900/50 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-purple-400">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "HTML/CSS",
            "Tailwind CSS",
            "Git",
            "MongoDB",
            "SQL",
            "RESTful APIs",
            "GraphQL",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
            >
              <Badge className="bg-purple-600 hover:bg-purple-700 w-full justify-center py-2 text-base">{skill}</Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <CardTitle className="text-purple-400">Online Bookstore</CardTitle>
              <CardDescription className="text-gray-300">
                A comprehensive online bookstore platform with browsing, searching, and purchasing capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Tailwind CSS"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-purple-900/30 text-purple-300">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/20 w-full">
                View Project
              </Button>
            </CardFooter>
          </Card>
          {[
            {
              title: "Portfolio System",
              description: "A dynamic portfolio system for showcasing projects and skills with customizable themes.",
              tags: ["HTML", "CSS", "JavaScript"],
            },
            {
              title: "Task Management App",
              description: "A collaborative task management application with real-time updates and team features.",
              tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
            },
          ].map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <CardHeader>
                <CardTitle className="text-purple-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-purple-900/30 text-purple-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/20 w-full">
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-purple-400">Contact Information</CardTitle>
              <CardDescription className="text-gray-300">
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-purple-400 h-6 w-6" />
                <span className="text-gray-300">nikhilparashar793@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="text-purple-400 h-6 w-6" />
                <a
                  href="https://www.linkedin.com/in/nikhil-parashar-805929344/"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  linkedin.com/in/nikhil-parashar-805929344
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Github className="text-purple-400 h-6 w-6" />
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  github.com/nikhil-parashar
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-purple-400">Send a Message</CardTitle>
              <CardDescription className="text-gray-300">I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full p-2 rounded-md bg-slate-700 border border-purple-500/20 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 rounded-md bg-slate-700 border border-purple-500/20 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 rounded-md bg-slate-700 border border-purple-500/20 focus:border-purple-500 focus:outline-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Nikhil Parashar. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
