import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";

const PROJECTS = {
  "dimensional-change-monitor": {
    title: "Dimensional Change Monitor",
    skills: ["Arduino", "C++", "IoT"],
    description:
      "Ingenium Museum is a science and history musuem located in Ottawa, Canada. They house more than 150,000 artifacts and archival materials from the Canadian national collection. Their collection feauture thousands of delicate wooden artifacts that deform with fluctuting humidity and temprature conditions. In an effort to optimize their HVAC system and reduce their carbon foot print, Ingenium contracted us to develop a artifact monitoring system that can track deformation patterns within the wooden artifact.",
    p2: "As technical lead I designed, built and tested a strain monitoring system that makes use of strain guages in a wheastone bridge configuration. Voltage values that were detected by the bridge where fed into a high resolution ADC and than tranlsated into strain values. Data processes on our ESP32 was fomrated and sent to the client through an email notification system that provided reports every 24 hours.",
    image: ["images/strain_1.png", "images/strain_2.png", "images/strain_3.png"],
  },
  "custom-batteries": {
    title: "Custom Batteries",
    skills: ["Welding", "Soldering", "Power Systems"],
    description:
      "As a power systems member on the Queen's Aerospace Design Team, I was responsible for the development of the custom battery packs for our competition aircraft. One of the drones in particular was a payload delivery quadcopter that demanded high current for the motors and high capacity to accomodate the flight time. To deliver this power, a power system with 3 12S 2P battery packs was designed. These custom packs were created by spot welding individual Li-Ion cells that were purchased online. Balance port connecters, and power delivery wires were soldered to each individual cell and than connected at the end using a balance port and XT90 connection respectively. These custom batteries were highly dangerous and posed severe risk if exposed to a heating element or if punctured. To mititgate the risk of combustion each pack was wrapped in foam and insulating plastic wrap. Before being deemed ready for use all battery packs were inspected, charged and tested.",
    image: ["images/bat_1.png", "images/bat_2.jpeg", "images/bat_3.jpeg"],
  },
  "sub-system": {
    title: "Turbo - Fixed Wing UAV",
    skills: ["Testing", "Power Systems", "Avionics"],
    description:
      "As manager of the systems team, I was in charge of the design and integration of avionics and propulsion systems on our fixed wing UAV Turbo, created for the AIAA 2026 competition. ",
    image: [
      "images/Test_Stand.jpeg",
      "images/Radio_mount.jpeg",
      "images/FlightTest.png",
      "images/image.png",
    ],
  },
  "simulation": {
    title: "Drone Swarm Simluation",
    skills: ["ROS2", "C++", "Gazebo"],
    description:
      "The simulation team on the Queen's Aerospace Design Team has undertaken a project to develop a drone swarm simulation that can perform specific task, for the ICUAS conference in Greece. As a member of this team I have gained exposure to simluation tools such as Gazebo and programming with ROS2. In addition to that, I have learned alot more aobut develpoing in a Linux based environment, version control using Git and Docker. So far I have developed ROS2 programs to scan buildings in a mock city environment for Aruco markers that indicate landing locations, and scripts to land the drones at those subsequent landing locations.",
    image: ["images/sim1.png", "images/CF.jpeg"],
  },
  "mobile-robot": {
    title: "Autonomous Mobile Robot",
    skills: ["ROS2", "Python", "Nav2"],
    description: "This project involved developing an autonomous mobile rover using ROS2 on a Raspberry Pi, integrating sensing, control, mapping, and navigation into a unified autonomy stack. The system was built around three core ROS2 packages: a bring-up package for system orchestration, a robot description package (URDF/TF2) for frame management, and a LiDAR driver (rplidar_ros) for perception. Low-level control used closed-loop PI motor control via an Arduino interface, with encoder feedback used to estimate odometry and maintain stable motion. Mapping and localization were achieved using a 2D LiDAR combined with wheel encoder data in the SLAM Toolbox, producing real-time occupancy grid maps of the environment. These maps were used as the basis for autonomous operation. Navigation was implemented using the ROS2 Nav2 stack, including global path planning (NavFn), local obstacle avoidance (regulated pure pursuit), and behavior tree-based mission control. The system successfully supported full autonomous navigation to user-defined goals in a mapped environment. A custom bring-up system coordinated all components and ensured proper launch sequencing between LiDAR, SLAM, and Nav2 for reliable operation. Overall, the project successfully demonstrated a complete SLAM-based autonomous navigation system, culminating in working Nav2 autonomy on the rover.",
    image: ["images/203.jpeg"],
  },
};

