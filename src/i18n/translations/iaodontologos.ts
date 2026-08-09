import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

// Dedicated page / article for the book
// "Inteligencia artificial para odontólogos" (2026)
export const iaTexts: Dict = {
    back: { en: "Books", es: "Libros" },
    eyebrow: { en: "New book · 2026", es: "Nuevo libro · 2026" },
    title: {
        en: "Inteligencia artificial para odontólogos",
        es: "Inteligencia artificial para odontólogos",
    },
    subtitle: {
        en: "A guide to understanding, using and questioning AI in the dental practice.",
        es: "Una guía para comprender, usar y cuestionar la IA en el consultorio.",
    },
    coverInitials: { en: "IA", es: "IA" },
    coverCaption: {
        en: "Inteligencia artificial para odontólogos · 2026",
        es: "Inteligencia artificial para odontólogos · 2026",
    },
    btnAmazon: { en: "Buy on Amazon", es: "Comprar en Amazon" },
    btnDentalcore: { en: "See DentalCore", es: "Ver DentalCore" },

    metaAuthor: { en: "Author", es: "Autor" },
    metaAuthorVal: { en: "Alfredo Di Tullio", es: "Alfredo Di Tullio" },
    metaYear: { en: "Published", es: "Publicado" },
    metaYearVal: { en: "2026", es: "2026" },
    metaLang: { en: "Language", es: "Idioma" },
    metaLangVal: { en: "Spanish", es: "Español" },
    metaFormat: { en: "Format", es: "Formato" },
    metaFormatVal: { en: "Paperback & Kindle", es: "Papel y Kindle" },

    lede: {
        en: "A colleague recently asked me, over coffee in Melbourne, whether artificial intelligence was going to replace the dentist. I said no. Then I said yes. Then I stayed quiet for a long while and told him the truth — the most uncomfortable answer: it depends on what we mean by dentist, by replace, and by artificial intelligence. This book is an attempt to give our profession the words to have that conversation seriously.",
        es: "Un colega me preguntó hace poco, tomando un café en Melbourne, si la inteligencia artificial iba a reemplazar al odontólogo. Le dije que no. Después le dije que sí. Después me quedé callado un rato largo y le dije la verdad, la respuesta más incómoda: depende de qué entendamos por odontólogo, por reemplazar y por inteligencia artificial. Este libro es un intento de darle a la profesión las palabras para tener esa conversación en serio.",
    },

    s1Title: { en: "Why I wrote it", es: "Por qué lo escribí" },
    s1p1: {
        en: "We're debating the future of dentistry without the words to name what's happening. We argue about whether AI will replace us before we've defined what an AI is; whether it will fail before understanding why it fails; whether it's useful before knowing what kind of \"useful\" we should even expect. That confusion is the real problem — and it's the gap this book was written to close.",
        es: "Estamos discutiendo el futuro de la profesión sin tener las palabras para nombrar lo que está pasando. Discutimos si la IA nos va a reemplazar antes de haber definido qué es una IA; si va a fallar antes de entender por qué falla; si sirve antes de saber qué tipo de «servir» corresponde esperar. Esa confusión es el problema de fondo, y es el vacío que este libro vino a llenar.",
    },
    s1p2: {
        en: "It isn't a book to turn you into an engineer, and it isn't a book to sell you software. It's a book written by a dentist for other dentists, in the language spoken in clinics — not the one spoken at tech conferences. Written, too, by someone who went and built dental software from the inside, and can therefore tell you, with names and specifics, what these tools can and cannot do today. And why the right answer is often not the one you'll like most.",
        es: "No es un libro para convertirte en ingeniero, ni un libro para venderte software. Es un libro escrito por un odontólogo para otros odontólogos, en el idioma que se habla en los consultorios y no en el de las conferencias de tecnología. Escrito, además, por alguien que se metió a construir un software dental desde adentro y por eso puede contarte, con nombre y apellido, qué cosas se pueden y qué cosas no se pueden hacer hoy con estas herramientas. Y por qué muchas veces la respuesta correcta no es la que más te va a gustar.",
    },

    s2Title: { en: "The problem it solves", es: "Qué problema resuelve" },
    s2p1: {
        en: "When I started looking for references, I found something that surprised me: in Spanish, on AI applied to dentistry, written for dentists by someone who is also a dentist, there is almost nothing. There are scattered journal articles, blog posts from software vendors, a few titles translated from English that assume technical familiarity no Latin American dentist is obliged to have, and an ocean of social-media posts swinging between hype and apocalypse — many written by people who are neither dentists nor know how a language model actually works.",
        es: "Cuando empecé a buscar bibliografía, encontré algo que me sorprendió: en español, sobre IA aplicada a la odontología, escrito para odontólogos por alguien que también sea odontólogo, no existe casi nada. Hay artículos sueltos en revistas del gremio, entradas de blog de empresas de software, algún libro traducido del inglés que asume una familiaridad técnica que ningún odontólogo latinoamericano tiene por qué tener, y un océano de posts en redes que oscilan entre la promesa exagerada y el pánico apocalíptico, muchos escritos por gente que no es odontóloga ni sabe cómo funciona un modelo de lenguaje.",
    },
    s2p2: {
        en: "That's the landscape: a lot of noise and very few conceptual tools to think seriously about what's coming. This book gives you the vocabulary — machine learning, LLM, RAG, hallucination, clinical decision support, algorithmic bias — each explained with a dental example, so that when a term shows up you're not buying smoke. The right words are what protect you from a bad purchase, a legal exposure, or a promise that was never going to hold.",
        es: "Ese es el paisaje: mucho ruido y muy pocas herramientas conceptuales para pensar en serio lo que se viene. Este libro te da el vocabulario —machine learning, LLM, RAG, alucinación, sistema de apoyo a la decisión clínica, sesgo algorítmico— cada término explicado con un ejemplo odontológico, para que cuando aparezca una palabra no estés comprando humo. Las palabras correctas son las que te protegen de una mala compra, de una exposición legal o de una promesa que nunca se iba a cumplir.",
    },

    s3Title: { en: "Who it's for", es: "Para quién es" },
    s3p1: {
        en: "You don't need to know how to program, or any maths, or to have ever read a line about AI. You just need curiosity and the desire to understand what's about to change in the profession you chose. My ideal reader is a dentist who works — who sees patients, wrestles with records, argues with the insurer, and ends the day thinking about the admin still left to do. Students will find the vocabulary the faculty won't give them; engineers and software people are welcome too, though they'll find deliberate simplifications, because I'm not writing for them.",
        es: "No hace falta que sepas programar, ni matemática, ni que hayas leído nunca sobre IA. Alcanza con que tengas curiosidad y quieras entender qué está por cambiar en la profesión que elegiste. Mi lector ideal es un odontólogo que trabaja: que atiende pacientes, que lidia con historias clínicas, que discute con la obra social y que cierra el día pensando en la carga administrativa que le queda. Los estudiantes van a encontrar el vocabulario que la facultad no les da; los ingenieros y la gente de software también son bienvenidos, aunque van a encontrar simplificaciones hechas a propósito, porque no estoy escribiendo para ellos.",
    },

    s4Title: { en: "What's inside", es: "Qué vas a encontrar adentro" },
    s4Intro: {
        en: "Sixteen chapters plus an epilogue, built as a single conversation — from how these tools work to the ethics of letting a machine near a clinical decision:",
        es: "Dieciséis capítulos y un epílogo, pensados como una sola conversación — desde cómo funcionan estas herramientas hasta la ética de dejar que una máquina se acerque a una decisión clínica:",
    },

    s5Title: { en: "From theory to the operatory: DentalCore", es: "De la teoría al sillón: DentalCore" },
    s5p1: {
        en: "I'll say something uncomfortable up front, the same way I do in the book: I build dental software. It's called DentalCore, and I'm its founder. It appears several times in these pages — especially where I talk about systems that help the dentist decide — not to sell it to you, but because it would be dishonest to pretend it doesn't exist when it's the reason I learned, up close, many of the things I'm telling you. I use it as one example among many when it fits, and as a counter-example when that fits too.",
        es: "Voy a decir algo incómodo desde el principio, igual que lo hago en el libro: yo construyo un software dental. Se llama DentalCore y soy su fundador. Aparece varias veces en estas páginas —sobre todo cuando hablo de sistemas que ayudan al odontólogo a decidir— no para vendértelo, sino porque sería deshonesto pretender que no existe cuando es la razón por la que aprendí, de cerca, muchas de las cosas que te cuento. Lo uso como un ejemplo entre tantos cuando corresponde, y como contraejemplo cuando también corresponde.",
    },
    s5p2: {
        en: "Building it is what let me write this book: on one side of the table, a dentist who sees patients; on the other, a developer who writes the code dentists end up using; and in the middle, someone with a philosophy background who insists on asking why before how. That crossing is the whole point — and it's why the book keeps its distance from both the hype and the panic.",
        es: "Construirlo es lo que me permitió escribir este libro: de un lado de la mesa, un odontólogo que atiende pacientes; del otro, un desarrollador que escribe el código que después usan los odontólogos; y en el medio, alguien con formación filosófica que insiste en preguntar por qué antes de preguntar cómo. Ese cruce es todo el sentido del libro, y es lo que le permite mantener distancia tanto de la euforia como del pánico.",
    },

    s6Title: { en: "A pact", es: "Un pacto" },
    s6p1: {
        en: "Writing about AI in 2026 is a trap: the temptation to sound visionary and sell predictions I can't back up is enormous. I'd rather do something else — tell you what I know, what I don't, and what nobody knows yet, and be explicit about which of the three I'm saying at each moment. I'd rather you leave with better questions than you arrived with, so that the next time someone tries to sell you the next miracle, you have the tools to ask the right thing before signing anything.",
        es: "Escribir sobre IA en 2026 es una trampa: la tentación de sonar visionario y vender predicciones que no puedo respaldar es enorme. Prefiero hacer otra cosa: decirte lo que sé, lo que no sé y lo que nadie sabe todavía, y ser explícito sobre cuál de las tres cosas estoy diciendo en cada momento. Prefiero que salgas del libro con mejores preguntas de las que traías, para que la próxima vez que alguien te quiera vender la próxima maravilla tengas las herramientas para preguntar lo correcto antes de firmar nada.",
    },

    ctaTitle: { en: "Read the book", es: "Leé el libro" },
    ctaText: {
        en: "Available in paperback and Kindle on Amazon. If you're a dentist, a student, or you build tools for the profession, this is the conversation dentistry deserves to have — with the right words to have it.",
        es: "Disponible en papel y Kindle en Amazon. Si sos odontólogo, estudiante, o construís herramientas para la profesión, esta es la conversación que la odontología merece tener — con las palabras correctas para tenerla.",
    },
    ctaBtn: { en: "Buy on Amazon", es: "Comprar en Amazon" },
};

