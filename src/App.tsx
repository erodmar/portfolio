import { FormEvent, useEffect, useState } from "react"

type Lang = "es" | "en"
type IconName = "arrow" | "back" | "check" | "external" | "linkedin" | "mail" | "moon" | "sun" | "x"

const iconPaths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  back: <path d="M19 12H5m6 6-6-6 6-6" />,
  check: <path d="m5 12 4 4L19 6" />,
  external: (
    <>
      <path d="M14 4h6v6M10 14 20 4" />
      <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5m0-8v.01M12 16v-5m0 2.5a2.5 2.5 0 0 1 5 0V16" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  moon: <path d="M21 12.7A9 9 0 1 1 11.3 3 7 7 0 0 0 21 12.7Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  x: <path d="m6 6 12 12M18 6 6 18" />,
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  )
}

const copy = {
  es: {
    nav: [
      "Perfil",
      "Experiencia",
      "Herramientas",
      "Formación",
      "Proyecto",
      "Contacto",
    ],
    heroOverline: "ESTEBAN RODRÍGUEZ — INGENIERÍA INFORMÁTICA",
    heroA: "Buscando",
    heroB: "mi frecuencia.",
    heroText:
      "Tengo una base clara en sistemas y redes, y la curiosidad de seguir explorando ciberseguridad, cloud y software. No busco una etiqueta rápida: busco un equipo donde aprender, asumir responsabilidad y aportar de verdad.",
    heroCta: "Recorrer mi camino",
    profileLabel: "Más allá del puesto",
    profileTitle: "Curiosidad técnica.",
    profileAccent: "Criterio humano.",
    profileText:
      "Me interesa lo que ocurre debajo de la interfaz: cómo viaja un paquete, por qué cae un servicio o qué hace que un sistema sea seguro. Aprendo haciendo, preguntando y desmontando problemas hasta entenderlos.",
    values: [
      "Responsabilidad",
      "Curiosidad",
      "Compañerismo",
      "Calma",
      "Constancia",
    ],
    expLabel: "Experiencia",
    expTitle: "Aprender con sistemas reales.",
    currentDate: "JUL. 2025 — HOY",
    currentRole: "Senior Assistant, Computer Operations 24x7",
    currentDesc:
      "Trabajo con servicios críticos en producción: monitorización, incidencias, accesos, certificados, DNS y despliegues. Es una escuela de responsabilidad, comunicación y toma de decisiones, no el destino final de mi carrera.",
    internDate: "MAR. — JUN. 2025",
    internRole: "Prácticas, Service Desk",
    internDesc:
      "Mi primera experiencia profesional resolviendo incidencias de nivel 1 y 2, gestionando cuentas, permisos, licencias e inventario, y aprendiendo a traducir problemas técnicos a soluciones claras.",
    now: "EN CURSO",
    completed: "COMPLETADO",
    toolsLabel: "Banco de trabajo",
    toolsTitle: "Tecnología con propósito.",
    toolsIntro:
      "No mido el conocimiento con porcentajes. Estas son las áreas y herramientas con las que ya he trabajado y que sigo explorando.",
    educationLabel: "Formación",
    educationTitle: "Una base que sigue creciendo.",
    certLabel: "Certificaciones",
    certTitle: "Siguiente señal:",
    certAccent: "Microsoft AZ-900.",
    certIntro:
      "Mi próximo objetivo es Microsoft Azure Fundamentals. Una pieza más para comprender mejor el cloud desde sus fundamentos.",
    next: "PRÓXIMO OBJETIVO",
    verified: "COMPLETADO",
    projectLabel: "Proyecto seleccionado",
    projectTitle: "Tecnología al servicio de una asociación real.",
    projectType: "INFRAESTRUCTURA · SEGURIDAD · DESARROLLO",
    projectName: "Coros y Danzas de Granada",
    projectDesc:
      "Una solución completa para centralizar la gestión, proteger los datos y automatizar el control de asistencia: desde la red hasta el código QR.",
    projectCta: "Abrir caso de estudio",
    contactLabel: "Conectar",
    contactTitle: "¿En qué frecuencia trabajas tú?",
    contactText:
      "Me interesan los equipos que comparten conocimiento, los problemas que obligan a pensar y las oportunidades que todavía no sé que estoy buscando.",
    name: "Tu nombre",
    email: "Tu email",
    message: "Cuéntame algo",
    send: "Preparar email",
    sent: "Email preparado",
    made: "Diseñado y construido en Granada",
    easterTitle: "Conexión establecida.",
    easterText: "No tengo todas las respuestas. Sí las ganas de encontrarlas.",
    easterCta: "Abrir canal",
  },
  en: {
    nav: [
      "Profile",
      "Experience",
      "Toolkit",
      "Education",
      "Project",
      "Contact",
    ],
    heroOverline: "ESTEBAN RODRÍGUEZ — COMPUTER ENGINEERING",
    heroA: "Finding",
    heroB: "my frequency.",
    heroText:
      "I have a clear foundation in systems and networks, and the curiosity to keep exploring cybersecurity, cloud and software. I am not looking for a quick label: I am looking for a team where I can learn, own responsibility and make a real contribution.",
    heroCta: "Follow my path",
    profileLabel: "Beyond the job title",
    profileTitle: "Technical curiosity.",
    profileAccent: "Human judgement.",
    profileText:
      "I am interested in what happens below the interface: how a packet travels, why a service fails or what makes a system secure. I learn by doing, asking and taking problems apart until I understand them.",
    values: [
      "Responsibility",
      "Curiosity",
      "Teamwork",
      "Composure",
      "Consistency",
    ],
    expLabel: "Experience",
    expTitle: "Learning with real systems.",
    currentDate: "JUL. 2025 — NOW",
    currentRole: "Senior Assistant, Computer Operations 24x7",
    currentDesc:
      "I work with critical production services: monitoring, incidents, access, certificates, DNS and deployments. It is a school of responsibility, communication and decision-making, not the final destination of my career.",
    internDate: "MAR. — JUN. 2025",
    internRole: "Service Desk Intern",
    internDesc:
      "My first professional experience resolving level 1 and 2 incidents, managing accounts, permissions, licenses and inventory, and learning to turn technical problems into clear solutions.",
    now: "CURRENT",
    completed: "COMPLETED",
    toolsLabel: "Workbench",
    toolsTitle: "Technology with purpose.",
    toolsIntro:
      "I do not measure knowledge in percentages. These are the areas and tools I have worked with and continue to explore.",
    educationLabel: "Education",
    educationTitle: "A foundation that keeps growing.",
    certLabel: "Certifications",
    certTitle: "Next signal:",
    certAccent: "Microsoft AZ-900.",
    certIntro:
      "My next goal is Microsoft Azure Fundamentals. Another piece in understanding cloud from the ground up.",
    next: "NEXT TARGET",
    verified: "COMPLETED",
    projectLabel: "Selected project",
    projectTitle: "Technology serving a real association.",
    projectType: "INFRASTRUCTURE · SECURITY · DEVELOPMENT",
    projectName: "Granada Choirs and Dances",
    projectDesc:
      "A complete solution to centralize management, protect data and automate attendance: from the network to the QR code.",
    projectCta: "Open case study",
    contactLabel: "Connect",
    contactTitle: "What frequency do you work on?",
    contactText:
      "I am interested in teams that share knowledge, problems that make you think and opportunities I do not yet know I am looking for.",
    name: "Your name",
    email: "Your email",
    message: "Tell me something",
    send: "Prepare email",
    sent: "Email ready",
    made: "Designed and built in Granada",
    easterTitle: "Connection established.",
    easterText: "I do not have every answer. I do have the drive to find them.",
    easterCta: "Open channel",
  },
}

