import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Tags } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      side: "right",
      title: "Systems Integration Team Manager",
      org: "Queen’s Aerospace Design Team",
      bullets: [
        "Led 10-person team in developing electronic and software systems for fixed wing drone for international AIAA competition",
        "Conduct all sub-system and large scale system testing",
      ],
      tags: [
        "Leadership",
        "Present",
        "Project Management",
        "Electrical and Software"
      ],
    },
    {
      side: "right",
      title: "Simulation Team Member",
      org: "Queen’s Aerospace Design Team",
      bullets: [
        "Simulating search and rescue drone swarm for ICUAS conference",
        "Developing ROS2 scripts to control drone swarm",
      ],
      tags: [
        "Present",
        "Software"
      ]
    },
    {
      side: "right",
      title: "Chief Technology Officer",
      org: "Merlin Neurotechnology",
      bullets: [
        "Develop technical projects for the year",
        "Provide technical guidance for project managers"
      ],
      tags: [
        "Present",
        "Project Management"
      ],
    },
    {
      side: "left",
      title: "Construction Engineering Intern",
      org: "Tatham Engineering",
      bullets: [
        "Supervised $3,000,000 road reconstruction project",
        "Reviewed contractor submittals",
        "Survey data compliance analysis",
      ],
      tags: [
        "Professional",
        "Project Management"
      ],
    },
    {
      side: "right",
      title: "Power Systems Team Member",
      org: "Queen’s Aerospace Design Team",
      bullets: [
        "Designed 44V → 15V buck converter in Altium",
        "Welded, Insulated and Wrapped 12S Li-Ion Batteries",
      ],
      tags: [
        "Electrical"
      ],
    },
    {
      side: "right",
      title: "Software Team Member",
      org: "Queen’s Hyperloop Design Team",
      bullets: [
        "Integrated I2C and CAN protocols",
      ],
      tags: [
        "Software"
      ],
    },
    {
      side: "right",
      title: "Suspension Team Member",
      org: "Queen’s Hyperloop Design Team",
      bullets: [
        "Designed suspension  elements using SolidWorks"
      ],
      tags: [
        "Mechanical"
      ],
    },
  ];

return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex items-center justify-between mb-16">
      {/* Left Side Label */}
      <span className="flex-1 text-left text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">
        Professional
      </span>

      {/* Center Title */}
      <h2 className="text-3xl font-semibold px-4 md:px-8">Experience</h2>

      {/* Right Side Label */}
      <span className="flex-1 text-right text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
        Design Team
      </span>

    </div>
      <div className="relative">
        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-700" />

        <div className="space-y-16">
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                e.side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              {/* 1. WRAP COMPONENT IN A DIV TO CONTROL WIDTH */}
              <div className={e.side === "left" ? "pr-12 w-1/2" : "pl-12 w-1/2"}>
                <TimelineCard 
                  title={e.title}
                  org={e.org}
                  bullets={e.bullets}
                  tags={e.tags} // Will default to [] if undefined in the object
                />
              </div>

              {/* DOT */}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-indigo-400 border-2 border-slate-900" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ title, org, bullets, tags = [] }) {
    return (
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-indigo-300 mb-2">{org}</p>

          {/* TAGS */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.5 rounded-full
                            bg-indigo-500/20 text-indigo-300
                            border border-indigo-400/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  }