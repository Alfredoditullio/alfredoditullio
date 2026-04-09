import Reveal from "@/components/Reveal";

export const metadata = {
    title: "Privacy Policy — Alfredo Di Tullio",
    description: "Privacy policy for alfredoditullio.com",
};

export default function Privacy() {
    return (
        <div className="container page">
            <Reveal as="section" className="hero">
                <span className="hero__eyebrow">Legal</span>
                <h1 className="hero__title">Privacy Policy</h1>
                <p className="hero__tagline">
                    Last updated: April 2025. This page explains what information this
                    site collects and how it&apos;s handled.
                </p>
            </Reveal>

            <article className="legal">
                <Reveal>
                    <h2>1. Who runs this site</h2>
                    <p>
                        This personal portfolio is owned and operated by Alfredo Di Tullio
                        (&ldquo;I&rdquo;, &ldquo;me&rdquo;), an independent dentist,
                        developer and writer based in Melbourne, Australia. You can reach
                        me at{" "}
                        <a href="mailto:ditullioalfredo@gmail.com">
                            ditullioalfredo@gmail.com
                        </a>
                        .
                    </p>
                </Reveal>

                <Reveal>
                    <h2>2. Information collected</h2>
                    <p>
                        This site is a static portfolio. It does not require an account,
                        does not run a backend, and does not collect personal information
                        from visitors by default. The only situation in which personal
                        information may be collected is if you choose to send me an email
                        through the contact links — in which case I will only see the
                        information you voluntarily share in that message.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>3. Cookies and similar technologies</h2>
                    <p>
                        This site uses minimal cookies, only when strictly necessary for
                        the site to function (for example, to remember whether you have
                        seen the cookie banner during your current session). It does not
                        use third-party advertising cookies. For full details, please see
                        the <a href="/cookies">Cookie Policy</a>.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>4. Third-party services</h2>
                    <p>
                        Some pages link out to third-party platforms — Amazon, LinkedIn,
                        Instagram, Facebook, Vercel-hosted demos and others. When you
                        click those links you leave this site and become subject to the
                        third party&apos;s own privacy policies. I have no control over
                        the data those services collect.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>5. Your rights</h2>
                    <p>
                        Since this site does not store personal data on its own, there is
                        nothing for me to delete on your behalf. If you have written to me
                        directly and want me to delete that correspondence, just let me
                        know and I will.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>6. Changes to this policy</h2>
                    <p>
                        I may update this policy from time to time. Any updates will be
                        reflected on this page with a new &ldquo;last updated&rdquo;
                        date.
                    </p>
                </Reveal>
            </article>
        </div>
    );
}
