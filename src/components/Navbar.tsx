import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-intiwatt.png";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Solución", href: "#solucion" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Preguntas", href: "#preguntas" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="IntiWatt" className="h-10 w-10" />
          <span className="font-serif text-xl text-foreground">IntiWatt</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5493518670464?text=Hola%2C%20quiero%20solicitar%20un%20estudio%20solar%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Solicitar estudio
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5493518670464?text=Hola%2C%20quiero%20solicitar%20un%20estudio%20solar%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-center bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium"
          >
            Solicitar estudio
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
