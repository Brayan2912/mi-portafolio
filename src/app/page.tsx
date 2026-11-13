export default function Home() {
  const proyectos = [
    {
      titulo: "Consultoría de Seguridad Perimetral",
      descripcion: "Mitigación de fugas de datos para el sector hotelero. Análisis de infraestructura e implementación de protección de puntos finales y prevención de pérdida de datos.",
      tags: ["Forcepoint DLP", "FortiClient", "Salesforce"]
    },
    {
      titulo: "Desarrollo Backend Bancario",
      descripcion: "Desarrollo de servicios web y optimización de consultas SQL para el portal del Fondo Nacional del Ahorro y Scotiabank Colpatria.",
      tags: ["Python", "SQL Server", "Angular", "PHP"]
    },
    {
      titulo: "Liderazgo en Implementación Web",
      descripcion: "Dirección de un equipo de 7 técnicos para el despliegue de una plataforma web utilizada por más de 10,000 usuarios usando SCCM.",
      tags: ["SCCM", "Liderazgo", "Scrum"]
    },
    {
      titulo: "Desarrollo Web y Seguridad Freelance",
      descripcion: "Creación de soluciones web empresariales robustas, aplicando múltiples lenguajes, diseño responsivo y arquitecturas seguras de bases de datos.",
      tags: ["PostgreSQL", "MySQL", "Seguridad Web"]
    }
  ];

  return (
    <>
      {/* NAVBAR (Menú superior) */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-emerald-400">brayan.dev</span>
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="#inicio" className="hover:text-emerald-400 transition-colors">Inicio</a>
            <a href="#proyectos" className="hover:text-emerald-400 transition-colors">Proyectos</a>
            <a href="#especialidades" className="hover:text-emerald-400 transition-colors">Especialidades</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-16">
        
        {/* SECCIÓN HERO */}
        <section id="inicio" className="min-h-screen flex flex-col justify-center pt-20 pb-12">
          <p className="font-mono text-emerald-400 mb-4 tracking-tight">
            &gt; Hola_mundo, soy
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
            Brayan Stiven Peña
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-semibold">
            Ingeniero de Software & Especialista en Infraestructura
          </h2>
          
          <p className="max-w-2xl text-gray-400 mb-12 text-lg">
            Diseño y desarrollo soluciones tecnológicas robustas. Combino el desarrollo Full-Stack, 
            la ciberseguridad y el liderazgo técnico para optimizar procesos y liderar equipos 
            hacia resultados medibles.
          </p>

          <div className="flex flex-wrap gap-8 font-mono text-sm border-t border-gray-800 pt-8">
            <div>
              <span className="block text-3xl font-bold text-white mb-1">+10K</span> 
              <span className="text-gray-500">Usuarios Impactados</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-white mb-1">7</span> 
              <span className="text-gray-500">Técnicos Liderados</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-white mb-1">100%</span> 
              <span className="text-gray-500">Enfoque a Resultados</span>
            </div>
          </div>
        </section>

        {/* SECCIÓN PROYECTOS */}
        <section id="proyectos" className="py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-10 font-mono text-emerald-400">
            &gt; Proyectos_Destacados
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {proyectos.map((proyecto, index) => (
              <div 
                key={index} 
                className="border border-gray-800 p-6 rounded-lg hover:border-emerald-500 transition-all duration-300 group bg-[#111111]"
              >
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proyecto.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono bg-gray-900 border border-gray-800 px-2 py-1 rounded text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN ESPECIALIDADES / OTRAS HABILIDADES ACTUALIZADA */}
        <section id="especialidades" className="py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-10 font-mono text-emerald-400">
            &gt; Áreas_de_Especialidad
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tarjeta 1: Infraestructura */}
            <div className="p-6 border border-gray-800 rounded-lg bg-[#111111]">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-800 pb-2">Infraestructura & Storage</h3>
              <ul className="text-sm text-gray-400 space-y-2 list-none">
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> File Servers (NAS/SAN) y Almacenamiento</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Respaldos Empresariales (ExaGrid, Veeam)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Virtualización (VMware / Proxmox)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Cableado Estructurado y Fibra Óptica</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Redes (Routing, Switching, DHCP)</li>
              </ul>
            </div>

            {/* Tarjeta 2: Desarrollo y Datos */}
            <div className="p-6 border border-gray-800 rounded-lg bg-[#111111]">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-800 pb-2">Desarrollo & Datos</h3>
              <ul className="text-sm text-gray-400 space-y-2 list-none">
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Motores de BD (SQL Server, PostgreSQL, MySQL)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Backend (Python, PHP, Node.js)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Frontend (Angular, React / Next.js)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> CI/CD y Control de Versiones (Git)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Metodologías Ágiles (Scrum, Kanban)</li>
              </ul>
            </div>

            {/* Tarjeta 3: Seguridad y Negocio */}
            <div className="p-6 border border-gray-800 rounded-lg bg-[#111111]">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-800 pb-2">Consultoría & Seguridad</h3>
              <ul className="text-sm text-gray-400 space-y-2 list-none">
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Seguridad Perimetral y Endpoint</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Prevención de Fuga de Datos (DLP)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Soluciones Cloud y SaaS (AWS/Azure)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Ventas Consultivas B2B y Preventa TI</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">▹</span> Liderazgo de Equipos y Gestión de Proyectos</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER / CONTACTO */}
      <footer id="contacto" className="border-t border-gray-800 bg-[#0a0a0a] py-12 mt-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">¿Trabajamos juntos?</h3>
            <p className="text-gray-400 text-sm">Disponible para oportunidades laborales y consultoría tecnológica.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3 font-mono text-sm text-emerald-400">
            <a href="mailto:brayan8899@hotmail.com" className="hover:text-emerald-300 transition-colors">
              ✉ brayan8899@hotmail.com
            </a>
            <a href="tel:+573138340926" className="hover:text-emerald-300 transition-colors">
              📞 +57 313 834 0926
            </a>
          </div>
        </div>
        <div className="text-center text-xs font-mono text-gray-600 mt-12">
          © {new Date().getFullYear()} Brayan Peña. Construido con Next.js & Tailwind CSS.
        </div>
      </footer>
    </>
  );
}