import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const PROJECTS = {
  "dimensional-change-monitor": {
    title: "Dimensional Change Monitor",
    description:
      "Ingenium Museum is a science and history musuem located in Ottawa, Canada. They house more than 150,000 artifacts and archival materials from the Canadian national collection. Their collection feauture thousands of delicate wooden artifacts that deform with fluctuting humidity and temprature conditions. In an effort to optimize their HVAC system and reduce their carbon foot print, Ingenium contracted us to develop a artifact monitoring system that can track deformation patterns within the wooden artifact. During a period of critical deformation the museum would activate the HVAC system to normalize the environmental conditions and return the artifact to a state of non critical deformation.",
    p2: "In our group I was in charge of all technical development of the prototype. We decided to develop a strain monitorning system that employed low cost strain guages to detect dimensional changes.",
    hardware: "The monitoring system used several off the shelf electronics to fulfill all requirements. Strain was monitored using cheap strain gauges capable of detecting at the microstrain level. Changes detected from the strain gauges were captured by measuring the voltage across a wheatsone bridge with one strain gauge in a quarter wheatstone configuration. Due to the small changes in voltage a seperate ADC with 24 bit resolution was used to relay voltage signals to an ESP32. Voltages values that were captured were processed on the ESP and translated to a strain value. The calculated strain values was formatted into a CSV file and stored to a SD card.",
    software: "Everything was programmed in C++ through the Arduino IDE. Select packages were imported to support the functionality of some of the devices and features. Through software, voltage readings were periodically collected, translated to strain values and than formatted into a CSV with time stamps. Daily email updates were sent to the client with a log of the deformation activity. Speacilized email alerts were also programmed so that the client can be warned of high strain readings. ",
    image: "/images/dimensional-monitor.jpg",
  },
  "custom-batteries": {
    title: "Custom Batteries",
    description:
      "As a power systems member on the Queen's Aerospace Design Team, I was responsible for the development of the custom battery packs for our competition aircraft. One of the drones in particular was a payload delivery quadcopter that demanded high current for the motors and high capacity to accomodate the flight time. To deliver this power, a power system with 3 12S 2P battery packs was designed. These custom packs were created by spot welding individual Li-Ion cells that were purchased online. Balance port connecters, and power delivery wires were soldered to each individual cell and than connected at the end using a balance port and XT90 connection respoectively. These custom batteries were highly dangerous and posed severe risk if exposed to a heating element or if punctured. To mititgate the risk of combustion each pack was wrapped in foam and insulating plastic wrap. Before being deemed ready for use all battery packs were inspected, charged and tested.",
    image: "/images/pdb.jpg",
  },
  "suspension": {
    title: "Custom Suspension",
    description:
      "Custom suspension system desigined on SolidWorks...",
    image: "/images/pillar-scan.jpg",
  },
  "sub-system": {
    title: "Drone Electronic Sub Systems",
    description:
      "Essential electronic sub systems for compeition drone...",
    image: "/images/pillar-scan.jpg",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  if (!project) return <p className="p-10">Project not found.</p>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl mb-8 border border-slate-800"
        />

        <p className="text-slate-300 leading-relaxed mb-10">
          {project.description}
        </p>

        <p className="text-slate-300 leading-relaxed mb-10">
          {project.p2}
        </p>

        <p className="text-slate-300 leading-relaxed mb-10">
          {project.hardware}
        </p>

        <p className="text-slate-300 leading-relaxed mb-10">
          {project.software}
        </p>

        <Button asChild variant="outline">
          <Link to="/">← Back</Link>
        </Button>
      </div>
    </div>
  );
}
