import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const privacyTexts: Dict = {
    eyebrow: { en: "Legal", es: "Legal" },
    title: { en: "Privacy Policy", es: "Política de Privacidad" },
    subtitle: { en: "Last updated: April 2025. This page explains what information this site collects and how it's handled.", es: "Última actualización: abril 2025. Esta página explica qué información recopila este sitio y cómo se maneja." },
    h1: { en: "1. Who runs this site", es: "1. Quién administra este sitio" },
    p1: { en: "This personal portfolio is owned and operated by Alfredo Di Tullio, an independent dentist, developer and writer based in Melbourne, Australia. You can reach me at", es: "Este portfolio personal es propiedad de Alfredo Di Tullio, odontólogo, desarrollador y escritor independiente radicado en Melbourne, Australia. Podés contactarme en" },
    h2: { en: "2. Information collected", es: "2. Información recopilada" },
    p2: { en: "This site is a static portfolio. It does not require an account, does not run a backend, and does not collect personal information from visitors by default. The only situation in which personal information may be collected is if you choose to send me an email through the contact links — in which case I will only see the information you voluntarily share in that message.", es: "Este sitio es un portfolio estático. No requiere cuenta, no tiene backend y no recopila información personal de los visitantes por defecto. La única situación en la que podría recopilar información personal es si elegís enviarme un email a través de los links de contacto — en cuyo caso solo veré la información que voluntariamente compartas." },
    h3: { en: "3. Cookies and similar technologies", es: "3. Cookies y tecnologías similares" },
    p3: { en: "This site uses minimal cookies, only when strictly necessary for the site to function. It does not use third-party advertising cookies. For full details, please see the", es: "Este sitio usa cookies mínimas, solo cuando son estrictamente necesarias para funcionar. No usa cookies de publicidad de terceros. Para más detalles, consultá la" },
    cookieLink: { en: "Cookie Policy", es: "Política de Cookies" },
    h4: { en: "4. Third-party services", es: "4. Servicios de terceros" },
    p4: { en: "Some pages link out to third-party platforms — Amazon, LinkedIn, Instagram, Facebook, Vercel-hosted demos and others. When you click those links you leave this site and become subject to the third party's own privacy policies.", es: "Algunas páginas tienen links a plataformas de terceros — Amazon, LinkedIn, Instagram, Facebook, demos en Vercel y otros. Cuando hacés click en esos links salís de este sitio y quedás sujeto a las políticas de privacidad del tercero." },
    h5: { en: "5. Your rights", es: "5. Tus derechos" },
    p5: { en: "Since this site does not store personal data on its own, there is nothing for me to delete on your behalf. If you have written to me directly and want me to delete that correspondence, just let me know and I will.", es: "Como este sitio no almacena datos personales propios, no hay nada que pueda eliminar en tu nombre. Si me escribiste directamente y querés que borre esa correspondencia, avisame y lo hago." },
    h6: { en: "6. Changes to this policy", es: "6. Cambios a esta política" },
    p6: { en: "I may update this policy from time to time. Any updates will be reflected on this page with a new \"last updated\" date.", es: "Puedo actualizar esta política de vez en cuando. Cualquier cambio se reflejará en esta página con una nueva fecha de actualización." },
};

