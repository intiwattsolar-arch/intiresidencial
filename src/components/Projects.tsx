import { motion } from "framer-motion";
import { Sun } from "lucide-react";

const projects = [
  {
    title: "Casa en zona residencial",
    desc: "Sistema on-grid de 6 kW. Reducción del 70% en la factura eléctrica.",
    specs: "8 paneles · Inversor Deye · Córdoba",
  },
  {
    title: "Vivienda con respaldo energético",
    desc: "Sistema híbrido con baterías Deye. Autonomía parcial durante cortes de luz.",
    specs: "10 paneles · Inversor + Batería LiFePO4 · Córdoba",
  },
  {
    title: "Instalación residencial completa",
    desc: "Sistema híbrido con doble batería Deye, dimensionado para consumo alto.",
    specs: "12 paneles · Inversor 8kW · 2 baterías · Santiago del Estero",
  },
  {
    title: "Galpón con sistema off-grid",
    desc: "Instalación en terreno rural con paneles en suelo y banco de baterías Deye de alta capacidad.",
    specs: "16 paneles · Inversor + 12 baterías LiFePO4 · Santiago del Estero",
  },
  {
    title: "Hogar con ahorro y respaldo",
    desc: "Sistema híbrido residencial con paneles en techo de chapa y protecciones eléctricas dedicadas.",
    specs: "10 paneles · Inversor Deye 5kW · 2 baterías · Córdoba",
  },
];

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
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-muted flex items-center justify-center">
              <Sun className="w-12 h-12 text-primary/30" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{p.desc}</p>
              <p className="text-xs text-primary font-medium">{p.specs}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-muted-foreground text-sm mt-12">Más proyectos próximamente.</p>
    </div>
  </section>
);

export default Projects;
