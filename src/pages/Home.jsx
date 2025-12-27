import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Github } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import ExperienceTimeline from "../sections/ExperienceTimeline";

export default function Home() {
  const projects = [
    {
      title: "Dimensional Change Monitor",
      slug: "dimensional-change-monitor",
      description:
        "Low-cost monitoring system for museum artifacts",
      tags: ["ESP32", "Sensors", "IoT"],
    },
    {
      title: "Custom Batteries",
      slug: "custom-batteries",
      description:
        "Custom 12S Li-Ion battery packs for UAVs",
      tags: ["Power Systems", "Electrical"],
    },
    {
      title: "Drone Electronic Sub Systems",
      slug: "sub-system",
      description:
        "Essential electronic sub systems for compeition drone",
      tags: ["Electronics", "Research", "On Going"],
    },
    {
      title: "Custom Suspension",
      slug: "suspension",
      description:
        "Custom suspension system desigined on SolidWorks",
      tags: ["Mechanical", "CAD"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-slate-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I’m <span className="text-indigo-400">Purujit Kantiya</span>
        </motion.h1>

        <p className="text-slate-300 max-w-2xl mb-8 text-lg">
          Engineering student passionate about Energy, Computing,
          and Robotics.
        </p>

        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <a href="mailto:purujitkantiya@gmail.com">Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/purujitk/" target="_blank" rel="noopener noreferrer">
             LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/portfolio/Resume_Purujit_Kantiya_2025_2026.pdf"
              download="resume_purujit_kantiya.pdf"
              className="resume-button"
              >
              Resume
              </a>
          </Button>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.slug} className="bg-slate-900 border-slate-800">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-400 mb-4 flex-grow">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Button size="sm" variant="outline" asChild>
                  <Link to={`/projects/${p.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <ExperienceTimeline />

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Purujit Kantiya
          </p>
          <a href="https://github.com/yourusername">
            <Github />
          </a>
        </div>
      </footer>
    </div>
  );
}