export const iaChapters: { es: string; en: string }[] = [
    { es: "La odontología en un punto de inflexión", en: "Dentistry at a turning point" },
    { es: "Un mapa de la IA para odontólogos", en: "A map of AI for dentists" },
    { es: "Detección, diagnóstico y decisión", en: "Detection, diagnosis and decision" },
    { es: "Confianza y alucinaciones", en: "Trust and hallucinations" },
    { es: "Documentación clínica y comunicación con el paciente", en: "Clinical documentation and patient communication" },
    { es: "Privacidad y datos del paciente", en: "Privacy and patient data" },
    { es: "Diagnóstico asistido por imágenes: el estado del arte", en: "Image-assisted diagnosis: the state of the art" },
    { es: "Sistemas de apoyo a la decisión clínica", en: "Clinical decision support systems" },
    { es: "Cómo evaluar una herramienta de inteligencia artificial", en: "How to evaluate an AI tool" },
    { es: "El nuevo rol del odontólogo", en: "The dentist's new role" },
    { es: "Ética de la IA en salud: un marco", en: "Ethics of AI in healthcare: a framework" },
    { es: "Responsabilidad, sesgos y consentimiento", en: "Accountability, bias and consent" },
    { es: "¿Puede una máquina tomar una decisión clínica?", en: "Can a machine make a clinical decision?" },
    { es: "La clínica de 2035, y qué hacer hoy", en: "The clinic of 2035, and what to do today" },
];
