import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const projectsHero: Dict = {
    eyebrow: { en: "Projects", es: "Proyectos" },
    title1: { en: "Things I'm ", es: "Lo que estoy " },
    title2: { en: "building", es: "construyendo" },
    tagline: {
        en: "Every project starts with a real problem. From clinical software to financial education to a small business that needed customers — I build websites and platforms that solve a specific pain point, not just look good.",
        es: "Cada proyecto arranca con un problema real. Desde software clínico hasta educación financiera y un pequeño negocio que necesitaba clientes — construyo sitios web y plataformas que resuelven un dolor concreto, no que solo se vean lindos.",
    },
};

export const dcCard: Dict = {
    label: { en: "MVP · In production", es: "MVP · En producción" },
    title: { en: "DentalCore", es: "DentalCore" },
    text: {
        en: "The pain: dental management software is built by engineers who never held a handpiece — clunky interfaces, zero automation, no patient communication. The fix: a comprehensive clinical platform built by a practicing dentist, with patient management, digital odontogram, treatment plans, finance and a patient portal. Already running at a clinic in Misiones, Argentina.",
        es: "El problema: el software dental está hecho por ingenieros que nunca agarraron una turbina — interfaces torpes, cero automatización, sin comunicación con el paciente. La solución: una plataforma clínica integral construida por un odontólogo en ejercicio, con gestión de pacientes, odontograma digital, planes de tratamiento, finanzas y portal del paciente. Ya en producción en una clínica de Misiones, Argentina.",
    },
    readMore: { en: "Read more", es: "Leer más" },
    role: { en: "CEO & Developer", es: "CEO y Desarrollador" },
};

export const camilaCard: Dict = {
    label: { en: "Live · Production", es: "Live · Producción" },
    title: { en: "Camila Chesani Odontología", es: "Camila Chesani Odontología" },
    text: {
        en: "The pain: a solo dentist in El Dorado, Misiones with no online presence — patients had no way to discover her or book appointments without calling. The fix: a public clinic site with online appointment booking, ten dental specialties showcased and full integration with DentalCore for the back-office. Real-world deployment of the platform.",
        es: "El problema: una odontóloga sola en El Dorado, Misiones sin presencia online — los pacientes no tenían forma de encontrarla ni reservar turno sin llamar. La solución: un sitio público con reserva de turnos online, diez especialidades visibilizadas e integración total con DentalCore para el back-office. Un despliegue real de la plataforma.",
    },
    cta: { en: "Visit site", es: "Visitar sitio" },
};

export const fgCard: Dict = {
    label: { en: "Live · Platform", es: "Live · Plataforma" },
    title: { en: "FG Academia", es: "FG Academia" },
    text: {
        en: "The pain: most financial education platforms are built for US/EU markets — useless for Argentines dealing with inflation, CEDEARs, plazo fijo and tax rules that don't fit any global template. The fix: a gamified financial education and investment platform built specifically for Argentina's reality, where doing nothing with your money means losing.",
        es: "El problema: la mayoría de las plataformas de educación financiera están hechas para EE.UU./Europa — inútiles para argentinos lidiando con inflación, CEDEARs, plazo fijo y reglas impositivas que no encajan en ningún molde global. La solución: una plataforma gamificada de educación financiera e inversión hecha específicamente para la realidad argentina, donde no hacer nada con tu plata significa perder.",
    },
    cta: { en: "Visit site", es: "Visitar sitio" },
    readMore: { en: "Read more", es: "Leer más" },
    role: { en: "CTO & Co-founder", es: "CTO y Co-fundador" },
};