const isVideo = (path) => {
  return typeof path === "string" && path.match(/\.(mp4|webm|mov|ogg)$/i);
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  const media = Array.isArray(project?.image)
    ? project.image
    : project?.image
    ? [project.image]
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0b0b0d] px-6 py-16 text-center text-zinc-200">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  const currentMedia = media[currentIndex];
  const isCurrentMediaVideo = isVideo(currentMedia);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] px-6 py-8 text-zinc-100 md:py-12">
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          onClick={() => setIsZoomed(false)}
        >
          <button className="absolute right-6 top-6 z-50 text-white/70 hover:text-white" aria-label="Close image viewer">
            <X size={40} />
          </button>

          <div className="flex max-h-[90vh] max-w-5xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {isCurrentMediaVideo ? (
              <video src={currentMedia} controls autoPlay className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl" />
            ) : (
              <img src={currentMedia} alt="Project detail" className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl" />
            )}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <Button asChild variant="ghost" className="border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10">
            <Link to="/">← Back to projects</Link>
          </Button>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <header>
              <p className="muted-label mb-3">Case Study</p>
              <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                {project.title}
              </h1>
            </header>

            {project.skills && (
              <section className="rounded-[1.6rem] border border-white/10 bg-[#111317]/90 p-6">
                <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
                  Key Skills & Technologies
                </h2>

                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 md:grid-cols-3">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 size={14} className="text-zinc-100" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="space-y-6 text-base leading-8 text-zinc-300 md:text-lg">
              <p>{project.description}</p>
              {project.p2 && <p>{project.p2}</p>}

              {project.hardware && (
                <div className="border-t border-white/10 pt-6">
                  <h3 className="mb-3 text-xl font-medium text-white">Hardware</h3>
                  <p>{project.hardware}</p>
                </div>
              )}

              {project.software && (
                <div className="border-t border-white/10 pt-6">
                  <h3 className="mb-3 text-xl font-medium text-white">Software</h3>
                  <p>{project.software}</p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:sticky lg:top-6 lg:self-start">
            <div
              className={`group relative aspect-[4/3] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#111317] ${
                !isCurrentMediaVideo ? "cursor-zoom-in" : ""
              }`}
              onClick={() => !isCurrentMediaVideo && setIsZoomed(true)}
            >
              {isCurrentMediaVideo ? (
                <video src={currentMedia} className="h-full w-full object-cover" controls muted playsInline />
              ) : (
                <img src={currentMedia} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" alt="Project main view" />
              )}

              {!isCurrentMediaVideo && (
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-zinc-200 opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <Maximize2 size={14} /> Enlarge
                </div>
              )}

              {media.length > 1 && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 opacity-0 transition group-hover:opacity-100">
                  <button onClick={prevImage} className="pointer-events-auto rounded-full border border-white/10 bg-black/35 p-2 text-white hover:bg-black/50">
                    <ChevronLeft size={22} />
                  </button>
                  <button onClick={nextImage} className="pointer-events-auto rounded-full border border-white/10 bg-black/35 p-2 text-white hover:bg-black/50">
                    <ChevronRight size={22} />
                  </button>
                </div>
              )}
            </div>

            {media.length > 1 && (
              <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
                {media.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border transition ${
                      currentIndex === index
                        ? "border-white/60 ring-2 ring-white/10"
                        : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  >
                    {isVideo(item) ? (
                      <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-zinc-100">
                        <PlayCircle size={28} />
                      </div>
                    ) : (
                      <img src={item} className="h-full w-full object-cover" alt={`Thumbnail ${index}`} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}