const toolGroups = [
  [
    "01",
    "Observabilidad",
    "Observability",
    "Dynatrace · Omnibus · alertas · rendimiento",
  ],
  [
    "02",
    "Sistemas y red",
    "Systems & network",
    "Linux · Windows · DNS · Active Directory · certificados",
  ],
  [
    "03",
    "Operación",
    "Operations",
    "ServiceNow · BMC Remedy · GLPI · gestión de incidencias",
  ],
  [
    "04",
    "Cloud y despliegue",
    "Cloud & deployment",
    "Azure · AWS · Jenkins · Docker Swarm",
  ],
  [
    "05",
    "Código y automatización",
    "Code & automation",
    "Bash · Python · SQL · scripting",
  ],
]

const education = [
  [
    "2025 — HOY",
    "2025 — NOW",
    "Grado en Ingeniería Informática",
    "Computer Engineering Degree",
    "Universidad de Granada",
    "/education/ugr.svg",
  ],
  [
    "2023 — 2025",
    "2023 — 2025",
    "CFGS Administración de Sistemas Informáticos en Red",
    "Higher Degree in Network Systems Administration",
    "IES Zaidín Vergeles",
    "/education/ies-zaidin-vergeles.png",
  ],
  [
    "2021 — 2023",
    "2021 — 2023",
    "Bachillerato Tecnológico",
    "Technological Baccalaureate",
    "Juan XXIII Chana",
    "/education/juan-xxiii-chana.png",
  ],
]

const certificates = [
  ["cisco", "Cisco", "Introduction to Data Science"],
  ["ibm", "IBM SkillsBuild", "Cybersecurity Fundamentals"],
  ["dynatrace", "Dynatrace", "Dynatrace Essentials"],
  ["ibm", "IBM SkillsBuild", "Artificial Intelligence Fundamentals"],
  ["aws", "Amazon Web Services", "AWS Partner: Migration Essentials"],
]

const sections = [
  "perfil",
  "experiencia",
  "herramientas",
  "formacion",
  "proyecto",
  "contacto",
]