export const odontolatamCard: Dict = {
    label: { en: "Live · Community", es: "Live · Comunidad" },
    title: { en: "OdontoLatam", es: "OdontoLatam" },
    text: {
        en: "The pain: dentists across Latin America were isolated — especially solo practitioners in smaller cities — with no single place to share clinical cases, find reliable resources or connect with peers who understood their challenges. The fix: the largest community of dentists in Latin America. 5,000+ active professionals across 15 countries sharing 10,000+ clinical cases, vademécum, pathology atlas, job board and weekly live sessions. Founded and led by me as CEO.",
        es: "El problema: los odontólogos en América Latina estaban aislados — especialmente los profesionales solos en ciudades chicas — sin un lugar único para compartir casos clínicos, encontrar recursos confiables o conectar con colegas que entendieran sus desafíos. La solución: la comunidad de odontólogos más grande de América Latina. 5.000+ profesionales activos en 15 países compartiendo 10.000+ casos clínicos, vademécum, atlas de patología, bolsa de trabajo y sesiones en vivo semanales. Fundada y liderada por mí como CEO.",
    },
    cta: { en: "Visit community", es: "Visitar comunidad" },
    readMore: { en: "Read more", es: "Leer más" },
    role: { en: "CEO & Founder", es: "CEO y Fundador" },
    stat1label: { en: "Active dentists", es: "Odontólogos activos" },
    stat2label: { en: "Countries", es: "Países" },
    stat3label: { en: "Clinical cases", es: "Casos clínicos" },
    stat4label: { en: "Articles", es: "Artículos" },
};

export const risusCard: Dict = {
    label: { en: "Live · Production", es: "Live · Producción" },
    title: { en: "Risus Dental", es: "Risus Dental" },
    text: {
        en: "The pain: dental websites all look the same — sterile, clinical, forgettable. Risus Dental wanted to break with everything you'd expect from the dental sector. The fix: the most inclusive, vibrant and atypical dental website in Argentina — full-screen immersive slider with interactive 3D sculptures, animated particles, parallax effects and a color palette that owes more to art than to medicine. Visual identity isn't an accessory here: it defines the brand.",
        es: "El problema: las webs dentales se parecen todas — estériles, clínicas, olvidables. Risus Dental quería romper con todo lo que se esperaría del sector. La solución: la web dental más inclusiva, vibrante y atípica de Argentina — slider inmersivo de pantalla completa con esculturas 3D interactivas, partículas animadas, parallax y una paleta que debe más al arte que a la medicina. Acá la identidad visual no es accesorio: define la marca.",
    },
    cta: { en: "Visit site", es: "Visitar sitio" },
};

export const carolinaCard: Dict = {
    label: { en: "Live · Production", es: "Live · Producción" },
    title: { en: "Carolina Salva Odontología", es: "Carolina Salva Odontología" },
    text: {
        en: "The pain: a young dentist in Berisso building her practice with no website — patients found her only through word of mouth and Instagram, losing potential bookings every week. The fix: a warm-toned, modern landing page that reflects her focus on comfort and aesthetics, with services, before/after cases, testimonials and one-click WhatsApp booking. Designed to convert curious visitors into patients.",
        es: "El problema: una odontóloga joven en Berisso armando su consultorio sin sitio web — los pacientes la encontraban solo por boca a boca y por Instagram, perdiendo turnos potenciales cada semana. La solución: una landing moderna y cálida que refleja su enfoque en confort y estética, con servicios, casos antes/después, testimonios y reserva por WhatsApp en un click. Diseñada para convertir visitas curiosas en pacientes.",
    },
    cta: { en: "Visit site", es: "Visitar sitio" },
};

export const cheboludoCard: Dict = {
    label: { en: "Live · Production", es: "Live · Producción" },
    title: { en: "Che Boludo", es: "Che Boludo" },
    text: {
        en: "The pain: an Argentine bakery in Melbourne making the best medialunas, facturas and alfajores in town — but invisible to the thousands of Argentine expats and pastry lovers searching online. WhatsApp orders only, no menu, no delivery info, no way to discover them. The fix: a bold, dark-themed landing page with full menu, pricing, delivery zones across Melbourne CBD and St Kilda, plus one-tap WhatsApp ordering. The flavours of home, finally findable.",
        es: "El problema: una panadería argentina en Melbourne haciendo las mejores medialunas, facturas y alfajores de la ciudad — pero invisible para los miles de argentinos expats y amantes de la pastelería que buscaban online. Pedidos solo por WhatsApp, sin menú, sin info de delivery, imposible de descubrir. La solución: una landing oscura y bold con menú completo, precios, zonas de delivery por Melbourne CBD y St Kilda, y pedido por WhatsApp en un toque. Los sabores de casa, por fin encontrables.",
    },
    cta: { en: "Visit site", es: "Visitar sitio" },
};
