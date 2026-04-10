import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const contactTexts: Dict = {
    eyebrow: { en: "Let's work together", es: "Trabajemos juntos" },
    title1: { en: "Let's ", es: "Hablemos" },
    title2: { en: "talk", es: "" },
    tagline: {
        en: "Need a website, a product built from scratch, marketing funnels that actually convert, or software for a dental practice? Whether it's a small landing page or a full custom platform — drop me a line and we'll figure it out together.",
        es: "¿Necesitás un sitio web, un producto desde cero, embudos de marketing que realmente conviertan, o software para un consultorio dental? Ya sea una landing page o una plataforma completa — escribime y lo resolvemos juntos.",
    },
    quote: {
        en: "I dreamed of reaching Everest — and I did it. Now let me help you turn your vision into something real.",
        es: "Soñé con llegar al Everest — y lo logré. Ahora dejame ayudarte a convertir tu visión en algo real.",
    },
    highlightA: {
        en: "I dreamed of reaching Everest",
        es: "Soñé con llegar al Everest",
    },
    quoteMiddle: {
        en: " — and I did it. ",
        es: " — y lo logré. ",
    },
    highlightB: {
        en: "Now let me help you",
        es: "Ahora dejame ayudarte",
    },
    quoteEnd: {
        en: " turn your vision into something real.",
        es: " a convertir tu visión en algo real.",
    },
    getInTouch: { en: "Get in touch", es: "Contactame" },
    timezone: { en: "Timezone", es: "Zona horaria" },
    timezoneText: {
        en: "AEST (UTC+10) — but I work with clients worldwide. Flexible hours, async-friendly.",
        es: "AEST (UTC+10) — pero trabajo con clientes de todo el mundo. Horarios flexibles, amigable con trabajo asíncrono.",
    },
    responseTime: { en: "Response time", es: "Tiempo de respuesta" },
    responseTimeText: {
        en: "I usually reply within 24 hours. For urgent projects, WhatsApp is the fastest way to reach me.",
        es: "Generalmente respondo dentro de las 24 horas. Para proyectos urgentes, WhatsApp es la forma más rápida de contactarme.",
    },
};
