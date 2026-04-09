import Reveal from "@/components/Reveal";

export const metadata = {
    title: "Terms of Use — Alfredo Di Tullio",
    description: "Terms of use for alfredoditullio.com",
};

export default function Terms() {
    return (
        <div className="container page">
            <Reveal as="section" className="hero">
                <span className="hero__eyebrow">Legal</span>
                <h1 className="hero__title">Terms of Use</h1>
                <p className="hero__tagline">
                    Last updated: April 2025. By using this site you agree to the simple
                    rules below.
                </p>
            </Reveal>

            <article className="legal">
                <Reveal>
                    <h2>1. About this site</h2>
                    <p>
                        This is the personal portfolio of Alfredo Di Tullio. It exists to
                        showcase my work as a dentist, software developer and writer, and
                        to share my projects, books and contact details.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>2. Content ownership</h2>
                    <p>
                        All text, photographs, illustrations and design elements on this
                        site are owned by me unless otherwise stated. Third-party
                        trademarks (such as logos of newspapers or platforms) belong to
                        their respective owners and are used for editorial reference
                        only.
                    </p>
                    <p>
                        You are welcome to share links to this site and quote short
                        passages with attribution. Reproducing entire pages, photographs
                        or book excerpts without permission is not permitted.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>3. Accuracy and disclaimers</h2>
                    <p>
                        I do my best to keep the information on this site accurate and
                        up to date, but I make no warranties about completeness or
                        accuracy. Nothing on this site constitutes medical, legal or
                        financial advice. If you need professional advice, please consult
                        a qualified professional in person.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>4. External links</h2>
                    <p>
                        This site links to external websites for context — books on
                        Amazon, articles in newspapers, demo deployments, social media.
                        I do not control those external sites and am not responsible for
                        their content or practices.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>5. Liability</h2>
                    <p>
                        To the maximum extent permitted by law, I will not be liable for
                        any damages arising from your use of this site or your reliance
                        on its content.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>6. Contact</h2>
                    <p>
                        Questions about these terms? Email me at{" "}
                        <a href="mailto:ditullioalfredo@gmail.com">
                            ditullioalfredo@gmail.com
                        </a>
                        .
                    </p>
                </Reveal>
            </article>
        </div>
    );
}
