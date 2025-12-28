import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, X, Maximize2, CheckCircle2 } from "lucide-react";

const PROJECTS = {
  "dimensional-change-monitor": {
    title: "Dimensional Change Monitor",
    skills: ["Arduino", "C++", "IoT"],  
    description:
      "Ingenium Museum is a science and history musuem located in Ottawa, Canada. They house more than 150,000 artifacts and archival materials from the Canadian national collection. Their collection feauture thousands of delicate wooden artifacts that deform with fluctuting humidity and temprature conditions. In an effort to optimize their HVAC system and reduce their carbon foot print, Ingenium contracted us to develop a artifact monitoring system that can track deformation patterns within the wooden artifact. During a period of critical deformation the museum would activate the HVAC system to normalize the environmental conditions and return the artifact to a state of non critical deformation.",
    p2: "In our group I was in charge of all technical development of the prototype. We decided to develop a strain monitorning system that employed low cost strain guages to detect dimensional changes.",
    hardware: "The monitoring system used several off the shelf electronics to fulfill all requirements. Strain was monitored using cheap strain gauges capable of detecting at the microstrain level. Changes detected from the strain gauges were captured by measuring the voltage across a wheatsone bridge with one strain gauge in a quarter wheatstone configuration. Due to the small changes in voltage a seperate ADC with 24 bit resolution was used to relay voltage signals to an ESP32. Voltages values that were captured were processed on the ESP and translated to a strain value. The calculated strain values was formatted into a CSV file and stored to a SD card.",
    software: "Everything was programmed in C++ through the Arduino IDE. Select packages were imported to support the functionality of some of the devices and features. Through software, voltage readings were periodically collected, translated to strain values and than formatted into a CSV with time stamps. Daily email updates were sent to the client with a log of the deformation activity. Speacilized email alerts were also programmed so that the client can be warned of high strain readings. ",
    image: ["images/strain_1.png","images/strain_2.png","images/strain_3.png"],
  },
  "custom-batteries": {
    title: "Custom Batteries",
    skills: ["Welding", "Soldering", "Power Systems"],
    description:
      "As a power systems member on the Queen's Aerospace Design Team, I was responsible for the development of the custom battery packs for our competition aircraft. One of the drones in particular was a payload delivery quadcopter that demanded high current for the motors and high capacity to accomodate the flight time. To deliver this power, a power system with 3 12S 2P battery packs was designed. These custom packs were created by spot welding individual Li-Ion cells that were purchased online. Balance port connecters, and power delivery wires were soldered to each individual cell and than connected at the end using a balance port and XT90 connection respectively. These custom batteries were highly dangerous and posed severe risk if exposed to a heating element or if punctured. To mititgate the risk of combustion each pack was wrapped in foam and insulating plastic wrap. Before being deemed ready for use all battery packs were inspected, charged and tested.",
    image: ["images/bat_1.png","images/bat_2.jpeg","images/bat_3.jpeg"],
  },
  "suspension": {
    title: "Custom Suspension",
    skills: ["CAD", "Material Selection"],
    description:
      "As a member of the suspension sub team on the Hyperloop Design Team, I was in charge of creating a pod lowering/raising system. The proof of concept shown in the pictures uses a pneumatic piston to lower and raise the 200 Kg pod. All components were designned using solidworks, and a piston was found from McMaster-Carr. Due to finanicial constraints a working prototype was unable to be developed.",
    image: ["images/suspension_1.png","images/suspension_2.png"],
  },
  "sub-system": {
    title: "Drone Electronic Sub Systems",
    skills: ["Electronics", "Research", "KiCad"],
    description:
      "As manager of the system integration team on the Aerospace Design team, I am in charge of all electrical and software development of our competition aircraft that will fly at the AIAA compeition this summer.",
    image: "images/plane_1.png",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  const images = Array.isArray(project?.image) ? project.image : [project?.image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!project) return <p className="p-10 text-white text-center">Project not found.</p>;

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      
      {/* --- LIGHTBOX MODAL --- */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white">
            <X size={40} />
          </button>
          <img
            src={images[currentIndex]}
            alt="Full view"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <Button asChild variant="ghost" className="mb-12 hover:bg-slate-800 text-slate-400">
          <Link to="/">← Back to Projects</Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT SIDE: TEXT & SUMMARY */}
          <div className="space-y-10">
            <header>
              <h1 className="text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </header>

            {/* --- SUMMARY SECTION --- */}
            {project.skills && (
              <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
                  Key Skills & Technologies
                </h2>
                {/* 2 columns on mobile, 3 columns on desktop */}
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* MAIN DESCRIPTION */}
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>{project.description}</p>
              {project.p2 && <p className="space-y-6 text-slate-400 text-lg leading-relaxed">{project.p2}</p>}
              
              {project.hardware && (
                <div className="pt-4">
                  <h3 className="text-white font-bold text-xl mb-3">Hardware</h3>
                  <p>{project.hardware}</p>
                </div>
              )}

              {project.software && (
                <div className="pt-4">
                  <h3 className="text-white font-bold text-xl mb-3">Software</h3>
                  <p>{project.software}</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: GALLERY */}
          <div className="lg:sticky lg:top-24 self-start">
            <div 
              className="relative group aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
            >
              <img
                src={images[currentIndex]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Main project view"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                <Maximize2 size={14} /> Click to enlarge
              </div>

              {images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={prevImage} className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white"><ChevronLeft size={24} /></button>
                  <button onClick={nextImage} className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white"><ChevronRight size={24} /></button>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                      currentIndex === index ? "border-blue-500 ring-4 ring-blue-500/10" : "border-transparent opacity-40 hover:opacity-100"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
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