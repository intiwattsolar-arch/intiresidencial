import { motion } from "framer-motion";
import { Plug, BatteryFull, RefreshCw } from "lucide-react";

const modos = [
  {
    icon: Plug,
    title: "On-Grid",
    subtitle: "Conectado a la red",
    desc: "Generás tu propia energía y usás la red como respaldo. Si producís más de lo que consumís, el excedente se inyecta a la red. Ideal para zonas con servicio eléctrico estable.",
    features: ["Menor inversión inicial", "Sin baterías", "Posibilidad de ser Usuario Generador"],
  },
  {
    icon: BatteryFull,
    title: "Off-Grid",
    subtitle: "Independiente de la red",
    desc: "Sistema 100% autónomo con banco de baterías. Perfecto para zonas rurales o donde no llega la red eléctrica. Total independencia energética.",
    features: ["Autonomía total", "Banco de baterías LiFePO4", "Ideal para zonas sin red"],
  },
  {
    icon: RefreshCw,
    title: "Híbrido",
    subtitle: "Lo mejor de ambos mundos",
    desc: "Combiná conexión a red con almacenamiento en baterías. Usás energía solar de día, baterías de noche, y la red solo cuando es necesario.",
    features: ["Respaldo ante cortes", "Máximo aprovechamiento", "Flexibilidad total"],
  },
];

const ModosFuncionamiento = () => (
  <section id="modos" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Según tu necesidad</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Modos de funcionamiento
        </h2>
        <p className="text-muted-foreground mt-4">
          Diseñamos el sistema que mejor se adapte a tu situación: conexión a red, autonomía total o una combinación inteligente.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {modos.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
              <m.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-1">{m.title}</h3>
            <p className="text-primary text-sm font-medium mb-4">{m.subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{m.desc}</p>
            <ul className="space-y-2">
              {m.features.map((f) => (
                <li key={f} className="text-sm text-foreground flex items-center gap-2 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ModosFuncionamiento;
