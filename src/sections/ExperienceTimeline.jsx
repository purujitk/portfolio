import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";

export default function ExperienceTimeline() {
  const experiences = [
    {
      side: "left",
      title: "Teaching Assistant",
      org: "Queen's University",
      bullets: ["Technical TA for first year project course."],
      tags: ["Present"],
    },
    {
      side: "right",
      title: "Captain",
      org: "Queen’s Aerospace Design Team",
      bullets: ["Leading team Research, Business and Education initiatives."],
      tags: ["Leadership", "Present"],
    },
    {
      side: "left",
      title: "Verification Engineering Intern",
      org: "Xona Space Systems",
      bullets: ["Developed test scripts for reciever and simulator verification."],
      tags: ["Testing", "Software"],
    },
    {
      side: "right",
      title: "Systems Integration Team Manager",
      org: "Queen’s Aerospace Design Team",
      bullets: [
        "Led a 10-person team developing electrical systems for a fixed-wing aircraft competing at the AIAA competition.",
      ],
      tags: ["Leadership", "Electrical"],
    },
    {
      side: "right",
      title: "Simulation Team Member",
      org: "Queen’s Aerospace Design Team",
      bullets: [
        "Built autonomous drone swarm simulation for ICUAS student UAV competition.",
      ],
      tags: ["Software"],
    },
    {
      side: "left",
      title: "Construction Engineering Intern",
      org: "Tatham Engineering",
      bullets: [
        "Supervised a $3,000,000 road reconstruction program and tracked work progress.",
      ],
      tags: ["Project Management"],
    },
    {
      side: "right",
      title: "Power Systems Team Member",
      org: "Queen’s Aerospace Design Team",
      bullets: [
        "Manufactured custom 12S Li-Ion battery packs for UAVs.",
      ],
      tags: ["Electrical"],
    },
    {
      side: "right",
      title: "Software Team Member",
      org: "Queen’s Hyperloop Design Team",
      bullets: ["Developed scripts to communicate with thermocouple via I2C."],
      tags: ["Software"],
    },
    {
      side: "right",
      title: "Suspension Team Member",
      org: "Queen’s Hyperloop Design Team",
      bullets: ["Designed suspension components for pod using SolidWorks."],
      tags: ["Mechanical"],
    },
  ];

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-24">
      <div className="mb-14 flex items-center justify-between gap-4">
        <span className="flex-1 text-left text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500 md:text-xs">
          Professional
        </span>
        <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">Experience</h2>
        <span className="flex-1 text-right text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500 md:text-xs">
          Design Team
        </span>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-10 md:space-y-14">
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`relative flex items-center ${e.side === "left" ? "justify-start" : "justify-end"}`}
            >
              <div className={e.side === "left" ? "w-full pr-0 md:w-1/2 md:pr-12" : "w-full pl-0 md:w-1/2 md:pl-12"}>
                <TimelineCard title={e.title} org={e.org} bullets={e.bullets} tags={e.tags} />
              </div>

              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#0b0b0d] bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.06)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ title, org, bullets, tags = [] }) {
  return (
    <Card className="border-white/10 bg-[#111317]/90 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mb-3 mt-1 text-sm text-zinc-400">{org}</p>

        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        )}

        {bullets.length > 0 && (
          <ul className="space-y-2 text-sm leading-6 text-zinc-300">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}