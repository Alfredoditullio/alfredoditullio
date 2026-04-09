import Reveal from "@/components/Reveal";

export const metadata = {
    title: "Cookie Policy — Alfredo Di Tullio",
    description: "Cookie policy for alfredoditullio.com",
};

export default function Cookies() {
    return (
        <div className="container page">
            <Reveal as="section" className="hero">
                <span className="hero__eyebrow">Legal</span>
                <h1 className="hero__title">Cookie Policy</h1>
                <p className="hero__tagline">
                    Last updated: April 2025. A short, honest explanation of how this
                    site uses cookies.
                </p>
            </Reveal>

            <article className="legal">
                <Reveal>
                    <h2>1. What are cookies?</h2>
                    <p>
                        Cookies are small text files that a website stores on your
                        device. They are commonly used to remember preferences, keep you
                        logged in, or to track activity for analytics and advertising.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>2. Cookies on this site</h2>
                    <p>
                        This portfolio is intentionally minimal. It does not run
                        analytics, advertising, or third-party tracking cookies. The only
                        thing it stores in your browser is a small flag in{" "}
                        <code>localStorage</code> remembering whether you have already
                        seen and dismissed the cookie banner — so it doesn&apos;t pop up
                        on every page.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>3. Categories of cookies</h2>
                    <ul>
                        <li>
                            <strong>Strictly necessary</strong> — required for the site
                            to function (the dismissed-banner flag mentioned above).
                        </li>
                        <li>
                            <strong>Analytics</strong> — none.
                        </li>
                        <li>
                            <strong>Advertising</strong> — none.
                        </li>
                        <li>
                            <strong>Third-party</strong> — none, unless you click an
                            external link (Amazon, LinkedIn, Instagram, Facebook,
                            Vercel-hosted demos), in which case those sites apply their
                            own cookie policies.
                        </li>
                    </ul>
                </Reveal>

                <Reveal>
                    <h2>4. How to manage cookies</h2>
                    <p>
                        You can clear or block cookies and local storage at any time
                        from your browser settings. To reset the cookie banner on this
                        site, clear your browser&apos;s site data for this domain.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>5. Changes</h2>
                    <p>
                        If this site ever starts using analytics or any non-essential
                        cookies, this page will be updated and the cookie banner will be
                        shown again so you can review and choose.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>6. Contact</h2>
                    <p>
                        Questions? Email{" "}
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
