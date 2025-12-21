import { motion } from "framer-motion";
import { Github, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const projects = [
    {
      title: "Dimensional Change Monitor (ESP32)",
      description:
        "Low-cost monitoring system using strain gauges, HX711, and ESP32. Data streamed to ThingSpeak for remote access.",
      tags: ["ESP32", "Sensors", "IoT", "C++"],
      link: "#",
    },
    {
      title: "Power Distribution Board (PDB)",
      description:
        "Beginner-friendly PDB with buck converter, motor control, and test points designed for learning and prototyping.",
      tags: ["PCB Design", "Power Electronics"],
      link: "#",
    },
    {
      title: "Autonomous Drone Pillar Scan",
      description:
        "ROS2-based autonomous flight routine for scanning cylindrical structures in simulation.",
      tags: ["ROS2", "C++", "Robotics"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-slate-100">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I’m <span className="text-indigo-400">Purujit Kantiya</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
          Engineering student passionate about robotics, embedded systems, and
          building practical solutions. I enjoy turning ideas into working
          systems.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Experience Timeline</h2>
        <p className="text-slate-400 text-center mb-14">
          Professional experience above · Design & leadership experience below
        </p>

        <div className="relative">
          {/* Horizontal animated timeline line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-0 right-0 h-px bg-slate-700 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Professional Experience (ABOVE line) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col items-center group"
            >
              <Card className="bg-slate-800 border-slate-700 mb-6 transition group-hover:border-indigo-400">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-100">Construction Engineering Intern</h3>
                  </div>
                  <p className="text-sm text-indigo-300 mb-3">Tatham Engineering</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                    <li>Conducted construction site inspections and progress verification</li>
                    <li>Reviewed contractor submittals and shop drawings</li>
                    <li>Analyzed survey data for municipal compliance</li>
                  </ul>
                </CardContent>
              </Card>
              <div className="bg-indigo-400 h-3 w-3 rounded-full group-hover:scale-125 transition" />
              <p className="text-xs text-slate-400 mt-2">Summer 2025</p>
            </motion.div>

            {/* Design Team Experience (BELOW line) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: 4 }}
              className="relative flex flex-col items-center mt-32 group"
            >
              <div className="bg-indigo-400 h-3 w-3 rounded-full group-hover:scale-125 transition" />
              <p className="text-xs text-slate-400 mt-2 mb-6">Sep 2024 – Apr 2025</p>
              <Card className="bg-slate-800 border-slate-700 transition group-hover:border-indigo-400">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-100">Power Systems Team Member</h3>
                  <p className="text-sm text-indigo-300 mb-3">Queen’s Aerospace Design Team</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                    <li>Designed and tested a 44V to 15V buck converter for avionics</li>
                    <li>Validated performance using LTSpice simulations</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: 4 }}
              className="relative flex flex-col items-center mt-32 group"
            >
              <div className="bg-indigo-400 h-3 w-3 rounded-full group-hover:scale-125 transition" />
              <p className="text-xs text-slate-400 mt-2 mb-2">May 2025 – Present</p>
              <span className="text-[10px] mb-4 px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                Current
              </span>
              <Card className="bg-slate-800 border-slate-700 transition group-hover:border-indigo-400">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-100">Systems Integration Team Manager</h3>
                  <p className="text-sm text-indigo-300 mb-3">Queen’s Aerospace Design Team</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                    <li>Lead a 10-person team developing avionics and control systems</li>
                    <li>Executed system-level testing using flight sensor data</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: 4 }}
              className="relative flex flex-col items-center mt-32 group"
            >
              <div className="bg-indigo-400 h-3 w-3 rounded-full group-hover:scale-125 transition" />
              <p className="text-xs text-slate-400 mt-2 mb-2">Aug 2025 – Present</p>
              <span className="text-[10px] mb-4 px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                Current
              </span>
              <Card className="bg-slate-800 border-slate-700 transition group-hover:border-indigo-400">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-100">Chief Technology Officer</h3>
                  <p className="text-sm text-indigo-300 mb-3">Queen’s Merlin Neurotech</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                    <li>Oversee technical operations across multidisciplinary teams</li>
                    <li>Maintain technical documentation and continuity</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-slate-900 border-slate-800 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.link}>
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Purujit Kantiya
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              className="text-slate-400 hover:text-white"
            >
              <Github />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-slate-400 hover:text-white"
            >
              <Mail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