function BrandMark({ brand }: { brand: string }) {
  if (brand === "cisco")
    return (
      <div className="brand brand-cisco" aria-label="Cisco">
        <span>
          {[2, 4, 7, 10, 7, 4, 2].map((height, index) => (
            <i key={index} style={{ height }} />
          ))}
        </span>
        <strong>CISCO</strong>
      </div>
    )
  if (brand === "ibm")
    return (
      <div className="brand brand-ibm" aria-label="IBM">
        <strong>IBM</strong>
      </div>
    )
  if (brand === "dynatrace")
    return (
      <div className="brand brand-dynatrace" aria-label="Dynatrace">
        <i />
        <i />
        <i />
        <strong>dynatrace</strong>
      </div>
    )
  if (brand === "aws")
    return (
      <div className="brand brand-aws" aria-label="AWS">
        <strong>aws</strong>
        <i />
      </div>
    )
  return (
    <div className="brand brand-ms" aria-label="Microsoft">
      <span>
        <i />
        <i />
        <i />
        <i />
      </span>
      <strong>Microsoft</strong>
    </div>
  )
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

function SectionHead({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-head">
      <span>{number}</span>
      <p>{label}</p>
      <i />
    </div>
  )
}

function FolkifyGlyph({
  name,
  size = 24,
}: {
  name: "phone" | "user" | "calendar" | "plus" | "bell" | "people"
  size?: number
}) {
  const paths = {
    phone: (
      <path d="M7 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6L17 12l4 1.5v3A3.5 3.5 0 0 1 17.5 20C10 20 4 14 4 6.5A3.5 3.5 0 0 1 7 3Z" />
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4m8-4v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
        <path d="M10 21h4" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20a6 6 0 0 1 12 0m0-5a5 5 0 0 1 6 5" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function FolkifyInterface({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`folkify-ui ${compact ? "compact" : ""}`}>
      <header>
        <strong>Folkify</strong>
        <div>
          <span>
            <FolkifyGlyph name="phone" />
          </span>
          <span>
            <FolkifyGlyph name="user" />
          </span>
        </div>
      </header>
      <main>
        <div className="folkify-title">
          <h3>NOTIFICACIONES</h3>
          <div>
            <button aria-label="Calendario">
              <FolkifyGlyph name="calendar" />
            </button>
            <button aria-label="Añadir">
              <FolkifyGlyph name="plus" />
            </button>
          </div>
        </div>
        <div className="folkify-cards">
          <article>
            <strong>Vestuario asignado</strong>
            <p>Hace un momento · Carlos</p>
          </article>
          <article>
            <strong>Actuación 13 de junio</strong>
            <p>Hace un momento · Carlos</p>
          </article>
          <article>
            <strong>Ensayo</strong>
            <p>Hace un momento · Carlos</p>
          </article>
        </div>
        <div className="folkify-menu">
          <span>Nuevo aviso</span>
          <span>Nuevo evento</span>
          <span>Ingresos y Gastos</span>
          <span>Socios</span>
          <span>Correos</span>
        </div>
      </main>
      <footer>
        <button aria-label="Notificaciones">
          <FolkifyGlyph name="bell" />
        </button>
        <button className="active" aria-label="Calendario">
          <FolkifyGlyph name="calendar" />
        </button>
        <button aria-label="Socios">
          <FolkifyGlyph name="people" />
        </button>
      </footer>
    </div>
  )
}

function IPhoneFolkify({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`iphone-18 ${compact ? "compact" : ""}`}>
      <i className="iphone-action" />
      <i className="iphone-volume iphone-volume-up" />
      <i className="iphone-volume iphone-volume-down" />
      <i className="iphone-power" />
      <div className="iphone-screen">
        <div className="dynamic-island">
          <i />
          <span />
        </div>
        <div className="iphone-browser-bar">
          <i />
          <span>folkify.local</span>
          <b>
            <i />
            <i />
            <i />
          </b>
        </div>
        <FolkifyInterface compact={compact} />
        <div className="home-indicator" />
      </div>
    </div>
  )
}

type ProjectTech = "docker" | "mysql" | "ubuntu" | "php" | "apache" | "letsencrypt" | "python" | "openvpn" | "opencv" | "gnubash" | "linux"

function TechLogo({ name, label }: { name: ProjectTech; label?: string }) {
  return (
    <span className={`tech-logo tech-logo-${name}`}>
      <img src={`${import.meta.env.BASE_URL}projects/tech/${name}.svg`} alt="" />
      {label && <small>{label}</small>}
    </span>
  )
}

function NetworkDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`system-map ${compact ? "compact" : ""}`}
      aria-label="Arquitectura completa del proyecto"
    >
      <div className="map-bar">
        <span>INFRASTRUCTURE / LOGICAL MAP</span>
        <p>
          <i /> ALL SERVICES NOMINAL
        </p>
      </div>
      <div className="map-body">
        <div className="map-lane map-access">
          <span className="lane-label">01 · ACCESS</span>
          <div className="map-unit cloud-unit">
            <strong>Internet</strong>
            <small>Usuarios externos</small>
          </div>
          <i className="map-link">
            <small>HTTPS</small>
          </i>
          <div className="map-unit shield-unit">
            <TechLogo name="openvpn" />
            <strong>VPN + Firewall</strong>
            <small>TLS · anti-DDoS · fail2ban</small>
          </div>
        </div>
        <div className="map-lane map-core">
          <span className="lane-label">02 · CORE SERVER / UBUNTU</span>
          <div className="host-shell">
            <div className="host-head">
              <span>
                <TechLogo name="ubuntu" />
                <TechLogo name="docker" />
                Docker Swarm
              </span>
              <small>192.168.0.10</small>
            </div>
            <div className="service-grid">
              <div>
                <span className="service-logos">
                  <TechLogo name="php" />
                  <TechLogo name="apache" />
                </span>
                WEB APP<small>PHP · Apache</small>
              </div>
              <div>
                <TechLogo name="mysql" />
                ADMIN<small>phpMyAdmin</small>
              </div>
              <div>
                <TechLogo name="letsencrypt" />
                SECURITY<small>Let's Encrypt</small>
              </div>
              <div>
                <TechLogo name="php" />
                API<small>JSON · QR tokens</small>
              </div>
            </div>
          </div>
        </div>
        <div className="map-lane map-data">
          <span className="lane-label">03 · DATA + CONTINUITY</span>
          <div className="data-flow">
            <div className="map-unit data-unit">
              <TechLogo name="mysql" />
              <strong>MySQL Master</strong>
              <small>Producción · SSL</small>
            </div>
            <i className="map-link">
              <small>REPLICA</small>
            </i>
            <div className="map-unit data-unit">
              <TechLogo name="mysql" />
              <strong>MySQL Slave</strong>
              <small>Servidor de respaldo</small>
            </div>
            <i className="map-link">
              <small>DAILY</small>
            </i>
            <div className="map-unit disk-unit">
              <span className="service-logos">
                <TechLogo name="linux" />
                <TechLogo name="gnubash" />
              </span>
              <strong>RAID 1</strong>
              <small>mdadm · mysqldump</small>
            </div>
          </div>
        </div>
        <div className="map-lane map-clients">
          <span className="lane-label">04 · ATTENDANCE</span>
          <div className="client-flow">
            <div className="map-unit">
              <strong>Socio</strong>
              <small>QR cifrado</small>
            </div>
            <i className="map-link">
              <small>SCAN</small>
            </i>
            <div className="map-unit">
              <TechLogo name="python" />
              <strong>Python Client</strong>
              <small>OpenCV · Pyzbar</small>
            </div>
            <i className="map-link">
              <small>POST</small>
            </i>
            <div className="map-unit accent-unit">
              <TechLogo name="php" />
              <strong>API Backend</strong>
              <small>Valida + registra</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectDetail({
  lang,
  setLang,
  theme,
  setTheme,
}: {
  lang: Lang
  setLang: (lang: Lang) => void
  theme: "dark" | "light"
  setTheme: (theme: "dark" | "light") => void
}) {
  const es = lang === "es"
  const goBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    history.pushState({}, "", "/")
    dispatchEvent(new PopStateEvent("popstate"))
  }
  return (
    <div className="case-page">
      <header className="case-nav">
        <a href="/" onClick={goBack}>
          <Icon name="back" size={17} />
          {es ? "Volver al portfolio" : "Back to portfolio"}
        </a>
        <span>CASE / 001</span>
        <div className="case-controls">
          <div className="lang-switch">
            <button
              className={es ? "active" : ""}
              onClick={() => setLang("es")}
            >
              ES
            </button>
            <i />{" "}
            <button
              className={!es ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <button
            className="case-theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Cambiar tema"
          >
            <Icon name={theme === "dark" ? "moon" : "sun"} size={15} />
          </button>
        </div>
      </header>
      <main>
        <section className="case-hero">
          <div className="case-meta">
            <span>2025</span>
            <span>GRANADA, ES</span>
          </div>
          <p>
            {es
              ? "PROYECTO FINAL · 2º ASIR"
              : "FINAL PROJECT · SYSTEMS ADMINISTRATION"}
          </p>
          <h1>
            {es
              ? "Una infraestructura para mantener viva una tradición."
              : "Infrastructure built to keep a tradition alive."}
          </h1>
          <div className="case-summary">
            <p>
              {es
                ? "Diseño de una solución segura y modular para centralizar la gestión de socios, eventos, finanzas, vestuario y asistencia."
                : "A secure, modular solution to centralize member, event, finance, wardrobe and attendance management."}
            </p>
            <dl>
              <div>
                <dt>ROLE</dt>
                <dd>
                  {es
                    ? "Sistemas, seguridad y backend"
                    : "Systems, security & backend"}
                </dd>
              </div>
              <div>
                <dt>SCOPE</dt>
                <dd>End-to-end</dd>
              </div>
            </dl>
          </div>
          <div className="case-tech-stack">
            <TechLogo name="ubuntu" label="Ubuntu" />
            <TechLogo name="docker" label="Docker Swarm" />
            <TechLogo name="mysql" label="MySQL" />
            <TechLogo name="php" label="PHP" />
            <TechLogo name="python" label="Python" />
            <TechLogo name="openvpn" label="VPN" />
          </div>
        </section>

        <section className="case-system">
          <div className="case-system-top">
            <span>01 / SYSTEM MAP</span>
            <p>
              {es
                ? "Arquitectura diseñada desde cero"
                : "Architecture designed from scratch"}
            </p>
          </div>
          <NetworkDiagram />
        </section>

        <section className="case-story">
          <span>02 / {es ? "EL RETO" : "THE CHALLENGE"}</span>
          <div>
            <h2>
              {es
                ? "Pasar de procesos dispersos a un sistema que se entiende."
                : "Turning scattered processes into a system that makes sense."}
            </h2>
            <p>
              {es
                ? "El proyecto comenzó escuchando a los responsables de la Asociación. Sus necesidades se tradujeron en una arquitectura donde cada servicio tiene una función clara y puede mantenerse sin comprometer el conjunto."
                : "The project began by listening to the Association’s managers. Their needs became an architecture where every service has a clear purpose and can be maintained without compromising the whole."}
            </p>
          </div>
        </section>

        <section className="case-modules">
          {[
            [
              "01",
              "VPN + TLS",
              es
                ? "Acceso externo seguro, certificados y exposición mínima de puertos."
                : "Secure external access, certificates and minimal port exposure.",
              "openvpn",
            ],
            [
              "02",
              "DOCKER SWARM",
              es
                ? "Servicios orquestados, replicables y más sencillos de desplegar y mantener."
                : "Orchestrated, repeatable services that are easier to deploy and maintain.",
              "docker",
            ],
            [
              "03",
              "MYSQL",
              es
                ? "Réplica master/slave, consultas preparadas y conexiones SSL."
                : "Master/slave replication, prepared queries and SSL connections.",
              "mysql",
            ],
            [
              "04",
              "BACKUP",
              es
                ? "RAID 1 y copias diarias con Bash, mysqldump y crontab."
                : "RAID 1 and daily backups using Bash, mysqldump and crontab.",
              "gnubash",
            ],
          ].map(([n, title, body, tech]) => (
            <article key={n}>
              <span>{n}</span>
              <TechLogo name={tech as ProjectTech} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </section>

        <section className="attendance">
          <div className="attendance-copy">
            <span>03 / ATTENDANCE FLOW</span>
            <h2>
              {es
                ? "Del código QR al registro, sin perder el control."
                : "From QR code to record, without losing control."}
            </h2>
            <p>
              {es
                ? "Cada socio recibe un token cifrado. Python, OpenCV y Pyzbar lo leen en tiempo real; el servidor valida la petición y registra la asistencia devolviendo una respuesta JSON."
                : "Each member receives an encrypted token. Python, OpenCV and Pyzbar read it in real time; the server validates the request and records attendance with a JSON response."}
            </p>
            <div className="case-inline-tech">
              <TechLogo name="python" label="Python" />
              <TechLogo name="opencv" label="OpenCV" />
              <TechLogo name="php" label="Backend" />
            </div>
          </div>
          <div className="qr-flow">
            <div className="qr-card">
              <span>MEMBER / 024</span>
              <div className="fake-qr">
                {Array.from({ length: 49 }, (_, i) => (
                  <i
                    key={i}
                    className={
                      [
                        0, 1, 2, 7, 9, 14, 15, 16, 32, 33, 34, 40, 41, 42, 46,
                        48,
                      ].includes(i)
                        ? "on"
                        : ""
                    }
                  />
                ))}
              </div>
              <small>ENCRYPTED TOKEN</small>
            </div>
            <span className="flow-line">
              <i />
            </span>
            <div className="scan-card">
              <i />
              <strong>VALID</strong>
              <small>200 / ATTENDANCE LOGGED</small>
            </div>
          </div>
        </section>

        <section className="app-showcase">
          <div className="app-showcase-copy">
            <span>04 / INTERFACE</span>
            <h2>
              {es
                ? "La infraestructura también tenía que sentirse sencilla."
                : "The infrastructure also had to feel simple."}
            </h2>
            <p>
              {es
                ? "La aplicación web centraliza notificaciones, eventos, socios, finanzas y vestuario. La interfaz original se ha reconstruido aquí como una experiencia web responsive."
                : "The web application centralizes notifications, events, members, finances and wardrobe. Its original interface is reconstructed here as a responsive web experience."}
            </p>
            <div className="case-inline-tech">
              <TechLogo name="php" label="PHP" />
              <TechLogo name="mysql" label="MySQL" />
              <TechLogo name="apache" label="Apache" />
            </div>
          </div>
          <div className="product-stage">
            <IPhoneFolkify />
            <div className="folkify-caption">
              <span>01</span>
              <p>
                {es ? "Avisos y notificaciones" : "Notices and notifications"}
              </p>
              <span>02</span>
              <p>
                {es
                  ? "Eventos, socios y finanzas"
                  : "Events, members and finances"}
              </p>
              <span>03</span>
              <p>{es ? "Experiencia responsive" : "Responsive experience"}</p>
            </div>
          </div>
        </section>

        <section className="case-result">
          <span>05 / OUTCOME</span>
          <h2>
            {es
              ? "Una solución completa. Y una forma nueva de entender los sistemas."
              : "A complete solution. And a new way to understand systems."}
          </h2>
          <a href="mailto:estebanrm2005@outlook.es">
            {es ? "Hablemos de tecnología" : "Let’s talk technology"}
            <Icon name="arrow" />
          </a>
        </section>
      </main>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>("es")
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    localStorage.getItem("theme") === "dark" ? "dark" : "light",
  )
  const [active, setActive] = useState("perfil")
  const [menu, setMenu] = useState(false)
  const [modal, setModal] = useState(false)
  const [sent, setSent] = useState(false)
  const [path, setPath] = useState(location.pathname)
  const [intro, setIntro] = useState(true)
  const [transition, setTransition] = useState<{
    id: string
    number: string
    message: string
  } | null>(null)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    )
    document
      .querySelectorAll(".reveal")
      .forEach((element) => revealObserver.observe(element))
    const sectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: "-35% 0px -58%" },
    )
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) sectionObserver.observe(element)
    })
    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [path])

  useEffect(() => {
    const sync = () => {
      setPath(location.pathname)
      scrollTo(0, 0)
    }
    addEventListener("popstate", sync)
    let command = ""
    const keys = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModal(false)
      if ((event.target as HTMLElement).matches("input, textarea")) return
      command = (command + event.key.toLowerCase()).slice(-18)
      if (
        event.key.toLowerCase() === "h" ||
        command.includes("sudo hire esteban")
      )
        setModal(true)
    }
    addEventListener("keydown", keys)
    return () => {
      removeEventListener("popstate", sync)
      removeEventListener("keydown", keys)
    }
  }, [])

  useEffect(() => {
    const introTimer = setTimeout(() => setIntro(false), 5600)
    const confirmExit = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ""
    }
    addEventListener("beforeunload", confirmExit)
    return () => {
      clearTimeout(introTimer)
      removeEventListener("beforeunload", confirmExit)
    }
  }, [])

  if (path.includes("proyecto-infraestructura-coros-danzas"))
    return (
      <ProjectDetail
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />
    )

  const transitionMessages: Record<string, [string, string]> = {
    perfil: ["Debajo de la interfaz.", "Beneath the interface."],
    experiencia: [
      "Aprender con sistemas reales.",
      "Learning with real systems.",
    ],
    herramientas: [
      "Cada herramienta tiene un porqué.",
      "Every tool has a reason.",
    ],
    formacion: [
      "Construir la base antes de elegir el camino.",
      "Build the foundation before choosing the path.",
    ],
    proyecto: [
      "De una necesidad real a un sistema completo.",
      "From a real need to a complete system.",
    ],
    contacto: [
      "Toda buena conexión empieza con un mensaje.",
      "Every good connection starts with a message.",
    ],
    case: [
      "Del servidor a la experiencia.",
      "From the server to the experience.",
    ],
  }

  const navigateSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    index: number,
  ) => {
    event.preventDefault()
    setMenu(false)
    setTransition({
      id,
      number: `0${index + 1}`,
      message: transitionMessages[id][lang === "es" ? 0 : 1],
    })
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView()
      history.replaceState({}, "", `#${id}`)
    }, 620)
    window.setTimeout(() => setTransition(null), 1250)
  }

  const openProject = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setTransition({
      id: "case",
      number: "CASE / 001",
      message: transitionMessages.case[lang === "es" ? 0 : 1],
    })
    window.setTimeout(() => {
      history.pushState({}, "", "/proyecto-infraestructura-coros-danzas")
      setPath(location.pathname)
      scrollTo(0, 0)
    }, 850)
    window.setTimeout(() => setTransition(null), 1250)
  }

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setSent(true)
    location.href = `mailto:estebanrm2005@outlook.es?subject=${encodeURIComponent(`Portfolio — ${data.get("name")}`)}&body=${encodeURIComponent(`${data.get("message")}\n\n${data.get("name")} · ${data.get("email")}`)}`
  }

  return (
    <div className="site">
      {intro && (
        <div className="entry-intro" aria-live="polite">
          <div className="cinema-noise" />
          <div className="cinema-light cinema-light-a" />
          <div className="cinema-light cinema-light-b" />
          <div className="cinema-scene cinema-scene-one">
            <span>37.1773° N · 3.5986° W</span>
            <p>GRANADA / 2005</p>
          </div>
          <div className="cinema-scene cinema-scene-two">
            <span>
              {lang === "es"
                ? "Una carrera no empieza con todas las respuestas."
                : "A career does not begin with every answer."}
            </span>
            <h2>
              {lang === "es"
                ? "Empieza con curiosidad."
                : "It begins with curiosity."}
            </h2>
          </div>
          <div className="cinema-scene cinema-scene-three">
            <div className="cinema-mark">ER</div>
            <p>ESTEBAN RODRÍGUEZ MARTÍN</p>
            <h2>
              {lang === "es"
                ? "Buscando mi frecuencia."
                : "Finding my frequency."}
            </h2>
            <i />
          </div>
          <button onClick={() => setIntro(false)}>
            {lang === "es" ? "Saltar intro" : "Skip intro"}
          </button>
        </div>
      )}
      {transition && (
        <div
          className={`nav-transition transition-${transition.id}`}
          aria-live="polite"
        >
          <div className="transition-glow" />
          <span>{transition.number}</span>
          <h2>{transition.message}</h2>
          <i />
        </div>
      )}
      <header className="topbar">
        <a className="identity" href="#inicio">
          <span>ER</span>
          <div>
            ESTEBAN
            <br />
            RODRÍGUEZ
          </div>
        </a>
        <nav className={menu ? "open" : ""}>
          {sections.map((id, index) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
              onClick={(event) => navigateSection(event, id, index)}
            >
              <span>0{index + 1}</span>
              {t.nav[index]}
            </a>
          ))}
        </nav>
        <div className="controls">
          <div className="lang-switch">
            <button
              className={lang === "es" ? "active" : ""}
              onClick={() => setLang("es")}
            >
              ES
            </button>
            <i />
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <button
            className="theme-button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Cambiar tema"
          >
            <Icon name={theme === "dark" ? "moon" : "sun"} size={16} />
          </button>
          <button
            className={`menu-button ${menu ? "open" : ""}`}
            onClick={() => setMenu(!menu)}
            aria-label="Abrir menú"
          >
            <i />
            <i />
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-top">
            <span>{t.heroOverline}</span>
          </div>
          <h1>
            <span>{t.heroA}</span>
            <em>{t.heroB}</em>
          </h1>
          <div className="tuner" aria-hidden="true">
            <div className="tuner-scale">
              {Array.from({ length: 21 }, (_, i) => (
                <i key={i} className={i % 5 === 0 ? "major" : ""} />
              ))}
            </div>
            <span className="needle" />
            <div className="tuner-labels">
              <span>SYS</span>
              <span>NET</span>
              <span>SEC</span>
              <span>DEV</span>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="hero-message">
              <span>
                {lang === "es" ? "MI PUNTO DE PARTIDA" : "MY STARTING POINT"}
              </span>
              <p>{t.heroText}</p>
            </div>
            <a
              href="#perfil"
              onClick={(event) => navigateSection(event, "perfil", 0)}
            >
              <span>{t.heroCta}</span>
              <Icon name="arrow" />
            </a>
          </div>
          <span className="side-label">GRX / 37.1773° N / SIGNAL 001</span>
        </section>

        <section id="perfil" className="profile wrap">
          <SectionHead number="01" label={t.profileLabel} />
          <div className="profile-grid">
            <Reveal>
              <h2>
                {t.profileTitle}
                <em>{t.profileAccent}</em>
              </h2>
            </Reveal>
            <Reveal delay={100} className="profile-copy">
              <p>{t.profileText}</p>
              <div className="value-tags">
                {t.values.map((value, index) => (
                  <span key={value}>
                    <i>0{index + 1}</i>
                    {value}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="experiencia" className="experience wrap">
          <SectionHead number="02" label={t.expLabel} />
          <Reveal>
            <h2>{t.expTitle}</h2>
          </Reveal>
          <div className="experience-list">
            {[
              [
                t.now,
                t.currentDate,
                t.currentRole,
                t.currentDesc,
                "Dynatrace · ServiceNow · Linux · DNS · Azure · Jenkins",
              ],
              [
                t.completed,
                t.internDate,
                t.internRole,
                t.internDesc,
                "Windows · Active Directory · Office · Ticketing",
              ],
            ].map((item, index) => (
              <Reveal key={item[2]} delay={index * 80}>
                <article>
                  <div className="exp-index">
                    <span>0{index + 1}</span>
                    <i />
                  </div>
                  <div className="exp-meta">
                    <span>{item[0]}</span>
                    <time>{item[1]}</time>
                    <strong>Kyndryl</strong>
                  </div>
                  <div className="exp-copy">
                    <h3>{item[2]}</h3>
                    <p>{item[3]}</p>
                    <div className="exp-tech">
                      {item[4].split(" · ").map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="herramientas" className="toolkit">
          <div className="wrap">
            <SectionHead number="03" label={t.toolsLabel} />
            <div className="toolkit-title">
              <Reveal>
                <h2>{t.toolsTitle}</h2>
              </Reveal>
              <Reveal delay={100}>
                <p>{t.toolsIntro}</p>
              </Reveal>
            </div>
            <div className="tool-rack">
              {toolGroups.map((group) => (
                <Reveal key={group[0]}>
                  <article>
                    <span>{group[0]}</span>
                    <i className="rack-led" />
                    <h3>{lang === "es" ? group[1] : group[2]}</h3>
                    <p>{group[3]}</p>
                    <div className="rack-grip">
                      {Array.from({ length: 5 }, (_, i) => (
                        <i key={i} />
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="formacion" className="education wrap">
          <SectionHead number="04" label={t.educationLabel} />
          <Reveal>
            <h2>{t.educationTitle}</h2>
          </Reveal>
          <div className="education-list">
            {education.map((item, index) => (
              <Reveal key={item[2]} delay={index * 60}>
                <article>
                  <span>0{index + 1}</span>
                  <time>{item[lang === "es" ? 0 : 1]}</time>
                  <div className={`education-logo education-logo-${index}`}>
                    <img src={`${import.meta.env.BASE_URL}${item[5].replace(/^\//, "")}`} alt={`Logo ${item[4]}`} />
                  </div>
                  <div className="education-copy">
                    <h3>{item[lang === "es" ? 2 : 3]}</h3>
                    <p>{item[4]}</p>
                  </div>
                  {index < 2 && (
                    <div
                      className={`education-result ${
                        index === 0 ? "progress" : "grade"
                      }`}
                    >
                      <strong>{index === 0 ? "20%" : "8,9"}</strong>
                      <span>
                        {index === 0
                          ? lang === "es"
                            ? "COMPLETADO"
                            : "COMPLETED"
                          : lang === "es"
                            ? "NOTA FINAL"
                            : "FINAL GRADE"}
                      </span>
                      {index === 0 && (
                        <i>
                          <b />
                        </i>
                      )}
                    </div>
                  )}
                  <i className={index === 0 ? "active" : ""} />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="certificates wrap">
          <SectionHead number="05" label={t.certLabel} />
          <div className="cert-intro">
            <Reveal>
              <h2>
                {t.certTitle}
                <em>{t.certAccent}</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p>{t.certIntro}</p>
            </Reveal>
          </div>
          <div className="next-cert">
            <BrandMark brand="microsoft" />
            <div>
              <span>{t.next}</span>
              <h3>Microsoft Azure Fundamentals</h3>
              <p>
                Exam AZ-900 · Cloud concepts · Azure architecture · Governance
              </p>
            </div>
            <strong>UP NEXT</strong>
          </div>
          <div className="cert-grid">
            {certificates.map(([brand, issuer, title], index) => (
              <Reveal key={title} delay={index * 45}>
                <article>
                  <div className="cert-top">
                    <BrandMark brand={brand} />
                    <span>0{index + 1}</span>
                  </div>
                  <div>
                    <small>{issuer}</small>
                    <h3>{title}</h3>
                  </div>
                  <p>
                    <Icon name="check" size={14} />
                    {t.verified}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="proyecto" className="project wrap">
          <SectionHead number="06" label={t.projectLabel} />
          <div className="project-heading">
            <Reveal>
              <h2>{t.projectTitle}</h2>
            </Reveal>
            <span>CASE / 001</span>
          </div>
          <Reveal className="project-panel">
            <a
              href="/proyecto-infraestructura-coros-danzas"
              onClick={openProject}
            >
              <div className="project-diagram">
                <NetworkDiagram compact />
                <div className="project-app-thumb">
                  <IPhoneFolkify compact />
                </div>
              </div>
              <div className="project-info">
                <span>{t.projectType}</span>
                <h3>{t.projectName}</h3>
                <p>{t.projectDesc}</p>
                <strong>
                  {t.projectCta}
                  <Icon name="arrow" />
                </strong>
              </div>
            </a>
          </Reveal>
        </section>

        <section id="contacto" className="contact">
          <div className="wrap">
            <SectionHead number="07" label={t.contactLabel} />
            <Reveal>
              <h2>{t.contactTitle}</h2>
            </Reveal>
            <div className="contact-grid">
              <div className="contact-copy">
                <p>{t.contactText}</p>
                <a href="mailto:estebanrm2005@outlook.es">
                  estebanrm2005@outlook.es
                  <Icon name="arrow" />
                </a>
                <div>
                  <a
                    href="https://www.linkedin.com/in/estebanrodriguez-martin05"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="linkedin" />
                    LinkedIn
                  </a>
                  <span>Granada · España</span>
                </div>
              </div>
              <form onSubmit={sendEmail}>
                <label>
                  <span>01</span>
                  <input name="name" placeholder={t.name} required />
                </label>
                <label>
                  <span>02</span>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.email}
                    required
                  />
                </label>
                <label>
                  <span>03</span>
                  <textarea
                    name="message"
                    placeholder={t.message}
                    rows={2}
                    required
                  />
                </label>
                <button>
                  {sent ? t.sent : t.send}
                  <Icon name="arrow" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main wrap">
          <div className="footer-name">
            <span>ER</span>
            <p>
              ESTEBAN
              <br />
              RODRÍGUEZ MARTÍN
            </p>
          </div>
          <p className="footer-line">
            {lang === "es"
              ? "Todavía afinando. Siempre aprendiendo."
              : "Still tuning. Always learning."}
          </p>
          <a href="#inicio">
            TOP <Icon name="arrow" />
          </a>
        </div>
        <div className="footer-bottom wrap">
          <span>
            {t.made} · {lang === "es" ? "Creado con ayuda de IA" : "Built with AI assistance"} · © 2026
          </span>
          <button onClick={() => setModal(true)}>
            <kbd>H</kbd> {lang === "es" ? "una cosa más" : "one more thing"}
          </button>
        </div>
      </footer>

      {modal && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          onMouseDown={(event) =>
            event.target === event.currentTarget && setModal(false)
          }
        >
          <div className="hire-modal">
            <button
              className="modal-close"
              onClick={() => setModal(false)}
              aria-label="Cerrar"
            >
              <Icon name="x" />
            </button>
            <div className="modal-orb">
              <span>ER</span>
              <i />
            </div>
            <h2>{t.easterTitle}</h2>
            <p>{t.easterText}</p>
            <a href="mailto:estebanrm2005@outlook.es">
              {t.easterCta}
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
