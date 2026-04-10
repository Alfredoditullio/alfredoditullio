import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const booksTexts: Dict = {
    eyebrow: { en: "Books", es: "Libros" },
    title1: { en: "Things I've ", es: "Lo que " },
    title2: { en: "written", es: "escribí" },
    tagline: {
        en: "Writing has always been a way for me to make sense of things — from clinical experience to philosophy and travel.",
        es: "Escribir siempre fue mi forma de darle sentido a las cosas — desde la experiencia clínica hasta la filosofía y los viajes.",
    },
    latestEyebrow: { en: "Latest release", es: "Último lanzamiento" },
    hiSubtitle: { en: "Philosophy & travel · 2025", es: "Filosofía y viajes · 2025" },
    hiTitle: { en: "Horizontes Infinitos", es: "Horizontes Infinitos" },
    hiText: {
        en: "My second book, published by Letrame Grupo Editorial in January 2025. A collection of philosophical reflections shaped by years of travel — an invitation to look beyond the obvious, find meaning in unexpected places and embrace the infinite horizon that opens up when you keep moving. Reviewed by Veu Catalana.",
        es: "Mi segundo libro, publicado por Letrame Grupo Editorial en enero de 2025. Una colección de reflexiones filosóficas moldeadas por años de viaje — una invitación a mirar más allá de lo obvio, encontrar sentido en lugares inesperados y abrazar el horizonte infinito que se abre cuando seguís avanzando. Reseñado por Veu Catalana.",
    },
    hiBtnAmazon: { en: "Get it on Amazon", es: "Compralo en Amazon" },
    hiBtnReview: { en: "Read the review", es: "Leer la reseña" },
    firstEyebrow: { en: "First book", es: "Primer libro" },
    ebsSubtitle: { en: "Philosophy · 2023", es: "Filosofía · 2023" },
    ebsTitle: { en: "En búsqueda del sentido", es: "En búsqueda del sentido" },
    ebsText: {
        en: "A personal essay on meaning, work and the small decisions that shape a life. Written after leaving dentistry behind to cook in Michelin kitchens across Europe and Australia, it weaves together philosophy, memoir and travel writing. Available on Amazon Australia and mentioned in La Nación.",
        es: "Un ensayo personal sobre el sentido, el trabajo y las pequeñas decisiones que dan forma a una vida. Escrito después de dejar la odontología para cocinar en cocinas Michelin en Europa y Australia, entrelaza filosofía, memorias y escritura de viajes. Disponible en Amazon Australia y mencionado en La Nación.",
    },
    ebsBtnAmazon: { en: "Get it on Amazon", es: "Compralo en Amazon" },
};
