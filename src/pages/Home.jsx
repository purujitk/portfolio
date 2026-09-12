import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import ExperienceTimeline from "../sections/ExperienceTimeline";

export default function Home() {
  const basePath = import.meta.env.BASE_URL;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const projects = [
    {
      title: "Drone Swarm Simulation",
      slug: "simulation",
      description: "In collaboration with a team of students I developed a drone swarm simulation for the ICUAS student UAV competition. My role included creating ROS2 scripts to perform specific activties in the environment including building scanning and landing on platforms. Our final solution made use of OSF flocking algorithms and earned us spot to compete at the conference in person in Greece.",
      image: `${basePath}images/ICUAS.png`,
      skills: ["Software"]
    },
    {
      title: "Autonomous Mobile Robot",
      slug: "mobile-robot",
      description: "Developed Autonomy and control software for a rover for MREN 203 coursework. The rover was developed for a simulated mars mission, the task, to pickup soil samples from the martian surface. The solution I developed is a semi-autonomous rover that used NAV2 and SLAM to plan a path to a specified path using a pre surveyed map. The onboard sensors included a RPLidar, wheel encoders and an IMU. Autonomy and low level control were bridged using ROS2 running on a Raspberry PI.",
      image: `${basePath}images/203.jpeg`,
      skills: ["Electronics","Software"],
    },
    {
      title: "Turbo - Fixed Wing UAV",
      slug: "sub-system",
      description: "Researched and integrated avionics and propulsion systems for a fixed wing UAV developed for the AIAA student competition. As manager of the systems team, I also lead all testing efforts from sub-system tests to full flight performance reviews. My work required me to use tools such as OnShape for mount design and KiCAD for PDB design. In my role I developed a greater understanding for aircraft electronics, testing methodologies and leadership. ",
      image: `${basePath}images/Turbo.jpg`,
      skills: ["Electronics","Mechanical"],
    },
    {
      title: "Custom Li-ion Batteries",
      slug: "custom-batteries",
      description: "In collaboration with another student, I designed and developed the power systems for a fixed wing UAV and heavy lift quadcopter. The manufacturing process for the 12S batteries involved spot welding, soldering and VERY careful handling.",
      image: `${basePath}images/bat_2.jpeg`,
      skills: ["Manufacturing","Power Systems"],
    },
    {
      title: "Dimensional Change Monitor",
      slug: "dimensional-change-monitor",
      description: "Low-cost strain monitoring system developed for the Ingenium museum in Ottawa in an effor to optimize HVAC usage. Hardware used included 24 bit ADC, strain guages in wheatstone bridge conifguration and an ESP32. Everything was programmed in C++ and automated alerts were sent to museum coordinaters for extreme strain values. ",
      image: `${basePath}images/strain_2.png`,
      skills: ["Electronics", "Software"],
    },
  ];

  const achievements = [
    { title: "3rd Place", organization: "Canadian Engineering Competition", date: "2026" },
    { title: "1st Place", organization: "Ontario Engineering Competition", date: "2026" },
    { title: "1st Place", organization: "Queen's Engineering Competition", date: "2025" },
    { title: "Dean's Honour List", organization: "Faculty of Engineering", date: "2024 - 2026" },
  ];

  return (
    <div className="site-shell grid-glow text-zinc-100">
      <main className="relative">
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-16">
          <header className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-white" />
              <span className="text-sm tracking-[0.24em] text-zinc-300 uppercase">Purujit Kantiya</span>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
              <button type="button" onClick={() => scrollToSection("projects")} className="transition hover:text-white">Projects</button>
              <button type="button" onClick={() => scrollToSection("achievements")} className="transition hover:text-white">Achievements</button>
              <button type="button" onClick={() => scrollToSection("experience")} className="transition hover:text-white">Experience</button>
            </nav>
          </header>

          <div className="grid items-center gap-8 pb-12 pt-4 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="overflow-hidden bg-transparent p-1.5">
                <img
                  src={`${basePath}images/Headshot.png`}
                  alt="Portrait placeholder"
                  className="h-[420px] w-full rounded-none object-cover md:h-[520px]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="muted-label mb-5">Mechatronics Engineering Student</p>
              <h1 className="max-w-xl text-5xl font-semibold leading-none tracking-[-0.06em] text-white md:text-6xl">
                Purujit Kantiya
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                I’m a third year mechatronics engineering student at Queen's University in Kingston. I have 2.5 years of experience working in professional environments, design teams and academic projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <a href="mailto:purujitkantiya@gmail.com">
                    <Mail size={16} className="mr-2" /> Contact
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/purujitk/" target="_blank" rel="noreferrer">
                    <Linkedin size={16} className="mr-2" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`${basePath}images/resume.pdf`} download="resume_purujit_kantiya.pdf">
                    Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="muted-label mb-2">Selected Work</p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">Projects</h2>
            </div>
            <a href="#experience" className="hidden items-center gap-2 text-sm text-zinc-400 transition hover:text-white md:inline-flex">
              View experience <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.slug} className="group overflow-hidden border-white/10 bg-[#111317]/90 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#15181d]">
                <div className="overflow-hidden border-b border-white/10 bg-[#0c0d10]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      {p.skills?.map((skill, idx) => (
                        <span key={idx} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400">{skill}</span>
                      ))}
                    </div>
                    <span className="text-xs text-zinc-500">0{projects.indexOf(p) + 1}</span>
                  </div>

                  <h3 className="text-xl font-medium text-white">{p.title}</h3>
                  <p className="mt-3 flex-grow text-sm leading-7 text-zinc-300">{p.description}</p>

                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="achievements" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
          <div className="mb-8">
            <p className="muted-label mb-2">Recognition</p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">Achievements</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111317]/80 p-5"
              >
                <div>
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.organization}</p>
                </div>
                <span className="ml-6 whitespace-nowrap text-xs uppercase tracking-[0.16em] text-zinc-500">{item.date}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <div id="experience" className="scroll-mt-24">
          <ExperienceTimeline />
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Purujit Kantiya</p>
          <div className="flex items-center gap-4">
            <a href="mailto:purujitkantiya@gmail.com" className="hover:text-white"><Mail size={16} /></a>
            <a href="https://linkedin.com/in/purujitk/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}