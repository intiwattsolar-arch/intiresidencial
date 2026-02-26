import { motion } from "framer-motion";
import { useState } from "react";

import install1Workers from "@/assets/projects/install1-workers.jpg";
import install1Panels from "@/assets/projects/install1-panels.jpg";
import install1Inverter from "@/assets/projects/install1-inverter.jpg";
import install2Panels from "@/assets/projects/install2-panels.jpg";
import install2Closeup from "@/assets/projects/install2-closeup.jpg";
import install2Deye from "@/assets/projects/install2-deye.jpg";
import install3Structure from "@/assets/projects/install3-structure.jpg";
import install3Installing from "@/assets/projects/install3-installing.jpg";

const projects = [
  {
    title: "Casa en zona residencial",
    desc: "Sistema on-grid de 6 kW. Reducción del 70% en la factura eléctrica.",
    specs: "8 paneles · Inversor Deye · Córdoba",
    images: [install1Panels, install1Workers, install1Inverter],
  },
  {
    title: "Hogar con ahorro y respaldo",
    desc: "Sistema híbrido residencial con paneles en techo de chapa y protecciones eléctricas dedicadas.",
    specs: "10 paneles · Inversor Deye 5kW · 2 baterías · Córdoba",
    images: [install2Panels, install2Closeup, install2Deye],
  },
  {
    title: "Galpón con sistema off-grid",
    desc: "Instalación en terreno rural con estructura metálica a medida y paneles montados sobre ella.",
    specs: "16 paneles · Inversor + baterías LiFePO4 · Santiago del Estero",
    images: [install3Structure, install3Installing],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [current, setCurrent] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.images[current]}
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-primary-foreground/50"}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.desc}</p>
        <p className="text-xs text-primary font-medium">{project.specs}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="proyectos" className="py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Instalaciones reales</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Hogares que ya generan su propia energía
        </h2>
        <p className="text-muted-foreground mt-4">Cada proyecto es único. Estos son algunos ejemplos recientes.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <p className="text-center text-muted-foreground text-sm mt-12">Más proyectos próximamente.</p>
    </div>
  </section>
);

export default Projects;