export const termsTexts: Dict = {
    title: { en: "Terms of Use", es: "Términos de Uso" },
    subtitle: { en: "Last updated: April 2025. By using this site you agree to the simple rules below.", es: "Última actualización: abril 2025. Al usar este sitio aceptás las reglas simples que se detallan a continuación." },
    h1: { en: "1. About this site", es: "1. Sobre este sitio" },
    p1: { en: "This is the personal portfolio of Alfredo Di Tullio. It exists to showcase my work as a dentist, software developer and writer, and to share my projects, books and contact details.", es: "Este es el portfolio personal de Alfredo Di Tullio. Existe para mostrar mi trabajo como odontólogo, desarrollador de software y escritor, y compartir mis proyectos, libros y datos de contacto." },
    h2: { en: "2. Content ownership", es: "2. Propiedad del contenido" },
    p2a: { en: "All text, photographs, illustrations and design elements on this site are owned by me unless otherwise stated.", es: "Todo el texto, fotografías, ilustraciones y elementos de diseño en este sitio son de mi propiedad salvo indicación contraria." },
    p2b: { en: "You are welcome to share links to this site and quote short passages with attribution. Reproducing entire pages, photographs or book excerpts without permission is not permitted.", es: "Podés compartir links a este sitio y citar pasajes cortos con atribución. No está permitido reproducir páginas enteras, fotografías o extractos de libros sin permiso." },
    h3: { en: "3. Accuracy and disclaimers", es: "3. Exactitud y descargos" },
    p3: { en: "I do my best to keep the information on this site accurate and up to date, but I make no warranties about completeness or accuracy. Nothing on this site constitutes medical, legal or financial advice.", es: "Hago lo posible por mantener la información actualizada y precisa, pero no garantizo su completitud. Nada en este sitio constituye asesoramiento médico, legal o financiero." },
    h4: { en: "4. External links", es: "4. Links externos" },
    p4: { en: "This site links to external websites for context. I do not control those external sites and am not responsible for their content or practices.", es: "Este sitio tiene links a sitios externos como contexto. No controlo esos sitios y no soy responsable de su contenido." },
    h5: { en: "5. Liability", es: "5. Responsabilidad" },
    p5: { en: "To the maximum extent permitted by law, I will not be liable for any damages arising from your use of this site.", es: "En la máxima medida permitida por la ley, no seré responsable por daños derivados del uso de este sitio." },
    h6: { en: "6. Contact", es: "6. Contacto" },
    p6: { en: "Questions about these terms? Email me at", es: "¿Preguntas sobre estos términos? Escribime a" },
};

export const cookiesTexts: Dict = {
    title: { en: "Cookie Policy", es: "Política de Cookies" },
    subtitle: { en: "Last updated: April 2025. A short, honest explanation of how this site uses cookies.", es: "Última actualización: abril 2025. Una explicación corta y honesta de cómo este sitio usa cookies." },
    h1: { en: "1. What are cookies?", es: "1. ¿Qué son las cookies?" },
    p1: { en: "Cookies are small text files that a website stores on your device. They are commonly used to remember preferences, keep you logged in, or to track activity.", es: "Las cookies son pequeños archivos de texto que un sitio web guarda en tu dispositivo. Se usan comúnmente para recordar preferencias, mantener la sesión o rastrear actividad." },
    h2: { en: "2. Cookies on this site", es: "2. Cookies en este sitio" },
    p2: { en: "This portfolio is intentionally minimal. It does not run analytics, advertising, or third-party tracking cookies. The only thing it stores is a small flag remembering whether you have seen the cookie banner and your language preference.", es: "Este portfolio es intencionalmente minimalista. No usa analíticas, publicidad ni cookies de rastreo de terceros. Lo único que guarda es una bandera recordando si ya viste el banner de cookies y tu preferencia de idioma." },
    h3: { en: "3. Categories", es: "3. Categorías" },
    strictly: { en: "Strictly necessary — required for the site to function.", es: "Estrictamente necesarias — requeridas para que el sitio funcione." },
    analytics: { en: "Analytics — none.", es: "Analíticas — ninguna." },
    advertising: { en: "Advertising — none.", es: "Publicidad — ninguna." },
    thirdParty: { en: "Third-party — none, unless you click an external link.", es: "Terceros — ninguna, a menos que hagas click en un link externo." },
    h4: { en: "4. How to manage cookies", es: "4. Cómo gestionar cookies" },
    p4: { en: "You can clear or block cookies at any time from your browser settings.", es: "Podés borrar o bloquear cookies en cualquier momento desde la configuración de tu navegador." },
    h5: { en: "5. Changes", es: "5. Cambios" },
    p5: { en: "If this site ever starts using non-essential cookies, this page will be updated and the cookie banner will be shown again.", es: "Si este sitio alguna vez empieza a usar cookies no esenciales, esta página se actualizará y el banner de cookies se mostrará nuevamente." },
    h6: { en: "6. Contact", es: "6. Contacto" },
    p6: { en: "Questions? Email", es: "¿Preguntas? Escribí a" },
};
